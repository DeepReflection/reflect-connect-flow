import { motion } from 'framer-motion';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';
import ShareButton from './ShareButton';

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

  return (
    <section className="relative min-h-[60vh] flex items-end pb-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="World War II Documentary"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left flex-1 glass-card p-6 md:p-8 rounded-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-bronze"
              >
                {name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ShareButton />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
