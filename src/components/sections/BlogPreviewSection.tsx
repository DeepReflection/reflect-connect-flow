import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import SectionTitle from '@/components/SectionTitle';

const BlogPreviewSection = () => {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title="Últimos do Blog" />
        <Link
          to="/blog"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Ver todos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${post.slug}`} className="block h-full">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-40">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-xs line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
                    Ler mais
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogPreviewSection;
