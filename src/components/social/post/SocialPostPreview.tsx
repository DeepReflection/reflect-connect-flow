import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getCaptionLabel, POST_TYPE_META, SOCIAL_MEDIA_META, supportsTitle, VISIBLE_FIELDS } from '@/data/socialPostConfig';
import type { LocalMediaSocial, PostSocialStatusEnum } from '@/types/socialPost';
import { PostSocialTypeEnum, SocialMediaEnum } from '@/types/socialPost';

interface SocialPostPreviewProps {
  socialMedia: SocialMediaEnum;
  postType: PostSocialTypeEnum;
  status: PostSocialStatusEnum;
  title: string;
  caption: string;
  tags: string[];
  linkUrl: string;
  media: LocalMediaSocial[];
}

const STATUS_STYLES: Record<PostSocialStatusEnum, string> = {
  DRAFT: 'bg-secondary text-secondary-foreground',
  SCHEDULED: 'bg-primary/20 text-foreground',
  PROCESSING: 'bg-accent/20 text-foreground',
  PUBLISHED: 'bg-[hsl(144_60%_42%_/_0.2)] text-foreground',
  FAILED: 'bg-destructive/20 text-destructive-foreground',
  CANCELLED: 'bg-muted text-muted-foreground',
};

const PreviewMedia = ({ media, socialMedia }: { media: LocalMediaSocial[]; socialMedia: SocialMediaEnum }) => {
  if (!media.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-background/60 text-sm text-muted-foreground">
        Placeholder de mídia para {SOCIAL_MEDIA_META[socialMedia].label}
      </div>
    );
  }

  if (socialMedia === SocialMediaEnum.TIKTOK) {
    return <img src={media[0].previewUrl} alt="Preview" className="h-80 w-full rounded-2xl object-cover" />;
  }

  return (
    <div className="grid gap-3">
      <img src={media[0].previewUrl} alt="Preview" className="h-64 w-full rounded-2xl object-cover" />
      {media.length > 1 ? (
        <div className="grid grid-cols-4 gap-2">
          {media.slice(1, 5).map((item) => (
            <img key={item.tempId} src={item.previewUrl} alt="Miniatura" className="h-16 w-full rounded-lg object-cover" />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const SocialPostPreview = ({ socialMedia, postType, status, title, caption, tags, linkUrl, media }: SocialPostPreviewProps) => {
  const socialMeta = SOCIAL_MEDIA_META[socialMedia];
  const visibleFields = VISIBLE_FIELDS[socialMedia];
  const PostIcon = socialMeta.icon;
  const captionLabel = getCaptionLabel(socialMedia);

  return (
    <Card className="sticky top-24 overflow-hidden border-border bg-card/95 shadow-[var(--shadow-elevated)]">
      <CardContent className="space-y-5 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `hsl(${socialMeta.brandHsl} / 0.16)` }}>
              <PostIcon className="h-5 w-5" style={{ color: `hsl(${socialMeta.brandHsl})` }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Preview</p>
              <p className="text-xs text-muted-foreground">{socialMeta.label} • {POST_TYPE_META[postType].label}</p>
            </div>
          </div>
          <Badge className={STATUS_STYLES[status]}>{status}</Badge>
        </div>

        <div className="rounded-[28px] border border-border bg-background/70 p-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-secondary" />
            <div>
              <p className="text-sm font-semibold text-foreground">@sua_conta</p>
              <p className="text-xs text-muted-foreground">Agora mesmo</p>
            </div>
          </div>

          <PreviewMedia media={media} socialMedia={socialMedia} />

          <div className="mt-4 space-y-3">
            {visibleFields.title && supportsTitle(socialMedia, postType) ? (
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Título</p>
                <p className="text-base font-semibold text-foreground">{title || 'Seu título aparecerá aqui'}</p>
              </div>
            ) : null}

            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{captionLabel}</p>
              <p className="whitespace-pre-wrap text-sm leading-6 text-foreground">
                {caption || 'O texto do post aparecerá aqui conforme você digita ou gerar com IA.'}
              </p>
            </div>

            {visibleFields.tags && tags.length ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{tag}</span>
                ))}
              </div>
            ) : null}

            {linkUrl ? (
              <div className="rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground">
                {linkUrl}
              </div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialPostPreview;
