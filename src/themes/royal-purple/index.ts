// Royal Purple Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-royal-purple.jpg';

export const config: ThemeConfig = {
  id: 'royal-purple',
  name: 'Púrpura Real',
  description: 'Luxo e sofisticação imperial',
  isLight: false,
  category: 'dark',
};

export const styles = {
  css: `
html.theme-royal-purple {
  --background: 270 25% 8%;
  --foreground: 280 20% 92%;
  --card: 270 22% 12%;
  --card-foreground: 280 20% 92%;
  --popover: 270 22% 10%;
  --popover-foreground: 280 20% 92%;
  --primary: 280 70% 55%;
  --primary-foreground: 280 20% 98%;
  --secondary: 270 15% 18%;
  --secondary-foreground: 280 20% 88%;
  --muted: 270 12% 20%;
  --muted-foreground: 280 12% 55%;
  --accent: 300 60% 50%;
  --accent-foreground: 280 20% 98%;
  --border: 280 20% 22%;
  --input: 270 15% 18%;
  --ring: 280 70% 55%;
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
