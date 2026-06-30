import { useEffect, useRef } from 'react';

interface TitleParticle {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: number;
  settled: boolean;
}

const REPEL_RADIUS = 90;
const REPEL_STRENGTH = 7;
const SPRING = 0.055;
const FRICTION = 0.82;
const HEIGHT = 230;

const LINE_1 = 'The Website Your Brand';
const LINE_2 = 'Deserves';

export default function ParticleTitle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: TitleParticle[] = [];
    let animationFrame = 0;
    let width = 0;
    let cancelled = false;
    let resizeTimeout = 0;

    const buildTargets = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;

      canvas.width = width * dpr;
      canvas.height = HEIGHT * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = Math.min(width * 0.086, 90);
      const leading = fontSize * 1.08;

      const offscreen = document.createElement('canvas');
      offscreen.width = width * dpr;
      offscreen.height = HEIGHT * dpr;
      const octx = offscreen.getContext('2d');
      if (!octx) return [];
      octx.setTransform(dpr, 0, 0, dpr, 0, 0);

      octx.fillStyle = '#fff';
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.font = `italic ${fontSize}px 'Instrument Serif', serif`;

      const cx = width / 2;
      const cy = HEIGHT / 2;

      octx.fillText(LINE_1, cx, cy - leading * 0.5);
      octx.fillText(LINE_2, cx, cy + leading * 0.5);

      const imageData = octx.getImageData(0, 0, offscreen.width, offscreen.height);
      const targets: { x: number; y: number }[] = [];

      const stride = Math.round(3 * dpr);
      for (let y = 0; y < offscreen.height; y += stride) {
        for (let x = 0; x < offscreen.width; x += stride) {
          const idx = (y * offscreen.width + x) * 4;
          const alpha = imageData.data[idx + 3];
          if (alpha > 100) {
            targets.push({ x: x / dpr, y: y / dpr });
          }
        }
      }

      return targets;
    };

    const init = () => {
      const targets = buildTargets();
      particles = targets.map((t) => {
        const fromAbove = Math.random() < 0.5;
        return {
          x: Math.random() * width,
          y: fromAbove
            ? -Math.random() * HEIGHT - 20
            : HEIGHT + Math.random() * HEIGHT + 20,
          tx: t.x,
          ty: t.y,
          vx: 0,
          vy: 0,
          r: Math.random() * 0.85 + 0.45,
          opacity: 0,
          phase: Math.random() * Math.PI * 2,
          settled: false,
        };
      });
    };

    const draw = () => {
      if (cancelled) return;
      ctx.clearRect(0, 0, width, HEIGHT);

      const cursor = cursorRef.current;

      for (const p of particles) {
        const dx = p.x - cursor.x;
        const dy = p.y - cursor.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }

        const tdx = p.tx - p.x;
        const tdy = p.ty - p.y;
        const tdist = Math.sqrt(tdx * tdx + tdy * tdy);

        p.vx += tdx * SPRING;
        p.vy += tdy * SPRING;

        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;

        p.phase += 0.03;
        p.settled = tdist < 2;

        let drawX = p.x;
        let drawY = p.y;

        if (p.settled) {
          drawX += Math.sin(p.phase) * 0.4;
          drawY += Math.cos(p.phase * 0.8) * 0.4;
        }

        if (p.opacity < 1) {
          p.opacity = Math.min(1, p.opacity + 0.022);
        }

        const ndx = p.x - cursor.x;
        const ndy = p.y - cursor.y;
        const nearDist = Math.sqrt(ndx * ndx + ndy * ndy);
        const nearFactor = Math.max(0, 1 - nearDist / REPEL_RADIUS);

        if (nearFactor > 0) {
          const glowR = p.r * 4;
          const gradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, glowR);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 * nearFactor})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(drawX, drawY, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const start = async () => {
      try {
        await document.fonts.load("italic 80px 'Instrument Serif'");
        await document.fonts.ready;
      } catch {
        // Font load failed or unsupported — proceed with fallback metrics.
      }
      if (cancelled) return;
      init();
      draw();
    };

    start();

    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(init, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      cursorRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: `${HEIGHT}px`,
        cursor: 'none',
        background: 'transparent',
        display: 'block',
      }}
    />
  );
}
