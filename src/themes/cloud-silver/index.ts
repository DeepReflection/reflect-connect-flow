// Cloud Silver Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-cloud-silver.jpg';

export const config: ThemeConfig = {
  id: 'cloud-silver',
  name: 'Nuvem Prateada',
  description: 'Cinza elegante e moderno',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-cloud-silver {
  --background: 220 15% 95%;
  --foreground: 220 20% 15%;
  --card: 220 12% 100%;
  --card-foreground: 220 20% 15%;
  --popover: 220 12% 98%;
  --popover-foreground: 220 20% 15%;
  --primary: 220 25% 45%;
  --primary-foreground: 220 15% 98%;
  --secondary: 220 10% 90%;
  --secondary-foreground: 220 20% 20%;
  --muted: 220 8% 88%;
  --muted-foreground: 220 12% 45%;
  --accent: 215 30% 50%;
  --accent-foreground: 220 15% 98%;
  --border: 220 15% 85%;
  --input: 220 10% 90%;
  --ring: 220 25% 45%;
}
  `,
};

export const assets = { bannerImage };
export const components = {
  HeroLayout: DefaultHeroLayout,
  AgendaSection: DefaultAgendaSection,
  ProductsSection: DefaultProductsSection,
  ReflectionsSection: DefaultReflectionsSection,
};

const theme: Theme = { config, components, styles, assets };
export default theme;
