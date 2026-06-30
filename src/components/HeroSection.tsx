import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import ParticleTitle from './ParticleTitle';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.6], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: '100vh',
        minHeight: '600px',
        background: 'black',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <iframe
        title="Aether hero background"
        src="https://player.cloudinary.com/embed/?cloud_name=dgqsqiucd&public_id=Untitled_design_ydxlbl&autoplay=true&loop=true&muted=true&controls=false&showLogo=false&showJumpControls=false&hideContextMenu=true"
        allow="autoplay; fullscreen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '56.25vw',
          border: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(0,0,0,0.05)' }}
      />

      <ParticleCanvas />

      <motion.div
        style={{
          y,
          opacity,
          paddingTop: '110px',
          zIndex: 10,
          position: 'relative',
          height: '100%',
        }}
        className="flex flex-col items-center text-center px-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
        >
          <span className="bg-white text-black text-xs font-semibold rounded-full px-2 py-0.5">
            New
          </span>
          <span className="font-body text-white/75 text-[0.82rem]">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <div style={{ maxWidth: '960px', width: '100%' }}>
          <ParticleTitle />
        </div>

        <motion.p
          initial={{ filter: 'blur(8px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-[1rem] text-white/65 max-w-xl mt-2"
          style={{ fontWeight: 300 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is
          web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-4 mt-9"
        >
          <a
            href="#pricing"
            className="liquid-glass-strong inline-flex items-center gap-1.5 rounded-full px-7 py-3 text-sm font-medium text-white"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            className="font-body inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm text-white/60 hover:text-white/85 transition-colors duration-200 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            Watch the Film
          </button>
        </motion.div>
      </motion.div>

      <div
        className="absolute z-[5] left-0 right-0"
        style={{
          top: 'calc(56.25vw - 280px)',
          height: '280px',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.9) 80%, black 100%)',
        }}
      />
    </section>
  );
}
