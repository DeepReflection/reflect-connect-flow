// Cream Vanilla Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-cream-vanilla.jpg';

export const config: ThemeConfig = {
  id: 'cream-vanilla',
  name: 'Creme Baunilha',
  description: 'Tons creme suaves e elegantes',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-cream-vanilla {
  --background: 45 35% 95%;
  --foreground: 40 30% 12%;
  --card: 45 30% 100%;
  --card-foreground: 40 30% 12%;
  --popover: 45 30% 98%;
  --popover-foreground: 40 30% 12%;
  --primary: 40 55% 45%;
  --primary-foreground: 45 35% 98%;
  --secondary: 45 22% 92%;
  --secondary-foreground: 40 30% 15%;
  --muted: 45 18% 90%;
  --muted-foreground: 40 18% 42%;
  --accent: 35 50% 40%;
  --accent-foreground: 45 35% 98%;
  --border: 45 20% 88%;
  --input: 45 22% 92%;
  --ring: 40 55% 45%;
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
