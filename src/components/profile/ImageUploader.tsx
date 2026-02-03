import { useState, useRef } from 'react';
import { Camera, Upload, Image as ImageIcon, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BannerGallery from './BannerGallery';

interface ImageUploaderProps {
  currentImage?: string;
  onImageChange: (url: string) => void;
  label: string;
  aspectRatio?: 'square' | 'banner';
  showGallery?: boolean;
}

const ImageUploader = ({ 
  currentImage, 
  onImageChange, 
  label, 
  aspectRatio = 'square',
  showGallery = false 
}: ImageUploaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onImageChange(urlInput.trim());
      setUrlInput('');
      setIsOpen(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        onImageChange(result);
        setIsOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (url: string) => {
    onImageChange(url);
    setIsGalleryOpen(false);
    setIsOpen(false);
  };

  const containerClass = aspectRatio === 'banner' 
    ? 'w-full h-32 md:h-48' 
    : 'w-24 h-24 md:w-32 md:h-32';

  const tabCount = showGallery ? 3 : 2;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className={`${containerClass} relative rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors overflow-hidden group`}
          >
            {currentImage ? (
              <>
                <img
                  src={currentImage}
                  alt={label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-xs">Adicionar imagem</span>
              </div>
            )}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Alterar {label}</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="url" className="w-full">
            <TabsList className={`grid w-full grid-cols-${tabCount}`}>
              <TabsTrigger value="url">URL</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
              {showGallery && (
                <TabsTrigger value="gallery">Galeria</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="url" className="space-y-4">
              <div className="space-y-2">
                <Label>Cole a URL da imagem</Label>
                <Input
                  placeholder="https://exemplo.com/imagem.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                />
              </div>
              {urlInput && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={urlInput}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <Button onClick={handleUrlSubmit} className="w-full">
                Aplicar
              </Button>
            </TabsContent>
            <TabsContent value="upload" className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                variant="outline"
                className="w-full h-24 border-dashed"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="flex flex-col items-center">
                  <Upload className="w-8 h-8 mb-2" />
                  <span>Clique para fazer upload</span>
                </div>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Formatos aceitos: JPG, PNG, WebP. Máximo 5MB.
              </p>
            </TabsContent>
            {showGallery && (
              <TabsContent value="gallery" className="space-y-4">
                <div className="text-center py-4">
                  <Images className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Escolha entre mais de 2.500 banners profissionais organizados por categoria.
                  </p>
                  <Button 
                    onClick={() => setIsGalleryOpen(true)}
                    className="w-full"
                  >
                    <Images className="w-4 h-4 mr-2" />
                    Abrir Galeria de Banners
                  </Button>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </DialogContent>
      </Dialog>
      
      {/* Banner Gallery Dialog */}
      {showGallery && (
        <BannerGallery
          open={isGalleryOpen}
          onOpenChange={setIsGalleryOpen}
          onSelect={handleGallerySelect}
        />
      )}
    </div>
  );
};

export default ImageUploader;
