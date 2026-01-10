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
  | 'stacked';

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
};
