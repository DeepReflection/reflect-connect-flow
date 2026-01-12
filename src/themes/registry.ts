// Theme Registry - Central registry for all themes
import { Theme } from './types';

// Import all themes
import vintageSepiaTheme from './vintage-sepia';
import midnightGoldTheme from './midnight-gold';
import militaryOliveTheme from './military-olive';
import oceanDeepTheme from './ocean-deep';
import crimsonWarTheme from './crimson-war';
import sunsetBronzeTheme from './sunset-bronze';
import royalPurpleTheme from './royal-purple';
import forestEmeraldTheme from './forest-emerald';
import arcticFrostTheme from './arctic-frost';
import desertSandTheme from './desert-sand';
import cloudSilverTheme from './cloud-silver';
import roseGardenTheme from './rose-garden';
import mintFreshTheme from './mint-fresh';
import lavenderDreamTheme from './lavender-dream';
import peachBlossomTheme from './peach-blossom';
import skyBlueTheme from './sky-blue';
import creamVanillaTheme from './cream-vanilla';
import sageMorningTheme from './sage-morning';
import coralReefTheme from './coral-reef';
import goldenHourTheme from './golden-hour';

// Theme registry with all available themes
export const themeRegistry: Record<string, Theme> = {
  'vintage-sepia': vintageSepiaTheme,
  'midnight-gold': midnightGoldTheme,
  'military-olive': militaryOliveTheme,
  'ocean-deep': oceanDeepTheme,
  'crimson-war': crimsonWarTheme,
  'sunset-bronze': sunsetBronzeTheme,
  'royal-purple': royalPurpleTheme,
  'forest-emerald': forestEmeraldTheme,
  'arctic-frost': arcticFrostTheme,
  'desert-sand': desertSandTheme,
  'cloud-silver': cloudSilverTheme,
  'rose-garden': roseGardenTheme,
  'mint-fresh': mintFreshTheme,
  'lavender-dream': lavenderDreamTheme,
  'peach-blossom': peachBlossomTheme,
  'sky-blue': skyBlueTheme,
  'cream-vanilla': creamVanillaTheme,
  'sage-morning': sageMorningTheme,
  'coral-reef': coralReefTheme,
  'golden-hour': goldenHourTheme,
};

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
