// Theme Registry - Central registry for all themes
import { Theme, ThemeConfig } from './types';
import { DefaultHeroLayout } from './shared/DefaultHero';
import { DefaultAgendaSection, DefaultProductsSection, DefaultReflectionsSection } from './shared/DefaultSections';

// Default components shared by all themes
const defaultComponents = {
  HeroLayout: DefaultHeroLayout,
  AgendaSection: DefaultAgendaSection,
  ProductsSection: DefaultProductsSection,
  ReflectionsSection: DefaultReflectionsSection,
};

// Theme configurations - banners are now loaded dynamically from theme folders
const themeConfigs: Record<string, ThemeConfig> = {
  // Dark themes
  'vintage-sepia': {
    id: 'vintage-sepia',
    name: 'Vintage Sépia',
    description: 'Tom clássico de fotografias antigas',
    isLight: false,
    category: 'dark',
  },
  'midnight-gold': {
    id: 'midnight-gold',
    name: 'Meia-Noite Dourado',
    description: 'Elegância noturna com acentos dourados',
    isLight: false,
    category: 'dark',
  },
  'military-olive': {
    id: 'military-olive',
    name: 'Militar Oliva',
    description: 'Tons táticos e robustos',
    isLight: false,
    category: 'dark',
  },
  'ocean-deep': {
    id: 'ocean-deep',
    name: 'Oceano Profundo',
    description: 'Azul marinho e tons aquáticos',
    isLight: false,
    category: 'dark',
  },
  'crimson-war': {
    id: 'crimson-war',
    name: 'Carmesim de Guerra',
    description: 'Vermelho dramático e intenso',
    isLight: false,
    category: 'dark',
  },
  'sunset-bronze': {
    id: 'sunset-bronze',
    name: 'Pôr do Sol Bronze',
    description: 'Cores quentes do entardecer',
    isLight: false,
    category: 'dark',
  },
  'royal-purple': {
    id: 'royal-purple',
    name: 'Púrpura Real',
    description: 'Luxo e sofisticação imperial',
    isLight: false,
    category: 'dark',
  },
  'forest-emerald': {
    id: 'forest-emerald',
    name: 'Floresta Esmeralda',
    description: 'Verde profundo e natural',
    isLight: false,
    category: 'dark',
  },
  // Light themes
  'arctic-frost': {
    id: 'arctic-frost',
    name: 'Gelo Ártico',
    description: 'Branco gelado com tons azuis',
    isLight: true,
    category: 'light',
  },
  'desert-sand': {
    id: 'desert-sand',
    name: 'Areia do Deserto',
    description: 'Tons terrosos e arenosos',
    isLight: true,
    category: 'light',
  },
  'cloud-silver': {
    id: 'cloud-silver',
    name: 'Nuvem Prateada',
    description: 'Cinza elegante e moderno',
    isLight: true,
    category: 'light',
  },
  'rose-garden': {
    id: 'rose-garden',
    name: 'Jardim de Rosas',
    description: 'Rosa suave e romântico',
    isLight: true,
    category: 'light',
  },
  'mint-fresh': {
    id: 'mint-fresh',
    name: 'Menta Fresca',
    description: 'Verde menta refrescante',
    isLight: true,
    category: 'light',
  },
  'lavender-dream': {
    id: 'lavender-dream',
    name: 'Sonho Lavanda',
    description: 'Lilás suave e relaxante',
    isLight: true,
    category: 'light',
  },
  'peach-blossom': {
    id: 'peach-blossom',
    name: 'Flor de Pêssego',
    description: 'Pêssego delicado e acolhedor',
    isLight: true,
    category: 'light',
  },
  'sky-blue': {
    id: 'sky-blue',
    name: 'Céu Azul',
    description: 'Azul claro e sereno',
    isLight: true,
    category: 'light',
  },
  'cream-vanilla': {
    id: 'cream-vanilla',
    name: 'Creme Baunilha',
    description: 'Tons creme suaves e elegantes',
    isLight: true,
    category: 'light',
  },
  'sage-morning': {
    id: 'sage-morning',
    name: 'Sálvia Matinal',
    description: 'Verde sálvia calmante',
    isLight: true,
    category: 'light',
  },
  'coral-reef': {
    id: 'coral-reef',
    name: 'Recife de Coral',
    description: 'Coral vibrante e tropical',
    isLight: true,
    category: 'light',
  },
  'golden-hour': {
    id: 'golden-hour',
    name: 'Hora Dourada',
    description: 'Dourado quente e luminoso',
    isLight: true,
    category: 'light',
  },
  // Business themes
  'corporate-navy': {
    id: 'corporate-navy',
    name: 'Corporativo Marinho',
    description: 'Azul marinho profissional e confiável',
    isLight: false,
    category: 'business',
  },
  'executive-charcoal': {
    id: 'executive-charcoal',
    name: 'Executivo Carvão',
    description: 'Cinza escuro sofisticado e moderno',
    isLight: false,
    category: 'business',
  },
  'startup-teal': {
    id: 'startup-teal',
    name: 'Startup Teal',
    description: 'Verde-azulado inovador e dinâmico',
    isLight: false,
    category: 'business',
  },
  'finance-green': {
    id: 'finance-green',
    name: 'Finanças Verde',
    description: 'Verde clássico de prosperidade',
    isLight: false,
    category: 'business',
  },
  'consulting-slate': {
    id: 'consulting-slate',
    name: 'Consultoria Ardósia',
    description: 'Azul-cinza elegante e confiável',
    isLight: false,
    category: 'business',
  },
  'tech-indigo': {
    id: 'tech-indigo',
    name: 'Tech Índigo',
    description: 'Azul-violeta tecnológico e futurista',
    isLight: false,
    category: 'business',
  },
  'luxury-black': {
    id: 'luxury-black',
    name: 'Luxo Preto',
    description: 'Preto premium com dourado sutil',
    isLight: false,
    category: 'business',
  },
  'modern-graphite': {
    id: 'modern-graphite',
    name: 'Grafite Moderno',
    description: 'Cinza neutro contemporâneo',
    isLight: false,
    category: 'business',
  },
  'innovation-blue': {
    id: 'innovation-blue',
    name: 'Inovação Azul',
    description: 'Azul elétrico vibrante e criativo',
    isLight: false,
    category: 'business',
  },
  'prestige-burgundy': {
    id: 'prestige-burgundy',
    name: 'Prestígio Borgonha',
    description: 'Vermelho vinho elegante e exclusivo',
    isLight: false,
    category: 'business',
  },
  // Layout themes
  'neon-gamer': {
    id: 'neon-gamer',
    name: 'Neon Gamer',
    description: 'Cyber gaming com efeitos neon vibrantes',
    isLight: false,
    category: 'layout',
  },
  'minimal-zen': {
    id: 'minimal-zen',
    name: 'Minimalista Zen',
    description: 'Design ultra limpo e contemplativo',
    isLight: true,
    category: 'layout',
  },
  'magazine-editorial': {
    id: 'magazine-editorial',
    name: 'Magazine Editorial',
    description: 'Estilo revista com layout assimétrico',
    isLight: false,
    category: 'layout',
  },
  'retro-wave': {
    id: 'retro-wave',
    name: 'Retro Wave',
    description: 'Nostálgia anos 80 com visuais ousados',
    isLight: false,
    category: 'layout',
  },
  'nature-organic': {
    id: 'nature-organic',
    name: 'Natureza Orgânica',
    description: 'Formas fluidas inspiradas na natureza',
    isLight: true,
    category: 'layout',
  },
  'brutalist-raw': {
    id: 'brutalist-raw',
    name: 'Brutalista Cru',
    description: 'Design cru e impactante em blocos',
    isLight: false,
    category: 'layout',
  },
  'glassmorphism': {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Efeitos de vidro fosco modernos',
    isLight: false,
    category: 'layout',
  },
  'split-screen': {
    id: 'split-screen',
    name: 'Tela Dividida',
    description: 'Layout equilibrado em duas metades',
    isLight: false,
    category: 'layout',
  },
  'gradient-flow': {
    id: 'gradient-flow',
    name: 'Fluxo Gradiente',
    description: 'Gradientes animados e fluidos',
    isLight: false,
    category: 'layout',
  },
  'card-stack': {
    id: 'card-stack',
    name: 'Cartões Empilhados',
    description: 'Efeito de cartões sobrepostos',
    isLight: false,
    category: 'layout',
  },
};

// Build theme registry from configurations
// Note: bannerImage is now dynamically loaded, placeholder empty string
export const themeRegistry: Record<string, Theme> = Object.fromEntries(
  Object.entries(themeConfigs).map(([id, config]) => [
    id,
    {
      config,
      components: defaultComponents,
      assets: { bannerImage: '' }, // Loaded dynamically
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
