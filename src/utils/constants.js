/**
 * Application Constants
 * Central location for all configuration values
 */

// App Information
export const APP_NAME = 'VAMI';
export const APP_DESCRIPTION = 'AI-Powered Push-up Training';
export const APP_VERSION = '1.0.0';

// URLs
export const APP_STORE_URL = 'https://apps.apple.com/us/app/vami-push-ups/id6758764261';
export const WEBSITE_URL = 'https://vami.app';
export const SUPPORT_EMAIL = 'support@vami.app';

// Social Media (add when available)
export const SOCIAL_LINKS = {
  twitter: '@vami_app',
  instagram: '',
  facebook: '',
};

// App Statistics
export const STATS = {
  users: '5,000+',
  rating: 4.8,
  maxRating: 5,
  reviewCount: '5000',
};

// Features
export const FEATURES = [
  {
    title: 'AI Form Correction',
    description: 'Real-time feedback on your form. Perfect every rep.',
    icon: 'Brain',
  },
  {
    title: 'Auto Counting',
    description: 'Focus on execution. VAMI counts automatically.',
    icon: 'Hash',
  },
  {
    title: 'Track Progress',
    description: 'See your improvements with detailed analytics.',
    icon: 'BarChart2',
  },
];

// App Requirements
export const REQUIREMENTS = {
  platform: 'iOS',
  minVersion: '17.0',
  price: 'Free',
  ads: false,
  offlineAI: true,
};

// Navigation
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Imprint', href: '/imprint' },
];

// Meta Tags
export const META = {
  title: 'UNREP - Unlock Apps with Reps',
  description: 'VAMI - AI-Powered Push-up Training. Join 5,000+ users. 4.8★ rating. Perfect your form with real-time AI feedback. Free on App Store.',
  keywords: 'push-up app, fitness tracker, AI workout, form analysis, iPhone fitness app, push up counter, workout tracker, fitness AI',
  author: 'VAMI',
  themeColor: '#0F172A',
  ogImage: `${WEBSITE_URL}/og-image.png`,
};

// Animation Durations (ms)
export const ANIMATION = {
  fast: 200,
  normal: 400,
  slow: 600,
  verySlow: 800,
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Z-Index Layers
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  navbar: 50,
  modal: 100,
  tooltip: 200,
};
