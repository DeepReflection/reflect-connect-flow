import {
  Album,
  Clapperboard,
  Facebook,
  FileText,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  type LucideIcon,
  Music,
  Radio,
  ScrollText,
  Twitter,
  Video,
  Youtube,
} from 'lucide-react';
import { MediaSocialTypeEnum, PostSocialTypeEnum, SocialMediaEnum } from '@/types/socialPost';

export interface SocialMediaMeta {
  label: string;
  brandHsl: string;
  icon: LucideIcon;
}

export interface VisibleFieldConfig {
  title: boolean;
  caption: boolean;
  tags: boolean;
  linkUrl: boolean;
  captionMaxLength: number;
}

export interface PostTypeMeta {
  label: string;
  icon: LucideIcon;
}

export interface MediaSlotConfig {
  component: 'none' | 'single' | 'multiple' | 'carousel' | 'singleWithSecondary';
  accept?: string;
  secondaryAccept?: string;
  minFiles?: number;
  maxFiles?: number;
  aspectHint?: string;
  label: string;
  description: string;
  primaryMediaType?: MediaSocialTypeEnum;
  secondaryMediaType?: MediaSocialTypeEnum;
  allowCardMeta?: boolean;
}

export const SOCIAL_MEDIA_META: Record<SocialMediaEnum, SocialMediaMeta> = {
  [SocialMediaEnum.INSTAGRAM]: { label: 'Instagram', brandHsl: '337 76% 53%', icon: ImageIcon },
  [SocialMediaEnum.FACEBOOK]: { label: 'Facebook', brandHsl: '214 89% 52%', icon: ScrollText },
  [SocialMediaEnum.YOUTUBE]: { label: 'YouTube', brandHsl: '0 100% 50%', icon: Video },
  [SocialMediaEnum.TIKTOK]: { label: 'TikTok', brandHsl: '0 0% 4%', icon: Clapperboard },
  [SocialMediaEnum.LINKEDIN]: { label: 'LinkedIn', brandHsl: '210 90% 40%', icon: FileText },
  [SocialMediaEnum.TWITTER]: { label: 'X / Twitter', brandHsl: '203 89% 53%', icon: ScrollText },
};

export const POST_TYPE_META: Record<PostSocialTypeEnum, PostTypeMeta> = {
  [PostSocialTypeEnum.TEXT]: { label: 'Texto', icon: ScrollText },
  [PostSocialTypeEnum.IMAGE]: { label: 'Imagem', icon: ImageIcon },
  [PostSocialTypeEnum.VIDEO]: { label: 'Vídeo', icon: Video },
  [PostSocialTypeEnum.CAROUSEL]: { label: 'Carrossel', icon: Album },
  [PostSocialTypeEnum.REEL]: { label: 'Reel', icon: Clapperboard },
  [PostSocialTypeEnum.STORY]: { label: 'Story', icon: ImageIcon },
  [PostSocialTypeEnum.SHORT]: { label: 'Short', icon: Clapperboard },
  [PostSocialTypeEnum.DOCUMENT]: { label: 'Documento', icon: FileText },
  [PostSocialTypeEnum.LIVE]: { label: 'Live', icon: Radio },
};

export const ALLOWED_POST_TYPES: Record<SocialMediaEnum, PostSocialTypeEnum[]> = {
  [SocialMediaEnum.INSTAGRAM]: [PostSocialTypeEnum.IMAGE, PostSocialTypeEnum.CAROUSEL, PostSocialTypeEnum.REEL, PostSocialTypeEnum.STORY, PostSocialTypeEnum.VIDEO],
  [SocialMediaEnum.FACEBOOK]: [PostSocialTypeEnum.TEXT, PostSocialTypeEnum.IMAGE, PostSocialTypeEnum.CAROUSEL, PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.STORY, PostSocialTypeEnum.LIVE, PostSocialTypeEnum.DOCUMENT],
  [SocialMediaEnum.YOUTUBE]: [PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.SHORT, PostSocialTypeEnum.LIVE],
  [SocialMediaEnum.TIKTOK]: [PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.SHORT, PostSocialTypeEnum.STORY],
  [SocialMediaEnum.LINKEDIN]: [PostSocialTypeEnum.TEXT, PostSocialTypeEnum.IMAGE, PostSocialTypeEnum.CAROUSEL, PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.DOCUMENT],
  [SocialMediaEnum.TWITTER]: [PostSocialTypeEnum.TEXT, PostSocialTypeEnum.IMAGE, PostSocialTypeEnum.VIDEO],
};

