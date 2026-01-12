// Midnight Gold Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-midnight-gold.jpg';

export const config: ThemeConfig = {
  id: 'midnight-gold',
  name: 'Meia-Noite Dourado',
  description: 'Elegância noturna com acentos dourados',
  isLight: false,
  category: 'dark',
};

export const styles = {
  css: `
html.theme-midnight-gold {
  --background: 240 20% 6%;
  --foreground: 45 30% 95%;
  --card: 240 18% 10%;
  --card-foreground: 45 30% 95%;
  --popover: 240 18% 8%;
  --popover-foreground: 45 30% 95%;
  --primary: 45 90% 55%;
  --primary-foreground: 240 20% 6%;
  --secondary: 240 15% 15%;
  --secondary-foreground: 45 30% 90%;
  --muted: 240 12% 18%;
  --muted-foreground: 45 15% 55%;
  --accent: 45 85% 50%;
  --accent-foreground: 240 20% 6%;
  --border: 45 25% 20%;
  --input: 240 15% 15%;
  --ring: 45 90% 55%;
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
