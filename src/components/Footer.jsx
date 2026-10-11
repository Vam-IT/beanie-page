import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 py-12 px-6 bg-[#0E0C0A]" role="contentinfo">
      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        {/* Brand signature */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
            ☕
          </div>
          <span className="text-sm font-bold text-white tracking-tight">Beanie</span>
          <span className="text-xs text-gray-500">{t.footer.tagline}</span>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400" aria-label="Footer Navigation">
          <Link to="/" className="hover:text-amber-300 transition-colors">
            {t.footer.home}
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/privacy" className="hover:text-amber-300 transition-colors">
            {t.footer.privacy}
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/terms" className="hover:text-amber-300 transition-colors">
            {t.footer.terms}
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/imprint" className="hover:text-amber-300 transition-colors">
            {t.footer.imprint}
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <a
            href="mailto:info@vam-it.com"
            className="hover:text-amber-300 transition-colors"
            aria-label="Contact support via email"
          >
            {t.footer.support} (info@vam-it.com)
          </a>
        </nav>

        {/* Language selector in footer */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Language:</span>
          <button
            onClick={() => setLang('en')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              lang === 'en'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'hover:text-white'
            }`}
          >
            English
          </button>
          <span>/</span>
          <button
            onClick={() => setLang('de')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              lang === 'de'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'hover:text-white'
            }`}
          >
            Deutsch
          </button>
        </div>

        {/* Legal provider note */}
        <div className="space-y-1 text-[11px] text-gray-500 max-w-xl">
          <p>{t.footer.provider}</p>
          <p>{t.footer.appleNotice}</p>
          <p className="pt-2 text-gray-600">
            © {currentYear} VAMIT UG (haftungsbeschränkt). {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
