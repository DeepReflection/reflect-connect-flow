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
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500 glow-primary">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </div>
      
      {/* Title below image */}
      <div className="mt-3 text-center">
        <h3 className="font-display text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ReflectionCard;
