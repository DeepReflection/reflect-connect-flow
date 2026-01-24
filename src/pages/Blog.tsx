import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeSelector from '@/components/ThemeSelector';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts, categories } from '@/data/blogPosts';

const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return selectedCategory
      ? blogPosts.filter(post => post.category === selectedCategory)
      : blogPosts;
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of posts grid
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />
      <BlogHeader />

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
          >
            <BookOpen className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Artigos, análises e reflexões sobre a Segunda Guerra Mundial e seus personagens históricos.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative z-10 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative z-10 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                featured={index === 0 && currentPage === 1 && !selectedCategory}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="relative z-10 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2"
            >
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  currentPage === 1
                    ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                    : 'bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
                }`}
                aria-label="Página anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    }`}
                    aria-label={`Página ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  currentPage === totalPages
                    ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                    : 'bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
                }`}
                aria-label="Próxima página"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Page Info */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Página {currentPage} de {totalPages} • {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-border/50">
        <p className="text-muted-foreground text-sm font-body">
          © 2024 Outro Brasileiro no D-Day
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Preservando a história para as futuras gerações
        </p>
      </footer>
    </div>
  );
};

export default Blog;
