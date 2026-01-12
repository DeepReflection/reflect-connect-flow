// Forest Emerald Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-forest-emerald.jpg';

export const config: ThemeConfig = {
  id: 'forest-emerald',
  name: 'Floresta Esmeralda',
  description: 'Verde profundo e natural',
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
