import { GripVertical, Link2, Upload, X } from 'lucide-react';
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
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/40 p-4">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-foreground">{label}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          <p className="mt-1 text-xs text-muted-foreground">Entre {minFiles} e {maxFiles} arquivos.</p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary">
          <Upload className="h-4 w-4" />
          Adicionar cards
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

      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex snap-x overflow-x-auto">
            {items.length ? items.map((item) => (
              <div key={item.tempId} className="min-w-full snap-center">
                {item.mimeType.startsWith('image/') ? (
                  <img src={item.previewUrl} alt={item.file?.name ?? 'Card do carrossel'} className="h-72 w-full object-cover" />
                ) : (
                  <div className="flex h-72 items-center justify-center bg-secondary text-secondary-foreground">{item.file?.name}</div>
                )}
              </div>
            )) : (
              <div className="flex h-72 items-center justify-center text-sm text-muted-foreground">Preview do carrossel</div>
            )}
          </div>
          <div className="flex justify-center gap-2 border-t border-border p-3">
            {items.map((item, index) => (
              <span key={item.tempId} className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" aria-label={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={item.tempId} className="rounded-xl border border-border bg-card p-3">
              <div className="mb-3 flex items-center gap-3">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Card {index + 1}</span>
                <div className="ml-auto flex gap-2">
                  <button type="button" onClick={() => index > 0 && onReorder(index, index - 1)} className="rounded-md border border-border px-2 py-1 text-xs text-foreground">↑</button>
                  <button type="button" onClick={() => index < items.length - 1 && onReorder(index, index + 1)} className="rounded-md border border-border px-2 py-1 text-xs text-foreground">↓</button>
                  <button type="button" onClick={() => onRemove(item.tempId)} className="rounded-md border border-border px-2 py-1 text-xs text-foreground">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {allowCardMeta ? (
                <div className="space-y-2">
                  <Input
                    value={item.title ?? ''}
                    onChange={(event) => onUpdateMeta(item.tempId, { title: event.target.value })}
                    placeholder="Título do card"
                    className="rounded-lg border-border bg-background/70"
                  />
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={item.linkUrl ?? ''}
                      onChange={(event) => onUpdateMeta(item.tempId, { linkUrl: event.target.value })}
                      placeholder="Link do card"
                      className="rounded-lg border-border bg-background/70 pl-9"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Arraste a ordem com os controles acima.</p>
              )}
            </div>
          ))}

          {!items.length ? <div className="rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">Adicione os cards para montar o carrossel.</div> : null}
        </div>
      </div>
    </div>
  );
};

export default CarouselUpload;
