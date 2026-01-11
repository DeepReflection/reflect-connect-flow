import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Reflection {
  title: string;
  imageUrl: string;
}

interface ThemedReflectionsSectionProps {
  reflections: Reflection[];
}

// Editorial - Magazine horizontal scroll
const EditorialReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <div className="border-b-4 border-foreground">
      <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tight pb-4">
        Minhas Reflexões
      </h2>
    </div>
    <div className="overflow-x-auto pb-8 -mx-4 md:-mx-8 lg:-mx-12">
      <div className="flex gap-6 px-4 md:px-8 lg:px-12 min-w-max">
        {reflections.map((reflection, index) => (
          <motion.div
            key={reflection.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="w-40 md:w-56 group cursor-pointer shrink-0"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={reflection.imageUrl}
                alt={reflection.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="mt-4 text-base font-serif font-bold text-center">{reflection.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Brutalist - Raw grid
const BrutalistReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-8">
    <h2 className="text-6xl md:text-8xl font-black uppercase bg-foreground text-background inline-block px-4 py-2 -rotate-1">
      REFLEXÕES
    </h2>
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.02 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square border-4 border-foreground overflow-hidden hover:z-10 hover:scale-110 transition-transform">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-center text-xs font-black uppercase truncate">{reflection.title}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Glass - Floating glass cards
const GlassReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      ✨ Minhas Reflexões
    </h2>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 p-1 shadow-xl">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Neon - Cyberpunk grid
const NeonReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
    <h2 className="text-5xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative">
      REFLEXÕES
    </h2>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 relative">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.02 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            <div className="relative aspect-square border border-cyan-500/50 rounded-lg overflow-hidden bg-black group-hover:border-pink-500 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all">
              <img
                src={reflection.imageUrl}
                alt={reflection.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Retro - 80s arcade style
const RetroReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <div className="text-center">
      <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-b from-yellow-300 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        ★ REFLEXÕES ★
      </h2>
      <div className="w-60 h-1 mx-auto mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500" />
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square rounded-lg overflow-hidden border-4 border-yellow-400 shadow-[4px_4px_0_0_rgba(251,191,36,1)] group-hover:shadow-[6px_6px_0_0_rgba(251,191,36,1)] transition-all">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm font-bold text-yellow-300 group-hover:text-orange-400 transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Minimal - Clean zen
const MinimalReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-16">
    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Galeria</span>
      <h2 className="text-4xl md:text-5xl font-light mt-2">Minhas Reflexões</h2>
      <div className="w-16 h-px mx-auto mt-6 bg-foreground/20" />
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="mt-3 text-center text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Cards - Stacked floating
const CardsReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <h2 className="text-4xl md:text-5xl font-bold text-center">Minhas Reflexões</h2>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          whileHover={{ y: -8 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border bg-card shadow-lg group-hover:shadow-xl group-hover:border-primary/50 transition-all">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Gradient - Flowing colors
const GradientReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />
    <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent relative">
      Minhas Reflexões
    </h2>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 relative">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-background/50 backdrop-blur-sm p-0.5">
              <img
                src={reflection.imageUrl}
                alt={reflection.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Split - Alternating layout
const SplitReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <h2 className="text-4xl md:text-5xl font-bold">Minhas Reflexões</h2>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className={`group cursor-pointer ${index % 2 === 0 ? 'mt-4' : ''}`}
        >
          <div className={`aspect-square overflow-hidden ${index % 2 === 0 ? 'bg-accent/30' : 'bg-muted/30'} p-1`}>
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Magazine - Editorial grid (for nature-organic)
const MagazineReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <div className="space-y-12">
    <div className="border-y-2 border-foreground py-4">
      <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-center">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square overflow-hidden border border-foreground/20">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <p className="mt-2 text-center text-sm font-serif font-bold">{reflection.title}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Corporate Navy Layout - Professional portrait gallery
const CorporateNavyReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-10">
    <div className="flex items-end justify-between border-b-2 border-primary/30 pb-4">
      <div>
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Galeria de Líderes</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-1 tracking-tight">Minhas Reflexões</h2>
      </div>
      <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
        Conheça as figuras históricas que moldaram o destino da Segunda Guerra Mundial
      </p>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            {/* Image container */}
            <div className="aspect-square overflow-hidden">
              <img
                src={reflection.imageUrl}
                alt={reflection.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Name badge */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-background to-background/80">
              <p className="text-sm font-medium text-center truncate">{reflection.title}</p>
            </div>
            
            {/* Static name for non-hover state */}
            <div className="p-2 text-center border-t border-border/30 group-hover:opacity-0 transition-opacity">
              <p className="text-xs font-medium truncate text-muted-foreground">{reflection.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Executive Charcoal Reflections
const ExecutiveCharcoalReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-10">
    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.4em] text-primary/80 font-light">Galeria</span>
      <h2 className="text-4xl md:text-5xl font-light mt-2 tracking-tight">Minhas Reflexões</h2>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-sm border border-border/30 hover:border-primary/50 transition-all grayscale group-hover:grayscale-0">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-foreground transition-colors truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Startup Teal Reflections
const StartupTealReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-8">
    <div className="flex items-center gap-4">
      <div className="w-2 h-12 bg-primary rounded-full" />
      <h2 className="text-3xl md:text-4xl font-bold">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-xs text-center mt-2 font-medium truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Finance Green Reflections
const FinanceGreenReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-6">
    <div className="flex items-center justify-between border-b border-border pb-4">
      <h2 className="text-3xl font-semibold">Minhas Reflexões</h2>
      <span className="text-sm text-muted-foreground">{reflections.length} perfis</span>
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-colors">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Consulting Slate Reflections
const ConsultingSlateReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-10">
    <div className="max-w-2xl">
      <span className="text-primary text-sm font-medium uppercase tracking-wider">Galeria</span>
      <h2 className="text-4xl font-bold mt-2">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded-lg border border-border hover:shadow-lg transition-all">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <p className="text-xs text-center mt-2 font-medium truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Tech Indigo Reflections
const TechIndigoReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-8">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"><Star className="w-5 h-5 text-primary" /></div>
      <h2 className="text-3xl font-bold">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded-xl ring-2 ring-primary/20 hover:ring-primary/50 transition-all">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-xs text-center mt-2 truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Luxury Black Reflections
const LuxuryBlackReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-12">
    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.5em] text-primary/70">Galeria Exclusiva</span>
      <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-wide">Minhas Reflexões</h2>
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <div className="w-2 h-2 rotate-45 border border-primary/50" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group">
          <div className="aspect-square overflow-hidden rounded-sm border border-border/30 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center mt-2 tracking-wider text-muted-foreground/80 truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Modern Graphite Reflections
const ModernGraphiteReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-8">
    <div className="flex items-end justify-between">
      <h2 className="text-4xl font-black uppercase tracking-tight">Reflexões</h2>
      <span className="text-sm text-muted-foreground">{reflections.length} perfis</span>
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded border border-border hover:border-primary transition-colors">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center mt-1.5 font-bold truncate group-hover:text-primary transition-colors">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Innovation Blue Reflections
const InnovationBlueReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-10">
    <div className="relative">
      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
      <h2 className="text-4xl font-bold">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <p className="text-xs text-center mt-2 font-medium truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Prestige Burgundy Reflections
const PrestigeBurgundyReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-10">
    <div className="text-center space-y-3">
      <div className="inline-flex items-center gap-3">
        <div className="w-8 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Galeria</span>
        <div className="w-8 h-px bg-primary" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif">Minhas Reflexões</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {reflections.map((r, i) => (
        <motion.div key={r.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group">
          <div className="aspect-square overflow-hidden rounded border border-border/50 hover:border-primary/30 transition-all sepia group-hover:sepia-0">
            <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center mt-2 font-serif truncate">{r.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// Map layouts to themes - using actual theme IDs from ThemeContext
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen', 'corporate-navy', 'executive-charcoal', 'startup-teal', 'finance-green', 'consulting-slate', 'tech-indigo', 'luxury-black', 'modern-graphite', 'innovation-blue', 'prestige-burgundy'];

const layoutMap: Record<string, React.FC<{ reflections: Reflection[] }>> = {
  'magazine-editorial': EditorialReflections,
  'brutalist-raw': BrutalistReflections,
  'split-screen': SplitReflections,
  'glassmorphism': GlassReflections,
  'gradient-flow': GradientReflections,
  'card-stack': CardsReflections,
  'retro-wave': RetroReflections,
  'neon-gamer': NeonReflections,
  'nature-organic': MagazineReflections,
  'minimal-zen': MinimalReflections,
  'corporate-navy': CorporateNavyReflections,
  'executive-charcoal': ExecutiveCharcoalReflections,
  'startup-teal': StartupTealReflections,
  'finance-green': FinanceGreenReflections,
  'consulting-slate': ConsultingSlateReflections,
  'tech-indigo': TechIndigoReflections,
  'luxury-black': LuxuryBlackReflections,
  'modern-graphite': ModernGraphiteReflections,
  'innovation-blue': InnovationBlueReflections,
  'prestige-burgundy': PrestigeBurgundyReflections,
};

const ThemedReflectionsSection = ({ reflections }: ThemedReflectionsSectionProps) => {
  const { currentTheme } = useTheme();
  
  // Check if current theme has a unique layout
  if (layoutThemes.includes(currentTheme)) {
    const LayoutComponent = layoutMap[currentTheme];
    if (LayoutComponent) {
      return <LayoutComponent reflections={reflections} />;
    }
  }
  
  // Return null for non-layout themes (they will use default)
  return null;
};

export default ThemedReflectionsSection;
