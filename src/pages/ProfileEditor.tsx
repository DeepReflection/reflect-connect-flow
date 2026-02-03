import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Save, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/contexts/ProfileContext';
import ImageUploader from '@/components/profile/ImageUploader';
import SocialLinkEditor from '@/components/profile/SocialLinkEditor';
import ItemListEditor from '@/components/profile/ItemListEditor';
import { AgendaEvent, Product, Service } from '@/themes/types';

const AGENDA_FIELDS = [
  { key: 'title', label: 'Título', type: 'text' as const, required: true },
  { key: 'description', label: 'Descrição', type: 'textarea' as const, required: true },
  { key: 'date', label: 'Data', type: 'text' as const, placeholder: 'Ex: 15 Jan 2025', required: true },
  { key: 'time', label: 'Horário', type: 'text' as const, placeholder: 'Ex: 19:00', required: true },
  { key: 'location', label: 'Local', type: 'text' as const, required: false },
  { key: 'imageUrl', label: 'URL da Imagem', type: 'url' as const, required: false },
];

const PRODUCT_FIELDS = [
  { key: 'title', label: 'Título', type: 'text' as const, required: true },
  { key: 'description', label: 'Descrição', type: 'textarea' as const, required: true },
  { key: 'imageUrl', label: 'URL da Imagem', type: 'url' as const, required: false },
  { key: 'downloadUrl', label: 'Link de Download', type: 'url' as const, required: false },
];

const SERVICE_FIELDS = [
  { key: 'title', label: 'Título', type: 'text' as const, required: true },
  { key: 'description', label: 'Descrição', type: 'textarea' as const, required: true },
  { key: 'imageUrl', label: 'URL da Imagem', type: 'url' as const, required: false },
  { key: 'linkUrl', label: 'Link do Serviço', type: 'url' as const, required: false },
];


const ProfileEditor = () => {
  const { toast } = useToast();
  const {
    profile,
    updateName,
    updateDescription,
    updateAvatar,
    updateBanner,
    addSocialLink,
    updateSocialLink,
    removeSocialLink,
    addAgendaEvent,
    updateAgendaEvent,
    removeAgendaEvent,
    addProduct,
    updateProduct,
    removeProduct,
    addService,
    updateService,
    removeService,
    addReflection,
    updateReflection,
    removeReflection,
    resetToDefault,
  } = useProfile();

  const handleReset = () => {
    if (confirm('Tem certeza que deseja restaurar os dados padrão? Todas as alterações serão perdidas.')) {
      resetToDefault();
      toast({
        title: 'Perfil restaurado',
        description: 'Os dados foram restaurados para os valores padrão.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Editar Perfil</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Restaurar
            </Button>
            <Link to="/">
              <Button size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Ver Perfil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl py-8 px-4">
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
          </TabsList>

          {/* Basic Info */}
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>
                  Personalize seu nome, descrição e imagens do perfil.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ImageUploader
                    currentImage={profile.avatarUrl}
                    onImageChange={updateAvatar}
                    label="Foto do Perfil"
                    aspectRatio="square"
                  />
                  <ImageUploader
                    currentImage={profile.bannerUrl}
                    onImageChange={updateBanner}
                    label="Banner (opcional)"
                    aspectRatio="banner"
                    showGallery={true}
                  />
                </div>

                <Separator />

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Perfil</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => updateName(e.target.value)}
                    placeholder="Seu nome ou nome do projeto"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={profile.description}
                    onChange={(e) => updateDescription(e.target.value)}
                    placeholder="Descreva seu projeto ou perfil..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    {profile.description.length} caracteres
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Links */}
          <TabsContent value="links">
            <Card>
              <CardHeader>
                <CardTitle>Links Sociais</CardTitle>
                <CardDescription>
                  Adicione links para suas redes sociais e sites.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SocialLinkEditor
                  links={profile.socialLinks}
                  onAdd={addSocialLink}
                  onUpdate={updateSocialLink}
                  onRemove={removeSocialLink}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agenda */}
          <TabsContent value="agenda">
            <Card>
              <CardHeader>
                <CardTitle>Agenda de Eventos</CardTitle>
                <CardDescription>
                  Gerencie seus eventos, palestras e encontros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ItemListEditor<AgendaEvent>
                  title="Eventos"
                  items={profile.agendaEvents}
                  fields={AGENDA_FIELDS}
                  onAdd={addAgendaEvent}
                  onUpdate={updateAgendaEvent}
                  onRemove={removeAgendaEvent}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Produtos e Serviços</CardTitle>
                <CardDescription>
                  Adicione seus produtos digitais e serviços oferecidos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <ItemListEditor<Product>
                  title="Produtos"
                  items={profile.products}
                  fields={PRODUCT_FIELDS}
                  onAdd={addProduct}
                  onUpdate={updateProduct}
                  onRemove={removeProduct}
                />
                
                <Separator />
                
                <ItemListEditor<Service>
                  title="Serviços"
                  items={profile.services}
                  fields={SERVICE_FIELDS}
                  onAdd={addService}
                  onUpdate={updateService}
                  onRemove={removeService}
                />
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </main>
    </div>
  );
};

export default ProfileEditor;
