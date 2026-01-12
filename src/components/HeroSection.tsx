import { useTheme, ThemeName, THEMES } from '@/contexts/ThemeContext';
import { heroLayouts, HeroLayoutType } from '@/components/layouts/HeroLayouts';
import { THEME_BANNER_MAP } from '@/themes/types';
import { useState, useEffect } from 'react';

// Default fallback banner
import defaultBanner from '@/assets/themes/vintage-sepia/images/banner.jpg';

interface HeroSectionProps {
  name: string;
  description: string;
  avatarUrl: string;
}

// Cache for loaded banner images
const bannerCache: Record<string, string> = {};

const HeroSection = ({ name, description, avatarUrl }: HeroSectionProps) => {
  const { currentTheme } = useTheme();
  const [bannerImage, setBannerImage] = useState<string>(defaultBanner);
  
  // Dynamically load banner for current theme
  useEffect(() => {
    const loadBanner = async () => {
      // Check cache first
      if (bannerCache[currentTheme]) {
        setBannerImage(bannerCache[currentTheme]);
        return;
      }
      
      const bannerLoader = THEME_BANNER_MAP[currentTheme];
      if (bannerLoader) {
        try {
          const module = await bannerLoader();
          bannerCache[currentTheme] = module.default;
          setBannerImage(module.default);
        } catch (error) {
          console.error(`Failed to load banner for theme: ${currentTheme}`, error);
          setBannerImage(defaultBanner);
        }
      } else {
        setBannerImage(defaultBanner);
      }
    };
    
    loadBanner();
  }, [currentTheme]);
  
  // Get the theme data to check for layout
  const themeData = THEMES.find(t => t.id === currentTheme);
  const layoutType: HeroLayoutType = themeData?.layout || 'classic';
  
  // Get the appropriate layout component
  const LayoutComponent = heroLayouts[layoutType];

  return (
    <LayoutComponent
      name={name}
      description={description}
      avatarUrl={avatarUrl}
      bannerImage={bannerImage}
    />
  );
};

export default HeroSection;
