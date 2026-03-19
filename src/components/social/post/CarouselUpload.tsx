import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GripVertical, Link2, Upload, X, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { LocalMediaSocial, MediaSocialTypeEnum } from '@/types/socialPost';

interface CarouselUploadProps {
  label: string;
  description: string;
  accept?: string;
  minFiles?: number;
  maxFiles?: number;
  items: LocalMediaSocial[];
  allowCardMeta?: boolean;
  onAdd: (files: File[], mediaType?: MediaSocialTypeEnum) => void;
  onRemove: (tempId: string) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
  onUpdateMeta: (tempId: string, updates: Pick<LocalMediaSocial, 'title' | 'linkUrl'>) => void;
  mediaType?: MediaSocialTypeEnum;
}

const CarouselUpload = ({
  label,
  description,
  accept,
  minFiles = 2,
  maxFiles = 10,
  items,
  allowCardMeta,
  onAdd,
  onRemove,
  onReorder,
  onUpdateMeta,
  mediaType,
}: CarouselUploadProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const safeIndex = Math.min(activeIndex, Math.max(0, items.length - 1));

  const goTo = (index: number) => {
    if (index >= 0 && index < items.length) setActiveIndex(index);
  };

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      onReorder(dragItem.current, dragOverItem.current);
      setActiveIndex(dragOverItem.current);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).slice(0, Math.max(0, maxFiles - items.length));
    if (files.length) onAdd(files, mediaType);
  }, [items.length, maxFiles, onAdd, mediaType]);

  return (
    <div className="rounded-2xl border border-border bg-card/50 p-5 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-foreground">{label}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
          <p className="mt-0.5 text-xs text-muted-foreground/70">{items.length}/{maxFiles} arquivos · mínimo {minFiles}</p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95">
          <Upload className="h-4 w-4" />
          Adicionar
          <Input
            type="file"
            multiple
            accept={accept}
            className="hidden"
            onChange={(event) => {
              const files = Array.from(event.target.files ?? []).slice(0, Math.max(0, maxFiles - items.length));
              if (files.length) onAdd(files, mediaType);
              event.currentTarget.value = '';
            }}
          />
        </label>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Preview Carousel */}
        <div
          className="relative overflow-hidden rounded-xl border border-border bg-background"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {items.length > 0 ? (
            <>
              <div className="relative aspect-square w-full">
                {items[safeIndex]?.mimeType.startsWith('image/') ? (
                  <img
                    src={items[safeIndex].previewUrl}
                    alt={items[safeIndex].file?.name ?? `Slide ${safeIndex + 1}`}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary text-secondary-foreground">
                    <ImageIcon className="h-8 w-8 opacity-50" />
                    <span className="text-sm">{items[safeIndex]?.file?.name}</span>
                  </div>
                )}

                {/* Navigation arrows */}
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => goTo(safeIndex - 1)}
                      disabled={safeIndex === 0}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(safeIndex + 1)}
                      disabled={safeIndex === items.length - 1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Counter badge */}
                <div className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {safeIndex + 1} / {items.length}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 py-3">
                {items.map((item, index) => (
                  <button
                    key={item.tempId}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === safeIndex
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex aspect-square flex-col items-center justify-center gap-3 text-muted-foreground">
              <Upload className="h-10 w-10 opacity-40" />
              <div className="text-center">
                <p className="text-sm font-medium">Arraste arquivos aqui</p>
                <p className="text-xs opacity-70">ou use o botão acima</p>
              </div>
            </div>
          )}
        </div>

        {/* Card List */}
        <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
          {items.map((item, index) => (
            <div
              key={item.tempId}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => goTo(index)}
              className={`group cursor-pointer rounded-xl border p-3 transition-all duration-200 ${
                index === safeIndex
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Drag handle */}
                <div className="cursor-grab text-muted-foreground/50 active:cursor-grabbing hover:text-muted-foreground">
                  <GripVertical className="h-4 w-4" />
                </div>

                {/* Thumbnail */}
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
                  {item.mimeType.startsWith('image/') ? (
                    <img src={item.previewUrl} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {item.title || item.file?.name || `Card ${index + 1}`}
                  </p>
                  <p className="text-xs text-muted-foreground">Slide {index + 1}</p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(item.tempId);
                    if (safeIndex >= items.length - 1 && safeIndex > 0) setActiveIndex(safeIndex - 1);
                  }}
                  className="rounded-lg p-1 text-muted-foreground/50 opacity-0 transition-all hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Card meta fields */}
              {allowCardMeta && index === safeIndex && (
                <div className="mt-3 space-y-2 border-t border-border pt-3">
                  <Input
                    value={item.title ?? ''}
                    onChange={(event) => onUpdateMeta(item.tempId, { title: event.target.value })}
                    placeholder="Título do card"
                    className="h-8 rounded-lg border-border bg-background/70 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="relative">
                    <Link2 className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={item.linkUrl ?? ''}
                      onChange={(event) => onUpdateMeta(item.tempId, { linkUrl: event.target.value })}
                      placeholder="Link do card"
                      className="h-8 rounded-lg border-border bg-background/70 pl-8 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          {!items.length && (
            <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              Adicione cards para montar o carrossel.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselUpload;
