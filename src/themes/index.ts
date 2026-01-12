// Theme System - Single entry point for all theme functionality
export type { 
  Theme, 
  ThemeConfig, 
  ThemeComponents, 
  ThemeAssets, 
  HeroLayoutProps, 
  Reflection, 
  AgendaEvent, 
  Product, 
  Service, 
  ThemeSectionProps, 
  ThemeName 
} from './types';

export { THEME_CSS_MAP } from './types';
export { themeRegistry, getTheme, getAllThemes, getThemesByCategory } from './registry';
export { AGENDA_EVENTS, PRODUCTS, SERVICES, REFLECTIONS } from './shared/data';
