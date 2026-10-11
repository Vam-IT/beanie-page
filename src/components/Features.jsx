import { motion } from 'framer-motion';
import { Brain, Hash, BarChart2, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: 'AI Form Correction',
      description: 'Real-time feedback on your form. Perfect every rep.',
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
    {
      icon: <Hash className="w-7 h-7" />,
      title: 'Auto Counting',
      description: 'Focus on execution. VAMI counts automatically.',
      gradient: 'from-orange-500 via-orange-600 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.3)',
    },
    {
      icon: <BarChart2 className="w-7 h-7" />,
      title: 'Track Progress',
      description: 'See your improvements with detailed analytics.',
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.3)',
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 pb-32 md:pb-40 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block glass-ultra px-6 py-2 rounded-full mb-6 border border-orange-500/20"
          >
            <span className="text-sm font-medium text-orange-400">Powered by AI</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Everything You{' '}
            <span className="text-gradient-premium">Need</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            AI-powered training in one simple app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group relative glass-card rounded-3xl p-8 h-full cursor-pointer overflow-hidden"
              >
                {/* Gradient Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top, ${feature.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all`}
                    style={{
                      boxShadow: `0 8px 32px ${feature.glowColor}`,
                    }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base md:text-lg group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft Divider */}
        <div className="relative my-16 md:my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
        </div>

        {/* Privacy Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative glass-ultra rounded-3xl p-12 md:p-16 text-center overflow-hidden group"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-8 shadow-2xl"
                style={{
                  boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
                }}
              >
                <Lock className="w-10 h-10" />
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                100% Private.{' '}
                <span className="text-gradient-premium">100% Yours.</span>
              </h3>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                All AI runs on your iPhone. No cloud. No data collection.
                <br />
                <span className="text-white font-semibold text-xl mt-2 block">Your data never leaves your device.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
