import { motion } from 'framer-motion';
import { Palette, ChevronDown } from 'lucide-react';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ThemeSelector = () => {
  const { currentTheme, setTheme, themes } = useTheme();

  const currentThemeData = themes.find(t => t.id === currentTheme);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Palette className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium hidden sm:inline">Escolha seu tema</span>
        </div>
        
        <Select value={currentTheme} onValueChange={(value) => setTheme(value as ThemeName)}>
          <SelectTrigger className="w-[200px] sm:w-[280px] bg-card border-border hover:border-primary/50 transition-colors">
            <SelectValue>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="truncate">{currentThemeData?.name}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-card border-border max-h-[400px]">
            {themes.map((theme) => (
              <SelectItem 
                key={theme.id} 
                value={theme.id}
                className="cursor-pointer hover:bg-accent focus:bg-accent"
              >
                <div className="flex flex-col gap-0.5 py-1">
                  <span className="font-medium">{theme.name}</span>
                  <span className="text-xs text-muted-foreground">{theme.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
};

export default ThemeSelector;
