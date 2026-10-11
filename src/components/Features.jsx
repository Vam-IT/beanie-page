import { motion } from 'framer-motion';
import { 
  Coffee, 
  Sparkles, 
  Watch, 
  ShieldCheck, 
  Flame, 
  Sliders, 
  Bell, 
  Lock,
  Layers,
  MapPin,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Coffee className="w-8 h-8" />,
      badge: 'Tagebuch & Intake',
      title: 'Kaffee- & Koffeintagebuch',
      description:
        'Erfasse Espresso, Cappuccino, Flat White oder Filterkaffee mit wenigen Fingertipps. Wähle Portionen in ml oder oz, sieh geschätzte Koffeinwerte in mg und füge manuelle Orts-Labels (Home, Office, Cafe) sowie Notizen hinzu.',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      highlights: ['Espresso, Cappuccino, Flat White u.v.m.', 'Portionen in ml & oz mit mg-Koffeinwerten', 'Manuelle Orts-Tags: Home, Office, Cafe', 'Tageslimit-Abgleich (z. B. 400 mg)'],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      badge: 'Gamification',
      title: 'Interaktiver Begleiter „Bean“',
      description:
        'Dein persönliches Bohnen-Maskottchen Bean reagiert auf deine Konsumgewohnheiten mit dynamischen Launen und Animationen. Verdiene Erfahrungspunkte (XP), halte Tages-Streaks aufrecht und schalte Level & Badges frei.',
      gradient: 'from-orange-500 via-rose-500 to-amber-500',
      glowColor: 'rgba(255, 87, 34, 0.25)',
      highlights: ['Animiertes Maskottchen mit Launen', 'Erfahrungspunkte (XP) für jeden Brew', 'Tages-Streaks (z. B. 7-Tage-Streak)', 'Freischaltbare Abzeichen & Level'],
    },
    {
      icon: <Watch className="w-8 h-8" />,
      badge: 'iOS & watchOS',
      title: 'Apple Watch & WidgetKit',
      description:
        'Bleibe stets im Bilde – direkt auf deinem Sperrbildschirm, Home-Screen oder am Handgelenk. Volle Unterstützung für iOS Lockscreen- und Homescreen-Widgets sowie native Apple Watch Komplikationen mit zuverlässigem Sync.',
      gradient: 'from-sky-500 via-blue-600 to-indigo-500',
      glowColor: 'rgba(56, 189, 248, 0.25)',
      highlights: ['Eigenständige Apple Watch Begleit-App', 'Watch Face Komplikationen', 'iOS Home- & Lockscreen-Widgets', 'Nahtloser WatchConnectivity-Sync'],
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-36 px-6 overflow-hidden">
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
            <span>Fokus auf das Wesentliche</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Alles, was du für deinen{' '}
            <span className="text-gradient-coffee">Kaffeefluss</span> brauchst
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Keine überladenen Diät-Apps, kein Abo-Zwang. Beanie kombiniert intuitives Tracking mit Freude und Ästhetik.
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

        {/* Feature Spotlight: App Screenshot & Drink Selection */}
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
                <span>Vielfalt im Handumdrehen</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">
                Für jeden Kaffeeliebhaber die passende Auswahl
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                Ob morgendlicher doppelter Espresso, samtiger Cappuccino oder Cold Brew im Sommer: 
                Beanie berechnet die geschätzte Koffeinmenge transparent auf Basis erprobter Durchschnittswerte und gleicht sie mit deinem persönlichen Tagesziel ab.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">☕ Beliebte Sorten</span>
                  Espresso, Lungo, Cappuccino, Latte, Flat White, Cold Brew, Pour Over
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">🏷️ Manuelle Orte</span>
                  Einfache Tags für Home, Office oder Cafe – ohne Akku-fressendes GPS
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">🔔 Lokale Reminder</span>
                  Morgendliche Erinnerung (z. B. 09:00 Uhr) – rein lokal ausgelöst
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-bold text-white block mb-0.5">⚡ WatchConnectivity</span>
                  Spiegelung in Echtzeit zwischen iPhone und Apple Watch
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-[260px] glass-card rounded-[2.2rem] p-2.5 shadow-2xl border border-white/10">
                <div className="rounded-[1.8rem] overflow-hidden bg-[#181411]">
                  <img
                    src={assetUrl('assets/beanie-add-brew.png')}
                    alt="Beanie Kaffee Auswahlansicht"
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
          <div className="relative glass-ultra rounded-3xl p-8 md:p-14 border border-emerald-500/20 overflow-hidden">
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    Transparenz &amp; Datenschutz
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Was Beanie ganz bewusst <span className="text-emerald-400">NICHT</span> tut
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-3xl font-light">
                Deine Konsumgewohnheiten gehen niemanden etwas an. Beanie wurde nach dem Prinzip
                <strong className="text-white"> Privacy by Design</strong> entwickelt.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Keine Server & Kein Backend',
                    desc: 'Wir betreiben keine Serverinfrastruktur. Alle Daten verbleiben auf deinen Endgeräten.',
                  },
                  {
                    title: 'Keine Benutzerkonten',
                    desc: 'Kein Login, keine Registrierung, kein Cloud-Profil. Öffnen und direkt nutzen.',
                  },
                  {
                    title: 'Kein GPS-Tracking',
                    desc: 'Die Orts-Labels (Home, Office, Cafe) sind rein manuelle Kategorien ohne Geodaten.',
                  },
                  {
                    title: 'Keine Tracker & Werbe-SDKs',
                    desc: 'Kein Google Firebase, kein Meta SDK, kein Mixpanel und keine Werbenetzwerke.',
                  },
                  {
                    title: 'Keine Bezahlschranken / Abos',
                    desc: 'Die App ist aktuell komplett kostenlos ohne versteckte In-App-Käufe oder Abos.',
                  },
                  {
                    title: 'Keine medizinische Diagnostik',
                    desc: 'Rein informative Aufsummierung von Schätzwerten ohne medizinische Abbaukurven.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/30 border border-white/5 flex flex-col justify-start"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{item.desc}</p>
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
