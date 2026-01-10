import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
}

const CTAButton = ({ text, to = '/chat', onClick }: CTAButtonProps) => {
  return (
    <Link to={to}>
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
    </Link>
  );
};

export default CTAButton;
