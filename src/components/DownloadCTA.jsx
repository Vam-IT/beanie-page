import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section id="download" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-ultra rounded-2xl md:rounded-3xl p-8 md:p-16 text-center overflow-hidden"
        >
          {/* Background Gradient Blobs */}
          <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-3 md:p-4 bg-orange-500/20 rounded-2xl md:rounded-full mb-4 md:mb-6"
            >
              <Download className="w-8 h-8 md:w-12 md:h-12 text-orange-400" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 px-2 tracking-tight leading-tight">
              Start Your{' '}
              <span className="text-gradient-premium">Journey Today</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Join thousands of users who transformed their push-up training.
              <br className="hidden md:block" />
              <span className="text-white font-semibold">100% Free. No Subscription Required.</span>
            </p>

            <div className="flex flex-col gap-4 justify-center items-center mb-6 md:mb-8 px-4 max-w-md mx-auto">
              <motion.a
                href="https://apps.apple.com/us/app/vami-push-ups/id6758764261"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium text-base transition-all shadow-2xl flex items-center justify-center gap-3 touch-manipulation border border-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">App Store</div>
                </div>
              </motion.a>

              <p className="text-xs text-gray-500 text-center">
                Works on iPhone, iPad, and Apple Watch
              </p>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 md:mt-12 space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-300 font-semibold text-lg ml-2">4.8 Rating</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm text-gray-400">
                <span>5,000+ Active Users</span>
                <span>•</span>
                <span>500+ Reviews</span>
                <span>•</span>
                <span>#1 Push-up App</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
