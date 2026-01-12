// Theme Registry - Central registry for all themes
import { Theme, ThemeConfig } from './types';
import { DefaultHeroLayout } from './shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from './shared/DefaultSections';

// Import all banner images
import bannerVintageSepia from '@/assets/banners/hero-vintage-sepia.jpg';
import bannerMidnightGold from '@/assets/banners/hero-midnight-gold.jpg';
import bannerMilitaryOlive from '@/assets/banners/hero-military-olive.jpg';
import bannerOceanDeep from '@/assets/banners/hero-ocean-deep.jpg';
import bannerCrimsonWar from '@/assets/banners/hero-crimson-war.jpg';
import bannerSunsetBronze from '@/assets/banners/hero-sunset-bronze.jpg';
import bannerRoyalPurple from '@/assets/banners/hero-royal-purple.jpg';
import bannerForestEmerald from '@/assets/banners/hero-forest-emerald.jpg';
import bannerArcticFrost from '@/assets/banners/hero-arctic-frost.jpg';
import bannerDesertSand from '@/assets/banners/hero-desert-sand.jpg';
import bannerCloudSilver from '@/assets/banners/hero-cloud-silver.jpg';
import bannerRoseGarden from '@/assets/banners/hero-rose-garden.jpg';
import bannerMintFresh from '@/assets/banners/hero-mint-fresh.jpg';
import bannerLavenderDream from '@/assets/banners/hero-lavender-dream.jpg';
import bannerPeachBlossom from '@/assets/banners/hero-peach-blossom.jpg';
import bannerSkyBlue from '@/assets/banners/hero-sky-blue.jpg';
import bannerCreamVanilla from '@/assets/banners/hero-cream-vanilla.jpg';
import bannerSageMorning from '@/assets/banners/hero-sage-morning.jpg';
import bannerCoralReef from '@/assets/banners/hero-coral-reef.jpg';
import bannerGoldenHour from '@/assets/banners/hero-golden-hour.jpg';

// Default components shared by all themes
const defaultComponents = {
  HeroLayout: DefaultHeroLayout,
  AgendaSection: DefaultAgendaSection,
  ProductsSection: DefaultProductsSection,
  ReflectionsSection: DefaultReflectionsSection,
};

// Theme configurations
const themeConfigs: Record<string, { config: ThemeConfig; bannerImage: string }> = {
  'vintage-sepia': {
    config: {
      id: 'vintage-sepia',
      name: 'Vintage Sépia',
      description: 'Tom clássico de fotografias antigas',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerVintageSepia,
  },
  'midnight-gold': {
    config: {
      id: 'midnight-gold',
      name: 'Meia-Noite Dourado',
      description: 'Elegância noturna com acentos dourados',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerMidnightGold,
  },
  'military-olive': {
    config: {
      id: 'military-olive',
      name: 'Militar Oliva',
      description: 'Tons táticos e robustos',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerMilitaryOlive,
  },
  'ocean-deep': {
    config: {
      id: 'ocean-deep',
      name: 'Oceano Profundo',
      description: 'Azul marinho e tons aquáticos',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerOceanDeep,
  },
  'crimson-war': {
    config: {
      id: 'crimson-war',
      name: 'Carmesim de Guerra',
      description: 'Vermelho dramático e intenso',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerCrimsonWar,
  },
  'sunset-bronze': {
    config: {
      id: 'sunset-bronze',
      name: 'Pôr do Sol Bronze',
      description: 'Cores quentes do entardecer',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerSunsetBronze,
  },
  'royal-purple': {
    config: {
      id: 'royal-purple',
      name: 'Púrpura Real',
      description: 'Luxo e sofisticação imperial',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerRoyalPurple,
  },
  'forest-emerald': {
    config: {
      id: 'forest-emerald',
      name: 'Floresta Esmeralda',
      description: 'Verde profundo e natural',
      isLight: false,
      category: 'dark',
    },
    bannerImage: bannerForestEmerald,
  },
  'arctic-frost': {
    config: {
      id: 'arctic-frost',
      name: 'Gelo Ártico',
      description: 'Branco gelado com tons azuis',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerArcticFrost,
  },
  'desert-sand': {
    config: {
      id: 'desert-sand',
      name: 'Areia do Deserto',
      description: 'Tons terrosos e arenosos',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerDesertSand,
  },
  'cloud-silver': {
    config: {
      id: 'cloud-silver',
      name: 'Nuvem Prateada',
      description: 'Cinza elegante e moderno',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerCloudSilver,
  },
  'rose-garden': {
    config: {
      id: 'rose-garden',
      name: 'Jardim de Rosas',
      description: 'Rosa suave e romântico',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerRoseGarden,
  },
  'mint-fresh': {
    config: {
      id: 'mint-fresh',
      name: 'Menta Fresca',
      description: 'Verde menta refrescante',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerMintFresh,
  },
  'lavender-dream': {
    config: {
      id: 'lavender-dream',
      name: 'Sonho Lavanda',
      description: 'Lilás suave e relaxante',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerLavenderDream,
  },
  'peach-blossom': {
    config: {
      id: 'peach-blossom',
      name: 'Flor de Pêssego',
      description: 'Pêssego delicado e acolhedor',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerPeachBlossom,
  },
  'sky-blue': {
    config: {
      id: 'sky-blue',
      name: 'Céu Azul',
      description: 'Azul claro e sereno',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerSkyBlue,
  },
  'cream-vanilla': {
    config: {
      id: 'cream-vanilla',
      name: 'Creme Baunilha',
      description: 'Tons creme suaves e elegantes',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerCreamVanilla,
  },
  'sage-morning': {
    config: {
      id: 'sage-morning',
      name: 'Sálvia Matinal',
      description: 'Verde sálvia calmante',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerSageMorning,
  },
  'coral-reef': {
    config: {
      id: 'coral-reef',
      name: 'Recife de Coral',
      description: 'Coral vibrante e tropical',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerCoralReef,
  },
  'golden-hour': {
    config: {
      id: 'golden-hour',
      name: 'Hora Dourada',
      description: 'Dourado quente e luminoso',
      isLight: true,
      category: 'light',
    },
    bannerImage: bannerGoldenHour,
  },
};

// Build theme registry from configurations
export const themeRegistry: Record<string, Theme> = Object.fromEntries(
  Object.entries(themeConfigs).map(([id, { config, bannerImage }]) => [
    id,
    {
      config,
      components: defaultComponents,
      assets: { bannerImage },
    },
  ])
);

export const getTheme = (themeId: string): Theme | undefined => {
  return themeRegistry[themeId];
};

export const getAllThemes = (): Theme[] => {
  return Object.values(themeRegistry);
};

export const getThemesByCategory = (category: 'dark' | 'light' | 'business' | 'layout'): Theme[] => {
  return getAllThemes().filter(theme => theme.config.category === category);
};

export type ThemeName = keyof typeof themeRegistry;
