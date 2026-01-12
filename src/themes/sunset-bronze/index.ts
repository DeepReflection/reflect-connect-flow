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

export const styles = {
  css: `
html.theme-sunset-bronze {
  --background: 15 20% 8%;
  --foreground: 30 30% 92%;
  --card: 15 18% 12%;
  --card-foreground: 30 30% 92%;
  --popover: 15 18% 10%;
  --popover-foreground: 30 30% 92%;
  --primary: 25 85% 55%;
  --primary-foreground: 15 20% 8%;
  --secondary: 15 15% 18%;
  --secondary-foreground: 30 30% 88%;
  --muted: 15 12% 20%;
  --muted-foreground: 30 15% 55%;
  --accent: 35 80% 50%;
  --accent-foreground: 15 20% 8%;
  --border: 25 25% 22%;
  --input: 15 15% 18%;
  --ring: 25 85% 55%;
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
