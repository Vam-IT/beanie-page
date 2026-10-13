import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { assetUrl } from '../utils/assetUrl';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 py-12 px-6 bg-[#0E0C0A]" role="contentinfo">
      <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-[1px] shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-[#181411] rounded-[11px] flex items-center justify-center overflow-hidden">
              <img
                src={assetUrl('assets/icon-1024.png')}
                alt="CupTrail Icon"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<span class="text-sm">☕</span>';
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-black text-white tracking-tight">CupTrail</span>
            <span className="text-xs text-gray-500">{t.footer.tagline}</span>
          </div>
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
