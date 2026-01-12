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

// Map of theme IDs to their CSS module paths for dynamic import
export const THEME_CSS_MAP: Record<string, () => Promise<unknown>> = {
  'vintage-sepia': () => import('./vintage-sepia/theme.css'),
  'midnight-gold': () => import('./midnight-gold/theme.css'),
  'military-olive': () => import('./military-olive/theme.css'),
  'ocean-deep': () => import('./ocean-deep/theme.css'),
  'crimson-war': () => import('./crimson-war/theme.css'),
  'sunset-bronze': () => import('./sunset-bronze/theme.css'),
  'royal-purple': () => import('./royal-purple/theme.css'),
  'forest-emerald': () => import('./forest-emerald/theme.css'),
  'arctic-frost': () => import('./arctic-frost/theme.css'),
  'desert-sand': () => import('./desert-sand/theme.css'),
  'cloud-silver': () => import('./cloud-silver/theme.css'),
  'rose-garden': () => import('./rose-garden/theme.css'),
  'mint-fresh': () => import('./mint-fresh/theme.css'),
  'lavender-dream': () => import('./lavender-dream/theme.css'),
  'peach-blossom': () => import('./peach-blossom/theme.css'),
  'sky-blue': () => import('./sky-blue/theme.css'),
  'cream-vanilla': () => import('./cream-vanilla/theme.css'),
  'sage-morning': () => import('./sage-morning/theme.css'),
  'coral-reef': () => import('./coral-reef/theme.css'),
  'golden-hour': () => import('./golden-hour/theme.css'),
};
