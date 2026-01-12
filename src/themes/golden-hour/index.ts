// Golden Hour Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-golden-hour.jpg';

export const config: ThemeConfig = {
  id: 'golden-hour',
  name: 'Hora Dourada',
  description: 'Dourado quente e luminoso',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-golden-hour {
  --background: 45 45% 95%;
  --foreground: 40 35% 12%;
  --card: 45 40% 100%;
  --card-foreground: 40 35% 12%;
  --popover: 45 40% 98%;
  --popover-foreground: 40 35% 12%;
  --primary: 42 85% 50%;
  --primary-foreground: 45 45% 8%;
  --secondary: 45 30% 92%;
  --secondary-foreground: 40 35% 15%;
  --muted: 45 25% 90%;
  --muted-foreground: 40 22% 42%;
  --accent: 38 80% 45%;
  --accent-foreground: 45 45% 8%;
  --border: 45 28% 88%;
  --input: 45 30% 92%;
  --ring: 42 85% 50%;
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
