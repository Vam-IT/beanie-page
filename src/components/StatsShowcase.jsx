import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Award, Coffee, TrendingUp, Sparkles, Shield } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const StatsShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const statsCards = [
    {
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      title: 'Tageslimit im Blick',
      value: '400 mg',
      desc: 'Standardmäßiger Richtwert für gesunde Erwachsene. Die App summiert transparent jede Tasse auf.',
      tag: 'Tages-Sollwert',
      color: 'border-amber-500/20',
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      title: 'Tages-Streaks',
      value: '7 Tage+',
      desc: 'Halte deine Protokoll-Routine aufrecht. Kontinuität hält Maskottchen Bean glücklich!',
      tag: 'Motivation',
      color: 'border-orange-500/20',
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      title: 'XP & Level-System',
      value: 'Level & Badges',
      desc: 'Sammle virtuelle Erfahrungspunkte (XP) bei jedem Log und schalte thematische Abzeichen frei.',
      tag: 'Gamification',
      color: 'border-yellow-500/20',
    },
  ];

  return (
    <section id="stats" ref={ref} className="relative py-24 md:py-36 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13100E] via-[#181411]/50 to-[#13100E] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Stats Cards with Parallax */}
          <motion.div style={{ opacity }} className="relative">
            <motion.div style={{ y: y1 }} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium mb-4">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Statistiken &amp; Fortschritt</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                  Deine Kaffeereise.{' '}
                  <span className="text-gradient-coffee">Visualisiert.</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed">
                  Erkenne deine Konsummuster auf einen Blick. Beanie berechnet den Tagesverlauf verständlich und ohne unverständliche biochemische Kurven.
                </p>
              </div>

              {statsCards.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-ultra rounded-2xl p-6 border ${stat.color} hover:bg-white/5 transition-all`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <span className="font-semibold text-white text-base">{stat.title}</span>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 glass-ultra px-2.5 py-1 rounded-full">
                      {stat.tag}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1.5 mt-2">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone Frame with Screenshots */}
          <motion.div style={{ y: y2 }} className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm w-full"
            >
              {/* Primary Screenshot: Stats Screen */}
              <div className="relative mx-auto w-[250px] sm:w-[280px]">
                <div className="glass-card rounded-[2.8rem] p-3 shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80">
                  <div className="rounded-[2.2rem] overflow-hidden bg-[#141210] aspect-[9/19.5]">
                    <img
                      src={assetUrl('assets/beanie-stats.png')}
                      alt="Beanie Fortschritts- und Verlaufsansicht"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = assetUrl('assets/beanie-dashboard.png');
                      }}
                    />
                  </div>
                </div>

                {/* Secondary Floating Card: Badges Showcase */}
                <motion.div
                  className="absolute -bottom-8 -right-6 sm:-right-10 w-48 sm:w-56 glass-ultra rounded-2xl p-2.5 shadow-2xl border border-amber-500/30 overflow-hidden hidden xs:block z-20 backdrop-blur-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="rounded-xl overflow-hidden bg-[#181411]">
                    <img
                      src={assetUrl('assets/beanie-achievements.png')}
                      alt="Beanie Abzeichen und Errungenschaften"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-[10px] font-bold text-amber-300">
                      🏆 Sammle Badges &amp; Meilensteine
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Background Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '100% Lokal', label: 'Keine Server / Kein Cloud-Sync' },
            { value: 'iOS & Watch', label: 'Widgets & WatchConnectivity' },
            { value: 'Keine Werbung', label: 'Vollständig kostenlos' },
            { value: 'DSGVO-Konform', label: 'Art. 6 Abs. 1 DSGVO' },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-ultra rounded-2xl p-5 text-center border border-white/5"
            >
              <div className="text-xl sm:text-2xl font-black text-amber-400 mb-1">
                {item.value}
              </div>
              <div className="text-xs text-gray-400 font-light">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsShowcase;
