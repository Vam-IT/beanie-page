import { motion } from 'framer-motion';
import { 
  Coffee, 
  Sparkles, 
  Watch, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const mainFeatures = [
    {
      icon: <Coffee className="w-8 h-8" />,
      badge: t.features.card1.badge,
      title: t.features.card1.title,
      description: t.features.card1.desc,
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      highlights: [
        t.features.card1.h1,
        t.features.card1.h2,
        t.features.card1.h3,
        t.features.card1.h4,
      ].filter(Boolean),
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      badge: t.features.card2.badge,
      title: t.features.card2.title,
      description: t.features.card2.desc,
      gradient: 'from-orange-500 via-rose-500 to-amber-500',
      glowColor: 'rgba(255, 87, 34, 0.25)',
      highlights: [
        t.features.card2.h1,
        t.features.card2.h2,
        t.features.card2.h3,
        t.features.card2.h4,
      ].filter(Boolean),
    },
    {
      icon: <Watch className="w-8 h-8" />,
      badge: t.features.card3.badge,
      title: t.features.card3.title,
      description: t.features.card3.desc,
      gradient: 'from-sky-500 via-blue-600 to-indigo-500',
      glowColor: 'rgba(56, 189, 248, 0.25)',
      highlights: [
        t.features.card3.h1,
        t.features.card3.h2,
        t.features.card3.h3,
        t.features.card3.h4,
      ].filter(Boolean),
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-36 px-6 overflow-hidden scroll-mt-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13100E] via-[#171310]/60 to-[#13100E] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-ultra px-5 py-2 rounded-full mb-6 border border-amber-500/20 text-xs font-semibold text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.features.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            {t.features.title1}
            <span className="text-gradient-coffee">{t.features.title2}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="flex"
            >
              <div className="group relative glass-card rounded-3xl p-8 flex flex-col justify-between w-full overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500">
                {/* Radial Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top, ${feature.glowColor}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-xl`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300/80 uppercase tracking-wider glass-ultra px-3 py-1 rounded-full border border-white/5">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-200 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6 font-light">
                    {feature.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-white/5 pt-4 text-xs text-gray-300">
                    {feature.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Spotlight: User's Add Brew Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-ultra rounded-3xl p-8 md:p-12 border border-white/10 mb-20 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium mb-4">
                <Coffee className="w-3.5 h-3.5" />
                <span>{t.features.spotlight.badge}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">
                {t.features.spotlight.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {t.features.spotlight.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">{t.features.spotlight.item1Title}</span>
                  {t.features.spotlight.item1Desc}
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">{t.features.spotlight.item2Title}</span>
                  {t.features.spotlight.item2Desc}
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">{t.features.spotlight.item3Title}</span>
                  {t.features.spotlight.item3Desc}
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">{t.features.spotlight.item4Title}</span>
                  {t.features.spotlight.item4Desc}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-[260px] glass-card rounded-[2.2rem] p-2.5 shadow-2xl border border-white/10">
                <div className="rounded-[1.8rem] overflow-hidden bg-[#FBF9F1]">
                  <img
                    src={assetUrl('assets/beanie-add-brew.png')}
                    alt="Beanie Add Brew Screen - Coffee Catalogue &amp; Caffeine Slider"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = assetUrl('assets/beanie-dashboard.png');
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What the App DOES NOT do / 100% Privacy by Design Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative glass-ultra rounded-3xl p-5 sm:p-8 md:p-14 border border-emerald-500/20 overflow-hidden">
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-emerald-400">
                    {t.features.privacyBox.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                    {t.features.privacyBox.title}
                    <span className="text-emerald-400">{t.features.privacyBox.titleHighlight}</span>
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-8 max-w-3xl font-light">
                {t.features.privacyBox.desc}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  {
                    title: t.features.privacyBox.p1Title,
                    desc: t.features.privacyBox.p1Desc,
                  },
                  {
                    title: t.features.privacyBox.p2Title,
                    desc: t.features.privacyBox.p2Desc,
                  },
                  {
                    title: t.features.privacyBox.p3Title,
                    desc: t.features.privacyBox.p3Desc,
                  },
                  {
                    title: t.features.privacyBox.p4Title,
                    desc: t.features.privacyBox.p4Desc,
                  },
                  {
                    title: t.features.privacyBox.p5Title,
                    desc: t.features.privacyBox.p5Desc,
                  },
                  {
                    title: t.features.privacyBox.p6Title,
                    desc: t.features.privacyBox.p6Desc,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/30 border border-white/5 flex flex-col justify-start"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">{item.title}</h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-400 leading-snug sm:leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
