// Desert Sand Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-desert-sand.jpg';

export const config: ThemeConfig = {
  id: 'desert-sand',
  name: 'Areia do Deserto',
  description: 'Tons terrosos e arenosos',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-desert-sand {
  --background: 35 25% 92%;
  --foreground: 30 30% 15%;
  --card: 35 20% 98%;
  --card-foreground: 30 30% 15%;
  --popover: 35 20% 96%;
  --popover-foreground: 30 30% 15%;
  --primary: 30 60% 45%;
  --primary-foreground: 35 25% 98%;
  --secondary: 35 15% 88%;
  --secondary-foreground: 30 30% 18%;
  --muted: 35 12% 85%;
  --muted-foreground: 30 15% 45%;
  --accent: 25 55% 40%;
  --accent-foreground: 35 25% 98%;
  --border: 30 20% 80%;
  --input: 35 15% 88%;
  --ring: 30 60% 45%;
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
