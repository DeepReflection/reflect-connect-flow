// Rose Garden Theme (Light)
import { Theme, ThemeConfig } from '../types';
import { DefaultHeroLayout } from '../shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from '../shared/DefaultSections';
import bannerImage from '@/assets/banners/hero-rose-garden.jpg';

export const config: ThemeConfig = {
  id: 'rose-garden',
  name: 'Jardim de Rosas',
  description: 'Rosa suave e romântico',
  isLight: true,
  category: 'light',
};

export const styles = {
  css: `
html.theme-rose-garden {
  --background: 350 30% 96%;
  --foreground: 350 25% 15%;
  --card: 350 25% 100%;
  --card-foreground: 350 25% 15%;
  --popover: 350 25% 98%;
  --popover-foreground: 350 25% 15%;
  --primary: 350 70% 55%;
  --primary-foreground: 350 30% 98%;
  --secondary: 350 20% 92%;
  --secondary-foreground: 350 25% 18%;
  --muted: 350 15% 90%;
  --muted-foreground: 350 15% 45%;
  --accent: 340 60% 50%;
  --accent-foreground: 350 30% 98%;
  --border: 350 20% 88%;
  --input: 350 20% 92%;
  --ring: 350 70% 55%;
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
