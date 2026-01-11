import { motion } from 'framer-motion';
import ShareButton from '@/components/ShareButton';

export type HeroLayoutType = 
  | 'classic'
  | 'centered'
  | 'minimal'
  | 'editorial'
  | 'retro'
  | 'organic'
  | 'brutalist'
  | 'glass'
  | 'split'
  | 'gradient'
  | 'stacked'
  // Business layouts
  | 'corporate'
  | 'executive'
  | 'startup'
  | 'finance'
  | 'consulting'
  | 'tech'
  | 'luxury'
  | 'graphite'
  | 'innovation'
  | 'prestige';

interface HeroLayoutProps {
  name: string;
  description: string;
  avatarUrl: string;
  bannerImage: string;
}

// Classic Layout (default)
export const ClassicHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
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

// Centered Layout - Neon Gamer style
export const CenteredHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-8">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
    </div>
    {/* Neon glow effects - smaller on mobile */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-accent/20 rounded-full blur-[40px] md:blur-[80px] animate-pulse delay-1000" />
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-4 max-w-2xl"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative mx-auto mb-6 md:mb-8"
      >
        <div className="w-32 h-32 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.5)] md:shadow-[0_0_60px_hsl(var(--primary)/0.5)]">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -inset-2 md:-inset-4 rounded-full border border-primary/30 animate-ping opacity-30" />
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-bronze"
        >
          {name}
        </motion.h1>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.6 }}>
          <ShareButton />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-foreground/70 text-sm md:text-lg lg:text-xl leading-relaxed px-2"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Minimal Layout - Zen style
export const MinimalHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative py-12 md:py-24 px-4 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover blur-sm" />
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 max-w-xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border border-border">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-xl md:text-3xl font-medium text-foreground"
            >
              {name}
            </motion.h1>
            <ShareButton />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-muted-foreground text-sm leading-relaxed text-center sm:text-left"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Editorial Layout - Magazine style
