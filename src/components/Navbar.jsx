import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: t.nav.features, href: isHome ? '#features' : '/#features', isHash: true },
    { label: t.nav.stats, href: isHome ? '#stats' : '/#stats', isHash: true },
    { label: t.nav.privacy, href: '/privacy', isRoute: true },
    { label: t.nav.terms, href: '/terms', isRoute: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'backdrop-apple bg-[#141210]/85 border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
      aria-label="Main Navigation"
      role="navigation"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Beanie - Homepage"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-[1px] shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#181411] rounded-[15px] flex items-center justify-center overflow-hidden">
                <img
                  src={assetUrl('assets/icon-1024.png')}
                  alt="Beanie Icon"
                  className="w-full h-full object-cover rounded-[14px]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<span class="text-xl">☕</span>';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black text-gradient-coffee tracking-tight leading-none">
                Beanie
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-400/80 mt-0.5">
                Coffee &amp; Caffeine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Action CTAs: Language Toggle & App Store Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Pill Toggle */}
            <div className="glass-ultra p-1 rounded-full border border-white/10 flex items-center gap-1 shadow-sm">
              <button
                onClick={() => setLang('en')}
                aria-label="Switch language to English"
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('de')}
                aria-label="Sprache auf Deutsch umstellen"
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'de'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>

            {/* App Store CTA */}
            <motion.a
              href="https://apps.apple.com/app/beanie"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="hidden sm:flex bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-4 py-2 rounded-full font-semibold text-xs shadow-lg shadow-orange-500/20 transition-all border border-amber-300/30 items-center gap-2 touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Download Beanie on the Apple App Store"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>{t.nav.appStore}</span>
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-[#141210]/95 backdrop-blur-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-200 hover:text-orange-400 py-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-200 hover:text-orange-400 py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-1">
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-amber-400" />
                  Language / Sprache
                </span>
                <div className="glass-ultra p-1 rounded-full border border-white/10 flex items-center gap-1">
                  <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      lang === 'en'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                        : 'text-gray-400'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLang('de')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      lang === 'de'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                        : 'text-gray-400'
                    }`}
                  >
                    Deutsch
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://apps.apple.com/app/beanie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t.nav.getApp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
