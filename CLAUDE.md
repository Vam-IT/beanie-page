# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beanie Website is a modern, animated website for the **Beanie** Coffee & Caffeine tracking app for iOS (17.0+) and watchOS (10.0+). Built with React, Vite, Tailwind CSS, and Framer Motion, it showcases the app's features, companion mascot Bean, widgets, and provides comprehensive privacy policy and terms of use pages.

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
npm run lint         # Run ESLint
```

## Architecture & Structure

### Routes
- `/`: Landing page (`Home.jsx` with Hero, Features, StatsShowcase, DownloadCTA)
- `/privacy`: Bilingual Privacy Policy (Deutsch & English) with language switcher
- `/terms`: Bilingual Terms of Use (Deutsch & English) with language switcher
- `/imprint`: Impressum for VAMIT UG (haftungsbeschränkt)

### Key Technologies
- **Framer Motion**: Scroll-triggered animations, interactive cards, floating badges.
- **Tailwind CSS**: Custom coffee & warm roast color palette under `theme.extend.colors.beanie` and `vami`.
- **Lucide React**: Icons for coffee, shield, watch, streaks, and health disclaimers.

### Provider Information
- **Company:** VAMIT UG (haftungsbeschränkt)
- **Address:** Petersfeldstraße 16, 46395 Bocholt, Germany
- **Managing Director:** Veselin Kolev
- **Commercial Register:** Amtsgericht Coesfeld, HRB 23796
- **Contact:** info@vam-it.com
