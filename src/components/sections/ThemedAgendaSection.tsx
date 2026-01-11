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

// Corporate Navy Layout - Professional executive style with navy accents
const CorporateNavyAgenda = () => (
  <section className="space-y-10">
    {/* Header with subtle navy underline */}
    <div className="flex items-end justify-between border-b-2 border-primary/30 pb-4">
      <div>
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Próximos Eventos</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-1 tracking-tight">Agenda Executiva</h2>
      </div>
      <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
        <span>Calendário Completo</span>
      </div>
    </div>
    
    {/* Timeline-style events */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      
      <div className="space-y-8">
        {AGENDA_EVENTS.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-16 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
            
            {/* Event card */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors group">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-48 h-32 md:h-auto flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    {event.location && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  
                  <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Inscrever-se
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Executive Charcoal - Sophisticated dark executive style
const ExecutiveCharcoalAgenda = () => (
  <section className="space-y-10">
    <div className="text-center mb-12">
      <div className="inline-block">
        <span className="text-xs uppercase tracking-[0.4em] text-primary/80 font-light">Calendário Executivo</span>
        <h2 className="text-4xl md:text-5xl font-light mt-2 tracking-tight">Agenda</h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-gradient-to-br from-card to-card/50 border border-border/30 rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
          <div className="flex">
            <div className="w-28 h-28 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2 font-light tracking-wider">
                <span className="text-primary">{event.date}</span>
                <span>|</span>
                <span>{event.time}</span>
              </div>
              <h3 className="font-medium text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Startup Teal - Modern energetic startup vibe
const StartupTealAgenda = () => (
  <section className="space-y-8">
    <div className="flex items-center gap-4">
      <div className="w-2 h-12 bg-primary rounded-full" />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Próximos Eventos</h2>
        <p className="text-muted-foreground">Fique por dentro das novidades</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-card rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
        >
          <div className="h-32 relative overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <span className="absolute bottom-2 left-3 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-bold">{event.date}</span>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-1 text-xs text-primary mb-2">
              <Clock className="w-3 h-3" />
              <span>{event.time}</span>
            </div>
            <h3 className="font-bold text-sm mb-1 line-clamp-2">{event.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Finance Green - Professional financial style
const FinanceGreenAgenda = () => (
  <section className="space-y-8">
    <div className="flex items-center justify-between border-b border-border pb-4">
      <h2 className="text-3xl font-semibold">Agenda de Eventos</h2>
      <div className="flex items-center gap-2 text-sm text-primary">
        <Calendar className="w-4 h-4" />
        <span>Ver calendário completo</span>
      </div>
    </div>
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr className="text-left text-sm">
            <th className="p-4 font-medium">Data</th>
            <th className="p-4 font-medium">Evento</th>
            <th className="p-4 font-medium hidden md:table-cell">Local</th>
            <th className="p-4 font-medium text-right">Ação</th>
          </tr>
        </thead>
        <tbody>
          {AGENDA_EVENTS.map((event, index) => (
            <motion.tr
              key={event.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-border hover:bg-muted/30 transition-colors"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                    <img src={event.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <p className="font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{event.description}</p>
              </td>
              <td className="p-4 hidden md:table-cell text-sm text-muted-foreground">{event.location}</td>
              <td className="p-4 text-right">
                <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90">
                  Inscrever
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

// Consulting Slate - Clean professional consulting style
const ConsultingSlateAgenda = () => (
  <section className="space-y-10">
    <div className="max-w-2xl">
      <span className="text-primary text-sm font-medium uppercase tracking-wider">Próximos Eventos</span>
      <h2 className="text-4xl font-bold mt-2">Agenda</h2>
      <p className="text-muted-foreground mt-3">Participe dos nossos eventos e amplie seu conhecimento histórico.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-5 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
        >
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">{event.date}</span>
              <span className="text-muted-foreground">{event.time}</span>
            </div>
            <h3 className="font-semibold mb-1">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Tech Indigo - Modern tech-focused style
const TechIndigoAgenda = () => (
  <section className="space-y-8">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
        <Calendar className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Agenda</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-gradient-to-br from-card via-card to-primary/5 rounded-xl p-5 border border-border hover:border-primary/50 transition-all overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
          <div className="relative flex gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">{event.date}</span>
                <span className="text-muted-foreground">{event.time}</span>
              </div>
              <h3 className="font-semibold truncate">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Luxury Black - Premium luxury style
const LuxuryBlackAgenda = () => (
  <section className="space-y-12">
    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.5em] text-primary/70">Experiências Exclusivas</span>
      <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-wide">Agenda</h2>
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <div className="w-2 h-2 rotate-45 border border-primary/50" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
          <div className="relative border border-border/50 rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="flex">
              <div className="w-32 h-36 flex-shrink-0 overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs tracking-widest text-primary/80 mb-2">{event.date} • {event.time}</div>
                  <h3 className="text-lg font-light tracking-wide">{event.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Modern Graphite - Clean modern industrial
const ModernGraphiteAgenda = () => (
  <section className="space-y-8">
    <div className="flex items-end justify-between">
      <h2 className="text-4xl font-black uppercase tracking-tight">Agenda</h2>
      <span className="text-sm text-muted-foreground">{AGENDA_EVENTS.length} eventos</span>
    </div>
    <div className="space-y-3">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group flex items-center gap-4 p-4 bg-card border border-border rounded hover:bg-muted/50 transition-colors"
        >
          <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 ring-1 ring-border">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1">
              <span className="font-mono text-primary">{event.date}</span>
              <span>{event.time}</span>
            </div>
            <h3 className="font-bold truncate group-hover:text-primary transition-colors">{event.title}</h3>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </motion.div>
      ))}
    </div>
  </section>
);

// Innovation Blue - Creative innovation style
const InnovationBlueAgenda = () => (
  <section className="space-y-10">
    <div className="relative">
      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
      <h2 className="text-4xl font-bold">Agenda de Inovação</h2>
      <p className="text-muted-foreground mt-2">Eventos que transformam conhecimento em experiência</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, rotateX: -10 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-gradient-to-br from-card to-card/80 rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="h-36 relative overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">{event.date}</span>
              <span className="text-sm text-foreground/80">{event.time}</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Prestige Burgundy - Elegant prestigious style
const PrestigeBurgundyAgenda = () => (
  <section className="space-y-10">
    <div className="text-center space-y-3">
      <div className="inline-flex items-center gap-3">
        <div className="w-8 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Eventos</span>
        <div className="w-8 h-px bg-primary" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif">Agenda</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-card border border-border/50 rounded overflow-hidden hover:border-primary/30 transition-all"
        >
          <div className="flex">
            <div className="w-28 h-32 flex-shrink-0 overflow-hidden">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover sepia group-hover:sepia-0 transition-all duration-500" />
            </div>
            <div className="flex-1 p-5">
              <div className="flex items-center gap-2 text-sm text-primary mb-2 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{event.date}</span>
                <span className="text-muted-foreground">• {event.time}</span>
              </div>
              <h3 className="font-serif text-lg mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Map layouts to themes
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen', 'corporate-navy', 'executive-charcoal', 'startup-teal', 'finance-green', 'consulting-slate', 'tech-indigo', 'luxury-black', 'modern-graphite', 'innovation-blue', 'prestige-burgundy'];

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
  'corporate-navy': CorporateNavyAgenda,
  'executive-charcoal': ExecutiveCharcoalAgenda,
  'startup-teal': StartupTealAgenda,
  'finance-green': FinanceGreenAgenda,
  'consulting-slate': ConsultingSlateAgenda,
  'tech-indigo': TechIndigoAgenda,
  'luxury-black': LuxuryBlackAgenda,
  'modern-graphite': ModernGraphiteAgenda,
  'innovation-blue': InnovationBlueAgenda,
  'prestige-burgundy': PrestigeBurgundyAgenda,
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
