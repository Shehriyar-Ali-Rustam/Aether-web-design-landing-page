import { motion } from 'framer-motion';
import { Eye, Sparkles, Zap, Package, type LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CARDS: Card[] = [
  {
    icon: Eye,
    title: 'Cinematic Visual Systems',
    description:
      'Immersive layouts, motion, and atmosphere that feel authored, not assembled. Every pixel placed with intent.',
  },
  {
    icon: Sparkles,
    title: 'AI-Led Creative Direction',
    description:
      'We turn prompts, references, and brand signals into cohesive visual experiences that feel unmistakably yours.',
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    description:
      'Explore ambitious directions quickly without losing polish. Rapid cycles, high fidelity, always.',
  },
  {
    icon: Package,
    title: 'Production-Ready Output',
    description:
      'Refined front-end builds designed for responsiveness, clarity, and launch. No handoff headaches.',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay },
});

export default function FeaturesSection() {
  return (
    <section id="services" className="relative bg-black py-28 md:py-36 px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          width: '60%',
          height: '60%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          objectFit: 'cover',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 15%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 15%, transparent 72%)',
        }}
      >
        <source
          src="https://res.cloudinary.com/dgqsqiucd/video/upload/v1773990554/14967453_1920_1080_30fps_nrgzdo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative max-w-4xl mx-auto z-[1]">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="section-badge">Capabilities</span>
          <h2 className="font-heading italic tracking-[-0.04em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl">
            Built with beauty
            <br />
            and performance in balance.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const number = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl p-7 relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)',
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(255,255,255,0.10), transparent 60%)',
                  }}
                />

                <span className="font-body absolute top-6 right-7 text-xs tracking-[0.05em] text-white/20" style={{ fontWeight: 300 }}>
                  {number}
                </span>

                <div
                  className="relative w-11 h-11 rounded-2xl mb-5 flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-body relative font-medium text-[0.95rem] text-white mb-2.5 tracking-[-0.01em]">
                  {card.title}
                </h3>

                <p className="font-body relative text-[0.85rem] text-white/45 leading-relaxed" style={{ fontWeight: 300 }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
