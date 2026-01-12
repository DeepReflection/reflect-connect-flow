// Crimson War Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-crimson-war.jpg';

export const config: ThemeConfig = {
  id: 'crimson-war',
  name: 'Carmesim de Guerra',
  description: 'Vermelho dramático e intenso',
  isLight: false,
  category: 'dark',
};

export const assets = {
  bannerImage,
};

export const components = {
  HeroLayout: DefaultHeroLayout,
  AgendaSection: DefaultAgendaSection,
  ProductsSection: DefaultProductsSection,
  ReflectionsSection: DefaultReflectionsSection,
};

const theme: Theme = {
  config,
  components,
  assets,
};

export default theme;
