// Arctic Frost Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-arctic-frost.jpg';

export const config: ThemeConfig = {
  id: 'arctic-frost',
  name: 'Gelo Ártico',
  description: 'Branco gelado com tons azuis',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-arctic-frost {
  --background: 210 30% 96%;
  --foreground: 210 25% 12%;
  --card: 210 25% 100%;
  --card-foreground: 210 25% 12%;
  --popover: 210 25% 98%;
  --popover-foreground: 210 25% 12%;
  --primary: 200 80% 45%;
  --primary-foreground: 210 30% 98%;
  --secondary: 210 20% 92%;
  --secondary-foreground: 210 25% 15%;
  --muted: 210 15% 90%;
  --muted-foreground: 210 15% 45%;
  --accent: 195 70% 40%;
  --accent-foreground: 210 30% 98%;
  --border: 210 20% 85%;
  --input: 210 20% 92%;
  --ring: 200 80% 45%;
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
