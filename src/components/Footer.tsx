const LINKS = ['Privacy', 'Terms', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-10">
      <div className="max-w-5xl mx-auto">
        <div className="h-px w-full mb-8" style={{ background: 'rgba(255,255,255,0.12)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/38 text-xs" style={{ fontWeight: 300 }}>
            © 2026 Aether Design. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-white/38 hover:text-white/70 transition-colors duration-200"
                style={{ fontWeight: 300 }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
