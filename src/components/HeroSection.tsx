import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

interface HeroSectionProps {
  name: string;
  description: string;
  avatarUrl: string;
}

const HeroSection = ({ name, description, avatarUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[45vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="World War II Documentary"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"
        />
      </div>

      {/* Content - Centered Layout */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          {/* Profile Card */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex-shrink-0"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-primary/40 glow-primary">
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 rounded-full border border-primary/20 animate-pulse" />
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-bronze mb-2"
                >
                  {name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-foreground/85 text-sm md:text-base leading-relaxed"
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
