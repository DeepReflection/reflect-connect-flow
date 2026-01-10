import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

interface HeroSectionProps {
  name: string;
  description: string;
  avatarUrl: string;
}

const HeroSection = ({ name, description, avatarUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="World War II Documentary"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-end gap-6"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-bronze">
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left flex-1 glass-card p-5 rounded-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl md:text-4xl font-bold text-gradient-bronze mb-3"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-xl"
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
