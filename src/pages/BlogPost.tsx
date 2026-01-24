import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeSelector from '@/components/ThemeSelector';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCard from '@/components/blog/BlogCard';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);

  // Simple markdown to HTML conversion
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        // Headers
        if (line.startsWith('# ')) {
          return (
            <h1 key={i} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 mt-8 first:mt-0">
              {line.slice(2)}
            </h1>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">
              {line.slice(3)}
            </h2>
          );
        }
        if (line.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
              {line.slice(4)}
            </h3>
          );
        }
        // List items
        if (line.startsWith('- **')) {
          const match = line.match(/- \*\*(.+?)\*\* - (.+)/);
          if (match) {
            return (
              <li key={i} className="ml-6 mb-2 text-muted-foreground">
                <strong className="text-foreground">{match[1]}</strong> - {match[2]}
              </li>
            );
          }
        }
        if (line.startsWith('- ')) {
          return (
            <li key={i} className="ml-6 mb-2 text-muted-foreground">
              {line.slice(2)}
            </li>
          );
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={i} />;
        }
        // Paragraphs
        return (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {line}
          </p>
        );
      });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />
      <BlogHeader showBackButton />

      {/* Hero Image */}
      <section className="relative z-10">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 max-w-3xl mx-auto px-4 -mt-32 md:-mt-40 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border border-border/50 p-6 md:p-10 shadow-xl"
        >
          {/* Category */}
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{post.author.name}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-border/50">
        <p className="text-muted-foreground text-sm font-body">
          © 2024 Outro Brasileiro no D-Day
        </p>
      </footer>
    </div>
  );
};

export default BlogPost;
