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

// Map of theme IDs to their CSS paths for dynamic import from assets folder
export const THEME_CSS_MAP: Record<string, () => Promise<unknown>> = {
  'vintage-sepia': () => import('@/assets/themes/vintage-sepia.css'),
  'midnight-gold': () => import('@/assets/themes/midnight-gold.css'),
  'military-olive': () => import('@/assets/themes/military-olive.css'),
  'ocean-deep': () => import('@/assets/themes/ocean-deep.css'),
  'crimson-war': () => import('@/assets/themes/crimson-war.css'),
  'sunset-bronze': () => import('@/assets/themes/sunset-bronze.css'),
  'royal-purple': () => import('@/assets/themes/royal-purple.css'),
  'forest-emerald': () => import('@/assets/themes/forest-emerald.css'),
  'arctic-frost': () => import('@/assets/themes/arctic-frost.css'),
  'desert-sand': () => import('@/assets/themes/desert-sand.css'),
  'cloud-silver': () => import('@/assets/themes/cloud-silver.css'),
  'rose-garden': () => import('@/assets/themes/rose-garden.css'),
  'mint-fresh': () => import('@/assets/themes/mint-fresh.css'),
  'lavender-dream': () => import('@/assets/themes/lavender-dream.css'),
  'peach-blossom': () => import('@/assets/themes/peach-blossom.css'),
  'sky-blue': () => import('@/assets/themes/sky-blue.css'),
  'cream-vanilla': () => import('@/assets/themes/cream-vanilla.css'),
  'sage-morning': () => import('@/assets/themes/sage-morning.css'),
  'coral-reef': () => import('@/assets/themes/coral-reef.css'),
  'golden-hour': () => import('@/assets/themes/golden-hour.css'),
};
