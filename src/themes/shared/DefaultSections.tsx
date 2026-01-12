import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Download, ExternalLink } from 'lucide-react';
import { AGENDA_EVENTS, PRODUCTS, SERVICES } from './data';
import { Reflection } from '../types';

// Default Agenda Section
export const DefaultAgendaSection = () => (
  <section className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Agenda</h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-4" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {AGENDA_EVENTS.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card rounded-xl overflow-hidden h-full"
        >
          <div className="flex flex-col h-full">
            <div className="h-40 lg:h-48 relative">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
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
                <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">{event.description}</p>
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
      ))}
    </div>
  </section>
);

// Default Products Section
export const DefaultProductsSection = () => (
  <div className="space-y-16">
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Produtos</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden h-full"
          >
            <div className="flex flex-col h-full">
              <div className="h-48 lg:h-56">
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3">{product.title}</h3>
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">{product.description}</p>
                </div>
                {product.downloadUrl && (
                  <motion.a
                    href={product.downloadUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-5 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-medium text-sm lg:text-base"
                  >
                    <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                    Download
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Serviços</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden h-full"
          >
            <div className="flex flex-col h-full">
              <div className="h-48 lg:h-56">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
                {service.linkUrl && (
                  <motion.a
                    href={service.linkUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-5 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors font-medium text-sm lg:text-base"
                  >
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                    Saiba Mais
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Default Reflections Section
export const DefaultReflectionsSection = ({ reflections }: { reflections: Reflection[] }) => (
  <section className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Minhas Reflexões</h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-4" />
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
      {reflections.map((reflection, index) => (
        <motion.div
          key={reflection.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          className="group cursor-pointer"
        >
          <div className="aspect-square rounded-xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
            <img
              src={reflection.imageUrl}
              alt={reflection.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {reflection.title}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
