import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCTAProps {
  variant?: 'button' | 'card' | 'inline';
}

const BlogCTA = ({ variant = 'button' }: BlogCTAProps) => {
  if (variant === 'inline') {
    return (
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
      >
        <BookOpen className="w-4 h-4" />
        Visitar Blog
        <ArrowRight className="w-4 h-4" />
      </Link>
    );
  }

  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              Explore Nosso Blog
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Artigos aprofundados sobre a Segunda Guerra Mundial, análises históricas e muito mais.
            </p>
          </div>
          
          <Link
            to="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Acessar Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
      </motion.div>
    );
  }

  // Default button variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Link to="/blog">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-card border border-primary/30 text-foreground font-semibold text-lg w-full max-w-xs mx-auto hover:border-primary/60 hover:bg-primary/5 transition-all"
        >
          <BookOpen className="w-5 h-5 text-primary" />
          Visitar Blog
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default BlogCTA;
