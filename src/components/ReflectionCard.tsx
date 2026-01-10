import { motion } from 'framer-motion';

interface ReflectionCardProps {
  title: string;
  imageUrl: string;
  index: number;
}

const ReflectionCard = ({ title, imageUrl, index }: ReflectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
      className="reflection-card group"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        <h3 className="font-display text-sm font-medium text-foreground text-shadow-sm">
          {title}
        </h3>
      </div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
    </motion.div>
  );
};

export default ReflectionCard;
