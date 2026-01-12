// Coral Reef Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-coral-reef.jpg';

export const config: ThemeConfig = {
  id: 'coral-reef',
  name: 'Recife de Coral',
  description: 'Coral vibrante e tropical',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-coral-reef {
  --background: 15 45% 96%;
  --foreground: 10 35% 12%;
  --card: 15 40% 100%;
  --card-foreground: 10 35% 12%;
  --popover: 15 40% 98%;
  --popover-foreground: 10 35% 12%;
  --primary: 10 80% 60%;
  --primary-foreground: 15 45% 98%;
  --secondary: 15 28% 92%;
  --secondary-foreground: 10 35% 15%;
  --muted: 15 22% 90%;
  --muted-foreground: 10 20% 45%;
  --accent: 5 75% 55%;
  --accent-foreground: 15 45% 98%;
  --border: 15 25% 88%;
  --input: 15 28% 92%;
  --ring: 10 80% 60%;
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
