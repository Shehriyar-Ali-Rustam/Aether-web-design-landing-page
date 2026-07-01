# Aether — AI-Powered Web Design Agency Landing Page

A modern, animated landing page for an AI-powered web design agency. Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- Fullscreen hero with video background and interactive particle canvas
- Smooth scroll-driven animations powered by Framer Motion
- Liquid glass navbar with blur effect
- Sections: Hero, Intro, How It Works, Features, CTA, Footer
- Fully responsive layout
- TypeScript throughout

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Lucide React | 1 |

## Getting Started

**Requirements:** Node.js 20 or higher

```bash
# Clone the repo
git clone https://github.com/Shehriyar-Ali-Rustam/Aether-web-design-landing-page.git
cd Aether-web-design-landing-page

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Type-check and build for production
npm run preview   # Preview production build locally
npm run lint      # Run oxlint
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── IntroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── FeaturesSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── ParticleCanvas.tsx
│   └── ParticleTitle.tsx
├── App.tsx
└── main.tsx
```

## License

MIT
