// Sky Blue Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-sky-blue.jpg';

export const config: ThemeConfig = {
  id: 'sky-blue',
  name: 'Céu Azul',
  description: 'Azul claro e sereno',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-sky-blue {
  --background: 200 35% 96%;
  --foreground: 205 30% 12%;
  --card: 200 30% 100%;
  --card-foreground: 205 30% 12%;
  --popover: 200 30% 98%;
  --popover-foreground: 205 30% 12%;
  --primary: 200 80% 50%;
  --primary-foreground: 200 35% 98%;
  --secondary: 200 22% 92%;
  --secondary-foreground: 205 30% 15%;
  --muted: 200 18% 90%;
  --muted-foreground: 200 18% 42%;
  --accent: 195 75% 45%;
  --accent-foreground: 200 35% 98%;
  --border: 200 20% 88%;
  --input: 200 22% 92%;
  --ring: 200 80% 50%;
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
