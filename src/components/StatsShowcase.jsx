import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Activity, BarChart3, Zap } from 'lucide-react';

const StatsShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const stats = [
    {
      icon: <Activity className="w-6 h-6" />,
      value: '328',
      label: 'Avg. Push-ups/Week',
      change: '+12%',
      color: 'text-green-400',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      value: '94%',
      label: 'Form Accuracy',
      change: '+3%',
      color: 'text-blue-400',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: '28',
      label: 'Training Streak (Days)',
      change: 'Record!',
      color: 'text-orange-400',
    },
  ];

  return (
    <section id="stats" ref={ref} className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Stats Cards with Parallax */}
          <motion.div style={{ opacity }} className="relative">
            <motion.div
              style={{ y: y1 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Progress.{' '}
                  <span className="text-gradient">Visualized.</span>
                </h2>
                <p className="text-xl text-gray-400">
                  See at a glance how your performance evolves.
                  VAMI tracks everything for you.
                </p>
              </motion.div>

              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`${stat.color}`}>{stat.icon}</div>
                      <span className="text-gray-400">{stat.label}</span>
                    </div>
                    <span className="text-sm text-green-400">{stat.change}</span>
                  </div>
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: App Screenshot Mockup */}
          <motion.div
            style={{ y: y2 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* iPhone Frame */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="glass-effect rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-gradient-to-br from-vami-secondary to-vami-dark rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Workout Details Screenshot */}
                    <img
                      src="assets/app-stats.jpg"
                      alt="VAMI App Statistiken und Analysen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Chart Elements */}
              <motion.div
                className="absolute top-10 -right-6 glass-effect rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-orange-400 rounded"></div>
                  <div className="w-2 h-12 bg-orange-500 rounded"></div>
                  <div className="w-2 h-6 bg-orange-600 rounded"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -left-6 glass-effect rounded-xl p-4 shadow-lg"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Activity className="w-8 h-8 text-green-400" />
              </motion.div>

              {/* Background Gradient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2.5k', label: 'Total Push-ups' },
            { value: '42', label: 'Workouts' },
            { value: '87%', label: 'Improvement' },
            { value: '156', label: 'Minutes Trained' },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-vami-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsShowcase;
