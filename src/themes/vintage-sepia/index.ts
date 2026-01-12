// Vintage Sepia Theme - Default classic WWII documentary theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-vintage-sepia.jpg';

export const config: ThemeConfig = {
  id: 'vintage-sepia',
  name: 'Vintage Sépia',
  description: 'Tom clássico de fotografias antigas',
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
