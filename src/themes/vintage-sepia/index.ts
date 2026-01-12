// Vintage Sepia Theme - Default classic WWII documentary theme
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-vintage-sepia.jpg';

export const config: ThemeConfig = {
  id: 'vintage-sepia',
  name: 'Vintage Sépia',
  description: 'Tom clássico de fotografias antigas',
  isLight: false,
  category: 'dark',
};

export const styles = {
  css: `
html.theme-vintage-sepia {
  --background: 20 15% 8%;
  --foreground: 40 20% 90%;
  --card: 20 12% 12%;
  --card-foreground: 40 20% 90%;
  --popover: 20 12% 10%;
  --popover-foreground: 40 20% 90%;
  --primary: 38 70% 50%;
  --primary-foreground: 20 15% 8%;
  --secondary: 20 10% 18%;
  --secondary-foreground: 40 20% 85%;
  --muted: 20 8% 20%;
  --muted-foreground: 40 10% 55%;
  --accent: 38 60% 45%;
  --accent-foreground: 20 15% 8%;
  --border: 38 20% 22%;
  --input: 20 10% 18%;
  --ring: 38 70% 50%;
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
