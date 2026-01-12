// Lavender Dream Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-lavender-dream.jpg';

export const config: ThemeConfig = {
  id: 'lavender-dream',
  name: 'Sonho Lavanda',
  description: 'Lilás suave e relaxante',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-lavender-dream {
  --background: 270 25% 96%;
  --foreground: 270 20% 15%;
  --card: 270 20% 100%;
  --card-foreground: 270 20% 15%;
  --popover: 270 20% 98%;
  --popover-foreground: 270 20% 15%;
  --primary: 270 55% 55%;
  --primary-foreground: 270 25% 98%;
  --secondary: 270 18% 92%;
  --secondary-foreground: 270 20% 18%;
  --muted: 270 12% 90%;
  --muted-foreground: 270 12% 45%;
  --accent: 280 50% 50%;
  --accent-foreground: 270 25% 98%;
  --border: 270 18% 88%;
  --input: 270 18% 92%;
  --ring: 270 55% 55%;
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
