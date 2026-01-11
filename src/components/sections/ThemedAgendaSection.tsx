import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export interface AgendaEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
}

export const AGENDA_EVENTS: AgendaEvent[] = [
  {
    date: "15 Jan 2025",
    time: "19:00",
    title: "Palestra: O Dia D - 80 Anos Depois",
    description: "Uma análise profunda dos eventos que marcaram o desembarque aliado na Normandia.",
    imageUrl: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=400&h=300&fit=crop",
    location: "Centro Cultural São Paulo",
  },
  {
    date: "22 Jan 2025",
    time: "14:30",
    title: "Workshop: Pesquisa Histórica na Era Digital",
    description: "Técnicas modernas para pesquisar e documentar eventos da Segunda Guerra Mundial.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    location: "Biblioteca Nacional",
  },
  {
    date: "05 Fev 2025",
    time: "20:00",
    title: "Live: Batalha de Stalingrado",
    description: "Transmissão ao vivo discutindo os momentos decisivos da batalha mais sangrenta da história.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop",
    location: "YouTube & Instagram",
  },
  {
    date: "18 Fev 2025",
    time: "10:00",
    title: "Visita Guiada: Museu da Segunda Guerra",
    description: "Tour exclusivo pelo acervo histórico com comentários especializados.",
    imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=300&fit=crop",
    location: "Museu Histórico Nacional",
  },
];

// Editorial Layout - Magazine style
const EditorialAgenda = () => (
  <section className="space-y-8">
    <div className="border-b-4 border-foreground mb-8">
      <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tight pb-4">
        Agenda
      </h2>
    </div>
    <div className="space-y-8">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.article
          key={event.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center border-b border-foreground/10 pb-8`}
        >
          <div className="w-full md:w-1/3 aspect-video overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="w-full md:w-2/3 space-y-3">
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.time}</span>
              {event.location && (
                <>
                  <span>•</span>
                  <span>{event.location}</span>
                </>
              )}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">{event.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-4 transition-all">
              Participar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

// Brutalist Layout
const BrutalistAgenda = () => (
  <section>
    <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 bg-foreground text-background inline-block px-4 py-2 -rotate-1">
      AGENDA
    </h2>
    <div className="space-y-4">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-4 border-foreground bg-background p-0 hover:bg-foreground hover:text-background transition-colors group flex flex-col md:flex-row"
        >
          <div className="w-full md:w-48 h-32 md:h-auto flex-shrink-0">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 p-6">
            <div className="flex flex-wrap gap-4 text-sm font-mono uppercase mb-2">
              <span className="bg-foreground text-background group-hover:bg-background group-hover:text-foreground px-2 py-1">
                {event.date}
              </span>
              <span>{event.time}</span>
            </div>
            <h3 className="text-2xl font-black uppercase">{event.title}</h3>
            <p className="mt-2 opacity-80">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Split Screen Layout
const SplitAgenda = () => (
  <section>
    <div className="flex flex-col md:flex-row min-h-[60vh]">
      <div className="w-full md:w-1/3 bg-foreground text-background p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Agenda</h2>
        <p className="mt-4 text-background/80">Próximos eventos e encontros sobre a Segunda Guerra Mundial</p>
      </div>
      <div className="w-full md:w-2/3 p-8 md:p-12 space-y-6">
        {AGENDA_EVENTS.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4 border-b border-foreground/10 pb-6"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1">
                <span className="font-semibold text-primary">{event.date}</span>
                <span>{event.time}</span>
              </div>
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Glassmorphism Layout
const GlassAgenda = () => (
  <section className="space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
      Agenda
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs">{event.date}</span>
                <span className="text-muted-foreground">{event.time}</span>
              </div>
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Gradient Flow Layout
const GradientAgenda = () => (
  <section className="space-y-8">
    <h2 className="text-4xl md:text-6xl font-black text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
      Agenda
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative rounded-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">{event.date}</span>
                  <span className="text-muted-foreground">• {event.time}</span>
                </div>
                <h3 className="font-bold">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Card Stack Layout
const CardsAgenda = () => (
  <section className="space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold">Agenda</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10, rotate: Math.random() * 4 - 2 }}
          className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg"
        >
          <div className="h-32 overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Calendar className="w-3 h-3" />
              <span>{event.date}</span>
              <Clock className="w-3 h-3 ml-2" />
              <span>{event.time}</span>
            </div>
            <h3 className="font-bold text-sm">{event.title}</h3>
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Retro Wave Layout
const RetroAgenda = () => (
  <section className="space-y-8">
    <h2 className="text-5xl md:text-7xl font-black text-center" style={{ textShadow: '4px 4px 0 hsl(var(--primary)), 8px 8px 0 hsl(var(--secondary))' }}>
      AGENDA
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-foreground rounded-none p-0 overflow-hidden"
        >
          <div className="flex">
            <div className="w-32 h-32 flex-shrink-0">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center gap-2 text-sm font-mono mb-2">
                <span className="bg-primary text-primary-foreground px-2">{event.date}</span>
                <span>{event.time}</span>
              </div>
              <h3 className="font-bold uppercase">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Neon Gamer Layout
const NeonAgenda = () => (
  <section className="space-y-8">
    <h2 className="text-5xl md:text-7xl font-black text-center uppercase tracking-wider"
        style={{ textShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)), 0 0 60px hsl(var(--primary))' }}>
      Agenda
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative bg-background/50 border-2 border-primary rounded-lg p-0 overflow-hidden group"
          style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
        >
          <div className="flex">
            <div className="w-28 h-28 flex-shrink-0 relative">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold">{event.date}</span>
                <span className="text-muted-foreground">{event.time}</span>
              </div>
              <h3 className="font-bold uppercase">{event.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Nature Organic Layout
const NatureAgenda = () => (
  <section className="space-y-8">
    <div className="text-center">
      <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Próximos Eventos</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Agenda</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card/50 rounded-3xl p-6 border border-border/50"
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">{event.date}</span>
                <span>{event.time}</span>
              </div>
              <h3 className="font-serif font-bold">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Minimal Zen Layout
const MinimalAgenda = () => (
  <section className="space-y-12">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-light tracking-wide">Agenda</h2>
      <div className="w-12 h-px bg-foreground/30 mx-auto mt-4" />
    </div>
    <div className="space-y-8">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-6 items-start border-b border-foreground/10 pb-8"
        >
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.time}</span>
              {event.location && (
                <>
                  <span>•</span>
                  <span>{event.location}</span>
                </>
              )}
            </div>
            <h3 className="text-lg font-medium">{event.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Map layouts to themes
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen'];

const layoutMap: Record<string, React.FC> = {
  'magazine-editorial': EditorialAgenda,
  'brutalist-raw': BrutalistAgenda,
  'split-screen': SplitAgenda,
  'glassmorphism': GlassAgenda,
  'gradient-flow': GradientAgenda,
  'card-stack': CardsAgenda,
  'retro-wave': RetroAgenda,
  'neon-gamer': NeonAgenda,
  'nature-organic': NatureAgenda,
  'minimal-zen': MinimalAgenda,
};

const ThemedAgendaSection = () => {
  const { currentTheme } = useTheme();
  
  if (layoutThemes.includes(currentTheme)) {
    const LayoutComponent = layoutMap[currentTheme];
    if (LayoutComponent) {
      return <LayoutComponent />;
    }
  }
  
  return null;
};

export default ThemedAgendaSection;
