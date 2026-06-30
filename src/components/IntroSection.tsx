import { motion } from 'framer-motion';

const PARTNERS = ['Luminary', 'Celestia', 'Vaulted', 'Prism', 'Aura', 'Nocturne'];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay },
});

export default function IntroSection() {
  return (
    <section
      id="work"
      className="relative bg-black py-28 md:py-36 px-6 text-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          width: '70%',
          height: '70%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          objectFit: 'contain',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)',
        }}
      >
        <source
          src="https://res.cloudinary.com/dgqsqiucd/video/upload/v1773990554/14967453_1920_1080_30fps_nrgzdo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-[2] max-w-3xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <span className="section-badge">Trusted by modern brands</span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-heading italic tracking-[-0.04em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl"
        >
          Design that feels like
          <br />
          a world, not a template.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-body text-white/72 text-[1.05rem] mt-6"
          style={{ fontWeight: 300 }}
        >
          We build web experiences that transcend the ordinary —
          <br />
          immersive, cinematic, and unmistakably yours.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-14"
        >
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-body text-sm tracking-widest uppercase text-white/42"
              style={{ fontWeight: 300 }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-[3]"
        style={{ height: '300px', background: 'linear-gradient(to bottom, transparent, black)' }}
      />
    </section>
  );
}
