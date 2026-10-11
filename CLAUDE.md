# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VAMI Website is a modern, animated single-page website for the VAMI pushup tracking app. Built with React, Vite, Tailwind CSS, and Framer Motion, it showcases the app's AI-powered features through engaging animations and glassmorphism effects.

## Common Commands

### Development
```bash
npm run dev          # Start dev server on http://localhost:5173/
npm run build        # Build for production
npm run preview      # Preview production build locally
npm install          # Install all dependencies
```

### Linting
```bash
npm run lint         # Run ESLint (if configured)
```

## Architecture & Structure

### Component Hierarchy
The app uses a single-page layout assembled in `App.jsx`:
```
App.jsx
├── Navbar.jsx (fixed, transparent → glass effect on scroll)
├── Hero.jsx (split-screen: text + mockup, floating stats)
├── Features.jsx (3-column grid with glassmorphism cards)
├── StatsShowcase.jsx (parallax scrolling with useTransform)
├── DownloadCTA.jsx (centered CTA with gradient blobs)
└── Footer.jsx (links, social icons)
```

### Key Technologies
- **Framer Motion**: All sections use `motion` components with `whileInView` for scroll-triggered animations. `useScroll` + `useTransform` power parallax effects in StatsShowcase.
- **Tailwind CSS**: Custom VAMI color palette defined in `tailwind.config.js` under `theme.extend.colors.vami`. Custom utility classes (`.glass-effect`, `.text-gradient`) are in `index.css` using `@layer utilities`.
- **Lucide React**: Icon library used throughout (Menu, X, Download, Play, Brain, Hash, etc.)

### Styling Conventions
- **Colors**: Use `vami-dark` (background), `vami-primary` (orange accent), `vami-secondary` for consistency
- **Glass Effect**: Apply `.glass-effect` class for glassmorphism (`bg-white/5 backdrop-blur-lg border border-white/10`)
- **Text Gradient**: Use `.text-gradient` for orange gradient text (`bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text`)
- **Responsive**: Always use mobile-first approach (`md:` prefix for desktop)

### Animation Patterns
- **Initial animations**: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Scroll animations**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Stagger delays**: Use `transition={{ delay: index * 0.2 }}` in mapped components
- **Hover effects**: `whileHover={{ y: -10 }}` for cards, `whileHover={{ scale: 1.05 }}` for buttons

### State Management
Minimal state:
- `Navbar.jsx`: `isScrolled` (scroll listener) and `isMobileMenuOpen` (mobile menu toggle)
- All other components are presentational

### Assets Integration (TODO)
- Place app screenshots in `public/assets/` as `app-screen-main.jpg` and `app-screen-stats.jpg`
- Update placeholder `<div>` elements in Hero.jsx (~line 59) and StatsShowcase.jsx (~line 80) with `<img>` tags

## Development Workflow

When making changes:
1. Components are self-contained in `src/components/` - edit directly
2. Tailwind classes are JIT-compiled - no need to rebuild for style changes
3. Framer Motion values are hot-reloadable
4. Test mobile responsiveness using Chrome DevTools Device Mode

## Important Notes

- **No router**: This is a single-page app using anchor links (`#features`, `#stats`, `#download`)
- **Smooth scrolling**: Enabled globally via `scroll-smooth` in `index.css`
- **Performance**: All animations use GPU-accelerated properties (transform, opacity) - avoid animating layout properties
- **Accessibility**: Ensure all interactive elements have proper ARIA labels (e.g., mobile menu button, social links)
