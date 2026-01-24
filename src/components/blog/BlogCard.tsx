import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className={`
          relative overflow-hidden rounded-2xl bg-card border border-border/50
          transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg
          h-full flex flex-col
        `}>
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h3 className={`
              font-display font-semibold text-foreground mb-2
              group-hover:text-primary transition-colors
              ${featured ? 'text-xl md:text-2xl' : 'text-lg'}
            `}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className={`
              text-muted-foreground text-sm line-clamp-2 flex-1
              ${featured ? 'md:line-clamp-3' : ''}
            `}>
              {post.excerpt}
            </p>

            {/* Read More */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Ler mais
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
