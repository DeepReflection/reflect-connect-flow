import { POST_TYPE_META, SOCIAL_MEDIA_META, ALLOWED_POST_TYPES } from '@/data/socialPostConfig';
import { PostSocialTypeEnum, SocialMediaEnum } from '@/types/socialPost';
import { cn } from '@/lib/utils';

interface PostTypeSelectorProps {
  socialMedia: SocialMediaEnum;
  value: PostSocialTypeEnum;
  onChange: (value: PostSocialTypeEnum) => void;
}

const PostTypeSelector = ({ socialMedia, value, onChange }: PostTypeSelectorProps) => {
  const brandHsl = SOCIAL_MEDIA_META[socialMedia].brandHsl;

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground">Tipo de post</h2>
        <p className="mt-1 text-sm text-muted-foreground">A UI e os uploads mudam conforme o formato escolhido.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
        {ALLOWED_POST_TYPES[socialMedia].map((type) => {
          const meta = POST_TYPE_META[type];
          const Icon = meta.icon;
          const selected = value === type;

          return (
            <button
              key={type}
              type="button"
              onClick={() => onChange(type)}
              className={cn(
                'flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all',
                selected
                  ? 'border-transparent bg-secondary text-secondary-foreground shadow-[var(--shadow-glow)]'
                  : 'border-border bg-background/50 text-muted-foreground hover:border-border/80 hover:text-foreground'
              )}
              style={selected ? { outline: `1px solid hsl(${brandHsl} / 0.5)` } : undefined}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: selected ? `hsl(${brandHsl} / 0.16)` : 'hsl(var(--muted) / 0.45)' }}
              >
                <Icon className="h-4 w-4" style={selected ? { color: `hsl(${brandHsl})` } : undefined} />
              </span>
              <span className="text-sm font-medium">{meta.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PostTypeSelector;
