import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Imprint = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-28 max-w-3xl">
      {/* Back to Home Link & Language Switcher */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}</span>
        </Link>

        {/* Language Switcher */}
        <div className="glass-ultra p-1 rounded-full border border-white/10 flex items-center gap-1">
          <button
            onClick={() => setLang('de')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              lang === 'de'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Deutsch (DE)
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              lang === 'en'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            English (EN)
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <h1 className="text-4xl font-black text-gradient-coffee mb-8 tracking-tight">
          {lang === 'de' ? 'Impressum' : 'Legal Notice / Imprint'}
        </h1>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              {lang === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}
            </h2>
            <p className="leading-relaxed">
              VAMIT UG (haftungsbeschränkt)<br />
              Petersfeldstraße 16<br />
              46395 Bocholt<br />
              {lang === 'de' ? 'Deutschland' : 'Germany'}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              {lang === 'de' ? 'Handelsregister' : 'Commercial Register'}
            </h2>
            <p className="leading-relaxed">
              {lang === 'de'
                ? 'Handelsregister B des Amtsgerichts Coesfeld'
                : 'Commercial Register B of the Local Court of Coesfeld'}<br />
              HRB 23796
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              {lang === 'de' ? 'Vertreten durch' : 'Represented by'}
            </h2>
            <p className="leading-relaxed">
              {lang === 'de' ? 'Geschäftsführer' : 'Managing Director'}: Veselin Kolev
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </h2>
            <p className="leading-relaxed">
              E-Mail:{' '}
              <a
                href="mailto:info@vam-it.com"
                className="text-amber-400 hover:underline transition-colors"
              >
                info@vam-it.com
              </a>
              <br />
              Website:{' '}
              <a
                href="https://vam-it.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline transition-colors"
              >
                https://vam-it.com
              </a>
            </p>
          </section>

          <section className="pt-4 border-t border-white/10 text-xs text-gray-400">
            <p>
              {lang === 'de'
                ? 'Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV: Veselin Kolev, Petersfeldstraße 16, 46395 Bocholt.'
                : 'Responsible for editorial content pursuant to § 18 (2) MStV: Veselin Kolev, Petersfeldstraße 16, 46395 Bocholt, Germany.'}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Imprint;
