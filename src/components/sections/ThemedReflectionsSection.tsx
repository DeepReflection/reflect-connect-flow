import { motion } from 'framer-motion';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';

interface Reflection {
  title: string;
  imageUrl: string;
}

interface ThemedReflectionsSectionProps {
  reflections: Reflection[];
}

// Editorial - Magazine horizontal scroll
const EditorialReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16">
    <div className="border-b-4 border-foreground mb-12 px-4 md:px-8">
      <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tight pb-4">
        Minhas Reflexões
      </h2>
    </div>
    <div className="overflow-x-auto pb-8">
      <div className="flex gap-6 px-4 md:px-8 min-w-max">
        {reflections.map((reflection, index) => (
          <motion.div
            key={reflection.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="w-48 md:w-64 group cursor-pointer shrink-0"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={reflection.imageUrl}
                alt={reflection.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="mt-4 text-lg font-serif font-bold">{reflection.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Brutalist - Raw grid
const BrutalistReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 bg-foreground text-background inline-block px-4 py-2 -rotate-1">
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
          className="aspect-square border-4 border-foreground overflow-hidden group cursor-pointer hover:z-10 hover:scale-110 transition-transform"
        >
          <img
            src={reflection.imageUrl}
            alt={reflection.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
    <div className="mt-8 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-2">
      {reflections.map((reflection) => (
        <div key={`label-${reflection.title}`} className="text-xs font-black uppercase truncate border-2 border-foreground p-1">
          {reflection.title}
        </div>
      ))}
    </div>
  </section>
);

// Glass - Floating glass cards
const GlassReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
  </section>
);

// Neon - Cyberpunk grid
const NeonReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20" />
    <h2 className="text-5xl md:text-7xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative">
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
  </section>
);

// Retro - 80s arcade style
const RetroReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <div className="text-center mb-12">
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
  </section>
);

// Minimal - Clean zen
const MinimalReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-20 px-4 md:px-8">
    <div className="text-center mb-16">
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
  </section>
);

// Cards - Stacked floating
const CardsReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Minhas Reflexões</h2>
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
  </section>
);

// Gradient - Flowing colors
const GradientReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent relative">
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
  </section>
);

// Split - Alternating layout
const SplitReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Minhas Reflexões</h2>
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
  </section>
);

// Magazine - Editorial grid
const MagazineReflections = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="py-16 px-4 md:px-8">
    <div className="border-y-2 border-foreground py-4 mb-12">
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
  </section>
);

// Map layouts to themes - using actual theme IDs from ThemeContext
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen'];

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
