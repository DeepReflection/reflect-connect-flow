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

export interface ThemeStyles {
  css: string;
}

export interface ThemeAssets {
  bannerImage: string;
}

export interface Theme {
  config: ThemeConfig;
  components: ThemeComponents;
  styles: ThemeStyles;
  assets: ThemeAssets;
}

export type ThemeName = string;
