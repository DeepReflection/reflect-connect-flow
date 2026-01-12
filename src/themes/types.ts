import { ReactNode, ComponentType } from 'react';

export interface ThemeSectionProps {
  reflections?: Reflection[];
}

export interface Reflection {
  title: string;
  imageUrl: string;
}

export interface AgendaEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
}

export interface Product {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}

export interface HeroLayoutProps {
  name: string;
  description: string;
  avatarUrl: string;
  bannerImage: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  isLight?: boolean;
  category: 'dark' | 'light' | 'business' | 'layout';
}

export interface ThemeComponents {
  HeroLayout: ComponentType<HeroLayoutProps>;
  AgendaSection?: ComponentType;
  ProductsSection?: ComponentType;
  ReflectionsSection?: ComponentType<{ reflections: Reflection[] }>;
}

export interface ThemeAssets {
  bannerImage: string;
}

export interface Theme {
  config: ThemeConfig;
  components: ThemeComponents;
  assets: ThemeAssets;
}

export type ThemeName = string;

// All theme IDs
export const ALL_THEME_IDS = [
  // Dark themes
  'vintage-sepia',
  'midnight-gold',
  'military-olive',
  'ocean-deep',
  'crimson-war',
  'sunset-bronze',
  'royal-purple',
  'forest-emerald',
  // Light themes
  'arctic-frost',
  'desert-sand',
  'cloud-silver',
  'rose-garden',
  'mint-fresh',
  'lavender-dream',
  'peach-blossom',
  'sky-blue',
  'cream-vanilla',
  'sage-morning',
  'coral-reef',
  'golden-hour',
  // Business themes
  'corporate-navy',
  'executive-charcoal',
  'startup-teal',
  'finance-green',
  'consulting-slate',
  'tech-indigo',
  'luxury-black',
  'modern-graphite',
  'innovation-blue',
  'prestige-burgundy',
  // Layout themes
  'neon-gamer',
  'minimal-zen',
  'magazine-editorial',
  'retro-wave',
  'nature-organic',
  'brutalist-raw',
  'glassmorphism',
  'split-screen',
  'gradient-flow',
  'card-stack',
] as const;

// Map of theme IDs to their CSS paths for dynamic import from assets folder
export const THEME_CSS_MAP: Record<string, () => Promise<unknown>> = {
  // Dark themes
  'vintage-sepia': () => import('@/assets/themes/vintage-sepia/css/styles.css'),
  'midnight-gold': () => import('@/assets/themes/midnight-gold/css/styles.css'),
  'military-olive': () => import('@/assets/themes/military-olive/css/styles.css'),
  'ocean-deep': () => import('@/assets/themes/ocean-deep/css/styles.css'),
  'crimson-war': () => import('@/assets/themes/crimson-war/css/styles.css'),
  'sunset-bronze': () => import('@/assets/themes/sunset-bronze/css/styles.css'),
  'royal-purple': () => import('@/assets/themes/royal-purple/css/styles.css'),
  'forest-emerald': () => import('@/assets/themes/forest-emerald/css/styles.css'),
  // Light themes
  'arctic-frost': () => import('@/assets/themes/arctic-frost/css/styles.css'),
  'desert-sand': () => import('@/assets/themes/desert-sand/css/styles.css'),
  'cloud-silver': () => import('@/assets/themes/cloud-silver/css/styles.css'),
  'rose-garden': () => import('@/assets/themes/rose-garden/css/styles.css'),
  'mint-fresh': () => import('@/assets/themes/mint-fresh/css/styles.css'),
  'lavender-dream': () => import('@/assets/themes/lavender-dream/css/styles.css'),
  'peach-blossom': () => import('@/assets/themes/peach-blossom/css/styles.css'),
  'sky-blue': () => import('@/assets/themes/sky-blue/css/styles.css'),
  'cream-vanilla': () => import('@/assets/themes/cream-vanilla/css/styles.css'),
  'sage-morning': () => import('@/assets/themes/sage-morning/css/styles.css'),
  'coral-reef': () => import('@/assets/themes/coral-reef/css/styles.css'),
  'golden-hour': () => import('@/assets/themes/golden-hour/css/styles.css'),
  // Business themes
  'corporate-navy': () => import('@/assets/themes/corporate-navy/css/styles.css'),
  'executive-charcoal': () => import('@/assets/themes/executive-charcoal/css/styles.css'),
  'startup-teal': () => import('@/assets/themes/startup-teal/css/styles.css'),
  'finance-green': () => import('@/assets/themes/finance-green/css/styles.css'),
  'consulting-slate': () => import('@/assets/themes/consulting-slate/css/styles.css'),
  'tech-indigo': () => import('@/assets/themes/tech-indigo/css/styles.css'),
  'luxury-black': () => import('@/assets/themes/luxury-black/css/styles.css'),
  'modern-graphite': () => import('@/assets/themes/modern-graphite/css/styles.css'),
  'innovation-blue': () => import('@/assets/themes/innovation-blue/css/styles.css'),
  'prestige-burgundy': () => import('@/assets/themes/prestige-burgundy/css/styles.css'),
  // Layout themes
  'neon-gamer': () => import('@/assets/themes/neon-gamer/css/styles.css'),
  'minimal-zen': () => import('@/assets/themes/minimal-zen/css/styles.css'),
  'magazine-editorial': () => import('@/assets/themes/magazine-editorial/css/styles.css'),
  'retro-wave': () => import('@/assets/themes/retro-wave/css/styles.css'),
  'nature-organic': () => import('@/assets/themes/nature-organic/css/styles.css'),
  'brutalist-raw': () => import('@/assets/themes/brutalist-raw/css/styles.css'),
  'glassmorphism': () => import('@/assets/themes/glassmorphism/css/styles.css'),
  'split-screen': () => import('@/assets/themes/split-screen/css/styles.css'),
  'gradient-flow': () => import('@/assets/themes/gradient-flow/css/styles.css'),
  'card-stack': () => import('@/assets/themes/card-stack/css/styles.css'),
};

