import { useState } from 'react';
import { Plus, Trash2, GripVertical, Instagram, Youtube, Twitter, Facebook, Linkedin, Globe, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { SocialLink } from '@/types/profile';

const ICON_OPTIONS = [
  { value: 'instagram', label: 'Instagram', icon: Instagram },
  { value: 'youtube', label: 'YouTube', icon: Youtube },
  { value: 'twitter', label: 'Twitter/X', icon: Twitter },
  { value: 'facebook', label: 'Facebook', icon: Facebook },
  { value: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { value: 'tiktok', label: 'TikTok', icon: Globe },
  { value: 'website', label: 'Website', icon: Globe },
  { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { value: 'telegram', label: 'Telegram', icon: MessageCircle },
  { value: 'email', label: 'Email', icon: Mail },
] as const;

interface SocialLinkEditorProps {
  links: SocialLink[];
  onAdd: (link: Omit<SocialLink, 'id'>) => void;
  onUpdate: (id: string, updates: Partial<SocialLink>) => void;
  onRemove: (id: string) => void;
}

const SocialLinkEditor = ({ links, onAdd, onUpdate, onRemove }: SocialLinkEditorProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newLink, setNewLink] = useState<Omit<SocialLink, 'id'>>({
    url: '',
    label: '',
    iconType: 'website',
  });

  const handleAdd = () => {
    if (newLink.url && newLink.label) {
      onAdd(newLink);
      setNewLink({ url: '', label: '', iconType: 'website' });
      setIsAdding(false);
    }
  };

  const getIcon = (iconType: string) => {
    const option = ICON_OPTIONS.find(opt => opt.value === iconType);
    const Icon = option?.icon || Globe;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-lg font-semibold">Links Sociais</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-3">
        {links.map((link) => (
          <Card key={link.id} className="bg-card/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="text-muted-foreground">
                  {getIcon(link.iconType)}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Select
                    value={link.iconType}
                    onValueChange={(value) => onUpdate(link.id, { iconType: value as SocialLink['iconType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ICON_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <option.icon className="w-4 h-4" />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Nome do link"
                    value={link.label}
                    onChange={(e) => onUpdate(link.id, { label: e.target.value })}
                  />
                  <Input
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => onUpdate(link.id, { url: e.target.value })}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(link.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {isAdding && (
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Select
                    value={newLink.iconType}
                    onValueChange={(value) => setNewLink({ ...newLink, iconType: value as SocialLink['iconType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {ICON_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <option.icon className="w-4 h-4" />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Nome do link (ex: Meu Instagram)"
                    value={newLink.label}
                    onChange={(e) => setNewLink({ ...newLink, label: e.target.value })}
                  />
                  <Input
                    placeholder="URL completa"
                    value={newLink.url}
                    onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm" onClick={() => setIsAdding(false)}>
                    Cancelar
                  </Button>
                  <Button size="sm" onClick={handleAdd}>
                    Adicionar Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {links.length === 0 && !isAdding && (
          <p className="text-muted-foreground text-center py-4">
            Nenhum link social adicionado ainda.
          </p>
        )}
      </div>
    </div>
  );
};

export default SocialLinkEditor;
