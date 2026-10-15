import { Flame, Award, Coffee, TrendingUp } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';
import { useLanguage } from '../context/LanguageContext';

const StatsShowcase = () => {
  const { t } = useLanguage();

  const statsCards = [
    {
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      title: t.stats.card1Title,
      value: t.stats.card1Value,
      desc: t.stats.card1Desc,
      tag: t.stats.card1Tag,
      color: 'border-amber-500/20',
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      title: t.stats.card2Title,
      value: t.stats.card2Value,
      desc: t.stats.card2Desc,
      tag: t.stats.card2Tag,
      color: 'border-orange-500/20',
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      title: t.stats.card3Title,
      value: t.stats.card3Value,
      desc: t.stats.card3Desc,
      tag: t.stats.card3Tag,
      color: 'border-yellow-500/20',
    },
  ];

  return (
    <section id="stats" className="relative py-20 md:py-32 px-6 overflow-hidden scroll-mt-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13100E] via-[#181411]/50 to-[#13100E] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Stats Cards */}
          <div className="relative">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium mb-4">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.stats.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                  {t.stats.title1}
                  <span className="text-gradient-coffee">{t.stats.title2}</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed">
                  {t.stats.subtitle}
                </p>
              </div>

              {statsCards.map((stat, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Frame with User's Stats Screenshot */}
          <div className="relative flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* Primary Screenshot: Stats Screen */}
              <div className="relative mx-auto w-[250px] sm:w-[280px]">
                <div className="glass-card rounded-[2.8rem] p-3 shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80">
                  <div className="rounded-[2.2rem] overflow-hidden bg-[#FBF9F1] aspect-[9/19.5]">
                    <img
                      src={assetUrl('assets/beanie-stats.png')}
                      alt="CupTrail Stats Screen - Weekly Intake &amp; Caffeine Breakdown"
                      decoding="async"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = assetUrl('assets/beanie-dashboard.png');
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Background Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: t.stats.metric1Value, label: t.stats.metric1Label },
            { value: t.stats.metric2Value, label: t.stats.metric2Label },
            { value: t.stats.metric3Value, label: t.stats.metric3Label },
            { value: t.stats.metric4Value, label: t.stats.metric4Label },
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
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
