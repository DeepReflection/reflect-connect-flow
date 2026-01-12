// Arctic Frost Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-arctic-frost.jpg';

export const config: ThemeConfig = {
  id: 'arctic-frost',
  name: 'Gelo Ártico',
  description: 'Branco gelado com tons azuis',
  isLight: true,
  category: 'light',
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
