import { useState } from 'react';
import { Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';
import SocialHubLayout from '@/components/social/SocialHubLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { SocialMediaEnum } from '@/types/socialPost';
import { SOCIAL_MEDIA_META } from '@/data/socialPostConfig';

export interface ReflectionSocialAccount {
  id?: number;
  reflectionId: number;
  socialMedia: SocialMediaEnum;
  accountId?: string;
  accountName?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  isActive: boolean;
  createdAt?: Date;
  lastUpdate?: Date;
  deleted?: boolean;
}

const MOCK_ACCOUNTS: ReflectionSocialAccount[] = [
  { id: 1, reflectionId: 1, socialMedia: SocialMediaEnum.INSTAGRAM, accountName: 'Instagram principal', accountId: 'ig_12345', isActive: true, createdAt: new Date() },
  { id: 2, reflectionId: 1, socialMedia: SocialMediaEnum.FACEBOOK, accountName: 'Facebook Page', accountId: 'fb_67890', isActive: true, createdAt: new Date() },
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const SocialAccountsSettings = () => {
  const { toast } = useToast();
  const [accounts, setAccounts] = useState<ReflectionSocialAccount[]>(MOCK_ACCOUNTS);
  const [showForm, setShowForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<Partial<ReflectionSocialAccount>>({
    reflectionId: 1,
    socialMedia: SocialMediaEnum.INSTAGRAM,
    accountName: '',
    accountId: '',
    isActive: true,
  });

  const resetForm = () => {
    setFormData({ reflectionId: 1, socialMedia: SocialMediaEnum.INSTAGRAM, accountName: '', accountId: '', isActive: true });
    setShowForm(false);
  };

  const handleSave = async () => {
    if (!formData.accountName?.trim()) {
      toast({ title: 'Nome obrigatório', description: 'Informe o nome da conta.', variant: 'destructive' });
      return;
    }

    setIsSaving(true);
    try {
      if (API_BASE_URL) {
        const response = await fetch(`${API_BASE_URL}/reflection-social-account`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Erro ao salvar');
        const saved = await response.json();
        setAccounts((prev) => [...prev, saved]);
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
      toast({ title: 'Conta cadastrada', description: `Conta ${formData.accountName} adicionada com sucesso.` });
      resetForm();
    } catch {
      toast({ title: 'Erro ao salvar', description: 'Tente novamente.', variant: 'destructive' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      if (API_BASE_URL) {
        await fetch(`${API_BASE_URL}/reflection-social-account/${id}`, { method: 'DELETE' });
      }
      setAccounts((prev) => prev.filter((a) => a.id !== id));
      toast({ title: 'Conta removida' });
    } catch {
      toast({ title: 'Erro ao remover', variant: 'destructive' });
    }
  };

  const toggleActive = async (id: number) => {
    setAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isActive: !a.isActive } : a))
    );
  };

  return (
    <SocialHubLayout>
      <div className="p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">Contas Sociais</h1>
              <p className="mt-1 text-sm text-muted-foreground">Gerencie as contas conectadas de cada rede social.</p>
            </div>
            <Button onClick={() => setShowForm(!showForm)}>
              <Plus className="mr-2 h-4 w-4" />
              Nova Conta
            </Button>
          </div>

          {showForm && (
            <Card className="border-border bg-card shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-lg">Cadastrar Conta Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Rede Social</Label>
                    <Select
                      value={formData.socialMedia}
                      onValueChange={(value) => setFormData({ ...formData, socialMedia: value as SocialMediaEnum })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(SocialMediaEnum).map((sm) => (
                          <SelectItem key={sm} value={sm}>
                            {SOCIAL_MEDIA_META[sm].label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Nome da Conta</Label>
                    <Input
                      value={formData.accountName ?? ''}
                      onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                      placeholder="Ex: Instagram Comercial"
                      maxLength={255}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>ID da Conta (plataforma)</Label>
                    <Input
                      value={formData.accountId ?? ''}
                      onChange={(e) => setFormData({ ...formData, accountId: e.target.value })}
                      placeholder="ID externo (opcional)"
                      maxLength={255}
                    />
                  </div>

                  <div className="flex items-end gap-2 pb-1">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={formData.isActive ?? true}
                        onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                      />
                      <Label>Ativa</Label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleSave} disabled={isSaving}>
                    {isSaving ? 'Salvando...' : 'Salvar'}
                  </Button>
                  <Button variant="ghost" onClick={resetForm}>
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-border bg-card shadow-[var(--shadow-card)]">
            <CardContent className="p-0">
              {accounts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <p className="text-sm">Nenhuma conta cadastrada.</p>
                  <p className="text-xs mt-1">Clique em "Nova Conta" para adicionar.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rede Social</TableHead>
                      <TableHead>Nome da Conta</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-16">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accounts.map((account) => {
                      const meta = SOCIAL_MEDIA_META[account.socialMedia];
                      const Icon = meta.icon;
                      return (
                        <TableRow key={account.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" style={{ color: `hsl(${meta.brandHsl})` }} />
                              <span className="text-sm font-medium">{meta.label}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">{account.accountName}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{account.accountId || '—'}</TableCell>
                          <TableCell>
                            <button onClick={() => account.id && toggleActive(account.id)} className="flex items-center gap-1.5">
                              {account.isActive ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <XCircle className="h-4 w-4 text-destructive" />
                              )}
                              <span className="text-xs">{account.isActive ? 'Ativa' : 'Inativa'}</span>
                            </button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => account.id && handleDelete(account.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </SocialHubLayout>
  );
};

export default SocialAccountsSettings;
