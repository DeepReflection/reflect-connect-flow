import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';
import { AutomationProject, RecurrenceType, SocialMediaType, recurrenceLabels, socialMediaLabels } from '@/types/blogAutomation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const socialNetworkOptions: { value: SocialMediaType; label: string; icon: React.ElementType }[] = [
  { value: 'INSTAGRAM', label: 'Instagram', icon: Instagram },
  { value: 'FACEBOOK', label: 'Facebook', icon: Facebook },
  { value: 'YOUTUBE', label: 'YouTube', icon: Youtube },
  { value: 'TIKTOK', label: 'TikTok', icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M9 12h6"/><path d="M12 9v6"/></svg> },
  { value: 'LINKEDIN', label: 'LinkedIn', icon: Linkedin },
  { value: 'TWITTER', label: 'X / Twitter', icon: Twitter },
];

const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  theme: z.string().min(10, 'Tema deve ter pelo menos 10 caracteres').max(500),
  description: z.string().max(300).optional(),
  recurrence: z.enum(['daily', 'weekly', 'biweekly', 'monthly']),
  scheduledDays: z.array(z.number()).optional(),
  scheduledTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Horário inválido'),
  socialNetworks: z.array(z.enum(['YOUTUBE', 'FACEBOOK', 'INSTAGRAM', 'TWITTER', 'LINKEDIN', 'TIKTOK'])).min(1, 'Selecione ao menos uma rede social'),
});

type FormData = z.infer<typeof formSchema>;

interface AutomationProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: AutomationProject | null;
  onSave: (data: FormData) => void;
}

const weekDays = [
  { value: 0, label: 'Dom' },
  { value: 1, label: 'Seg' },
  { value: 2, label: 'Ter' },
  { value: 3, label: 'Qua' },
  { value: 4, label: 'Qui' },
  { value: 5, label: 'Sex' },
  { value: 6, label: 'Sáb' },
];

const AutomationProjectForm = ({
  open,
  onOpenChange,
  project,
  onSave,
}: AutomationProjectFormProps) => {
  const isEditing = !!project;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project?.name || '',
      theme: project?.theme || '',
      description: project?.description || '',
      recurrence: project?.recurrence || 'weekly',
      scheduledDays: project?.scheduledDays || [1],
      scheduledTime: project?.scheduledTime || '09:00',
      socialNetworks: project?.socialNetworks || [],
    },
  });

  const recurrence = form.watch('recurrence');
  const scheduledDays = form.watch('scheduledDays') || [];
  const socialNetworks = form.watch('socialNetworks') || [];

  const handleSubmit = (data: FormData) => {
    onSave(data);
    form.reset();
    onOpenChange(false);
  };

  const toggleDay = (day: number) => {
    const current = scheduledDays;
    const newDays = current.includes(day)
      ? current.filter(d => d !== day)
      : [...current, day].sort();
    form.setValue('scheduledDays', newDays);
  };

  const toggleNetwork = (network: SocialMediaType) => {
    const current = socialNetworks;
    const updated = current.includes(network)
      ? current.filter(n => n !== network)
      : [...current, network];
    form.setValue('socialNetworks', updated, { shouldValidate: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isEditing ? 'Editar Projeto' : 'Novo Projeto de Automação'}
          </DialogTitle>
          <DialogDescription>
            Configure o tema e a frequência de publicação automática.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Projeto</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ex: Campanha Instagram Verão" 
                      {...field} 
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tema dos Posts</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o tema central que a IA usará para gerar os posts..."
                      className="min-h-[100px] bg-background resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Seja específico. Quanto mais detalhado, melhores serão os posts gerados.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição (opcional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Breve descrição do projeto" 
                      {...field} 
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Social Networks Selection */}
            <FormField
              control={form.control}
              name="socialNetworks"
              render={() => (
                <FormItem>
                  <FormLabel>Redes Sociais</FormLabel>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {socialNetworkOptions.map(({ value, label, icon: Icon }) => {
                      const isSelected = socialNetworks.includes(value);
                      return (
                        <label
                          key={value}
                          className={`
                            flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer
                            transition-all text-sm font-medium
                            ${isSelected
                              ? 'bg-primary/10 text-primary border-primary/50'
                              : 'bg-background border-border text-muted-foreground hover:border-primary/30'
                            }
                          `}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={isSelected}
                            onChange={() => toggleNetwork(value)}
                          />
                          <Icon className="w-4 h-4 shrink-0" />
                          <span className="truncate">{label}</span>
                        </label>
                      );
                    })}
                  </div>
                  <FormDescription>
                    Selecione em quais redes os posts serão gerados automaticamente.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="recurrence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequência</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border">
                        {Object.entries(recurrenceLabels).map(([value, label]) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="scheduledTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário</FormLabel>
                    <FormControl>
                      <Input 
                        type="time" 
                        {...field} 
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {recurrence === 'weekly' && (
              <FormItem>
                <FormLabel>Dias da Semana</FormLabel>
                <div className="flex flex-wrap gap-2 mt-2">
                  {weekDays.map(day => (
                    <label
                      key={day.value}
                      className={`
                        flex items-center justify-center w-12 h-10 rounded-md border cursor-pointer
                        transition-all text-sm font-medium
                        ${scheduledDays.includes(day.value)
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={scheduledDays.includes(day.value)}
                        onChange={() => toggleDay(day.value)}
                      />
                      {day.label}
                    </label>
                  ))}
                </div>
                <FormDescription className="mt-2">
                  Selecione os dias em que o post será publicado.
                </FormDescription>
              </FormItem>
            )}

            <DialogFooter className="gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">
                {isEditing ? 'Salvar Alterações' : 'Criar Projeto'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AutomationProjectForm;
