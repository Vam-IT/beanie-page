import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 bg-[#0E0C0A]" role="contentinfo">
      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        {/* Brand signature */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
            ☕
          </div>
          <span className="text-sm font-bold text-white tracking-tight">Beanie</span>
          <span className="text-xs text-gray-500">— Dein smarter Kaffee-Begleiter</span>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400" aria-label="Footer Navigation">
          <Link to="/" className="hover:text-amber-300 transition-colors">
            Startseite
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/privacy" className="hover:text-amber-300 transition-colors">
            Datenschutzerklärung / Privacy
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/terms" className="hover:text-amber-300 transition-colors">
            Nutzungsbedingungen / Terms
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/imprint" className="hover:text-amber-300 transition-colors">
            Impressum
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <a
            href="mailto:info@vam-it.com"
            className="hover:text-amber-300 transition-colors"
            aria-label="Support per E-Mail kontaktieren"
          >
            Support (info@vam-it.com)
          </a>
        </nav>

        {/* Legal provider note */}
        <div className="space-y-1 text-[11px] text-gray-500 max-w-xl">
          <p>
            VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Deutschland
          </p>
          <p>
            Apple, Apple Watch, watchOS, iPhone und iOS sind Marken der Apple Inc., eingetragen in den USA und anderen Ländern.
          </p>
          <p className="pt-2 text-gray-600">
            © {currentYear} VAMIT UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
