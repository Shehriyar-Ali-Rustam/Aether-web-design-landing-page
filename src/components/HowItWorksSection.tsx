import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay },
});

export default function HowItWorksSection() {
  return (
    <section id="process" className="bg-black">
      <div className="relative overflow-hidden py-40 md:py-56 px-6">
        <iframe
          title="Aether process background"
          src="https://player.cloudinary.com/embed/?cloud_name=dgqsqiucd&public_id=Untitled_design_2_elcyul&autoplay=true&loop=true&muted=true&controls=false&showLogo=false&showJumpControls=false&hideContextMenu=true"
          allow="autoplay; fullscreen"
          style={{
            position: 'absolute',
            top: '-12%',
            left: 0,
            width: '100%',
            height: '124%',
            border: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, black 0%, transparent 45%, transparent 55%, black 100%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center z-[2]">
          <motion.div {...fadeUp(0)}>
            <span className="section-badge">How It Works</span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="font-heading italic tracking-[-0.04em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl"
          >
            You imagine it.
            <br />
            We shape it.
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="font-body text-white/70 text-[1.05rem] max-w-xl mx-auto mt-6"
            style={{ fontWeight: 300 }}
          >
            From concept to launch, our AI-guided process turns direction into a site
            that feels polished, cinematic, and alive.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
