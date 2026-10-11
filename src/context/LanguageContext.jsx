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
      pill: 'iOS 17 & watchOS 10 • 100% On-Device',
      title1: 'Track Your Brew. ',
      title2: 'Meet Bean.',
      subtitle:
        'Your smart coffee & caffeine tracker for iPhone and Apple Watch. Log brews in seconds, hit your sweet spot, and level up with Bean.',
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
      disclaimer: 'Free • iOS 17+ & watchOS 10+ • No In-App Purchases • No Accounts',
    },
    features: {
      badge: 'Focus on What Matters',
      title1: 'Everything You Need for Your ',
      title2: 'Coffee Flow',
      subtitle:
        'No bloated diet apps, no subscriptions. Pure coffee joy, effortless logging, and clean gamification.',
      card1: {
        badge: 'Diary & Intake',
        title: 'Coffee & Caffeine Diary',
        desc:
          'Log Espresso, Flat White, Cold Brew and more in seconds. Portion sizes in ml or oz with estimated caffeine in mg.',
        h1: 'Espresso, Lungo, Flat White & more',
        h2: 'Portion sizes in ml & oz with mg caffeine',
        h3: 'Manual location tags: Home, Office, Cafe',
        h4: 'Daily target limit comparison (e.g. 400 mg)',
      },
      card2: {
        badge: 'Gamification',
        title: "Interactive Companion 'Bean'",
        desc:
          'Mascot Bean joins your routine with dynamic moods. Earn XP for every logged cup, keep streaks alive, and unlock badges.',
        h1: 'Animated mascot with dynamic moods',
        h2: 'XP for every logged brew (+50 XP)',
        h3: 'Daily streaks to keep routines going',
        h4: 'Milestone levels & collectible badges',
      },
      card3: {
        badge: 'iOS & watchOS',
        title: 'Apple Watch & WidgetKit',
        desc:
          'Track caffeine right from your Lock Screen, Home Screen, or wrist with widgets and Apple Watch complications.',
        h1: 'Native Apple Watch companion app',
        h2: 'Watch Face complications',
        h3: 'iOS Home & Lock Screen widgets',
        h4: 'Instant WatchConnectivity syncing',
      },
      spotlight: {
        badge: 'Drink Variety',
        title: 'A Curated Catalogue for Every Coffee Lover',
        desc:
          'From double espresso to iced cold brew: Beanie calculates caffeine transparently and matches it to your daily goal.',
        item1Title: '☕ Popular Varieties',
        item1Desc: 'Espresso, Cappuccino, Flat White, Cold Brew & more',
        item2Title: '🏷️ Manual Tags',
        item2Desc: 'Quick Home, Office, or Cafe tags without GPS',
        item3Title: '🔔 Local Reminders',
        item3Desc: 'Gentle on-device reminder to kick off your day',
        item4Title: '⚡ WatchConnectivity',
        item4Desc: 'Instant two-way sync between iPhone and Watch',
      },
      privacyBox: {
        badge: 'Transparency & Privacy',
        title: 'What Beanie Deliberately ',
        titleHighlight: 'DOES NOT Do',
        desc:
          'Your coffee habits belong strictly to you. Built with Privacy by Design from day one.',
        p1Title: 'No Servers & No Backend',
        p1Desc: 'No server backend. All data stays securely on your devices.',
        p2Title: 'No User Accounts',
        p2Desc: 'No signup, no login. Open Beanie and start tracking.',
        p3Title: 'No GPS Tracking',
        p3Desc: 'Locations are simple manual tags—never GPS coordinates.',
        p4Title: 'No Trackers or Ad SDKs',
        p4Desc: 'Zero third-party analytics, ads, or tracking SDKs.',
        p5Title: 'No Paywalls or Subscriptions',
        p5Desc: 'Completely free. No paywalls, no subscriptions.',
        p6Title: 'No Medical Claims',
        p6Desc: 'Informational caffeine sums without clinical diagnostic claims.',
      },
    },
    stats: {
      badge: 'Stats & Progress',
      title1: 'Your Coffee Journey. ',
      title2: 'Visualized.',
      subtitle:
        'Understand your coffee habits with clear daily sums and streak milestones—no confusing jargon.',
      card1Title: 'Daily Limit in Check',
      card1Value: '400 mg',
      card1Desc: 'Standard daily guideline for healthy adults. Beanie keeps the tally.',
      card1Tag: 'Daily Target',
      card2Title: 'Daily Streaks',
      card2Value: '7 Days+',
      card2Desc: 'Build consistency. A steady streak keeps mascot Bean happy!',
      card2Tag: 'Consistency',
      card3Title: 'XP & Progression',
      card3Value: '850 XP',
      card3Desc: 'Collect experience points with every coffee and level up together.',
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
        'Download Beanie on the App Store. Free, private, and 100% on your device.',
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
        'Beanie is currently in final testing for iOS 17+ and watchOS 10+. Get ready for the cleanest coffee companion.',
      feature1Title: 'iOS 17+ & watchOS 10+',
      feature1Desc: 'Companion app, lock screen widgets & watch complications.',
      feature2Title: '100% Privacy by Design',
      feature2Desc: 'No account, zero tracking. All data stays on your device.',
      feature3Title: 'Free & Transparent',
      feature3Desc: '100% free with no subscriptions or in-app purchases.',
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
      pill: 'iOS 17 & watchOS 10 • 100% Lokal & Privat',
      title1: 'Track Your Brew. ',
      title2: 'Meet Bean.',
      subtitle:
        'Dein smartes Kaffee- & Koffeintagebuch für iPhone und Apple Watch. Sekundenschnell erfassen, Tageslimit treffen und mit Bean motiviert bleiben.',
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
      disclaimer: 'Kostenlos • iOS 17+ & watchOS 10+ • Keine In-App-Käufe • Ohne Account',
    },
    features: {
      badge: 'Fokus auf das Wesentliche',
      title1: 'Alles, was du für deinen ',
      title2: 'Kaffeefluss brauchst',
      subtitle:
        'Kein überladener Diät-Tracker, keine Abos. Einfaches Erfassen, Freude und smarte Gamification.',
      card1: {
        badge: 'Tagebuch & Intake',
        title: 'Kaffee- & Koffeintagebuch',
        desc:
          'Erfasse Espresso, Flat White, Cold Brew u.v.m. in Sekunden. Portionsgrößen in ml oder oz mit Koffeinwerten in mg.',
        h1: 'Espresso, Lungo, Flat White u.v.m.',
        h2: 'Portionen in ml & oz mit mg-Koffeinwerten',
        h3: 'Manuelle Orts-Tags: Home, Office, Cafe',
        h4: 'Tageslimit-Abgleich (z. B. 400 mg)',
      },
      card2: {
        badge: 'Gamification',
        title: 'Interaktiver Begleiter „Bean“',
        desc:
          'Maskottchen Bean begleitet deinen Tag mit Launen. Sammle XP pro Tasse, halte Streaks aufrecht und sichere dir Badges.',
        h1: 'Animiertes Maskottchen mit Launen',
        h2: 'Erfahrungspunkte (XP) für jeden Brew (+50 XP)',
        h3: 'Tages-Streaks zur Motivation',
        h4: 'Freischaltbare Abzeichen & Level',
      },
      card3: {
        badge: 'iOS & watchOS',
        title: 'Apple Watch & WidgetKit',
        desc:
          'Behalte dein Koffein direkt auf dem Sperrbildschirm, Home-Screen oder am Handgelenk per Widget und Watch-Komplikation im Blick.',
        h1: 'Eigenständige Apple Watch Begleit-App',
        h2: 'Watch Face Komplikationen',
        h3: 'iOS Home- & Lockscreen-Widgets',
        h4: 'Nahtloser WatchConnectivity-Sync',
      },
      spotlight: {
        badge: 'Vielfalt im Handumdrehen',
        title: 'Für jeden Kaffeeliebhaber die passende Auswahl',
        desc:
          'Vom doppelten Espresso bis zum Cold Brew: Beanie berechnet Koffein transparent und gleicht es mit deinem Tageslimit ab.',
        item1Title: '☕ Beliebte Sorten',
        item1Desc: 'Espresso, Cappuccino, Flat White, Cold Brew u.v.m.',
        item2Title: '🏷️ Manuelle Orte',
        item2Desc: 'Schnelle Home-, Office- oder Cafe-Tags ohne GPS',
        item3Title: '🔔 Lokale Reminder',
        item3Desc: 'Sanfte lokale Erinnerung für einen guten Start',
        item4Title: '⚡ WatchConnectivity',
        item4Desc: 'Nahtloser Sync zwischen iPhone und Apple Watch',
      },
      privacyBox: {
        badge: 'Transparenz & Datenschutz',
        title: 'Was Beanie ganz bewusst ',
        titleHighlight: 'NICHT tut',
        desc:
          'Deine Gewohnheiten gehören nur dir. Von Tag eins nach dem Privacy-by-Design-Prinzip gebaut.',
        p1Title: 'Keine Server & Kein Backend',
        p1Desc: 'Keine Server. Alle Daten bleiben sicher auf deinen Geräten.',
        p2Title: 'Keine Benutzerkonten',
        p2Desc: 'Keine Registrierung, kein Login. Öffnen und sofort starten.',
        p3Title: 'Kein GPS-Tracking',
        p3Desc: 'Orts-Labels sind rein manuell – niemals GPS-Koordinaten.',
        p4Title: 'Keine Tracker & Werbe-SDKs',
        p4Desc: 'Keine Werbenetzwerke, Tracker oder Analyse-SDKs.',
        p5Title: 'Keine Bezahlschranken / Abos',
        p5Desc: 'Vollständig kostenlos. Keine Abofallen oder Paywalls.',
        p6Title: 'Keine medizinische Diagnostik',
        p6Desc: 'Praktische Schätzwerte ohne medizinische Diagnose-Ansprüche.',
      },
    },
    stats: {
      badge: 'Statistiken & Fortschritt',
      title1: 'Deine Kaffeereise. ',
      title2: 'Visualisiert.',
      subtitle:
        'Verstehe deine Routinen mit klaren Tagessummen und Streak-Meilensteinen – ganz ohne Fachchinesisch.',
      card1Title: 'Tageslimit im Blick',
      card1Value: '400 mg',
      card1Desc: 'Empfohlener Richtwert für Erwachsene. Beanie zählt jede Tasse mit.',
      card1Tag: 'Tages-Sollwert',
      card2Title: 'Tages-Streaks',
      card2Value: '7 Tage+',
      card2Desc: 'Halte deine Routine aktiv. Beständige Streaks machen Bean glücklich!',
      card2Tag: 'Motivation',
      card3Title: 'XP & Level-System',
      card3Value: '850 XP',
      card3Desc: 'Sammle XP mit jedem Kaffee und steige gemeinsam im Level auf.',
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
        'Lade Beanie im App Store. Kostenlos, privat und 100% auf deinem Gerät.',
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
        'Beanie befindet sich im finalen Feinschliff für iOS 17+ und watchOS 10+. Freu dich auf deinen smarten Kaffeebegleiter.',
      feature1Title: 'iOS 17+ & watchOS 10+',
      feature1Desc: 'Begleit-App, Sperrbildschirm-Widgets & Watch-Komplikationen.',
      feature2Title: '100% Datenschutz & Offline',
      feature2Desc: 'Kein Account, null Tracking. Alle Daten bleiben lokal.',
      feature3Title: 'Kostenlos & Transparent',
      feature3Desc: '100% kostenlos ohne Abos oder In-App-Käufe.',
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
