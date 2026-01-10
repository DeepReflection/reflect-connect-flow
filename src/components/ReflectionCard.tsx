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
      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-[3px] shadow-lg group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all duration-500">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      {/* Title below image */}
      <p className="mt-3 text-center text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </p>
    </motion.div>
  );
};

export default ReflectionCard;
