import { useState } from 'react';
import {
  Plus, X, Info, Eye, EyeOff, HelpCircle, Pencil, RefreshCw,
  CheckCircle, XCircle, AlertTriangle, Clock,
} from 'lucide-react';
import SocialHubLayout from '@/components/social/SocialHubLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { SocialMediaEnum } from '@/types/socialPost';
import { SOCIAL_MEDIA_META } from '@/data/socialPostConfig';

/* ── entity ── */
export interface ReflectionSocialAccount {
  id?: number;
  reflectionId: number;
  socialMedia: SocialMediaEnum;
  accountId?: string;
  accountName?: string;
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  isActive: boolean;
  createdAt?: Date;
  lastUpdate?: Date;
  deleted?: boolean;
}

/* ── dynamic labels per network ── */
interface NetworkLabels {
  accountName: string;
  clientId: string;
  clientIdHelp: string;
  clientSecret: string;
  clientSecretHelp: string;
}

const NETWORK_LABELS: Record<SocialMediaEnum, NetworkLabels> = {
  [SocialMediaEnum.YOUTUBE]: {
    accountName: 'Nome do Canal',
    clientId: 'Client ID (Google Cloud Console)',
    clientIdHelp: 'Encontre em console.cloud.google.com → APIs & Services → Credentials.',
    clientSecret: 'Client Secret (Google Cloud Console)',
    clientSecretHelp: 'Na mesma tela de Credentials, copie o Client Secret do OAuth 2.0.',
  },
  [SocialMediaEnum.FACEBOOK]: {
    accountName: 'Nome da Página',
    clientId: 'App ID (Facebook Developer)',
    clientIdHelp: 'Encontre em developers.facebook.com → My Apps → App ID.',
    clientSecret: 'App Secret (Facebook Developer)',
    clientSecretHelp: 'Em Settings → Basic → App Secret no painel do Facebook Developer.',
  },
  [SocialMediaEnum.INSTAGRAM]: {
    accountName: 'Username (@perfil)',
    clientId: 'App ID (Facebook Developer)',
    clientIdHelp: 'O Instagram usa a API do Facebook. Encontre em developers.facebook.com.',
    clientSecret: 'App Secret (Facebook Developer)',
    clientSecretHelp: 'Em Settings → Basic → App Secret no painel do Facebook Developer.',
  },
  [SocialMediaEnum.TWITTER]: {
    accountName: 'Username (@perfil)',
    clientId: 'API Key ou Client ID',
    clientIdHelp: 'Encontre em developer.twitter.com → Projects → Keys and Tokens.',
    clientSecret: 'API Secret ou Client Secret',
    clientSecretHelp: 'Na mesma tela de Keys and Tokens, copie o API Key Secret.',
  },
  [SocialMediaEnum.LINKEDIN]: {
    accountName: 'Nome do Perfil ou Empresa',
    clientId: 'Client ID (LinkedIn Developer)',
    clientIdHelp: 'Encontre em linkedin.com/developers → My Apps → Auth → Client ID.',
    clientSecret: 'Client Secret (LinkedIn Developer)',
    clientSecretHelp: 'Na mesma tela Auth, copie o Client Secret.',
  },
  [SocialMediaEnum.TIKTOK]: {
    accountName: 'Username (@perfil)',
    clientId: 'Client Key (TikTok Developer)',
    clientIdHelp: 'Encontre em developers.tiktok.com → Manage Apps → Client Key.',
    clientSecret: 'Client Secret (TikTok Developer)',
    clientSecretHelp: 'Na mesma tela de Manage Apps, copie o Client Secret.',
  },
};

/* ── token status helpers ── */
type TokenStatus = 'valid' | 'expiring' | 'expired' | 'none';

const getTokenStatus = (account: ReflectionSocialAccount): TokenStatus => {
  if (!account.accessToken && !account.tokenExpiresAt) return 'none';
  if (!account.tokenExpiresAt) return 'valid';
  const now = new Date();
  const exp = new Date(account.tokenExpiresAt);
  if (exp < now) return 'expired';
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  if (exp.getTime() - now.getTime() < threeDays) return 'expiring';
  return 'valid';
};

