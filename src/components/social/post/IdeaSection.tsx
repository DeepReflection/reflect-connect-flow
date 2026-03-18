import { Lightbulb, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface IdeaSectionProps {
  idea: string;
  onIdeaChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  hasGenerated: boolean;
  canGenerate: boolean;
  brandHsl: string;
}

const IdeaSection = ({
  idea,
  onIdeaChange,
  onGenerate,
  isGenerating,
  hasGenerated,
  canGenerate,
  brandHsl,
}: IdeaSectionProps) => {
  const isDarkBrand = brandHsl === '0 0% 4%';

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card/80 p-5 shadow-[var(--shadow-card)]"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${brandHsl} / 0.14), hsl(var(--card)) 55%)`,
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Lightbulb className="h-3.5 w-3.5" />
            Fluxo com IA
          </div>
          <h2 className="text-lg font-semibold text-foreground">Ideia do post</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Descreva a ideia e deixe a IA sugerir caption, título e tags conforme a rede.
          </p>
        </div>

        <Button
          type="button"
          onClick={onGenerate}
          disabled={!canGenerate || isGenerating}
          className="shrink-0"
          style={{
            backgroundColor: `hsl(${brandHsl})`,
            color: isDarkBrand ? 'hsl(var(--primary-foreground))' : 'hsl(0 0% 100%)',
            boxShadow: `0 16px 36px -18px hsl(${brandHsl} / 0.85)`,
          }}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Gerando...
            </>
          ) : hasGenerated ? (
            <>
              <RefreshCw className="h-4 w-4" />
              Regenerar
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Gerar com IA
            </>
          )}
        </Button>
      </div>

      <div>
        <Label className="mb-2 inline-flex items-center gap-2 text-sm text-foreground">
          <Lightbulb className="h-4 w-4" />
          Ideia
        </Label>
        <Textarea
          value={idea}
          onChange={(event) => onIdeaChange(event.target.value)}
          placeholder="Descreva sua ideia para o post... Ex: Quero falar sobre os benefícios do exercício físico matinal para produtividade"
          className="min-h-[140px] resize-y border-border/80 bg-background/70"
        />
      </div>
    </motion.section>
  );
};

export default IdeaSection;