// Map of theme IDs to their banner images for dynamic import
export const THEME_BANNER_MAP: Record<string, () => Promise<{ default: string }>> = {
  // Dark themes
  'vintage-sepia': () => import('@/assets/themes/vintage-sepia/images/banner.jpg'),
  'midnight-gold': () => import('@/assets/themes/midnight-gold/images/banner.jpg'),
  'military-olive': () => import('@/assets/themes/military-olive/images/banner.jpg'),
  'ocean-deep': () => import('@/assets/themes/ocean-deep/images/banner.jpg'),
  'crimson-war': () => import('@/assets/themes/crimson-war/images/banner.jpg'),
  'sunset-bronze': () => import('@/assets/themes/sunset-bronze/images/banner.jpg'),
  'royal-purple': () => import('@/assets/themes/royal-purple/images/banner.jpg'),
  'forest-emerald': () => import('@/assets/themes/forest-emerald/images/banner.jpg'),
  // Light themes
  'arctic-frost': () => import('@/assets/themes/arctic-frost/images/banner.jpg'),
  'desert-sand': () => import('@/assets/themes/desert-sand/images/banner.jpg'),
  'cloud-silver': () => import('@/assets/themes/cloud-silver/images/banner.jpg'),
  'rose-garden': () => import('@/assets/themes/rose-garden/images/banner.jpg'),
  'mint-fresh': () => import('@/assets/themes/mint-fresh/images/banner.jpg'),
  'lavender-dream': () => import('@/assets/themes/lavender-dream/images/banner.jpg'),
  'peach-blossom': () => import('@/assets/themes/peach-blossom/images/banner.jpg'),
  'sky-blue': () => import('@/assets/themes/sky-blue/images/banner.jpg'),
  'cream-vanilla': () => import('@/assets/themes/cream-vanilla/images/banner.jpg'),
  'sage-morning': () => import('@/assets/themes/sage-morning/images/banner.jpg'),
  'coral-reef': () => import('@/assets/themes/coral-reef/images/banner.jpg'),
  'golden-hour': () => import('@/assets/themes/golden-hour/images/banner.jpg'),
  // Business themes
  'corporate-navy': () => import('@/assets/themes/corporate-navy/images/banner.jpg'),
  'executive-charcoal': () => import('@/assets/themes/executive-charcoal/images/banner.jpg'),
  'startup-teal': () => import('@/assets/themes/startup-teal/images/banner.jpg'),
  'finance-green': () => import('@/assets/themes/finance-green/images/banner.jpg'),
  'consulting-slate': () => import('@/assets/themes/consulting-slate/images/banner.jpg'),
  'tech-indigo': () => import('@/assets/themes/tech-indigo/images/banner.jpg'),
  'luxury-black': () => import('@/assets/themes/luxury-black/images/banner.jpg'),
  'modern-graphite': () => import('@/assets/themes/modern-graphite/images/banner.jpg'),
  'innovation-blue': () => import('@/assets/themes/innovation-blue/images/banner.jpg'),
  'prestige-burgundy': () => import('@/assets/themes/prestige-burgundy/images/banner.jpg'),
  // Layout themes
  'neon-gamer': () => import('@/assets/themes/neon-gamer/images/banner.jpg'),
  'minimal-zen': () => import('@/assets/themes/minimal-zen/images/banner.jpg'),
  'magazine-editorial': () => import('@/assets/themes/magazine-editorial/images/banner.jpg'),
  'retro-wave': () => import('@/assets/themes/retro-wave/images/banner.jpg'),
  'nature-organic': () => import('@/assets/themes/nature-organic/images/banner.jpg'),
  'brutalist-raw': () => import('@/assets/themes/brutalist-raw/images/banner.jpg'),
  'glassmorphism': () => import('@/assets/themes/glassmorphism/images/banner.jpg'),
  'split-screen': () => import('@/assets/themes/split-screen/images/banner.jpg'),
  'gradient-flow': () => import('@/assets/themes/gradient-flow/images/banner.jpg'),
  'card-stack': () => import('@/assets/themes/card-stack/images/banner.jpg'),
};
