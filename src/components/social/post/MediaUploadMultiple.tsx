import { Upload, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { LocalMediaSocial, MediaSocialTypeEnum } from '@/types/socialPost';

interface MediaUploadMultipleProps {
  label: string;
  description: string;
  accept?: string;
  maxFiles: number;
  items: LocalMediaSocial[];
  onAdd: (files: File[], mediaType?: MediaSocialTypeEnum) => void;
  onRemove: (tempId: string) => void;
  mediaType?: MediaSocialTypeEnum;
}

const MediaUploadMultiple = ({ label, description, accept, maxFiles, items, onAdd, onRemove, mediaType }: MediaUploadMultipleProps) => {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/40 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-foreground">{label}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary">
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

      <div className="mb-3 text-xs text-muted-foreground">{items.length}/{maxFiles} arquivos</div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.tempId} className="relative overflow-hidden rounded-xl border border-border bg-card">
            <button type="button" onClick={() => onRemove(item.tempId)} className="absolute right-2 top-2 z-10 rounded-full bg-background/90 p-1 text-foreground">
              <X className="h-4 w-4" />
            </button>
            {item.mimeType.startsWith('image/') ? (
              <img src={item.previewUrl} alt={item.file?.name ?? 'Mídia'} className="h-28 w-full object-cover" />
            ) : (
              <div className="flex h-28 items-center justify-center bg-secondary px-3 text-center text-xs text-secondary-foreground">
                {item.file?.name}
              </div>
            )}
          </div>
        ))}

        {!items.length ? (
          <div className="col-span-full flex h-40 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-sm text-muted-foreground">
            Nenhuma mídia adicionada ainda
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MediaUploadMultiple;
