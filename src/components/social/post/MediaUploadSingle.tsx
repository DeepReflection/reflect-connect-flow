import { Upload, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { LocalMediaSocial, MediaSocialTypeEnum } from '@/types/socialPost';

interface MediaUploadSingleProps {
  label: string;
  description: string;
  accept?: string;
  aspectHint?: string;
  value?: LocalMediaSocial | null;
  onChange: (file: File, mediaType?: MediaSocialTypeEnum) => void;
  onRemove: () => void;
  mediaType?: MediaSocialTypeEnum;
}

const isImage = (item?: LocalMediaSocial | null) => item?.mimeType.startsWith('image/');

const MediaUploadSingle = ({ label, description, accept, aspectHint, value, onChange, onRemove, mediaType }: MediaUploadSingleProps) => {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/40 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-foreground">{label}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          {aspectHint ? <p className="mt-1 text-xs text-muted-foreground">Proporção recomendada: {aspectHint}</p> : null}
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary">
          <Upload className="h-4 w-4" />
          Selecionar
          <Input
            type="file"
            accept={accept}
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) onChange(file, mediaType);
              event.currentTarget.value = '';
            }}
          />
        </label>
      </div>

      {value ? (
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <button type="button" onClick={onRemove} className="absolute right-3 top-3 z-10 rounded-full bg-background/90 p-1 text-foreground">
            <X className="h-4 w-4" />
          </button>
          {isImage(value) ? (
            <img src={value.previewUrl} alt={value.file?.name ?? label} className="h-56 w-full object-cover" />
          ) : (
            <div className="flex h-56 items-center justify-center bg-secondary text-secondary-foreground">
              <div className="text-center">
                <p className="font-medium">{value.file?.name}</p>
                <p className="text-sm opacity-75">{value.mimeType}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-sm text-muted-foreground">
          Arraste um arquivo aqui ou clique em Selecionar
        </div>
      )}
    </div>
  );
};

export default MediaUploadSingle;
