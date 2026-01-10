import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { HeroLayoutType } from '@/components/layouts/HeroLayouts';

export type ThemeName = 
  | 'vintage-sepia'
  | 'midnight-gold'
  | 'military-olive'
  | 'ocean-deep'
  | 'crimson-war'
  | 'arctic-frost'
  | 'sunset-bronze'
  | 'royal-purple'
  | 'forest-emerald'
  | 'desert-sand'
  | 'cloud-silver'
  | 'rose-garden'
  | 'mint-fresh'
  | 'lavender-dream'
  | 'peach-blossom'
  | 'sky-blue'
  | 'cream-vanilla'
  | 'sage-morning'
  | 'coral-reef'
  | 'golden-hour'
  // Business themes
  | 'corporate-navy'
  | 'executive-charcoal'
  | 'startup-teal'
  | 'finance-green'
  | 'consulting-slate'
  | 'tech-indigo'
  | 'luxury-black'
  | 'modern-graphite'
  | 'innovation-blue'
  | 'prestige-burgundy'
  // Layout themes (new)
  | 'neon-gamer'
  | 'minimal-zen'
  | 'magazine-editorial'
  | 'retro-wave'
  | 'nature-organic'
  | 'brutalist-raw'
  | 'glassmorphism'
  | 'split-screen'
  | 'gradient-flow'
  | 'card-stack';

export interface Theme {
  id: ThemeName;
  name: string;
  description: string;
  isLight?: boolean;
  layout?: HeroLayoutType;
}

export const THEMES: Theme[] = [
  // Dark Themes
  { id: 'vintage-sepia', name: 'Vintage Sépia', description: 'Tom clássico de fotografias antigas' },
  { id: 'midnight-gold', name: 'Meia-Noite Dourado', description: 'Elegância noturna com acentos dourados' },
  { id: 'military-olive', name: 'Militar Oliva', description: 'Tons táticos e robustos' },
  { id: 'ocean-deep', name: 'Oceano Profundo', description: 'Azul marinho e tons aquáticos' },
  { id: 'crimson-war', name: 'Carmesim de Guerra', description: 'Vermelho dramático e intenso' },
  { id: 'sunset-bronze', name: 'Pôr do Sol Bronze', description: 'Cores quentes do entardecer' },
  { id: 'royal-purple', name: 'Púrpura Real', description: 'Luxo e sofisticação imperial' },
  { id: 'forest-emerald', name: 'Floresta Esmeralda', description: 'Verde profundo e natural' },
  // Business Themes (Dark)
  { id: 'corporate-navy', name: 'Corporativo Marinho', description: 'Azul marinho profissional e confiável' },
  { id: 'executive-charcoal', name: 'Executivo Carvão', description: 'Cinza escuro sofisticado e moderno' },
  { id: 'startup-teal', name: 'Startup Teal', description: 'Verde-azulado inovador e dinâmico' },
  { id: 'finance-green', name: 'Finanças Verde', description: 'Verde clássico de prosperidade' },
  { id: 'consulting-slate', name: 'Consultoria Ardósia', description: 'Azul-cinza elegante e confiável' },
  { id: 'tech-indigo', name: 'Tech Índigo', description: 'Azul-violeta tecnológico e futurista' },
  { id: 'luxury-black', name: 'Luxo Preto', description: 'Preto premium com dourado sutil' },
  { id: 'modern-graphite', name: 'Grafite Moderno', description: 'Cinza neutro contemporâneo' },
  { id: 'innovation-blue', name: 'Inovação Azul', description: 'Azul elétrico vibrante e criativo' },
  { id: 'prestige-burgundy', name: 'Prestígio Borgonha', description: 'Vermelho vinho elegante e exclusivo' },
  // Light Themes
  { id: 'arctic-frost', name: 'Gelo Ártico', description: 'Branco gelado com tons azuis', isLight: true },
  { id: 'desert-sand', name: 'Areia do Deserto', description: 'Tons terrosos e arenosos', isLight: true },
  { id: 'cloud-silver', name: 'Nuvem Prateada', description: 'Cinza elegante e moderno', isLight: true },
  { id: 'rose-garden', name: 'Jardim de Rosas', description: 'Rosa suave e romântico', isLight: true },
  { id: 'mint-fresh', name: 'Menta Fresca', description: 'Verde menta refrescante', isLight: true },
  { id: 'lavender-dream', name: 'Sonho Lavanda', description: 'Lilás suave e relaxante', isLight: true },
  { id: 'peach-blossom', name: 'Flor de Pêssego', description: 'Pêssego delicado e acolhedor', isLight: true },
  { id: 'sky-blue', name: 'Céu Azul', description: 'Azul claro e sereno', isLight: true },
  { id: 'cream-vanilla', name: 'Creme Baunilha', description: 'Tons creme suaves e elegantes', isLight: true },
  { id: 'sage-morning', name: 'Sálvia Matinal', description: 'Verde sálvia calmante', isLight: true },
  { id: 'coral-reef', name: 'Recife de Coral', description: 'Coral vibrante e tropical', isLight: true },
  { id: 'golden-hour', name: 'Hora Dourada', description: 'Dourado quente e luminoso', isLight: true },
  // Layout Themes (new - each has unique layout)
  { id: 'neon-gamer', name: 'Neon Gamer', description: 'Cyber gaming com efeitos neon vibrantes', layout: 'centered' },
  { id: 'minimal-zen', name: 'Minimalista Zen', description: 'Design ultra limpo e contemplativo', layout: 'minimal', isLight: true },
  { id: 'magazine-editorial', name: 'Magazine Editorial', description: 'Estilo revista com layout assimétrico', layout: 'editorial' },
  { id: 'retro-wave', name: 'Retro Wave', description: 'Nostálgia anos 80 com visuais ousados', layout: 'retro' },
  { id: 'nature-organic', name: 'Natureza Orgânica', description: 'Formas fluidas inspiradas na natureza', layout: 'organic', isLight: true },
  { id: 'brutalist-raw', name: 'Brutalista Cru', description: 'Design cru e impactante em blocos', layout: 'brutalist' },
  { id: 'glassmorphism', name: 'Glassmorphism', description: 'Efeitos de vidro fosco modernos', layout: 'glass' },
  { id: 'split-screen', name: 'Tela Dividida', description: 'Layout equilibrado em duas metades', layout: 'split' },
  { id: 'gradient-flow', name: 'Fluxo Gradiente', description: 'Gradientes animados e fluidos', layout: 'gradient' },
  { id: 'card-stack', name: 'Cartões Empilhados', description: 'Efeito de cartões sobrepostos', layout: 'stacked' },
];

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('deeplink-theme');
    return (saved as ThemeName) || 'vintage-sepia';
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    const applyTheme = () => {
      localStorage.setItem('deeplink-theme', currentTheme);
      
      // Remove all theme classes from html element
      THEMES.forEach(theme => {
        document.documentElement.classList.remove(`theme-${theme.id}`);
      });
      
      // Add current theme class to html element
      document.documentElement.classList.add(`theme-${currentTheme}`);
    };
    
    applyTheme();
  }, [currentTheme]);

  // Also apply on initial render
  useEffect(() => {
    document.documentElement.classList.add(`theme-${currentTheme}`);
  }, []);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
