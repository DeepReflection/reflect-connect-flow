import GeneratedBadge from '@/components/social/post/GeneratedBadge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CaptionFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  generated?: boolean;
  onDismissGenerated?: () => void;
  loading?: boolean;
}

const getCounterColor = (valueLength: number, maxLength: number) => {
  const ratio = maxLength === 0 ? 0 : valueLength / maxLength;
  if (ratio >= 0.9) return 'hsl(0 78% 58%)';
  if (ratio >= 0.75) return 'hsl(42 92% 55%)';
  return 'hsl(144 60% 42%)';
};

const CaptionField = ({
  label,
  value,
  onChange,
  maxLength,
  placeholder,
  generated,
  onDismissGenerated,
  loading,
}: CaptionFieldProps) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label className="text-sm text-foreground">{label}</Label>
        <div className="flex items-center gap-2">
          {generated && onDismissGenerated ? <GeneratedBadge onDismiss={onDismissGenerated} /> : null}
          <span className="text-xs font-medium" style={{ color: getCounterColor(value.length, maxLength) }}>
            {value.length}/{maxLength}
          </span>
        </div>
      </div>

      <div className={loading ? 'animate-pulse rounded-xl' : ''}>
        <Textarea
          value={value}
          maxLength={maxLength}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-h-[160px] resize-y rounded-xl border-border bg-background/70"
        />
      </div>
    </div>
  );
};

export default CaptionField;
