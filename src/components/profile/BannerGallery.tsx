import { useState, useMemo } from 'react';
import { Search, X, Grid3X3, List, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  BANNER_CATEGORIES,
  getBannersForCategory,
  searchBanners,
  type BannerCategory,
  type BannerImage,
} from '@/data/bannerGallery';

interface BannerGalleryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (url: string) => void;
}

const BannerGallery = ({ open, onOpenChange, onSelect }: BannerGalleryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BannerCategory | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get banners based on current state
  const banners = useMemo(() => {
    if (searchQuery.trim()) {
      return searchBanners(searchQuery);
    }
    if (selectedCategory) {
      return getBannersForCategory(selectedCategory.id);
    }
    return [];
  }, [searchQuery, selectedCategory]);

  // Group banners by category for search results
  const groupedBanners = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const groups: Record<string, BannerImage[]> = {};
    banners.forEach(banner => {
      if (!groups[banner.category]) {
        groups[banner.category] = [];
      }
      groups[banner.category].push(banner);
    });
    return groups;
  }, [banners, searchQuery]);

  const handleSelectBanner = (banner: BannerImage) => {
    onSelect(banner.url);
    onOpenChange(false);
    // Reset state
    setSearchQuery('');
    setSelectedCategory(null);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const getCategoryName = (id: string) => {
    return BANNER_CATEGORIES.find(c => c.id === id)?.name || id;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center gap-4">
            {selectedCategory && !searchQuery && (
              <Button variant="ghost" size="icon" onClick={handleBack}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}
            <DialogTitle className="flex-1">
              {selectedCategory && !searchQuery
                ? selectedCategory.name
                : 'Galeria de Banners'}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar categorias..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setSelectedCategory(null);
              }}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6">
          {/* Categories Grid */}
          {!selectedCategory && !searchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {BANNER_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group relative aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img
                    src={`/extras/${category.id}-01.jpg`}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-medium text-sm">{category.name}</p>
                    <p className="text-white/70 text-xs">{category.count} banners</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Banners Grid - Category View */}
          {selectedCategory && !searchQuery && (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-2 md:grid-cols-3 gap-4"
              : "flex flex-col gap-3"
            }>
              {banners.map((banner) => (
                <button
                  key={banner.id}
                  onClick={() => handleSelectBanner(banner)}
                  className={`group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all ${
                    viewMode === 'grid' ? 'aspect-video' : 'h-24'
                  }`}
                >
                  <img
                    src={banner.url}
                    alt={banner.id}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ))}
            </div>
          )}

          {/* Search Results */}
          {searchQuery && groupedBanners && (
            <div className="space-y-6">
              {Object.keys(groupedBanners).length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Nenhum banner encontrado para "{searchQuery}"</p>
                </div>
              ) : (
                Object.entries(groupedBanners).map(([categoryId, categoryBanners]) => (
                  <div key={categoryId}>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-medium">{getCategoryName(categoryId)}</h3>
                      <Badge variant="secondary">{categoryBanners.length}</Badge>
                    </div>
                    <div className={viewMode === 'grid'
                      ? "grid grid-cols-2 md:grid-cols-3 gap-3"
                      : "flex flex-col gap-2"
                    }>
                      {categoryBanners.map((banner) => (
                        <button
                          key={banner.id}
                          onClick={() => handleSelectBanner(banner)}
                          className={`group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all ${
                            viewMode === 'grid' ? 'aspect-video' : 'h-20'
                          }`}
                        >
                          <img
                            src={banner.url}
                            alt={banner.id}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BannerGallery;
