import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '56rem',
        zIndex: 50,
      }}
    >
      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="liquid-glass flex items-center px-5 h-14 rounded-full transition-shadow duration-300"
        style={{
          boxShadow: scrolled
            ? '0 16px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.10)'
            : undefined,
        }}
      >
        <div className="flex-1">
          <span className="font-heading italic text-white text-xl tracking-tight">Aether</span>
        </div>

        <div className="flex-shrink flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-white/75 hover:text-white transition-colors duration-200"
              style={{ fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <a
            href="#pricing"
            className="inline-flex items-center gap-1 bg-white text-black rounded-full px-5 py-1.5 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
