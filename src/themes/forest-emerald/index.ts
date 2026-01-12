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

export const styles = {
  css: `
html.theme-forest-emerald {
  --background: 150 20% 7%;
  --foreground: 140 20% 92%;
  --card: 150 18% 11%;
  --card-foreground: 140 20% 92%;
  --popover: 150 18% 9%;
  --popover-foreground: 140 20% 92%;
  --primary: 155 70% 40%;
  --primary-foreground: 150 20% 98%;
  --secondary: 150 12% 16%;
  --secondary-foreground: 140 20% 88%;
  --muted: 150 10% 18%;
  --muted-foreground: 140 12% 55%;
  --accent: 140 60% 35%;
  --accent-foreground: 150 20% 98%;
  --border: 155 18% 20%;
  --input: 150 12% 16%;
  --ring: 155 70% 40%;
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
