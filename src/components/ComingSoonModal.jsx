import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Smartphone, ShieldCheck, Heart } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';
import { useLanguage } from '../context/LanguageContext';

const ComingSoonModal = () => {
  const { isComingSoonOpen, closeComingSoon, t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isComingSoonOpen) {
        closeComingSoon();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isComingSoonOpen, closeComingSoon]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isComingSoonOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isComingSoonOpen]);

  const cs = t.comingSoon || {};

  return (
    <AnimatePresence>
      {isComingSoonOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeComingSoon}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl overflow-hidden my-8 z-10"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-500/25 to-orange-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeComingSoon}
              className="absolute top-5 right-5 w-9 h-9 rounded-full glass-ultra border border-white/10 hover:border-white/30 text-gray-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Brand */}
            <div className="text-center pt-2 pb-4">
              {/* App Icon with Badge */}
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-[2px] shadow-xl shadow-orange-500/30">
                  <div className="w-full h-full bg-[#181411] rounded-[14px] flex items-center justify-center overflow-hidden">
                    <img
                      src={assetUrl('assets/icon-1024.png')}
                      alt="CupTrail App Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-1.5 rounded-full shadow-lg border border-black/40">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{cs.badge}</span>
              </div>

              {/* Title */}
              <h2 id="coming-soon-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {cs.title}
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
                {cs.desc}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-2.5 my-5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-white mb-0.5">{cs.feature1Title}</div>
                  <div className="text-gray-400 leading-snug">{cs.feature1Desc}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-white mb-0.5">{cs.feature2Title}</div>
                  <div className="text-gray-400 leading-snug">{cs.feature2Desc}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-white mb-0.5">{cs.feature3Title}</div>
                  <div className="text-gray-400 leading-snug">{cs.feature3Desc}</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={closeComingSoon}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all cursor-pointer focus:outline-none"
              >
                {cs.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
