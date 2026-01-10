import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg w-full max-w-xs mx-auto"
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </motion.button>
  );
};

export default CTAButton;
