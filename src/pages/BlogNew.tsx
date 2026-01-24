import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeSelector from '@/components/ThemeSelector';
import BlogPostForm from '@/components/blog/BlogPostForm';
import { BlogPost } from '@/data/blogPosts';
import { useToast } from '@/hooks/use-toast';

const BlogNew = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [previewData, setPreviewData] = useState<Partial<BlogPost> | null>(null);

  const handleSave = (data: Partial<BlogPost>) => {
    // Em uma implementação real, salvaria no banco de dados
    // Por agora, mostramos o JSON gerado para ser copiado
    console.log('Dados do artigo:', data);
    
    toast({
      title: "Artigo preparado!",
      description: "Os dados do artigo foram gerados. Veja o console para copiar o código.",
    });

    // Mostra um alert com o código para copiar
    const codeToAdd = `  {
    id: '${data.id}',
    slug: '${data.slug}',
    title: '${data.title}',
    excerpt: '${data.excerpt}',
    content: \`${data.content}\`,
    contentImages: ${JSON.stringify(data.contentImages, null, 2)},
    coverImage: '${data.coverImage}',
    author: {
      name: '${data.author?.name}',
      avatar: '${data.author?.avatar}',
    },
    publishedAt: '${data.publishedAt}',
    readingTime: '${data.readingTime}',
    category: '${data.category}',
    tags: ${JSON.stringify(data.tags)},
  },`;
    
    alert(`Copie este código e adicione ao arquivo src/data/blogPosts.ts:\n\n${codeToAdd}`);
  };

  const handlePreview = (data: Partial<BlogPost>) => {
    setPreviewData(data);
    // Abre uma nova aba com o preview (em implementação real)
    toast({
      title: "Preview",
      description: "O preview foi atualizado no painel abaixo.",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar</span>
            </Link>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">
              Blog
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Novo Artigo
          </h1>
          <p className="text-muted-foreground">
            Preencha os campos abaixo para criar um novo artigo para o blog.
          </p>
        </motion.div>

        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6">
          <BlogPostForm onSave={handleSave} onPreview={handlePreview} />
        </div>

        {/* Preview Section */}
        {previewData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Preview
            </h2>
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <div className="prose prose-invert max-w-none">
                <h1>{previewData.title}</h1>
                <p className="text-muted-foreground">{previewData.excerpt}</p>
                <div className="flex gap-2 my-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {previewData.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {previewData.readingTime}
                  </span>
                </div>
                {previewData.coverImage && (
                  <img
                    src={previewData.coverImage}
                    alt={previewData.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © 2024 Outro Brasileiro no D-Day
        </p>
      </footer>
    </div>
  );
};

export default BlogNew;
