import { useEffect, useMemo, useState } from 'react';
import { CalendarClock, Loader2, Save, Sparkles } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialHubLayout from '@/components/social/SocialHubLayout';
import IdeaSection from '@/components/social/post/IdeaSection';
import PostTypeSelector from '@/components/social/post/PostTypeSelector';
import MediaUploadSingle from '@/components/social/post/MediaUploadSingle';
import MediaUploadMultiple from '@/components/social/post/MediaUploadMultiple';
import CarouselUpload from '@/components/social/post/CarouselUpload';
import SocialPostPreview from '@/components/social/post/SocialPostPreview';
import TagsInput from '@/components/social/post/TagsInput';
import CaptionField from '@/components/social/post/CaptionField';
import GeneratedBadge from '@/components/social/post/GeneratedBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  getCaptionLabel,
  getDefaultPostType,
  getLinkLabel,
  getMediaConfig,
  isSocialMediaEnum,
  SOCIAL_MEDIA_META,
  supportsTags,
  supportsTitle,
  VISIBLE_FIELDS,
} from '@/data/socialPostConfig';
import {
  type GeneratedFieldKey,
  type IdeaPromptResponse,
  type LocalMediaSocial,
  MediaSocialTypeEnum,
  PostSocialStatusEnum,
  PostSocialTypeEnum,
  type SocialAccountOption,
  SocialMediaEnum,
} from '@/types/socialPost';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const buildMediaItem = (file: File, mediaType?: MediaSocialTypeEnum): LocalMediaSocial => ({
  tempId: crypto.randomUUID(),
  file,
  previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
  s3Url: '',
  mediaType:
    mediaType ??
    (file.type.startsWith('video/')
      ? MediaSocialTypeEnum.VIDEO
      : file.type === 'application/pdf'
        ? MediaSocialTypeEnum.DOCUMENT
        : MediaSocialTypeEnum.IMAGE),
  mimeType: file.type || 'application/octet-stream',
  fileSize: file.size,
});

const DEFAULT_SOCIAL_ACCOUNTS: Record<SocialMediaEnum, SocialAccountOption[]> = {
  [SocialMediaEnum.INSTAGRAM]: [{ id: 101, label: 'Instagram principal' }],
  [SocialMediaEnum.FACEBOOK]: [{ id: 102, label: 'Facebook Page' }],
  [SocialMediaEnum.YOUTUBE]: [{ id: 103, label: 'YouTube Channel' }],
  [SocialMediaEnum.TIKTOK]: [{ id: 104, label: 'TikTok Oficial' }],
  [SocialMediaEnum.LINKEDIN]: [{ id: 105, label: 'LinkedIn Company' }],
  [SocialMediaEnum.TWITTER]: [{ id: 106, label: 'Conta X' }],
};

const PostSocialPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { socialMedia: socialMediaParam, postId } = useParams();

  const socialMedia = isSocialMediaEnum(socialMediaParam) ? socialMediaParam : SocialMediaEnum.INSTAGRAM;
  const socialMeta = SOCIAL_MEDIA_META[socialMedia];
  const visibleFields = VISIBLE_FIELDS[socialMedia];

  const [postType, setPostType] = useState<PostSocialTypeEnum>(getDefaultPostType(socialMedia));
  const [status, setStatus] = useState<PostSocialStatusEnum>(PostSocialStatusEnum.DRAFT);
  const [socialAccountId, setSocialAccountId] = useState<number>(DEFAULT_SOCIAL_ACCOUNTS[socialMedia][0].id);
  const [accounts, setAccounts] = useState<SocialAccountOption[]>(DEFAULT_SOCIAL_ACCOUNTS[socialMedia]);
  const [idea, setIdea] = useState('');
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [linkUrl, setLinkUrl] = useState('');
  const [mediaList, setMediaList] = useState<LocalMediaSocial[]>([]);
  const [secondaryMedia, setSecondaryMedia] = useState<LocalMediaSocial | null>(null);
  const [generatedFields, setGeneratedFields] = useState<GeneratedFieldKey[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const mediaConfig = useMemo(() => getMediaConfig(socialMedia, postType), [socialMedia, postType]);
  const captionLabel = getCaptionLabel(socialMedia);
  const allowTitle = supportsTitle(socialMedia, postType);
  const allowTags = supportsTags(socialMedia);

  useEffect(() => {
    const defaultType = getDefaultPostType(socialMedia);
    setPostType(defaultType);
    setStatus(PostSocialStatusEnum.DRAFT);
    setSocialAccountId(DEFAULT_SOCIAL_ACCOUNTS[socialMedia][0].id);
    setAccounts(DEFAULT_SOCIAL_ACCOUNTS[socialMedia]);
    setTitle('');
    setCaption('');
    setTags([]);
    setLinkUrl('');
    setMediaList([]);
    setSecondaryMedia(null);
    setGeneratedFields([]);
  }, [socialMedia]);

  useEffect(() => {
    setMediaList([]);
    setSecondaryMedia(null);
    setGeneratedFields([]);
    if (!allowTitle) setTitle('');
    if (!allowTags) setTags([]);
  }, [postType, allowTitle, allowTags]);

  useEffect(() => {
    if (!postId || !API_BASE_URL) return;

    const loadPost = async () => {
      setIsLoadingPost(true);
      try {
        const response = await fetch(`${API_BASE_URL}/post-social/${postId}`);
        if (!response.ok) throw new Error('Não foi possível carregar o post');
        const data = await response.json();
        setStatus(data.status ?? PostSocialStatusEnum.DRAFT);
        setPostType(data.postType ?? getDefaultPostType(socialMedia));
        setTitle(data.title ?? '');
        setCaption(data.caption ?? '');
        setTags(data.tags ?? []);
        setLinkUrl(data.linkUrl ?? '');
        setSocialAccountId(data.socialAccountId ?? DEFAULT_SOCIAL_ACCOUNTS[socialMedia][0].id);
      } catch {
        toast({ title: 'Falha ao carregar post', description: 'Abrindo um novo rascunho.', variant: 'destructive' });
      } finally {
        setIsLoadingPost(false);
      }
    };

    loadPost();
  }, [postId, socialMedia, toast]);

  useEffect(() => {
    if (!API_BASE_URL) return;

    const loadAccounts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reflection-social-account/reflection/1/social-media/${socialMedia}`);
        if (!response.ok) throw new Error('contas indisponíveis');
        const data = await response.json();
        if (Array.isArray(data) && data.length) {
          const mapped = data.map((account: any) => ({ id: account.id, label: account.name || account.username || `Conta ${account.id}` }));
          setAccounts(mapped);
          setSocialAccountId(mapped[0].id);
        }
      } catch {
        setAccounts(DEFAULT_SOCIAL_ACCOUNTS[socialMedia]);
        setSocialAccountId(DEFAULT_SOCIAL_ACCOUNTS[socialMedia][0].id);
      }
    };

    loadAccounts();
  }, [socialMedia]);

  const dismissGenerated = (field: GeneratedFieldKey) => {
    setGeneratedFields((current) => current.filter((item) => item !== field));
  };

  const addMediaFiles = (files: File[], mediaType?: MediaSocialTypeEnum) => {
    setMediaList((current) => [...current, ...files.map((file) => buildMediaItem(file, mediaType))]);
  };

  const updateSingleMedia = (file: File, mediaType?: MediaSocialTypeEnum) => {
    setMediaList([buildMediaItem(file, mediaType)]);
  };

  const reorderCarousel = (fromIndex: number, toIndex: number) => {
    setMediaList((current) => {
      const next = [...current];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  };

  const generateContent = async () => {
    if (!idea.trim()) return;

    setIsGenerating(true);
    try {
      const payload = {
        idea,
        socialMedia,
        postType,
        generateTitle: allowTitle,
        generateTags: allowTags,
        captionMaxLength: visibleFields.captionMaxLength,
      };

      let result: IdeaPromptResponse;

      if (API_BASE_URL) {
        const response = await fetch(`${API_BASE_URL}/post-social/generate-content`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error('Não foi possível gerar o conteúdo');
        result = await response.json();
      } else {
        result = {
          title: allowTitle ? `Sugestão para ${socialMeta.label}` : undefined,
          caption: `${idea.trim()}\n\nTexto sugerido automaticamente para ${socialMeta.label} no formato ${postType.toLowerCase()}.`,
          tags: allowTags ? ['#conteudo', `#${socialMeta.label.toLowerCase().replace(/\s|\//g, '')}`] : undefined,
        };
      }

      if (result.title !== undefined) setTitle(result.title);
      setCaption(result.caption ?? '');
      if (result.tags) setTags(result.tags);

      const nextGenerated: GeneratedFieldKey[] = ['caption'];
      if (result.title !== undefined) nextGenerated.push('title');
      if (result.tags) nextGenerated.push('tags');
      setGeneratedFields(nextGenerated);
    } catch {
      toast({ title: 'Falha ao gerar conteúdo', description: 'Verifique a integração da IA e tente novamente.', variant: 'destructive' });
    } finally {
      setIsGenerating(false);
    }
  };

  const savePost = async (nextStatus: PostSocialStatusEnum) => {
    setIsSaving(true);
    try {
      const payload = {
        id: postId ? Number(postId) : undefined,
        reflectionId: 1,
        socialAccountId,
        socialMedia,
        postType,
        status: nextStatus,
        title,
        caption,
        linkUrl: linkUrl || undefined,
        tags,
        mediaList: [...mediaList, ...(secondaryMedia ? [secondaryMedia] : [])].map((item) => ({
          s3Url: item.s3Url || item.previewUrl || '',
          mediaType: item.mediaType,
          mimeType: item.mimeType,
          width: item.width,
          height: item.height,
          fileSize: item.fileSize,
        })),
      };

      if (API_BASE_URL) {
        const response = await fetch(`${API_BASE_URL}/post-social`, {
          method: postId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error('Erro ao salvar');
      }

      setStatus(nextStatus);
      toast({ title: nextStatus === PostSocialStatusEnum.SCHEDULED ? 'Post agendado' : 'Rascunho salvo', description: 'Os dados do post foram atualizados.' });
    } catch {
      toast({ title: 'Erro ao salvar', description: 'Revise os dados e tente novamente.', variant: 'destructive' });
    } finally {
      setIsSaving(false);
    }
  };

  const renderMediaSection = () => {
    if (mediaConfig.component === 'none') {
      return <div className="rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">{mediaConfig.description}</div>;
    }

    if (mediaConfig.component === 'single') {
      return (
        <MediaUploadSingle
          label={mediaConfig.label}
          description={mediaConfig.description}
          accept={mediaConfig.accept}
          aspectHint={mediaConfig.aspectHint}
          value={mediaList[0] ?? null}
          onChange={updateSingleMedia}
          onRemove={() => setMediaList([])}
          mediaType={mediaConfig.primaryMediaType}
        />
      );
    }

    if (mediaConfig.component === 'multiple') {
      return (
        <MediaUploadMultiple
          label={mediaConfig.label}
          description={mediaConfig.description}
          accept={mediaConfig.accept}
          maxFiles={mediaConfig.maxFiles ?? 10}
          items={mediaList}
          onAdd={addMediaFiles}
          onRemove={(tempId) => setMediaList((current) => current.filter((item) => item.tempId !== tempId))}
          mediaType={mediaConfig.primaryMediaType}
        />
      );
    }

    if (mediaConfig.component === 'carousel') {
      return (
        <CarouselUpload
          label={mediaConfig.label}
          description={mediaConfig.description}
          accept={mediaConfig.accept}
          minFiles={mediaConfig.minFiles}
          maxFiles={mediaConfig.maxFiles}
          items={mediaList}
          allowCardMeta={mediaConfig.allowCardMeta}
          onAdd={addMediaFiles}
          onRemove={(tempId) => setMediaList((current) => current.filter((item) => item.tempId !== tempId))}
          onReorder={reorderCarousel}
          onUpdateMeta={(tempId, updates) =>
            setMediaList((current) => current.map((item) => (item.tempId === tempId ? { ...item, ...updates } : item)))
          }
          mediaType={mediaConfig.primaryMediaType}
        />
      );
    }

    return (
      <div className="space-y-4">
        <MediaUploadSingle
          label={mediaConfig.label}
          description={mediaConfig.description}
          accept={mediaConfig.accept}
          aspectHint={mediaConfig.aspectHint}
          value={mediaList[0] ?? null}
          onChange={updateSingleMedia}
          onRemove={() => setMediaList([])}
          mediaType={mediaConfig.primaryMediaType}
        />
        <MediaUploadSingle
          label={mediaConfig.secondaryMediaType === MediaSocialTypeEnum.THUMBNAIL ? 'Thumbnail' : 'Capa'}
          description="Upload secundário opcional para enriquecer a publicação."
          accept={mediaConfig.secondaryAccept}
          aspectHint={mediaConfig.secondaryMediaType === MediaSocialTypeEnum.THUMBNAIL ? '16:9' : undefined}
          value={secondaryMedia}
          onChange={(file, type) => setSecondaryMedia(buildMediaItem(file, type))}
          onRemove={() => setSecondaryMedia(null)}
          mediaType={mediaConfig.secondaryMediaType}
        />
      </div>
    );
  };

  const HeaderIcon = socialMeta.icon;

  return (
    <SocialHubLayout activeSocialMedia={socialMedia}>
      <div className="p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card/70 p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl" style={{ backgroundColor: `hsl(${socialMeta.brandHsl} / 0.16)` }}>
                <HeaderIcon className="h-7 w-7" style={{ color: `hsl(${socialMeta.brandHsl})` }} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Post Social</p>
                <h1 className="font-display text-3xl font-bold text-foreground">{socialMeta.label}</h1>
                <p className="mt-1 text-sm text-muted-foreground">Criação e edição dinâmica com texto gerado por IA e mídia manual.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{status}</span>
              {isLoadingPost ? <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" /> : null}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_420px]">
            <div className="space-y-6">
              <IdeaSection
                idea={idea}
                onIdeaChange={setIdea}
                onGenerate={generateContent}
                isGenerating={isGenerating}
                hasGenerated={generatedFields.length > 0}
                canGenerate={Boolean(idea.trim())}
                brandHsl={socialMeta.brandHsl}
              />

              <Card className="border-border bg-card shadow-[var(--shadow-card)]">
                <CardContent className="space-y-6 p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Conta social</Label>
                      <Select value={String(socialAccountId)} onValueChange={(value) => setSocialAccountId(Number(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={String(account.id)}>{account.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select value={status} onValueChange={(value) => setStatus(value as PostSocialStatusEnum)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={PostSocialStatusEnum.DRAFT}>DRAFT</SelectItem>
                          <SelectItem value={PostSocialStatusEnum.SCHEDULED}>SCHEDULED</SelectItem>
                          <SelectItem value={PostSocialStatusEnum.PROCESSING}>PROCESSING</SelectItem>
                          <SelectItem value={PostSocialStatusEnum.PUBLISHED}>PUBLISHED</SelectItem>
                          <SelectItem value={PostSocialStatusEnum.FAILED}>FAILED</SelectItem>
                          <SelectItem value={PostSocialStatusEnum.CANCELLED}>CANCELLED</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <PostTypeSelector socialMedia={socialMedia} value={postType} onChange={(value) => setPostType(value)} />

                  <section className="space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Mídia</h2>
                      <p className="mt-1 text-sm text-muted-foreground">Upload sempre manual, com preview imediato.</p>
                    </div>
                    {renderMediaSection()}
                  </section>

                  <section className="space-y-4 rounded-2xl border border-border bg-card/60 p-5">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Texto do post</h2>
                      <p className="mt-1 text-sm text-muted-foreground">Os campos podem ser gerados por IA e editados livremente.</p>
                    </div>

                    {visibleFields.title && allowTitle ? (
                      <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} className={isGenerating ? 'animate-pulse space-y-2 rounded-xl' : 'space-y-2'}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <Label className="text-sm text-foreground">Título</Label>
                          {generatedFields.includes('title') ? <GeneratedBadge onDismiss={() => dismissGenerated('title')} /> : null}
                        </div>
                        <Input value={title} maxLength={255} onChange={(event) => setTitle(event.target.value)} placeholder="Título do post" className="rounded-xl border-border bg-background/70" />
                      </motion.div>
                    ) : null}

                    {visibleFields.caption ? (
                      <CaptionField
                        label={captionLabel}
                        value={caption}
                        onChange={setCaption}
                        maxLength={visibleFields.captionMaxLength}
                        placeholder={`Escreva o conteúdo de ${captionLabel.toLowerCase()}...`}
                        generated={generatedFields.includes('caption')}
                        onDismissGenerated={() => dismissGenerated('caption')}
                        loading={isGenerating}
                      />
                    ) : null}

                    {visibleFields.tags && allowTags ? (
                      <TagsInput
                        tags={tags}
                        onChange={setTags}
                        generated={generatedFields.includes('tags')}
                        onDismissGenerated={() => dismissGenerated('tags')}
                        loading={isGenerating}
                      />
                    ) : null}

                    {visibleFields.linkUrl ? (
                      <div className="space-y-2">
                        <Label className="text-sm text-foreground">{getLinkLabel(socialMedia)}</Label>
                        <Input value={linkUrl} maxLength={1000} onChange={(event) => setLinkUrl(event.target.value)} placeholder="https://" className="rounded-xl border-border bg-background/70" />
                      </div>
                    ) : null}
                  </section>

                  <div className="flex flex-wrap gap-3">
                    <Button onClick={() => savePost(PostSocialStatusEnum.DRAFT)} disabled={isSaving}>
                      {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                      Salvar Rascunho
                    </Button>
                    <Button variant="secondary" onClick={() => savePost(PostSocialStatusEnum.SCHEDULED)} disabled={isSaving}>
                      <CalendarClock className="h-4 w-4" />
                      Agendar
                    </Button>
                    <Button variant="ghost" onClick={() => navigate('/social/email')}>
                      <Sparkles className="h-4 w-4" />
                      Voltar ao hub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <SocialPostPreview
              socialMedia={socialMedia}
              postType={postType}
              status={status}
              title={title}
              caption={caption}
              tags={tags}
              linkUrl={linkUrl}
              media={[...mediaList, ...(secondaryMedia ? [secondaryMedia] : [])].filter(
                (item) => item.mediaType !== MediaSocialTypeEnum.THUMBNAIL && item.mediaType !== MediaSocialTypeEnum.COVER_IMAGE,
              )}
            />
          </div>
        </div>
      </div>
    </SocialHubLayout>
  );
};

export default PostSocialPage;
