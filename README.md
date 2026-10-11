# VAMI Website

Eine moderne, vollständig optimierte Website für die VAMI Pushup-Tracking App mit React, Vite, Tailwind CSS und Framer Motion.

## 🚀 Technologie-Stack

- **React 19** - UI-Framework
- **Vite 7** - Next-Gen Build-Tool
- **Tailwind CSS** - Utility-First CSS Framework
- **Framer Motion** - Animationen und Übergänge
- **React Router** - Client-Side Routing
- **Lucide React** - Icon-Bibliothek

## ✨ Key Features

- 🎨 **Premium Glassmorphism**: Moderne UI mit Glas-Effekten
- 🎭 **Flüssige Animationen**: Framer Motion für smooth Transitions
- 📱 **Fully Responsive**: Mobile-First Design
- 🌙 **Dark Theme**: VAMI-Branding (Slate/Orange)
- ⚡ **Performance-Optimiert**: Lazy Loading, Code-Splitting
- ♿ **Accessibility**: WCAG 2.1 Level AA konform
- 🔒 **Security Headers**: CSP, HSTS, XSS-Protection
- 🎯 **SEO-Optimiert**: Structured Data, Meta-Tags, Sitemap

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Dev-Server starten

```bash
npm run dev              # Start development server
npm run preview          # Preview production build
```

### Build & Deployment

```bash
npm run build            # Production build
npm run build:analyze    # Build with bundle analysis
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run clean            # Clean dist and cache
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navbar.jsx          # Navigation mit Scroll-Effekt
│   │   ├── Footer.jsx          # Footer mit Links
│   │   └── SkipToContent.jsx   # Accessibility Link
│   ├── Home/
│   │   ├── Hero.jsx            # Hero mit Video
│   │   ├── Features.jsx        # Feature-Grid
│   │   ├── StatsShowcase.jsx   # Statistiken
│   │   └── DownloadCTA.jsx     # Call-to-Action
│   ├── ErrorBoundary.jsx       # Error Handling
│   └── [Legal Pages]           # Privacy, Terms, Imprint
├── utils/
│   ├── helpers.js              # Utility Functions
│   └── constants.js            # App Constants
├── App.jsx                     # Router Setup
└── index.css                   # Global Styles

public/
├── assets/                     # Images & Videos
├── robots.txt                  # SEO Crawling
├── sitemap.xml                 # SEO Sitemap
└── _headers                    # Security Headers (Netlify)
```

## 🎯 Optimierungen

### Performance
- ✅ Code-Splitting (React, Router, Animations getrennt)
- ✅ Lazy Loading für Videos
- ✅ Terser Minification
- ✅ Tree-Shaking
- ✅ Optimierte Bundle-Größe

### SEO
- ✅ Structured Data (JSON-LD)
- ✅ Complete Meta Tags (OG, Twitter)
- ✅ Canonical URLs
- ✅ XML Sitemap
- ✅ robots.txt

### Accessibility
- ✅ Error Boundary
- ✅ Skip-to-Content Link
- ✅ ARIA Labels
- ✅ Semantic HTML
- ✅ Keyboard Navigation

### Security
- ✅ Content Security Policy
- ✅ XSS Protection
- ✅ Clickjacking Protection
- ✅ HSTS Headers
- ✅ Secure External Links

Siehe [OPTIMIZATIONS.md](OPTIMIZATIONS.md) für Details.

## 🎨 Farbschema

```css
--vami-dark:      #0F172A  /* Background */
--vami-primary:   #F97316  /* Orange Accent */
--vami-secondary: #334155  /* Secondary */
```

### Tailwind Custom Classes

- `.glass-effect` - Standard Glassmorphism
- `.glass-ultra` - Premium Glass
- `.glass-card` - Card-Variante
- `.text-gradient` - Orange Gradient Text
- `.sr-only` - Screen Reader Only

## 🚢 Deployment

### GitHub Pages

Die Website ist für GitHub Pages optimiert mit SPA-Routing-Support:

**Automatisches Deployment:**
- Push zum `V2` Branch triggert GitHub Actions
- Build & Deploy erfolgt automatisch
- Workflow-Konfiguration: `.github/workflows/static.yml`

**SPA-Routing-Lösung:**
- `404.html` fängt direkte Navigationen ab (z.B. `/privacy`)
- Redirect-Script in `index.html` stellt die Route wieder her
- Funktioniert perfekt mit React Router

**Wichtig:** Bei Custom Domains (wie `vamiapp.com`) die `CNAME` Datei im `public/` Ordner nicht löschen!

```bash
# Manuelles Deployment (falls nötig)
npm run build
# Dann dist/ Ordner zu GitHub Pages deployen
```

### Netlify (Empfohlen für Production)

```bash
# Automatisch via Git oder:
npm run build
netlify deploy --prod
```

Konfiguration in [netlify.toml](netlify.toml) mit:
- Optimierten Build-Settings
- Security Headers (CSP, HSTS, etc.)
- SPA-Redirect-Rules
- Asset-Caching

### Vercel

```bash
npm run build
vercel --prod
```

Vercel unterstützt SPA-Routing automatisch - keine zusätzliche Konfiguration nötig.

## 🧪 Testing

```bash
# Lighthouse im Browser
npm run build && npm run preview
# Dann: Chrome DevTools → Lighthouse

# Bundle-Größe analysieren
npm run build
ls -lh dist/assets/
```

### Empfohlene Tools
- **Lighthouse**: Performance & SEO
- **WAVE**: Accessibility Testing  
- **WebPageTest**: Detaillierte Performance-Analyse

## 📊 Expected Performance

- Lighthouse Performance: **95+**
- Lighthouse Accessibility: **100**
- Lighthouse SEO: **100**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 3.0s**

## 📝 Environment Variables

```bash
cp .env.example .env
# Dann .env anpassen
```

Siehe [.env.example](.env.example) für alle Optionen.

## 🔧 Configuration Files

- `vite.config.js` - Build-Optimierung
- `tailwind.config.js` - Design-System
- `netlify.toml` - Netlify-Config
- `eslint.config.js` - Code-Qualität

## 📚 Ressourcen

- [Component Documentation](CLAUDE.md)
- [Optimization Details](OPTIMIZATIONS.md)
- [Screenshot Guide](SCREENSHOTS-ANLEITUNG.md)

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature-Branch
3. Commit deine Änderungen
4. Push zum Branch
5. Öffne einen Pull Request

## 📄 Lizenz

Alle Rechte vorbehalten © 2026 VAMI
