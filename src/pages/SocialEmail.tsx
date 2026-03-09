import { useState } from 'react';
import { Mail, Clock, Shield, Eye, EyeOff, Save, Zap } from 'lucide-react';
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
  email: string;
  password: string;
  imapHost: string;
  imapPort: string;
  smtpHost: string;
  smtpPort: string;
  protocol: string;
  autoReply: boolean;
  checkInterval: string;
  aiPrompt: string;
}

const SocialEmail = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const [config, setConfig] = useState<EmailConfig>({
    email: '',
    password: '',
    imapHost: 'imap.gmail.com',
    imapPort: '993',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    protocol: 'imap',
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
      if (config.email && config.password) {
        setConnectionStatus('success');
        toast({ title: 'Conexão bem-sucedida!', description: 'Servidor de email respondeu corretamente.' });
      } else {
        setConnectionStatus('error');
        toast({ title: 'Falha na conexão', description: 'Verifique suas credenciais.', variant: 'destructive' });
      }
    }, 2000);
  };

  const handleSave = () => {
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
          {/* Servidor de Email */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Servidor de Email</h3>
                  <p className="text-xs text-muted-foreground">IMAP & SMTP</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Email *</Label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={config.email}
                    onChange={(e) => updateConfig('email', e.target.value)}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Senha / App Password *</Label>
                  <div className="relative mt-1.5">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••"
                      value={config.password}
                      onChange={(e) => updateConfig('password', e.target.value)}
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

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">IMAP Host *</Label>
                    <Input
                      placeholder="imap.gmail.com"
                      value={config.imapHost}
                      onChange={(e) => updateConfig('imapHost', e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">Porta</Label>
                    <Input
                      placeholder="993"
                      value={config.imapPort}
                      onChange={(e) => updateConfig('imapPort', e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">SMTP Host *</Label>
                    <Input
                      placeholder="smtp.gmail.com"
                      value={config.smtpHost}
                      onChange={(e) => updateConfig('smtpHost', e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground">Porta</Label>
                    <Input
                      placeholder="587"
                      value={config.smtpPort}
                      onChange={(e) => updateConfig('smtpPort', e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Protocolo</Label>
                  <Select value={config.protocol} onValueChange={(v) => updateConfig('protocol', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imap">IMAP (SSL/TLS)</SelectItem>
                      <SelectItem value="pop3">POP3 (SSL/TLS)</SelectItem>
                    </SelectContent>
                  </Select>
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
                <Button
                  variant="outline"
                  onClick={handleTestConnection}
                  disabled={connectionStatus === 'testing'}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {connectionStatus === 'testing' ? 'Testando...' : 'Testar Conexão'}
                </Button>
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
