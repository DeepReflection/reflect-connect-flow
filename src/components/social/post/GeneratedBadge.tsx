import { Sparkles, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface GeneratedBadgeProps {
  onDismiss: () => void;
}

const GeneratedBadge = ({ onDismiss }: GeneratedBadgeProps) => {
  return (
    <Badge variant="secondary" className="gap-1.5 border-border/70 bg-secondary/70 text-secondary-foreground">
      <Sparkles className="h-3 w-3" />
      <span>Gerado por IA</span>
      <button
        type="button"
        onClick={onDismiss}
        className="rounded-full p-0.5 transition-colors hover:bg-background/80"
        aria-label="Remover indicação de conteúdo gerado por IA"
      >
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
};

export default GeneratedBadge;
