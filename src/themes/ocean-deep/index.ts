// Ocean Deep Theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-ocean-deep.jpg';

export const config: ThemeConfig = {
  id: 'ocean-deep',
  name: 'Oceano Profundo',
  description: 'Azul marinho e tons aquáticos',
  isLight: false,
  category: 'dark',
};

export const styles = {
  css: `
html.theme-ocean-deep {
  --background: 210 35% 8%;
  --foreground: 200 30% 92%;
  --card: 210 30% 12%;
  --card-foreground: 200 30% 92%;
  --popover: 210 30% 10%;
  --popover-foreground: 200 30% 92%;
  --primary: 195 80% 50%;
  --primary-foreground: 210 35% 8%;
  --secondary: 210 20% 18%;
  --secondary-foreground: 200 30% 88%;
  --muted: 210 15% 20%;
  --muted-foreground: 200 15% 55%;
  --accent: 180 60% 45%;
  --accent-foreground: 210 35% 8%;
  --border: 195 25% 22%;
  --input: 210 20% 18%;
  --ring: 195 80% 50%;
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
