import { useState } from 'react';
import { X } from 'lucide-react';
import GeneratedBadge from '@/components/social/post/GeneratedBadge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TagsInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  generated?: boolean;
  onDismissGenerated?: () => void;
  loading?: boolean;
}

const normalizeTag = (tag: string) => {
  const trimmed = tag.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('@')) return trimmed;
  return trimmed.startsWith('#') ? trimmed : `#${trimmed.replace(/^#+/, '')}`;
};

const TagsInput = ({ tags, onChange, generated, onDismissGenerated, loading }: TagsInputProps) => {
  const [draft, setDraft] = useState('');

  const addTag = (value: string) => {
    const nextTag = normalizeTag(value);
    if (!nextTag || tags.includes(nextTag)) return;
    onChange([...tags, nextTag]);
    setDraft('');
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label className="text-sm text-foreground">Tags</Label>
        {generated && onDismissGenerated ? <GeneratedBadge onDismiss={onDismissGenerated} /> : null}
      </div>

      <div className={loading ? 'animate-pulse rounded-xl' : ''}>
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ',') {
              event.preventDefault();
              addTag(draft);
            }
          }}
          placeholder="Digite uma hashtag ou menção e pressione Enter"
          className="rounded-xl border-border bg-background/70"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            {tag}
            <button type="button" onClick={() => onChange(tags.filter((current) => current !== tag))} aria-label={`Remover ${tag}`}>
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
