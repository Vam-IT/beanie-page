import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Imprint = () => {
  return (
    <div className="container mx-auto px-6 py-28 max-w-3xl">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <h1 className="text-4xl font-black text-gradient-coffee mb-8 tracking-tight">Impressum</h1>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              VAMIT UG (haftungsbeschränkt)<br />
              Petersfeldstraße 16<br />
              46395 Bocholt<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Handelsregister</h2>
            <p className="leading-relaxed">
              Handelsregister B des Amtsgerichts Coesfeld<br />
              HRB 23796
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Vertreten durch</h2>
            <p className="leading-relaxed">
              Geschäftsführer: Veselin Kolev
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Kontakt</h2>
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
              Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV: Veselin Kolev, Petersfeldstraße 16, 46395 Bocholt.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Imprint;