export const EditorialHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[auto] md:min-h-[70vh] lg:min-h-[80vh] flex flex-col lg:grid lg:grid-cols-2 overflow-hidden">
    <div className="relative h-48 sm:h-64 lg:h-auto lg:min-h-full order-1 lg:order-1">
      <img src={bannerImage} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/50 to-transparent" />
    </div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-16 order-2 lg:order-2"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-primary mb-4 md:mb-8 mx-auto lg:mx-0"
      >
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-4 mb-4 md:mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-foreground leading-none text-center lg:text-left"
        >
          {name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <ShareButton />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '80px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-1 bg-primary mb-4 md:mb-6 mx-auto lg:mx-0"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-foreground/70 text-sm md:text-lg lg:text-xl leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Retro Layout - 80s style with diagonal elements
export const RetroHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center overflow-hidden py-8">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-primary/20" />
    </div>
    {/* Retro grid lines - hidden on mobile for performance */}
    <div className="absolute inset-0 opacity-20 hidden md:block">
      <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
        background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)/0.3))',
        backgroundImage: `linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px),
                          linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }} />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full px-4 md:px-16 flex flex-col items-center md:flex-row gap-6 md:gap-8"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative"
      >
        <div className="w-28 h-28 md:w-48 md:h-48 rounded-lg overflow-hidden transform rotate-3 border-4 border-primary shadow-[4px_4px_0px_hsl(var(--accent))] md:shadow-[8px_8px_0px_hsl(var(--accent))]">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      </motion.div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 mb-4">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-wider"
            style={{ textShadow: '2px 2px 0px hsl(var(--primary))' }}
          >
            {name}
          </motion.h1>
          <ShareButton />
        </div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-foreground/80 text-sm md:text-lg lg:text-xl max-w-xl px-2 md:px-0"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  </section>
);

// Organic Layout - Natural curved elements
export const OrganicHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
    </div>
    {/* Organic curved shape */}
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64">
      <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path fill="hsl(var(--background))" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[45vh] md:min-h-[50vh] px-4 text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative mb-4 md:mb-6"
      >
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-[40%_60%_70%_30%/50%_30%_70%_60%] overflow-hidden border-4 border-primary/50">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-gradient-bronze"
        >
          {name}
        </motion.h1>
        <ShareButton />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-foreground/70 text-sm md:text-lg max-w-lg leading-relaxed px-2"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Brutalist Layout - Raw, blocky design
export const BrutalistHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[auto] md:min-h-[60vh] overflow-hidden bg-background">
    <div className="flex flex-col md:grid md:grid-cols-3 min-h-[auto] md:min-h-[60vh]">
      <div className="relative h-40 md:h-auto md:col-span-1">
        <img src={bannerImage} alt="Banner" className="w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 flex flex-col justify-center p-6 md:p-16 border-t-4 md:border-t-0 md:border-l-8 border-primary"
      >
        <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-16 md:w-32 md:h-32 overflow-hidden border-4 border-foreground flex-shrink-0"
          >
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
          <ShareButton />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display text-2xl sm:text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter mb-2 md:mb-4"
        >
          {name}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 md:h-2 bg-primary mb-4 md:mb-6 max-w-md"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground text-sm md:text-lg max-w-lg font-mono"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Glass Layout - Glassmorphism effect
export const GlassHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-8 md:py-0">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover scale-110 blur-sm" />
      <div className="absolute inset-0 bg-background/30" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mx-4 max-w-2xl w-full mt-8 md:mt-0"
    >
      <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-[0_8px_32px_hsl(0_0%_0%/0.3)]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="-mt-16 md:-mt-24 mb-4 md:mb-6"
          >
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-xl md:rounded-2xl rotate-45 overflow-hidden border-4 border-primary/50 shadow-lg">
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover -rotate-45 scale-150" />
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-gradient-bronze"
            >
              {name}
            </motion.h1>
            <ShareButton />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-foreground/80 text-sm md:text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  </section>
);

// Split Layout - Half and half design
export const SplitHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[auto] md:min-h-[70vh] flex flex-col md:grid md:grid-cols-2 overflow-hidden">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center bg-primary/10 p-6 md:p-8 min-h-[30vh] md:min-h-0"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-8 border-primary/30"
        >
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center"
        >
          <span className="text-primary-foreground text-lg md:text-3xl font-bold">✦</span>
        </motion.div>
      </div>
    </motion.div>
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col justify-center p-6 md:p-16"
    >
      <img src={bannerImage} alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 sm:gap-4 mb-4 md:mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight text-center md:text-left"
          >
            {name}
          </motion.h1>
          <ShareButton />
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-4 md:mb-6 origin-left mx-auto md:mx-0"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-foreground/70 text-sm md:text-xl leading-relaxed max-w-md text-center md:text-left"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  </section>
);

// Gradient Flow Layout - Fluid gradient backgrounds
export const GradientHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center overflow-hidden py-8">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-30" />
    </div>
    {/* Animated gradient blobs - smaller on mobile */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[200px] md:w-[600px] h-[200px] md:h-[600px] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-[60px] md:blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[150px] md:w-[500px] h-[150px] md:h-[500px] rounded-full bg-gradient-to-tl from-accent/40 to-transparent blur-[50px] md:blur-[100px]"
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-full px-4 md:px-16 flex flex-col items-center md:flex-row gap-6 md:gap-10"
    >
      <motion.div
        initial={{ scale: 0, rotate: 10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="relative"
      >
        <div className="w-32 h-32 md:w-56 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/50 shadow-[0_10px_30px_hsl(var(--primary)/0.3)] md:shadow-[0_20px_60px_hsl(var(--primary)/0.3)]">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -inset-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 -z-10 blur-lg" />
      </motion.div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 mb-4">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground"
          >
            {name}
          </motion.h1>
          <ShareButton />
        </div>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-foreground/70 text-sm md:text-xl max-w-lg leading-relaxed px-2 md:px-0"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  </section>
);

// Stacked Layout - Cards stacked effect
export const StackedHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-16 px-4">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-background" />
    </div>
    <div className="relative z-10 w-full max-w-lg">
      {/* Background cards - simplified on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-card/60 rounded-xl md:rounded-2xl border border-border/30 transform -rotate-6 scale-95 hidden sm:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute inset-0 bg-card/80 rounded-xl md:rounded-2xl border border-border/50 transform rotate-3 scale-[0.97] hidden sm:block"
      />
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-8 shadow-xl"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/50 mb-4 md:mb-6 shadow-lg"
          >
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-bronze"
            >
              {name}
            </motion.h1>
            <ShareButton />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// BUSINESS HERO LAYOUTS
// ============================================

// Corporate Navy - Professional banner with stats
export const CorporateHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
    </div>
    <div className="relative z-10 h-full flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 md:px-16 py-12"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 md:gap-6 mb-6"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-1">Bem-vindo a</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                {name}
              </h1>
            </div>
            <ShareButton />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/70 text-sm md:text-lg leading-relaxed mb-6 max-w-2xl"
          >
            {description}
          </motion.p>
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 md:gap-12 pt-6 border-t border-border/50"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">98%</p>
              <p className="text-xs md:text-sm text-muted-foreground">Satisfação</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Executive Charcoal - Minimalist executive with signature
export const ExecutiveHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[65vh] bg-background overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
    </div>
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[55vh] md:min-h-[65vh] px-6 md:px-16 py-12 gap-8 md:gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-border shadow-2xl">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute -bottom-2 -right-2 w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center"
        >
          <span className="text-primary-foreground text-sm md:text-lg">✓</span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left max-w-xl"
      >
        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            {name}
          </h1>
          <ShareButton />
        </div>
        <div className="w-16 h-0.5 bg-primary mx-auto md:mx-0 mb-6" />
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed italic">
          "{description}"
        </p>
        <p className="text-primary mt-4 font-display text-lg">— CEO & Fundador</p>
      </motion.div>
    </div>
  </section>
);

// Startup Teal - Dynamic with floating elements
export const StartupHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
    </div>
    {/* Floating shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:right-32 w-16 md:w-32 h-16 md:h-32 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-10 md:left-20 w-12 md:w-24 h-12 md:h-24 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[70vh] px-6 text-center py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-3xl rotate-6 overflow-hidden border-4 border-primary shadow-xl">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover -rotate-6 scale-110" />
        </div>
      </motion.div>
      <div className="flex items-center gap-3 mb-4">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-medium border border-primary/30"
        >
          🚀 Inovação
        </motion.span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
        >
          {name}
        </motion.h1>
        <ShareButton />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-foreground/70 text-sm md:text-lg max-w-lg leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Finance Green - Chart-inspired with growth indicator
export const FinanceHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden bg-background">
    <div className="absolute inset-0 opacity-10">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
    </div>
    {/* Growth line decoration */}
    <svg className="absolute bottom-0 left-0 right-0 h-32 md:h-64 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        d="M0,256 L120,224 L240,192 L360,208 L480,160 L600,176 L720,128 L840,144 L960,96 L1080,112 L1200,64 L1320,80 L1440,32"
      />
    </svg>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-16 py-12 min-h-[55vh] md:min-h-[65vh]"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-primary/50 shadow-lg">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs md:text-sm font-bold flex items-center gap-1"
          >
            <span>↗</span> +25%
          </motion.div>
        </div>
      </motion.div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground"
          >
            {name}
          </motion.h1>
          <ShareButton />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/70 text-sm md:text-lg leading-relaxed mb-6 max-w-xl"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">Mercado Ativo</span>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// Consulting Slate - Professional grid layout
export const ConsultingHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[auto] md:min-h-[60vh] overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[auto] md:min-h-[60vh]">
      <div className="relative md:col-span-5 h-48 md:h-auto">
        <img src={bannerImage} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 flex flex-col justify-center p-6 md:p-12 lg:p-16 bg-background"
      >
        <div className="flex items-start gap-4 md:gap-6 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-border shadow-md flex-shrink-0"
          >
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="flex-1">
            <p className="text-primary text-xs md:text-sm font-medium uppercase tracking-widest mb-2">Consultoria Estratégica</p>
            <div className="flex items-center gap-3">
              <h1 className="font-display text-xl sm:text-2xl md:text-4xl font-semibold text-foreground">
                {name}
              </h1>
              <ShareButton />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-0.5 bg-primary mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-3 mt-6"
        >
          {['Estratégia', 'Gestão', 'Resultados'].map((tag, i) => (
            <span key={tag} className="px-3 py-1 text-xs md:text-sm bg-secondary text-secondary-foreground rounded-md">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Tech Indigo - Futuristic with code elements
export const TechHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    </div>
    {/* Code-like decorations */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <pre className="absolute top-10 left-10 text-primary text-xs md:text-sm font-mono">
        {`const future = {\n  innovation: true,\n  technology: "∞"\n};`}
      </pre>
      <pre className="absolute bottom-20 right-10 text-accent text-xs md:text-sm font-mono">
        {`async function build() {\n  return await dreams();\n}`}
      </pre>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[70vh] px-6 text-center py-12"
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-1 rounded-2xl border border-primary/50"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-sm font-mono">ONLINE</span>
      </motion.div>
      <div className="flex items-center gap-3 mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
        >
          {name}
        </motion.h1>
        <ShareButton />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-foreground/70 text-sm md:text-lg max-w-lg leading-relaxed font-mono"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Luxury Black - Premium with gold accents
export const LuxuryHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-20" />
    </div>
    {/* Gold corner accents */}
    <div className="absolute top-0 left-0 w-24 md:w-48 h-24 md:h-48 border-t-2 border-l-2 border-primary/50" />
    <div className="absolute bottom-0 right-0 w-24 md:w-48 h-24 md:h-48 border-b-2 border-r-2 border-primary/50" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[70vh] px-6 text-center py-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.2)]">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* Decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border border-primary/20 rounded-full"
          style={{ borderStyle: 'dashed' }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4"
      >
        ✦ Exclusivo ✦
      </motion.p>
      <div className="flex items-center gap-3 mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-light text-foreground tracking-wider"
        >
          {name}
        </motion.h1>
        <ShareButton />
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-muted-foreground text-sm md:text-lg max-w-md leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Modern Graphite - Clean contemporary
export const GraphiteHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-background">
    <div className="absolute inset-0 opacity-5">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-border">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground"
            >
              {name}
            </motion.h1>
            <ShareButton />
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-0.5 bg-primary mx-auto md:mx-0 mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  </section>
);

// Innovation Blue - Dynamic with energy
export const InnovationHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[70vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-primary/20" />
    </div>
    {/* Energy lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        x1="0" y1="100" x2="100" y2="0"
        stroke="hsl(var(--primary))"
        strokeWidth="0.2"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        x1="20" y1="100" x2="100" y2="20"
        stroke="hsl(var(--accent))"
        strokeWidth="0.1"
      />
    </svg>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 min-h-[55vh] md:min-h-[70vh] gap-8"
    >
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
        >
          💡 Inovação em Ação
        </motion.div>
        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
          >
            {name}
          </motion.h1>
          <ShareButton />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/70 text-sm md:text-lg max-w-lg leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="w-32 h-32 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)] transform rotate-3">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-xl"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Prestige Burgundy - Elegant wine theme
export const PrestigeHeroLayout = ({ name, description, avatarUrl, bannerImage }: HeroLayoutProps) => (
  <section className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden">
    <div className="absolute inset-0">
      <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[65vh] px-6 text-center py-12"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* Decorative elements */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-primary/50" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-primary/50" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-3 text-primary/70 text-sm uppercase tracking-widest mb-4"
      >
        <span className="w-8 h-px bg-primary/50" />
        <span>Prestígio</span>
        <span className="w-8 h-px bg-primary/50" />
      </motion.div>
      <div className="flex items-center gap-3 mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground"
        >
          {name}
        </motion.h1>
        <ShareButton />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-foreground/70 text-sm md:text-lg max-w-md leading-relaxed italic"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);

// Layout selector map
export const heroLayouts: Record<HeroLayoutType, React.ComponentType<HeroLayoutProps>> = {
  classic: ClassicHeroLayout,
  centered: CenteredHeroLayout,
  minimal: MinimalHeroLayout,
  editorial: EditorialHeroLayout,
  retro: RetroHeroLayout,
  organic: OrganicHeroLayout,
  brutalist: BrutalistHeroLayout,
  glass: GlassHeroLayout,
  split: SplitHeroLayout,
  gradient: GradientHeroLayout,
  stacked: StackedHeroLayout,
  // Business layouts
  corporate: CorporateHeroLayout,
  executive: ExecutiveHeroLayout,
  startup: StartupHeroLayout,
  finance: FinanceHeroLayout,
  consulting: ConsultingHeroLayout,
  tech: TechHeroLayout,
  luxury: LuxuryHeroLayout,
  graphite: GraphiteHeroLayout,
  innovation: InnovationHeroLayout,
  prestige: PrestigeHeroLayout,
};
