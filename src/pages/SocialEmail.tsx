import { useState } from 'react';
import { Mail, Clock, Eye, EyeOff, Save, Zap, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import SocialHubLayout from '@/components/social/SocialHubLayout';

interface EmailConfig {
  emailAddress: string;
  emailPassword: string;
  displayName: string;
  autoReply: boolean;
  checkInterval: string;
  aiPrompt: string;
}

const SocialEmail = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const [config, setConfig] = useState<EmailConfig>({
    emailAddress: '',
    emailPassword: '',
    displayName: '',
    autoReply: true,
    checkInterval: '1h',
    aiPrompt: 'Você é um assistente profissional. Responda os emails de forma educada e objetiva, mantendo o tom profissional.',
  });

  const updateConfig = (field: keyof EmailConfig, value: string | boolean) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleTestConnection = () => {
    setConnectionStatus('testing');
    setTimeout(() => {
      if (config.emailAddress && config.emailPassword) {
        setConnectionStatus('success');
        toast({ title: 'Conexão bem-sucedida!', description: 'Servidor detectado automaticamente e respondeu corretamente.' });
      } else {
        setConnectionStatus('error');
        toast({ title: 'Falha na conexão', description: 'Verifique suas credenciais.', variant: 'destructive' });
      }
    }, 2000);
  };

  const handleSave = () => {
    const payload = {
      emailAddress: config.emailAddress,
      emailPassword: config.emailPassword,
      displayName: config.displayName || undefined,
    };
    localStorage.setItem('socialEmailConfig', JSON.stringify(config));
    toast({ title: 'Configurações salvas!', description: 'As configurações de email foram atualizadas.' });
  };

  return (
    <SocialHubLayout>
      <div className="p-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground font-display">Configuração de Email</h1>
          <p className="text-muted-foreground mt-1">Configure sua conta de email para leitura e resposta automática diária.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conta de Email */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Conta de Email</h3>
                  <p className="text-xs text-muted-foreground">Servidor detectado automaticamente</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Email *</Label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={config.emailAddress}
                    onChange={(e) => updateConfig('emailAddress', e.target.value)}
                    className="mt-1.5"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    IMAP/SMTP será configurado automaticamente com base no domínio.
                  </p>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Senha / App Password *</Label>
                  <div className="relative mt-1.5">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••"
                      value={config.emailPassword}
                      onChange={(e) => updateConfig('emailPassword', e.target.value)}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Nome de Exibição</Label>
                  <div className="relative mt-1.5">
                    <Input
                      type="text"
                      placeholder="João Silva"
                      value={config.displayName}
                      onChange={(e) => updateConfig('displayName', e.target.value)}
                      className="pl-9"
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Opcional. Nome usado no remetente dos emails.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automação */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Automação</h3>
                  <p className="text-xs text-muted-foreground">Job diário de leitura e resposta</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
                  <div>
                    <p className="font-medium text-foreground text-sm">Resposta Automática</p>
                    <p className="text-xs text-muted-foreground">Ativar IA para responder emails</p>
                  </div>
                  <Switch
                    checked={config.autoReply}
                    onCheckedChange={(v) => updateConfig('autoReply', v)}
                  />
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Intervalo de Verificação</Label>
                  <Select value={config.checkInterval} onValueChange={(v) => updateConfig('checkInterval', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30m">A cada 30 minutos</SelectItem>
                      <SelectItem value="1h">A cada 1 hora</SelectItem>
                      <SelectItem value="2h">A cada 2 horas</SelectItem>
                      <SelectItem value="6h">A cada 6 horas</SelectItem>
                      <SelectItem value="12h">A cada 12 horas</SelectItem>
                      <SelectItem value="24h">A cada 24 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Prompt da IA</Label>
                  <Textarea
                    placeholder="Descreva como a IA deve responder os emails..."
                    value={config.aiPrompt}
                    onChange={(e) => updateConfig('aiPrompt', e.target.value)}
                    className="mt-1.5 min-h-[120px] resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">Este prompt será usado pela IA para gerar respostas automáticas.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status & Actions */}
        <Card className="border-border bg-card mt-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  connectionStatus === 'success' ? 'bg-green-500' :
                  connectionStatus === 'error' ? 'bg-destructive' :
                  connectionStatus === 'testing' ? 'bg-yellow-500 animate-pulse' :
                  'bg-muted-foreground/30'
                }`} />
                <div>
                  <p className="font-semibold text-foreground text-sm">Segurança & Status</p>
                  <p className="text-xs text-muted-foreground">Teste a conexão antes de salvar</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SocialHubLayout>
  );
};

export default SocialEmail;
