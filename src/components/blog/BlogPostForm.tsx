import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Eye, Plus, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { categories, BlogPost } from '@/data/blogPosts';

interface BlogPostFormProps {
  initialData?: BlogPost;
  onSave: (data: Partial<BlogPost>) => void;
  onPreview: (data: Partial<BlogPost>) => void;
}

const BlogPostForm = ({ initialData, onSave, onPreview }: BlogPostFormProps) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [readingTime, setReadingTime] = useState(initialData?.readingTime || '5 min');
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [newTag, setNewTag] = useState('');
  const [contentImages, setContentImages] = useState<{ [key: string]: string }>(
    initialData?.contentImages || {}
  );
  const [newImageSection, setNewImageSection] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!initialData) {
      setSlug(generateSlug(value));
    }
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addContentImage = () => {
    if (newImageSection.trim() && newImageUrl.trim()) {
      setContentImages({
        ...contentImages,
        [newImageSection.trim()]: newImageUrl.trim(),
      });
      setNewImageSection('');
      setNewImageUrl('');
    }
  };

  const removeContentImage = (section: string) => {
    const updated = { ...contentImages };
    delete updated[section];
    setContentImages(updated);
  };

  const getFormData = (): Partial<BlogPost> => ({
    id: initialData?.id || Date.now().toString(),
    slug,
    title,
    excerpt,
    content,
    coverImage,
    contentImages,
    author: initialData?.author || {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: initialData?.publishedAt || new Date().toISOString().split('T')[0],
    readingTime,
    category,
    tags,
  });

  const handleSave = () => {
    onSave(getFormData());
  };

  const handlePreview = () => {
    onPreview(getFormData());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Title and Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título do Artigo *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Digite o título do artigo"
            className="bg-card border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug (URL)</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="url-do-artigo"
            className="bg-card border-border"
          />
        </div>
      </div>

      {/* Category and Reading Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Categoria *</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="readingTime">Tempo de Leitura</Label>
          <Input
            id="readingTime"
            value={readingTime}
            onChange={(e) => setReadingTime(e.target.value)}
            placeholder="5 min"
            className="bg-card border-border"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <Label htmlFor="excerpt">Resumo *</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Um breve resumo do artigo que aparecerá na listagem"
          className="bg-card border-border min-h-[80px]"
        />
      </div>

      {/* Cover Image */}
      <div className="space-y-2">
        <Label htmlFor="coverImage">URL da Imagem de Capa</Label>
        <div className="flex gap-2">
          <Input
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
            className="bg-card border-border flex-1"
          />
        </div>
        {coverImage && (
          <div className="mt-2 relative rounded-lg overflow-hidden h-48">
            <img
              src={coverImage}
              alt="Preview da capa"
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label htmlFor="content">Conteúdo (Markdown) *</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`# Título do Artigo

Parágrafo introdutório...

## Primeira Seção

Conteúdo da seção...

## Segunda Seção

- Item da lista
- Outro item

**Texto em negrito** e *texto em itálico*`}
          className="bg-card border-border min-h-[300px] font-mono text-sm"
        />
        <p className="text-xs text-muted-foreground">
          Use Markdown para formatar: # para títulos, ## para subtítulos, - para listas, **negrito**, *itálico*
        </p>
      </div>

      {/* Content Images */}
      <div className="space-y-4">
        <Label>Imagens por Seção</Label>
        <p className="text-xs text-muted-foreground">
          Adicione imagens que serão exibidas abaixo de cada seção (use o título exato da seção como referência)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Input
            value={newImageSection}
            onChange={(e) => setNewImageSection(e.target.value)}
            placeholder="Nome da seção (ex: O Planejamento)"
            className="bg-card border-border"
          />
          <Input
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="URL da imagem"
            className="bg-card border-border"
          />
          <Button
            type="button"
            variant="outline"
            onClick={addContentImage}
            className="border-primary/30"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        </div>

        {Object.entries(contentImages).length > 0 && (
          <div className="space-y-2">
            {Object.entries(contentImages).map(([section, url]) => (
              <div
                key={section}
                className="flex items-center gap-2 p-2 bg-card rounded-lg border border-border"
              >
                <ImageIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium flex-1">{section}</span>
                <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                  {url}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeContentImage(section)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label>Tags</Label>
        <div className="flex gap-2">
          <Input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Nova tag"
            className="bg-card border-border flex-1"
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
          />
          <Button type="button" variant="outline" onClick={addTag} className="border-primary/30">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20"
                onClick={() => removeTag(tag)}
              >
                {tag}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
        <Button
          onClick={handlePreview}
          variant="outline"
          className="flex-1 border-primary/30"
        >
          <Eye className="w-4 h-4 mr-2" />
          Visualizar
        </Button>
        <Button
          onClick={handleSave}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Save className="w-4 h-4 mr-2" />
          {initialData ? 'Atualizar Artigo' : 'Salvar Artigo'}
        </Button>
      </div>
    </motion.div>
  );
};

export default BlogPostForm;
