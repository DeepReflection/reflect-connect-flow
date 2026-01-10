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
      className="group cursor-pointer flex flex-col items-center"
    >
      {/* Image Container - matching original site style */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-2xl border-2 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(96,165,250,0.3)] group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Title below image */}
      <p className="mt-2 text-center text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
        {title}
      </p>
    </motion.div>
  );
};

export default ReflectionCard;
