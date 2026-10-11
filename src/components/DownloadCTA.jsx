import { motion } from 'framer-motion';
import { Coffee, ShieldCheck, Watch, Sparkles, Check } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const DownloadCTA = () => {
  return (
    <section id="download" className="relative py-24 md:py-36 px-4 md:px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13100E] via-[#1A1613]/80 to-[#13100E] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-ultra rounded-3xl p-8 md:p-16 text-center overflow-hidden border border-amber-500/20 shadow-2xl"
        >
          {/* Ambient Glowing Blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* App Icon Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-block p-1 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-3xl mb-6 shadow-xl shadow-orange-500/20"
            >
              <img
                src={assetUrl('assets/icon-1024.png')}
                alt="Beanie Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-[22px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white leading-tight">
              Bereit für deinen smarten{' '}
              <span className="text-gradient-coffee">Kaffee-Begleiter?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Lade Beanie jetzt im Apple App Store. Kein Login, kein Abo, keine Werbung. 
              Deine Daten bleiben zu 100% auf deinen Geräten.
            </p>

            {/* Download CTA Button */}
            <div className="flex flex-col gap-4 justify-center items-center mb-8 max-w-sm mx-auto">
              <motion.a
                href="https://apps.apple.com/app/beanie"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-2xl flex items-center justify-center gap-3 touch-manipulation border border-white/20 group"
              >
                <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-400">Erhältlich im</div>
                  <div className="text-xl font-bold leading-tight">Apple App Store</div>
                </div>
              </motion.a>

              <span className="text-xs text-gray-400">
                Kompatibel mit iOS 17.0+ &amp; watchOS 10.0+
              </span>
            </div>

            {/* Trust checklist */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-300 pt-6 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>100% Kostenlos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Ohne Werbung &amp; Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Ohne Registrierung</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Lokale Gerätespeicherung</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
