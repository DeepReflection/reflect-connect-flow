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

export const styles = {
  css: `
html.theme-crimson-war {
  --background: 0 15% 7%;
  --foreground: 0 10% 92%;
  --card: 0 12% 11%;
  --card-foreground: 0 10% 92%;
  --popover: 0 12% 9%;
  --popover-foreground: 0 10% 92%;
  --primary: 0 75% 50%;
  --primary-foreground: 0 10% 98%;
  --secondary: 0 10% 16%;
  --secondary-foreground: 0 10% 88%;
  --muted: 0 8% 18%;
  --muted-foreground: 0 8% 55%;
  --accent: 15 70% 45%;
  --accent-foreground: 0 10% 98%;
  --border: 0 20% 20%;
  --input: 0 10% 16%;
  --ring: 0 75% 50%;
}
  `,
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
  styles,
  assets,
};

export default theme;