export const VISIBLE_FIELDS: Record<SocialMediaEnum, VisibleFieldConfig> = {
  [SocialMediaEnum.INSTAGRAM]: { title: false, caption: true, tags: true, linkUrl: true, captionMaxLength: 2200 },
  [SocialMediaEnum.FACEBOOK]: { title: true, caption: true, tags: true, linkUrl: true, captionMaxLength: 63206 },
  [SocialMediaEnum.YOUTUBE]: { title: true, caption: true, tags: true, linkUrl: true, captionMaxLength: 5000 },
  [SocialMediaEnum.TIKTOK]: { title: false, caption: true, tags: true, linkUrl: false, captionMaxLength: 2200 },
  [SocialMediaEnum.LINKEDIN]: { title: true, caption: true, tags: true, linkUrl: true, captionMaxLength: 3000 },
  [SocialMediaEnum.TWITTER]: { title: false, caption: true, tags: false, linkUrl: false, captionMaxLength: 280 },
};

const TITLE_ENABLED_BY_TYPE: Partial<Record<SocialMediaEnum, PostSocialTypeEnum[]>> = {
  [SocialMediaEnum.FACEBOOK]: [PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.DOCUMENT],
  [SocialMediaEnum.YOUTUBE]: [PostSocialTypeEnum.VIDEO, PostSocialTypeEnum.SHORT, PostSocialTypeEnum.LIVE],
  [SocialMediaEnum.LINKEDIN]: [PostSocialTypeEnum.CAROUSEL, PostSocialTypeEnum.DOCUMENT],
};

const MEDIA_CONFIG: Record<string, MediaSlotConfig> = {
  'INSTAGRAM.IMAGE': { component: 'single', accept: 'image/*', label: 'Imagem do post', description: 'Envie 1 imagem. Recomendado 1:1 ou 4:5.', primaryMediaType: MediaSocialTypeEnum.IMAGE, aspectHint: '1:1 ou 4:5' },
  'INSTAGRAM.CAROUSEL': { component: 'carousel', accept: 'image/*', minFiles: 2, maxFiles: 10, label: 'Carrossel', description: 'Envie de 2 a 10 imagens e reordene por drag-and-drop.', primaryMediaType: MediaSocialTypeEnum.IMAGE },
  'INSTAGRAM.REEL': { component: 'single', accept: 'video/mp4,video/*', label: 'Reel', description: 'Envie 1 vídeo MP4. Máx. 60 segundos.', primaryMediaType: MediaSocialTypeEnum.VIDEO, aspectHint: '9:16 recomendado' },
  'INSTAGRAM.STORY': { component: 'single', accept: 'image/*,video/*', label: 'Story', description: 'Envie 1 imagem ou vídeo em formato vertical.', aspectHint: '9:16 recomendado' },
  'INSTAGRAM.VIDEO': { component: 'single', accept: 'video/mp4,video/*', label: 'Vídeo', description: 'Envie 1 vídeo para o feed.', primaryMediaType: MediaSocialTypeEnum.VIDEO },

  'FACEBOOK.TEXT': { component: 'none', label: 'Sem mídia', description: 'Este formato é apenas textual.' },
  'FACEBOOK.IMAGE': { component: 'multiple', accept: 'image/*', maxFiles: 10, label: 'Imagens', description: 'Envie até 10 imagens.', primaryMediaType: MediaSocialTypeEnum.IMAGE },
  'FACEBOOK.CAROUSEL': { component: 'carousel', accept: 'image/*', minFiles: 2, maxFiles: 10, label: 'Carrossel', description: 'Envie imagens e defina título/link por card.', primaryMediaType: MediaSocialTypeEnum.IMAGE, allowCardMeta: true },
  'FACEBOOK.VIDEO': { component: 'single', accept: 'video/*', label: 'Vídeo', description: 'Envie 1 vídeo.', primaryMediaType: MediaSocialTypeEnum.VIDEO },
  'FACEBOOK.STORY': { component: 'single', accept: 'image/*,video/*', label: 'Story', description: 'Envie 1 imagem ou vídeo para story.' },
  'FACEBOOK.LIVE': { component: 'none', label: 'Live', description: 'Nenhum upload necessário para live.' },
  'FACEBOOK.DOCUMENT': { component: 'single', accept: 'application/pdf', label: 'Documento', description: 'Envie 1 PDF.', primaryMediaType: MediaSocialTypeEnum.DOCUMENT },

  'YOUTUBE.VIDEO': { component: 'singleWithSecondary', accept: 'video/*', secondaryAccept: 'image/*', label: 'Vídeo principal', description: 'Envie o vídeo e a thumbnail 16:9.', primaryMediaType: MediaSocialTypeEnum.VIDEO, secondaryMediaType: MediaSocialTypeEnum.THUMBNAIL, aspectHint: 'Thumbnail 16:9' },
  'YOUTUBE.SHORT': { component: 'singleWithSecondary', accept: 'video/*', secondaryAccept: 'image/*', label: 'Short', description: 'Envie o vídeo vertical e a thumbnail.', primaryMediaType: MediaSocialTypeEnum.VIDEO, secondaryMediaType: MediaSocialTypeEnum.THUMBNAIL, aspectHint: 'Vídeo 9:16 • thumbnail 16:9' },
  'YOUTUBE.LIVE': { component: 'none', label: 'Live', description: 'Configure o texto do evento ao vivo.' },

  'TIKTOK.VIDEO': { component: 'single', accept: 'video/*', label: 'Vídeo', description: 'Envie 1 vídeo vertical.', primaryMediaType: MediaSocialTypeEnum.VIDEO, aspectHint: '9:16 recomendado' },
  'TIKTOK.SHORT': { component: 'single', accept: 'video/*', label: 'Short', description: 'Envie 1 vídeo curto vertical.', primaryMediaType: MediaSocialTypeEnum.VIDEO, aspectHint: '9:16 recomendado' },
  'TIKTOK.STORY': { component: 'single', accept: 'image/*,video/*', label: 'Story', description: 'Envie 1 imagem ou vídeo curto.', aspectHint: '9:16 recomendado' },

  'LINKEDIN.TEXT': { component: 'none', label: 'Sem mídia', description: 'Este formato é apenas textual.' },
  'LINKEDIN.IMAGE': { component: 'multiple', accept: 'image/*', maxFiles: 9, label: 'Imagens', description: 'Envie de 1 a 9 imagens.', primaryMediaType: MediaSocialTypeEnum.IMAGE },
  'LINKEDIN.CAROUSEL': { component: 'carousel', accept: 'application/pdf,image/*', minFiles: 1, maxFiles: 10, label: 'Slides / PDF', description: 'Envie PDF ou imagens e reordene conforme necessário.', primaryMediaType: MediaSocialTypeEnum.DOCUMENT },
  'LINKEDIN.VIDEO': { component: 'singleWithSecondary', accept: 'video/*', secondaryAccept: 'image/*', label: 'Vídeo', description: 'Envie 1 vídeo com thumbnail opcional.', primaryMediaType: MediaSocialTypeEnum.VIDEO, secondaryMediaType: MediaSocialTypeEnum.THUMBNAIL },
  'LINKEDIN.DOCUMENT': { component: 'singleWithSecondary', accept: 'application/pdf', secondaryAccept: 'image/*', label: 'Documento', description: 'Envie 1 PDF com capa.', primaryMediaType: MediaSocialTypeEnum.DOCUMENT, secondaryMediaType: MediaSocialTypeEnum.COVER_IMAGE },

  'TWITTER.TEXT': { component: 'none', label: 'Sem mídia', description: 'Tweet apenas com texto.' },
  'TWITTER.IMAGE': { component: 'multiple', accept: 'image/*', maxFiles: 4, label: 'Imagens', description: 'Envie de 1 a 4 imagens.', primaryMediaType: MediaSocialTypeEnum.IMAGE },
  'TWITTER.VIDEO': { component: 'single', accept: 'video/*', label: 'Vídeo', description: 'Envie 1 vídeo. Máx. 2min20s.', primaryMediaType: MediaSocialTypeEnum.VIDEO },
};

