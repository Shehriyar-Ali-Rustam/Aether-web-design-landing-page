import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay },
});

export default function CTASection() {
  return (
    <section id="pricing" className="bg-black py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div {...fadeUp(0)}>
          <span className="section-badge">Begin</span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-heading italic tracking-[-0.04em] leading-[0.9] text-5xl md:text-6xl lg:text-7xl"
        >
          Your next website
          <br />
          starts here.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="font-body text-white/70 text-[1.05rem] max-w-md mx-auto mb-10 mt-6"
          style={{ fontWeight: 300 }}
        >
          Book a free strategy call and explore what AI-powered design can become.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="liquid-glass-strong inline-flex items-center gap-1.5 rounded-full px-8 py-3.5 text-sm font-medium text-white cursor-pointer"
          >
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="font-body liquid-glass inline-flex items-center gap-1.5 rounded-full px-8 py-3.5 text-sm text-white/80 font-light cursor-pointer"
          >
            View Pricing
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
