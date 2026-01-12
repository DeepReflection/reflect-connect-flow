// Military Olive Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-military-olive.jpg';

export const config: ThemeConfig = {
  id: 'military-olive',
  name: 'Militar Oliva',
  description: 'Tons táticos e robustos',
  isLight: false,
  category: 'dark',
};

export const styles = {
  css: `
html.theme-military-olive {
  --background: 80 15% 8%;
  --foreground: 60 20% 90%;
  --card: 80 12% 12%;
  --card-foreground: 60 20% 90%;
  --popover: 80 12% 10%;
  --popover-foreground: 60 20% 90%;
  --primary: 80 50% 40%;
  --primary-foreground: 60 20% 95%;
  --secondary: 80 10% 18%;
  --secondary-foreground: 60 20% 85%;
  --muted: 80 8% 20%;
  --muted-foreground: 60 10% 55%;
  --accent: 45 60% 45%;
  --accent-foreground: 80 15% 8%;
  --border: 80 15% 22%;
  --input: 80 10% 18%;
  --ring: 80 50% 40%;
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
