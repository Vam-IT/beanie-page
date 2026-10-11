import { motion } from 'framer-motion';
import { Brain, Hash, DollarSign } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-14 pb-4 px-4 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Headline */}
        <motion.h1
          className="text-[2.25rem] sm:text-5xl font-black mb-2 leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Stop Counting.{' '}
          <span className="text-gradient-premium inline-block">
            Start Pushing.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-gray-400 mb-3 leading-relaxed font-light max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI-powered push-up training for iPhone.
        </motion.p>

        {/* App Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-4 flex justify-center"
        >
          <div className="relative">
            <div
              className="relative glass-card rounded-[1.5rem] p-1.5 shadow-2xl max-w-[160px] overflow-hidden"
            >
              {/* Loading Skeleton */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse rounded-[1.25rem]" />
              )}
              
              <video
                src="/assets/WhatsApp%20Video%202026-02-12%20at%2011.58.40.mp4"
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
                onLoadedData={() => setVideoLoaded(true)}
                className={`rounded-[1.25rem] w-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                aria-label="VAMI app demonstration video"
              />
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 blur-3xl -z-10" />
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          className="flex gap-2 mb-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: <Brain className="w-3.5 h-3.5" />, label: 'AI Form Check' },
            { icon: <Hash className="w-3.5 h-3.5" />, label: 'Auto Count' },
            { icon: <DollarSign className="w-3.5 h-3.5" />, label: 'Free' },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 glass-ultra px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-gray-300"
            >
              <span className="text-orange-400">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col gap-2 w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="https://apps.apple.com/us/app/vami-push-ups/id6758764261"
            whileTap={{ scale: 0.97 }}
            className="group bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3 touch-manipulation border border-white/10"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80">Download on the</div>
              <div className="text-lg font-semibold leading-tight tracking-tight">App Store</div>
            </div>
          </motion.a>

          <p className="text-center text-[11px] text-gray-500">
            Free • iOS 17.0+ • No Ads • Offline AI
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
