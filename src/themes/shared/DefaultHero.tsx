import { motion } from 'framer-motion';
import ShareButton from '@/components/ShareButton';
import { HeroLayoutProps } from '../types';

export const DefaultHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pb-8 overflow-x-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover transition-all duration-700" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
    </div>
    <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="w-28 h-28 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
        </motion.div>
        <div className="text-center md:text-left flex-1 min-w-0 glass-card p-4 sm:p-6 md:p-8 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 sm:gap-4 mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gradient-bronze break-words"
            >
              {name}
            </motion.h1>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <ShareButton />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  </section>
);
