import { motion } from 'framer-motion';
import { Coffee, ShieldCheck, Flame, Watch, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { useLanguage } from '../context/LanguageContext';

  const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t, openComingSoon } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-70 pointer-events-none" />

      {/* Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-ultra border border-amber-500/20 text-xs text-amber-200 mb-6 shadow-lg shadow-amber-950/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-medium">{t.hero.pill}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-black mb-5 leading-[1.08] tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {t.hero.title1}
          <span className="text-gradient-coffee block sm:inline">
            {t.hero.title2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-2xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Feature Badges Grid */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-10 justify-center max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          {[
            { icon: <Coffee className="w-3.5 h-3.5 text-amber-400" />, label: t.hero.badgeDiary },
            { icon: <Sparkles className="w-3.5 h-3.5 text-orange-400" />, label: t.hero.badgeBean },
            { icon: <Watch className="w-3.5 h-3.5 text-blue-400" />, label: t.hero.badgeWatch },
            { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />, label: t.hero.badgePrivacy },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 glass-ultra px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-gray-200"
            >
              {badge.icon}
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* App Mockup with Visual Showcase using User's Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-12 flex justify-center w-full max-w-md"
        >
          {/* Phone Frame */}
          <div className="relative z-10 w-[240px] sm:w-[280px]">
            <div className="relative glass-card rounded-[2.8rem] p-3 shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80">
              {/* Screen Content */}
              <div className="relative rounded-[2.2rem] overflow-hidden bg-[#FBF9F1] aspect-[9/19.5] shadow-inner">
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#24120A] via-[#1B1815] to-[#141210] animate-pulse flex items-center justify-center">
                    <Coffee className="w-10 h-10 text-amber-500/40 animate-bounce" />
                  </div>
                )}
                <img
                  src={assetUrl('assets/beanie-dashboard.png')}
                  alt="Beanie App Dashboard - 175mg / 400mg with Mascot Bean"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            {/* Floating Badge Left: Streak */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 -left-4 sm:-left-16 glass-ultra rounded-2xl p-2 sm:p-3 shadow-2xl border border-amber-500/20 text-left flex items-center gap-2 sm:gap-3 backdrop-blur-xl z-20 scale-90 sm:scale-100"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/30">
                <Flame className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-medium text-amber-300">{t.hero.streakTitle}</div>
                <div className="text-[11px] sm:text-xs font-bold text-white">{t.hero.streakSub}</div>
              </div>
            </motion.div>

            {/* Floating Badge Right: Caffeine Daily Limit */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-4 sm:-right-16 glass-ultra rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/15 text-left flex items-center gap-2 sm:gap-3 backdrop-blur-xl z-20 scale-90 sm:scale-100"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#32170D] to-[#24120A] border border-amber-500/30 flex items-center justify-center">
                <Coffee className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-medium text-gray-400">{t.hero.limitTitle}</div>
                <div className="text-[11px] sm:text-xs font-bold text-amber-400">{t.hero.limitSub}</div>
              </div>
            </motion.div>

            {/* Floating Badge Bottom: Apple Watch */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-ultra rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-2xl border border-blue-400/20 flex items-center gap-1.5 sm:gap-2 backdrop-blur-xl z-20 whitespace-nowrap scale-90 sm:scale-100"
            >
              <Watch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              <span className="text-[11px] sm:text-xs font-semibold text-gray-200">{t.hero.watchBadge}</span>
            </motion.div>
          </div>

          {/* Background Glow Behind Phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent blur-3xl -z-10 scale-125" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center items-center w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.button
            type="button"
            onClick={openComingSoon}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3 touch-manipulation border border-white/20 cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-label="Download Beanie on the Apple App Store (Coming Soon)"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight text-gray-400">{t.hero.downloadPrompt}</div>
              <div className="text-base font-bold leading-tight tracking-tight">{t.hero.appStore}</div>
            </div>
          </motion.button>
        </motion.div>

        {/* Small Disclaimers & Info */}
        <p className="mt-4 text-[11px] text-gray-400 font-light">
          {t.hero.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default Hero;
