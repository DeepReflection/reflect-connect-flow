import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeSelector from '@/components/ThemeSelector';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCard from '@/components/blog/BlogCard';
import { getPostBySlug, getRelatedPosts, type BlogPost as BlogPostType } from '@/data/blogPosts';
import { Fragment } from 'react';

// Component for inline content images
const ContentImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-8">
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);

  // Enhanced markdown to HTML conversion with image support
  const renderContent = (content: string, contentImages?: BlogPostType['contentImages']) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentSectionTitle = '';
    let skipFirstH1 = true; // Skip the first H1 as it's already shown in the header

    lines.forEach((line, i) => {
      // H1 Headers - skip the first one (article title)
      if (line.startsWith('# ')) {
        if (skipFirstH1) {
          skipFirstH1 = false;
          return; // Skip this H1
        }
        currentSectionTitle = line.slice(2);
        elements.push(
          <h1 key={i} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 mt-8">
            {currentSectionTitle}
          </h1>
        );
        return;
      }
      
      // H2 Headers - with image after
      if (line.startsWith('## ')) {
        currentSectionTitle = line.slice(3);
        elements.push(
          <h2 key={i} className="text-2xl font-display font-semibold text-foreground mb-4 mt-10">
            {currentSectionTitle}
          </h2>
        );
        
        // Insert image for this section if available
        if (contentImages && contentImages[currentSectionTitle]) {
          elements.push(
            <ContentImage
              key={`img-${i}`}
              src={contentImages[currentSectionTitle]}
              alt={currentSectionTitle}
              caption={currentSectionTitle}
            />
          );
        }
        return;
      }
      
      // H3 Headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
            {line.slice(4)}
          </h3>
        );
        return;
      }
      
      // List items with bold
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* - (.+)/);
        if (match) {
          elements.push(
            <li key={i} className="ml-6 mb-3 text-muted-foreground flex items-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">{match[1]}</strong> — {match[2]}
              </span>
            </li>
          );
          return;
        }
      }
      
      // Regular list items
      if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="ml-6 mb-3 text-muted-foreground flex items-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
            <span>{line.slice(2)}</span>
          </li>
        );
        return;
      }
      
      // Empty lines
      if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />);
        return;
      }
      
      // Paragraphs
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />
      <BlogHeader showBackButton />

      {/* Hero Image */}
      <section className="relative z-10">
        <div className="relative h-72 md:h-[28rem] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 max-w-3xl mx-auto px-4 -mt-40 md:-mt-52 pb-16">
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
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <span className="block text-foreground font-medium">{post.author.name}</span>
                <span className="text-xs">Autor</span>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Content with inline images */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content, post.contentImages)}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