export const getMediaConfig = (socialMedia: SocialMediaEnum, postType: PostSocialTypeEnum): MediaSlotConfig => {
  return MEDIA_CONFIG[`${socialMedia}.${postType}`] ?? { component: 'none', label: 'Sem mídia', description: 'Nenhuma mídia necessária.' };
};

export const getDefaultPostType = (socialMedia: SocialMediaEnum) => ALLOWED_POST_TYPES[socialMedia][0];

export const supportsTitle = (socialMedia: SocialMediaEnum, postType: PostSocialTypeEnum) => {
  return TITLE_ENABLED_BY_TYPE[socialMedia]?.includes(postType) ?? false;
};

export const supportsTags = (socialMedia: SocialMediaEnum) => VISIBLE_FIELDS[socialMedia].tags;

export const getCaptionLabel = (socialMedia: SocialMediaEnum) => {
  if (socialMedia === SocialMediaEnum.YOUTUBE) return 'Descrição';
  if (socialMedia === SocialMediaEnum.TWITTER) return 'Tweet';
  return 'Legenda';
};

export const getLinkLabel = (socialMedia: SocialMediaEnum) => {
  if (socialMedia === SocialMediaEnum.INSTAGRAM) return 'Link na bio';
  return 'Link';
};

export const isSocialMediaEnum = (value?: string): value is SocialMediaEnum => {
  return !!value && Object.values(SocialMediaEnum).includes(value as SocialMediaEnum);
};
