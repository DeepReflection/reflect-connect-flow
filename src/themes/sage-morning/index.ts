// Sage Morning Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-sage-morning.jpg';

export const config: ThemeConfig = {
  id: 'sage-morning',
  name: 'Sálvia Matinal',
  description: 'Verde sálvia calmante',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-sage-morning {
  --background: 130 20% 94%;
  --foreground: 135 20% 12%;
  --card: 130 18% 100%;
  --card-foreground: 135 20% 12%;
  --popover: 130 18% 98%;
  --popover-foreground: 135 20% 12%;
  --primary: 135 35% 40%;
  --primary-foreground: 130 20% 98%;
  --secondary: 130 15% 90%;
  --secondary-foreground: 135 20% 15%;
  --muted: 130 12% 88%;
  --muted-foreground: 135 12% 42%;
  --accent: 140 30% 35%;
  --accent-foreground: 130 20% 98%;
  --border: 130 15% 85%;
  --input: 130 15% 90%;
  --ring: 135 35% 40%;
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
