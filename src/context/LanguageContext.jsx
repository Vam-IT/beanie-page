import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      features: 'Features',
      stats: 'Stats & Companion',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      imprint: 'Imprint',
      appStore: 'App Store',
      getApp: 'Get on App Store',
    },
    hero: {
      pill: 'New for iOS 17 & watchOS 10 • 100% Private & Offline',
      title1: 'Track Your Brew. ',
      title2: 'Meet Bean.',
      subtitle:
        'Your smart coffee & caffeine diary for iPhone and Apple Watch. Log brews in seconds, keep your daily limit in check, and stay motivated with your personal companion.',
      badgeDiary: 'Coffee & Caffeine Diary',
      badgeBean: 'Bean Companion & XP',
      badgeWatch: 'Apple Watch & Widgets',
      badgePrivacy: 'No Cloud & No Tracking',
      streakTitle: '1-Day Streak',
      streakSub: 'Streak Master 🔥',
      limitTitle: 'Daily Intake',
      limitSub: '175 / 400 mg',
      watchBadge: 'Apple Watch Companion & Widgets',
      downloadApp: 'Download on the App Store',
      downloadPrompt: 'Download on the',
      appStore: 'App Store',
      exploreBtn: 'Explore Features',
      disclaimer: 'Free • For iPhone (iOS 17+) & Apple Watch (watchOS 10+) • No In-App Purchases • No Accounts',
    },
    features: {
      badge: 'Focus on What Matters',
      title1: 'Everything You Need for Your ',
      title2: 'Coffee Flow',
      subtitle:
        'No bloated diet apps, no subscriptions. Beanie pairs effortless tracking with delight, gamification, and aesthetics.',
      card1: {
        badge: 'Diary & Intake',
        title: 'Coffee & Caffeine Diary',
        desc:
          'Log Espresso, Lungo, Flat White, Americano, Cold Brew and more in seconds. Choose portion sizes in ml or oz, view estimated caffeine content in mg, and add manual location tags (Home, Office, Cafe).',
        h1: 'Espresso, Lungo, Flat White & more',
        h2: 'Portion sizes in ml & oz with mg caffeine',
        h3: 'Manual location tags: Home, Office, Cafe',
        h4: 'Daily target limit comparison (e.g. 400 mg)',
      },
      card2: {
        badge: 'Gamification',
        title: "Interactive Companion 'Bean'",
        desc:
          'Your expressive coffee bean mascot Bean accompanies your day with dynamic moods and cheering animations. Earn experience points (XP) for every logged brew, build streaks, and unlock achievements.',
        h1: 'Animated mascot with dynamic moods',
        h2: 'XP for every logged brew (+50 XP)',
        h3: 'Daily streaks to keep routines going',
        h4: 'Milestone levels & collectible badges',
      },
      card3: {
        badge: 'iOS & watchOS',
        title: 'Apple Watch & WidgetKit',
        desc:
          'Stay updated at a glance on your Lock Screen, Home Screen, or wrist. Full support for iOS widgets and Apple Watch complications with bidirectional WatchConnectivity sync.',
        h1: 'Native Apple Watch companion app',
        h2: 'Watch Face complications',
        h3: 'iOS Home & Lock Screen widgets',
        h4: 'Instant WatchConnectivity syncing',
      },
      spotlight: {
        badge: 'Drink Variety',
        title: 'A Curated Catalogue for Every Coffee Lover',
        desc:
          "Whether it's an intense double espresso, a smooth lungo, an iced matcha latte, or a refreshing cold brew: Beanie transparently calculates estimated caffeine amounts and balances them against your personal daily target.",
        item1Title: '☕ Popular Varieties',
        item1Desc: 'Espresso, Lungo, Cappuccino, Flat White, Cold Brew, Decaf & more',
        item2Title: '🏷️ Manual Tags',
        item2Desc: 'Simple Home, Office, or Cafe tags without battery-draining GPS',
        item3Title: '🔔 Local Reminders',
        item3Desc: 'Gentle morning reminder (default: 09:00 AM) triggered entirely on-device',
        item4Title: '⚡ WatchConnectivity',
        item4Desc: 'Seamless two-way sync between paired iPhone and Apple Watch',
      },
      privacyBox: {
        badge: 'Transparency & Privacy',
        title: 'What Beanie Deliberately ',
        titleHighlight: 'DOES NOT Do',
        desc:
          'Your coffee habits belong to you alone. Beanie was built strictly following the principle of Privacy by Design.',
        p1Title: 'No Servers & No Backend',
        p1Desc: 'We operate no server infrastructure. All data stays strictly on your personal devices.',
        p2Title: 'No User Accounts',
        p2Desc: 'No login, no sign-up, no cloud profile. Open the app and start brewing immediately.',
        p3Title: 'No GPS Tracking',
        p3Desc: 'Location tags (Home, Office, Cafe) are purely manual categories without geographic coordinates.',
        p4Title: 'No Trackers or Ad SDKs',
        p4Desc: 'No Google Firebase, no Meta SDK, no Mixpanel, and no advertising networks.',
        p5Title: 'No Paywalls or Subscriptions',
        p5Desc: 'The app is currently 100% free with zero in-app purchases or subscription traps.',
        p6Title: 'No Medical Claims',
        p6Desc: 'Informational approximations without clinical decay curves or diagnostic advice.',
      },
    },
    stats: {
      badge: 'Stats & Progress',
      title1: 'Your Coffee Journey. ',
      title2: 'Visualized.',
      subtitle:
        'Spot your daily and weekly consumption patterns at a glance. Beanie delivers transparent breakdowns and streak milestones without confusing biochemical jargon.',
      card1Title: 'Daily Limit in Check',
      card1Value: '400 mg',
      card1Desc: 'Standard reference limit for healthy adults. Beanie simply sums up each brew you enjoy.',
      card1Tag: 'Daily Target',
      card2Title: 'Daily Streaks',
      card2Value: '7 Days+',
      card2Desc: 'Build healthy consistency. Keeping your logging streak alive keeps mascot Bean happy!',
      card2Tag: 'Consistency',
      card3Title: 'XP & Progression',
      card3Value: '850 XP',
      card3Desc: 'Collect experience points with every coffee and level up alongside your companion.',
      card3Tag: 'Gamification',
      badgesShowcase: '🏆 Collect Badges & Milestones',
      metric1Value: '100% Local',
      metric1Label: 'No Servers / No Cloud Sync',
      metric2Value: 'iOS & Watch',
      metric2Label: 'Widgets & WatchConnectivity',
      metric3Value: 'Zero Ads',
      metric3Label: '100% Free & Transparent',
      metric4Value: 'GDPR Compliant',
      metric4Label: 'Art. 6(1) GDPR Privacy',
    },
    cta: {
      title1: 'Ready for Your Smart ',
      title2: 'Coffee Companion?',
      subtitle:
        'Download Beanie today on the Apple App Store. No login, no subscriptions, no ads. All your data stays 100% on your device.',
      badgeApple: 'Available on the',
      appStore: 'Apple App Store',
      compatibility: 'Compatible with iOS 17.0+ & watchOS 10.0+',
      check1: '100% Free',
      check2: 'No Ads & No Tracking',
      check3: 'No Sign-up Needed',
      check4: 'Local On-Device Storage',
    },
    footer: {
      tagline: '— Your smart coffee companion',
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      imprint: 'Imprint',
      support: 'Support',
      provider: 'VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Germany',
      appleNotice:
        'Apple, Apple Watch, watchOS, iPhone and iOS are trademarks of Apple Inc., registered in the U.S. and other countries.',
      rights: 'All rights reserved.',
    },
    imprint: {
      back: 'Back to Home',
      title: 'Imprint (Impressum)',
      tmg: 'Information according to § 5 TMG',
      register: 'Commercial Register',
      registerText: 'Commercial Register B, Local Court (Amtsgericht) Coesfeld, HRB 23796',
      representedBy: 'Represented by',
      director: 'Managing Director: Veselin Kolev',
      contact: 'Contact',
      editorial: 'Responsible for editorial content pursuant to § 18(2) MStV: Veselin Kolev, Petersfeldstraße 16, 46395 Bocholt, Germany.',
    },
    comingSoon: {
      badge: 'Release in Preparation',
      title: 'Coming Soon to the App Store!',
      desc:
        'Beanie is currently in final testing for iOS 17+ and watchOS 10+. We are brewing the last details to bring you the cleanest coffee & caffeine companion experience.',
      feature1Title: 'iOS 17+ & watchOS 10+',
      feature1Desc: 'Native companion app, lockscreen widgets, and watch complications.',
      feature2Title: '100% Privacy by Design',
      feature2Desc: 'No account, no tracking, all coffee data stays on your device.',
      feature3Title: 'Free & Transparent',
      feature3Desc: 'No subscriptions, no hidden in-app purchases.',
      notifyPrompt: 'Want to be notified when Beanie launches?',
      emailPlaceholder: 'Enter your email address...',
      notifyBtn: 'Notify Me',
      notifySuccess: 'Thank you! We will let you know as soon as Beanie goes live on the App Store.',
      closeBtn: 'Got it, can’t wait!',
    },
  },
  de: {
    nav: {
      features: 'Features',
      stats: 'Stats & Begleiter',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      imprint: 'Impressum',
      appStore: 'App Store',
      getApp: 'Im App Store laden',
    },
    hero: {
      pill: 'Neu für iOS 17 & watchOS 10 • 100% Privat & Offline',
      title1: 'Track Your Brew. ',
      title2: 'Meet Bean.',
      subtitle:
        'Dein smartes Kaffee- & Koffeintagebuch für iPhone und Apple Watch. Erfasse Tassen im Handumdrehen, behalte dein Tageslimit im Blick und sammle Streaks mit deinem Begleiter.',
      badgeDiary: 'Kaffee- & Koffein-Tagebuch',
      badgeBean: 'Maskottchen Bean & XP',
      badgeWatch: 'Apple Watch & Widgets',
      badgePrivacy: 'Keine Server & Kein Tracking',
      streakTitle: '1-Tage-Streak',
      streakSub: 'Streak Master 🔥',
      limitTitle: 'Tagessumme',
      limitSub: '175 / 400 mg',
      watchBadge: 'Apple Watch Begleiter & Widgets',
      downloadApp: 'Laden im App Store',
      downloadPrompt: 'Laden im',
      appStore: 'App Store',
      exploreBtn: 'Funktionen ansehen',
      disclaimer: 'Kostenlos • Für iPhone (iOS 17+) & Apple Watch (watchOS 10+) • Keine In-App-Käufe • Keine Accounts',
    },
    features: {
      badge: 'Fokus auf das Wesentliche',
      title1: 'Alles, was du für deinen ',
      title2: 'Kaffeefluss brauchst',
      subtitle:
        'Keine überladenen Diät-Apps, kein Abo-Zwang. Beanie kombiniert intuitives Tracking mit Freude, Ästhetik und Gamification.',
      card1: {
        badge: 'Tagebuch & Intake',
        title: 'Kaffee- & Koffeintagebuch',
        desc:
          'Erfasse Espresso, Lungo, Flat White, Americano oder Cold Brew mit wenigen Fingertipps. Wähle Portionen in ml oder oz, sieh geschätzte Koffeinwerte in mg und füge manuelle Orts-Labels (Home, Office, Cafe) hinzu.',
        h1: 'Espresso, Lungo, Flat White u.v.m.',
        h2: 'Portionen in ml & oz mit mg-Koffeinwerten',
        h3: 'Manuelle Orts-Tags: Home, Office, Cafe',
        h4: 'Tageslimit-Abgleich (z. B. 400 mg)',
      },
      card2: {
        badge: 'Gamification',
        title: 'Interaktiver Begleiter „Bean“',
        desc:
          'Dein persönliches Bohnen-Maskottchen Bean reagiert auf deine Konsumgewohnheiten mit dynamischen Launen und Animationen. Verdiene Erfahrungspunkte (XP), halte Tages-Streaks aufrecht und schalte Level & Badges frei.',
        h1: 'Animiertes Maskottchen mit Launen',
        h2: 'Erfahrungspunkte (XP) für jeden Brew (+50 XP)',
        h3: 'Tages-Streaks zur Motivation',
        h4: 'Freischaltbare Abzeichen & Level',
      },
      card3: {
        badge: 'iOS & watchOS',
        title: 'Apple Watch & WidgetKit',
        desc:
          'Bleibe stets im Bilde – direkt auf deinem Sperrbildschirm, Home-Screen oder am Handgelenk. Volle Unterstützung für iOS Lockscreen- und Homescreen-Widgets sowie native Apple Watch Komplikationen.',
        h1: 'Eigenständige Apple Watch Begleit-App',
        h2: 'Watch Face Komplikationen',
        h3: 'iOS Home- & Lockscreen-Widgets',
        h4: 'Nahtloser WatchConnectivity-Sync',
      },
      spotlight: {
        badge: 'Vielfalt im Handumdrehen',
        title: 'Für jeden Kaffeeliebhaber die passende Auswahl',
        desc:
          'Ob morgendlicher Espresso, samtiger Flat White oder erfrischender Cold Brew: Beanie berechnet die geschätzte Koffeinmenge transparent auf Basis erprobter Durchschnittswerte und gleicht sie mit deinem persönlichen Tagesziel ab.',
        item1Title: '☕ Beliebte Sorten',
        item1Desc: 'Espresso, Lungo, Cappuccino, Flat White, Cold Brew, Decaf u.v.m.',
        item2Title: '🏷️ Manuelle Orte',
        item2Desc: 'Einfache Tags für Home, Office oder Cafe – ohne Akku-fressendes GPS',
        item3Title: '🔔 Lokale Reminder',
        item3Desc: 'Morgendliche Erinnerung (Standard: 09:00 Uhr) – rein lokal ausgelöst',
        item4Title: '⚡ WatchConnectivity',
        item4Desc: 'Spiegelung in Echtzeit zwischen iPhone und Apple Watch',
      },
      privacyBox: {
        badge: 'Transparenz & Datenschutz',
        title: 'Was Beanie ganz bewusst ',
        titleHighlight: 'NICHT tut',
        desc:
          'Deine Konsumgewohnheiten gehen niemanden etwas an. Beanie wurde nach dem Prinzip Privacy by Design entwickelt.',
        p1Title: 'Keine Server & Kein Backend',
        p1Desc: 'Wir betreiben keine Serverinfrastruktur. Alle Daten verbleiben auf deinen Endgeräten.',
        p2Title: 'Keine Benutzerkonten',
        p2Desc: 'Kein Login, keine Registrierung, kein Cloud-Profil. Öffnen und direkt nutzen.',
        p3Title: 'Kein GPS-Tracking',
        p3Desc: 'Die Orts-Labels (Home, Office, Cafe) sind rein manuelle Kategorien ohne Geodaten.',
        p4Title: 'Keine Tracker & Werbe-SDKs',
        p4Desc: 'Kein Google Firebase, kein Meta SDK, kein Mixpanel und keine Werbenetzwerke.',
        p5Title: 'Keine Bezahlschranken / Abos',
        p5Desc: 'Die App ist aktuell komplett kostenlos ohne versteckte In-App-Käufe oder Abos.',
        p6Title: 'Keine medizinische Diagnostik',
        p6Desc: 'Rein informative Aufsummierung von Schätzwerten ohne medizinische Abbaukurven.',
      },
    },
    stats: {
      badge: 'Statistiken & Fortschritt',
      title1: 'Deine Kaffeereise. ',
      title2: 'Visualisiert.',
      subtitle:
        'Erkenne deine Konsummuster auf einen Blick. Beanie berechnet den Tagesverlauf verständlich und ohne unverständliche biochemische Kurven.',
      card1Title: 'Tageslimit im Blick',
      card1Value: '400 mg',
      card1Desc: 'Standardmäßiger Richtwert für gesunde Erwachsene. Die App summiert transparent jede Tasse auf.',
      card1Tag: 'Tages-Sollwert',
      card2Title: 'Tages-Streaks',
      card2Value: '7 Tage+',
      card2Desc: 'Halte deine Protokoll-Routine aufrecht. Kontinuität hält Maskottchen Bean glücklich!',
      card2Tag: 'Motivation',
      card3Title: 'XP & Level-System',
      card3Value: '850 XP',
      card3Desc: 'Sammle virtuelle Erfahrungspunkte (XP) bei jedem Log und schalte thematische Abzeichen frei.',
      card3Tag: 'Gamification',
      badgesShowcase: '🏆 Sammle Badges & Meilensteine',
      metric1Value: '100% Lokal',
      metric1Label: 'Keine Server / Kein Cloud-Sync',
      metric2Value: 'iOS & Watch',
      metric2Label: 'Widgets & WatchConnectivity',
      metric3Value: 'Keine Werbung',
      metric3Label: 'Vollständig kostenlos & transparent',
      metric4Value: 'DSGVO-Konform',
      metric4Label: 'Art. 6 Abs. 1 DSGVO Schutz',
    },
    cta: {
      title1: 'Bereit für deinen smarten ',
      title2: 'Kaffee-Begleiter?',
      subtitle:
        'Lade Beanie jetzt im Apple App Store. Kein Login, kein Abo, keine Werbung. Deine Daten bleiben zu 100% auf deinen Geräten.',
      badgeApple: 'Erhältlich im',
      appStore: 'Apple App Store',
      compatibility: 'Kompatibel mit iOS 17.0+ & watchOS 10.0+',
      check1: '100% Kostenlos',
      check2: 'Ohne Werbung & Tracking',
      check3: 'Ohne Registrierung',
      check4: 'Lokale Gerätespeicherung',
    },
    footer: {
      tagline: '— Dein smarter Kaffee-Begleiter',
      home: 'Startseite',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      imprint: 'Impressum',
      support: 'Support',
      provider: 'VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Deutschland',
      appleNotice:
        'Apple, Apple Watch, watchOS, iPhone und iOS sind Marken der Apple Inc., eingetragen in den USA und anderen Ländern.',
      rights: 'Alle Rechte vorbehalten.',
    },
    imprint: {
      back: 'Zurück zur Startseite',
      title: 'Impressum',
      tmg: 'Angaben gemäß § 5 TMG',
      register: 'Handelsregister',
      registerText: 'Handelsregister B des Amtsgerichts Coesfeld, HRB 23796',
      representedBy: 'Vertreten durch',
      director: 'Geschäftsführer: Veselin Kolev',
      contact: 'Kontakt',
      editorial: 'Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV: Veselin Kolev, Petersfeldstraße 16, 46395 Bocholt.',
    },
    comingSoon: {
      badge: 'Veröffentlichung in Vorbereitung',
      title: 'Bald im Apple App Store!',
      desc:
        'Beanie befindet sich aktuell im finalen Feinschliff für iOS 17+ und watchOS 10+. Wir polieren die letzten Details, um dir den besten smarten Kaffee- und Koffein-Begleiter zu bieten.',
      feature1Title: 'iOS 17+ & watchOS 10+',
      feature1Desc: 'Native Begleit-App, Lockscreen-Widgets und Watch Face Komplikationen.',
      feature2Title: '100% Datenschutz & Offline',
      feature2Desc: 'Kein Nutzerkonto, kein Tracking, alle Daten bleiben lokal auf deinem Gerät.',
      feature3Title: 'Kostenlos & Transparent',
      feature3Desc: 'Keine Abonnements, keine versteckten In-App-Käufe.',
      notifyPrompt: 'Möchtest du zum Launch benachrichtigt werden?',
      emailPlaceholder: 'Deine E-Mail-Adresse eingeben...',
      notifyBtn: 'Benachrichtigen',
      notifySuccess: 'Vielen Dank! Wir geben dir Bescheid, sobald Beanie im App Store verfügbar ist.',
      closeBtn: 'Verstanden, ich freue mich!',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  // Default to English as explicitly requested:
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('beanie_lang');
      return saved === 'de' ? 'de' : 'en';
    } catch {
      return 'en';
    }
  });

  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const openComingSoon = () => setIsComingSoonOpen(true);
  const closeComingSoon = () => setIsComingSoonOpen(false);

  useEffect(() => {
    try {
      localStorage.setItem('beanie_lang', lang);
      document.documentElement.lang = lang;
      if (document.title.includes('Beanie')) {
        document.title =
          lang === 'de'
            ? 'Beanie - Dein smarter Kaffee- & Koffein-Begleiter'
            : 'Beanie - Your Smart Coffee & Caffeine Tracker';
      }
    } catch {
      // storage unavailable
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        isComingSoonOpen,
        openComingSoon,
        closeComingSoon,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
