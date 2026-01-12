// Mint Fresh Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-mint-fresh.jpg';

export const config: ThemeConfig = {
  id: 'mint-fresh',
  name: 'Menta Fresca',
  description: 'Verde menta refrescante',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-mint-fresh {
  --background: 160 30% 95%;
  --foreground: 160 25% 12%;
  --card: 160 25% 100%;
  --card-foreground: 160 25% 12%;
  --popover: 160 25% 98%;
  --popover-foreground: 160 25% 12%;
  --primary: 165 60% 40%;
  --primary-foreground: 160 30% 98%;
  --secondary: 160 20% 90%;
  --secondary-foreground: 160 25% 15%;
  --muted: 160 15% 88%;
  --muted-foreground: 160 15% 42%;
  --accent: 155 55% 35%;
  --accent-foreground: 160 30% 98%;
  --border: 160 18% 85%;
  --input: 160 20% 90%;
  --ring: 165 60% 40%;
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
