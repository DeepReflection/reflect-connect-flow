import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

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

const EventCard = ({ event, index }: { event: AgendaEvent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card rounded-xl overflow-hidden h-full"
  >
    <div className="flex flex-col h-full">
      <div className="h-40 lg:h-48 relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {event.date}
        </div>
      </div>
      <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {event.time}
            </span>
            {event.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
            )}
          </div>
          <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3">
            {event.title}
          </h3>
          <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
            {event.description}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-5 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-medium text-sm lg:text-base"
        >
          <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
          Adicionar ao Calendário
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const AgendaSection = () => {
  return (
    <section className="space-y-6">
      <SectionTitle title="Agenda" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {AGENDA_EVENTS.map((event, index) => (
          <EventCard key={event.title} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AgendaSection;
