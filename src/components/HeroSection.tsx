import { useTheme, ThemeName, THEMES } from '@/contexts/ThemeContext';
import { heroLayouts, HeroLayoutType } from '@/components/layouts/HeroLayouts';

// Import all theme-specific banners
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
// Business themes
import bannerCorporateNavy from '@/assets/banners/hero-corporate-navy.jpg';
import bannerExecutiveCharcoal from '@/assets/banners/hero-executive-charcoal.jpg';
import bannerStartupTeal from '@/assets/banners/hero-startup-teal.jpg';
import bannerFinanceGreen from '@/assets/banners/hero-finance-green.jpg';
import bannerConsultingSlate from '@/assets/banners/hero-consulting-slate.jpg';
import bannerTechIndigo from '@/assets/banners/hero-tech-indigo.jpg';
import bannerLuxuryBlack from '@/assets/banners/hero-luxury-black.jpg';
import bannerModernGraphite from '@/assets/banners/hero-modern-graphite.jpg';
import bannerInnovationBlue from '@/assets/banners/hero-innovation-blue.jpg';
import bannerPrestigeBurgundy from '@/assets/banners/hero-prestige-burgundy.jpg';
// Layout themes
import bannerNeonGamer from '@/assets/banners/hero-neon-gamer.jpg';
import bannerMinimalZen from '@/assets/banners/hero-minimal-zen.jpg';
import bannerMagazineEditorial from '@/assets/banners/hero-magazine-editorial.jpg';
import bannerRetroWave from '@/assets/banners/hero-retro-wave.jpg';
import bannerNatureOrganic from '@/assets/banners/hero-nature-organic.jpg';
import bannerBrutalistRaw from '@/assets/banners/hero-brutalist-raw.jpg';
import bannerGlassmorphism from '@/assets/banners/hero-glassmorphism.jpg';
import bannerSplitScreen from '@/assets/banners/hero-split-screen.jpg';
import bannerGradientFlow from '@/assets/banners/hero-gradient-flow.jpg';
import bannerCardStack from '@/assets/banners/hero-card-stack.jpg';

// Banner mapping for each theme
const themeBanners: Record<ThemeName, string> = {
  'vintage-sepia': bannerVintageSepia,
  'midnight-gold': bannerMidnightGold,
  'military-olive': bannerMilitaryOlive,
  'ocean-deep': bannerOceanDeep,
  'crimson-war': bannerCrimsonWar,
  'sunset-bronze': bannerSunsetBronze,
  'royal-purple': bannerRoyalPurple,
  'forest-emerald': bannerForestEmerald,
  'arctic-frost': bannerArcticFrost,
  'desert-sand': bannerDesertSand,
  'cloud-silver': bannerCloudSilver,
  'rose-garden': bannerRoseGarden,
  'mint-fresh': bannerMintFresh,
  'lavender-dream': bannerLavenderDream,
  'peach-blossom': bannerPeachBlossom,
  'sky-blue': bannerSkyBlue,
  'cream-vanilla': bannerCreamVanilla,
  'sage-morning': bannerSageMorning,
  'coral-reef': bannerCoralReef,
  'golden-hour': bannerGoldenHour,
  // Business themes
  'corporate-navy': bannerCorporateNavy,
  'executive-charcoal': bannerExecutiveCharcoal,
  'startup-teal': bannerStartupTeal,
  'finance-green': bannerFinanceGreen,
  'consulting-slate': bannerConsultingSlate,
  'tech-indigo': bannerTechIndigo,
  'luxury-black': bannerLuxuryBlack,
  'modern-graphite': bannerModernGraphite,
  'innovation-blue': bannerInnovationBlue,
  'prestige-burgundy': bannerPrestigeBurgundy,
  // Layout themes
  'neon-gamer': bannerNeonGamer,
  'minimal-zen': bannerMinimalZen,
  'magazine-editorial': bannerMagazineEditorial,
  'retro-wave': bannerRetroWave,
  'nature-organic': bannerNatureOrganic,
  'brutalist-raw': bannerBrutalistRaw,
  'glassmorphism': bannerGlassmorphism,
  'split-screen': bannerSplitScreen,
  'gradient-flow': bannerGradientFlow,
  'card-stack': bannerCardStack,
};

interface HeroSectionProps {
  name: string;
  description: string;
  avatarUrl: string;
}

const HeroSection = ({ name, description, avatarUrl }: HeroSectionProps) => {
  const { currentTheme } = useTheme();
  
  // Get banner for current theme
  const bannerImage = themeBanners[currentTheme] || bannerVintageSepia;
  
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
