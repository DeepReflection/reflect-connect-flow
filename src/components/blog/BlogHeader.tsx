import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface BlogHeaderProps {
  showBackButton?: boolean;
}

const BlogHeader = ({ showBackButton = false }: BlogHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link
              to="/blog"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          )}
          
          <Link to="/blog" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">
              Blog
            </span>
          </Link>
        </div>

        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Voltar ao início
        </Link>
      </div>
    </motion.header>
  );
};

export default BlogHeader;
