// Peach Blossom Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-peach-blossom.jpg';

export const config: ThemeConfig = {
  id: 'peach-blossom',
  name: 'Flor de Pêssego',
  description: 'Pêssego delicado e acolhedor',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-peach-blossom {
  --background: 25 40% 95%;
  --foreground: 20 30% 15%;
  --card: 25 35% 100%;
  --card-foreground: 20 30% 15%;
  --popover: 25 35% 98%;
  --popover-foreground: 20 30% 15%;
  --primary: 20 75% 55%;
  --primary-foreground: 25 40% 98%;
  --secondary: 25 25% 92%;
  --secondary-foreground: 20 30% 18%;
  --muted: 25 20% 90%;
  --muted-foreground: 20 18% 45%;
  --accent: 15 70% 50%;
  --accent-foreground: 25 40% 98%;
  --border: 25 22% 88%;
  --input: 25 25% 92%;
  --ring: 20 75% 55%;
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
