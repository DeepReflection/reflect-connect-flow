import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  url: string;
  icon: React.ReactNode;
  label: string;
  index: number;
}

const SocialLink = ({ url, icon, label, index }: SocialLinkProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="link-card flex items-center gap-4 p-4 rounded-xl border border-border group"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <span className="flex-1 text-foreground/90 font-medium truncate">
        {label}
      </span>
      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
    </motion.a>
  );
};

export default SocialLink;