const TOKEN_BADGE: Record<TokenStatus, { label: string; className: string }> = {
  valid: { label: 'Token válido', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  expiring: { label: 'Expira em breve', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
  expired: { label: 'Token expirado', className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
  none: { label: 'Sem token', className: 'bg-muted text-muted-foreground' },
};

/* ── mock data ── */
const MOCK_ACCOUNTS: ReflectionSocialAccount[] = [
  {
    id: 1, reflectionId: 1, socialMedia: SocialMediaEnum.INSTAGRAM,
    accountName: '@meu_perfil', clientId: 'app_123', clientSecret: '***',
    accessToken: 'tok_abc', isActive: true,
    tokenExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
  },
  {
    id: 2, reflectionId: 1, socialMedia: SocialMediaEnum.FACEBOOK,
    accountName: 'Minha Página', clientId: 'app_456', clientSecret: '***',
    accessToken: 'tok_def', isActive: false,
    tokenExpiresAt: new Date(Date.now() - 1000),
    createdAt: new Date(),
  },
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/* ── empty form ── */
const emptyForm = (): Partial<ReflectionSocialAccount> => ({
  reflectionId: 1,
  socialMedia: undefined,
  accountName: '',
  clientId: '',
  clientSecret: '',
  isActive: true,
});

/* ── field errors ── */
interface FieldErrors {
  socialMedia?: string;
  accountName?: string;
  clientId?: string;
  clientSecret?: string;
}

/* ────────────────────────────────────── Component ── */
const SocialAccountsSettings = () => {
  const { toast } = useToast();
  const [accounts, setAccounts] = useState<ReflectionSocialAccount[]>(MOCK_ACCOUNTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<ReflectionSocialAccount>>(emptyForm());
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showSecret, setShowSecret] = useState(false);

  const labels = formData.socialMedia ? NETWORK_LABELS[formData.socialMedia] : null;

  const openNew = () => {
    setEditingId(null);
    setFormData(emptyForm());
    setErrors({});
    setShowSecret(false);
    setModalOpen(true);
  };

  const openEdit = (account: ReflectionSocialAccount) => {
    setEditingId(account.id ?? null);
    setFormData({ ...account });
    setErrors({});
    setShowSecret(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData(emptyForm());
    setErrors({});
  };

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (!formData.socialMedia) e.socialMedia = 'Selecione a rede social.';
    if (!formData.accountName?.trim()) e.accountName = 'Campo obrigatório.';
    if (!formData.clientId?.trim()) e.clientId = 'Campo obrigatório.';
    if (!formData.clientSecret?.trim()) e.clientSecret = 'Campo obrigatório.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    setIsSaving(true);
    try {
      if (API_BASE_URL) {
        const method = editingId ? 'PUT' : 'POST';
        const url = editingId
          ? `${API_BASE_URL}/reflection-social-account/${editingId}`
          : `${API_BASE_URL}/reflection-social-account`;
        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Erro ao salvar');
        const saved = await response.json();
        if (editingId) {
          setAccounts((prev) => prev.map((a) => (a.id === editingId ? saved : a)));
        } else {
          setAccounts((prev) => [...prev, saved]);
        }
      } else {
        if (editingId) {
          setAccounts((prev) =>
            prev.map((a) => (a.id === editingId ? { ...a, ...formData, lastUpdate: new Date() } as ReflectionSocialAccount : a))
          );
        } else {
          const newAccount: ReflectionSocialAccount = {
            ...formData,
            id: Date.now(),
            reflectionId: 1,
            socialMedia: formData.socialMedia!,
            isActive: formData.isActive ?? true,
            createdAt: new Date(),
          };
          setAccounts((prev) => [...prev, newAccount]);
        }
      }
      toast({ title: editingId ? 'Conta atualizada' : 'Conta cadastrada', description: `Conta ${formData.accountName} salva com sucesso.` });
      closeModal();
    } catch {
      toast({ title: 'Erro ao salvar', description: 'Tente novamente.', variant: 'destructive' });
    } finally {
      setIsSaving(false);
    }
  };

  const toggleActive = (id: number) => {
    setAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isActive: !a.isActive } : a))
    );
  };

  const handleReconnect = (account: ReflectionSocialAccount) => {
    toast({ title: 'Reconectando…', description: `Iniciando fluxo OAuth para ${account.accountName}.` });
  };

  /* ── render ── */
  return (
    <SocialHubLayout>
      <div className="p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">Contas Sociais</h1>
              <p className="mt-1 text-sm text-muted-foreground">Gerencie as contas conectadas de cada rede social.</p>
            </div>
            <Button onClick={openNew}>
              <Plus className="mr-2 h-4 w-4" />
              Nova Conta
            </Button>
          </div>

          {/* account cards */}
          {accounts.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <p className="text-sm">Nenhuma conta cadastrada.</p>
                <p className="text-xs mt-1">Clique em "Nova Conta" para adicionar.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {accounts.map((account) => {
                const meta = SOCIAL_MEDIA_META[account.socialMedia];
                const Icon = meta.icon;
                const tokenStatus = getTokenStatus(account);
                const tokenBadge = TOKEN_BADGE[tokenStatus];

                return (
                  <Card key={account.id} className="border-border bg-card overflow-hidden">
                    <CardContent className="p-5 space-y-3">
                      {/* top row */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `hsl(${meta.brandHsl} / 0.12)` }}
                          >
                            <Icon className="h-5 w-5" style={{ color: `hsl(${meta.brandHsl})` }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{account.accountName}</p>
                            <p className="text-xs text-muted-foreground">{meta.label}</p>
                          </div>
                        </div>
                      </div>

                      {/* badges */}
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className={account.isActive
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-muted text-muted-foreground'}
                        >
                          {account.isActive ? (
                            <><CheckCircle className="mr-1 h-3 w-3" /> Conectada</>
                          ) : (
                            <><XCircle className="mr-1 h-3 w-3" /> Inativa</>
                          )}
                        </Badge>
                        <Badge variant="secondary" className={tokenBadge.className}>
                          {tokenStatus === 'expired' && <AlertTriangle className="mr-1 h-3 w-3" />}
                          {tokenStatus === 'expiring' && <Clock className="mr-1 h-3 w-3" />}
                          {tokenStatus === 'valid' && <CheckCircle className="mr-1 h-3 w-3" />}
                          {tokenBadge.label}
                        </Badge>
                      </div>

                      {/* actions */}
                      <div className="flex items-center gap-1 pt-1 border-t border-border">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(account)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Editar</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center">
                                <Switch
                                  checked={account.isActive}
                                  onCheckedChange={() => account.id && toggleActive(account.id)}
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{account.isActive ? 'Desativar' : 'Ativar'}</TooltipContent>
                          </Tooltip>
                          {tokenStatus === 'expired' && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleReconnect(account)}>
                                  <RefreshCw className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Reconectar OAuth</TooltipContent>
                            </Tooltip>
                          )}
                        </TooltipProvider>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── modal form ── */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-[520px] p-0 gap-0">
          <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b border-border">
            <DialogTitle className="text-lg font-semibold">
              {editingId ? 'Editar Conta' : 'Conectar Conta'}
            </DialogTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2" onClick={closeModal}>
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="p-6 space-y-5">
            {/* Rede Social */}
            <div className="space-y-2">
              <Label>Rede Social <span className="text-destructive">*</span></Label>
              <Select
                value={formData.socialMedia ?? ''}
                onValueChange={(v) => setFormData({ ...formData, socialMedia: v as SocialMediaEnum })}
              >
                <SelectTrigger className={errors.socialMedia ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Selecione a rede social" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(SocialMediaEnum).map((sm) => {
                    const m = SOCIAL_MEDIA_META[sm];
                    const SMIcon = m.icon;
                    return (
                      <SelectItem key={sm} value={sm}>
                        <div className="flex items-center gap-2">
                          <SMIcon className="h-4 w-4" style={{ color: `hsl(${m.brandHsl})` }} />
                          {m.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {errors.socialMedia && <p className="text-xs text-destructive">{errors.socialMedia}</p>}
            </div>

            {/* Account Name */}
            <div className="space-y-2">
              <Label>{labels?.accountName ?? 'Nome da Conta'} <span className="text-destructive">*</span></Label>
              <Input
                value={formData.accountName ?? ''}
                onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                placeholder="@sua_conta"
                maxLength={255}
                className={errors.accountName ? 'border-destructive' : ''}
              />
              {errors.accountName && <p className="text-xs text-destructive">{errors.accountName}</p>}
            </div>

            {/* Client ID */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Label>{labels?.clientId ?? 'Client ID / App ID'} <span className="text-destructive">*</span></Label>
                {labels && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs text-xs">{labels.clientIdHelp}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <Input
                value={formData.clientId ?? ''}
                onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                placeholder="Cole aqui o Client ID"
                className={errors.clientId ? 'border-destructive' : ''}
              />
              {errors.clientId && <p className="text-xs text-destructive">{errors.clientId}</p>}
            </div>

            {/* Client Secret */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Label>{labels?.clientSecret ?? 'Client Secret / App Secret'} <span className="text-destructive">*</span></Label>
                {labels && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs text-xs">{labels.clientSecretHelp}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <div className="relative">
                <Input
                  type={showSecret ? 'text' : 'password'}
                  value={formData.clientSecret ?? ''}
                  onChange={(e) => setFormData({ ...formData, clientSecret: e.target.value })}
                  placeholder="Cole aqui o Secret"
                  className={`pr-10 ${errors.clientSecret ? 'border-destructive' : ''}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setShowSecret(!showSecret)}
                >
                  {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.clientSecret && <p className="text-xs text-destructive">{errors.clientSecret}</p>}
            </div>

            {/* isActive toggle */}
            <div className="flex items-center gap-3">
              <Switch
                checked={formData.isActive ?? true}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label>Conta ativa</Label>
            </div>

            {/* info banner */}
            <div className="flex gap-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 p-3 text-sm text-blue-800 dark:text-blue-300">
              <Info className="h-5 w-5 shrink-0 mt-0.5" />
              <p>
                Após salvar, você será redirecionado para autorizar o acesso na plataforma selecionada.
                Os tokens de acesso serão gerados automaticamente.
              </p>
            </div>

            {/* buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" onClick={closeModal}>Cancelar</Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Salvando…' : 'Salvar e Conectar'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </SocialHubLayout>
  );
};

export default SocialAccountsSettings;
