export enum SocialMediaEnum {
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
  YOUTUBE = 'YOUTUBE',
  TIKTOK = 'TIKTOK',
  LINKEDIN = 'LINKEDIN',
  TWITTER = 'TWITTER',
}

export enum PostSocialTypeEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL',
  REEL = 'REEL',
  STORY = 'STORY',
  SHORT = 'SHORT',
  DOCUMENT = 'DOCUMENT',
  LIVE = 'LIVE',
}

export enum PostSocialStatusEnum {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  PROCESSING = 'PROCESSING',
  PUBLISHED = 'PUBLISHED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export enum MediaSocialTypeEnum {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  DOCUMENT = 'DOCUMENT',
  THUMBNAIL = 'THUMBNAIL',
  COVER_IMAGE = 'COVER_IMAGE',
}

export interface MediaSocial {
  id?: number;
  postSocialId?: number;
  s3Url: string;
  mediaType: MediaSocialTypeEnum;
  mimeType: string;
  width?: number;
  height?: number;
  fileSize?: number;
}

export interface LocalMediaSocial extends MediaSocial {
  tempId: string;
  file?: File;
  previewUrl?: string;
  title?: string;
  linkUrl?: string;
}

export interface PostSocial {
  id?: number;
  reflectionId: number;
  socialAccountId: number;
  socialMedia: SocialMediaEnum;
  postType: PostSocialTypeEnum;
  status: PostSocialStatusEnum;
  title: string;
  caption: string;
  linkUrl?: string;
  tags: string[];
  mediaList: MediaSocial[];
  externalPostId?: string;
  externalPostUrl?: string;
  errorMessage?: string;
}

export interface IdeaPromptRequest {
  idea: string;
  socialMedia: SocialMediaEnum;
  postType: PostSocialTypeEnum;
  generateTitle: boolean;
  generateTags: boolean;
  captionMaxLength?: number;
}

export interface IdeaPromptResponse {
  title?: string;
  caption: string;
  tags?: string[];
}

export interface SocialAccountOption {
  id: number;
  label: string;
}

export type GeneratedFieldKey = 'title' | 'caption' | 'tags';
