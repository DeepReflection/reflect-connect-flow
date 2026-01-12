// Sunset Bronze Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-sunset-bronze.jpg';

export const config: ThemeConfig = {
  id: 'sunset-bronze',
  name: 'Pôr do Sol Bronze',
  description: 'Cores quentes do entardecer',
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
