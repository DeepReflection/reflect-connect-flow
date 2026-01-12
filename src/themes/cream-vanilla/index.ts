// Cream Vanilla Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-cream-vanilla.jpg';

export const config: ThemeConfig = {
  id: 'cream-vanilla',
  name: 'Creme Baunilha',
  description: 'Tons creme suaves e elegantes',
  isLight: true,
  category: 'light',
};

export const assets = { bannerImage };
export const components = {
  HeroLayout: DefaultHeroLayout,
  AgendaSection: DefaultAgendaSection,
  ProductsSection: DefaultProductsSection,
  ReflectionsSection: DefaultReflectionsSection,
};

const theme: Theme = { config, components, assets };
export default theme;
