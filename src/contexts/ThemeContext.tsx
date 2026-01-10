import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  | 'desert-sand';

export interface Theme {
  id: ThemeName;
  name: string;
  description: string;
}

export const THEMES: Theme[] = [
  { id: 'vintage-sepia', name: 'Vintage Sépia', description: 'Tom clássico de fotografias antigas' },
  { id: 'midnight-gold', name: 'Meia-Noite Dourado', description: 'Elegância noturna com acentos dourados' },
  { id: 'military-olive', name: 'Militar Oliva', description: 'Tons táticos e robustos' },
  { id: 'ocean-deep', name: 'Oceano Profundo', description: 'Azul marinho e tons aquáticos' },
  { id: 'crimson-war', name: 'Carmesim de Guerra', description: 'Vermelho dramático e intenso' },
  { id: 'arctic-frost', name: 'Gelo Ártico', description: 'Branco gelado com tons azuis' },
  { id: 'sunset-bronze', name: 'Pôr do Sol Bronze', description: 'Cores quentes do entardecer' },
  { id: 'royal-purple', name: 'Púrpura Real', description: 'Luxo e sofisticação imperial' },
  { id: 'forest-emerald', name: 'Floresta Esmeralda', description: 'Verde profundo e natural' },
  { id: 'desert-sand', name: 'Areia do Deserto', description: 'Tons terrosos e arenosos' },
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
