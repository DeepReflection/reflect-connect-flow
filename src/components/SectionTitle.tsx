import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-gradient-bronze inline-block">
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <div className="w-2 h-2 rounded-full bg-primary/60" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
