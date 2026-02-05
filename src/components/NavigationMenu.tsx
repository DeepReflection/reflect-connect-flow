import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sun, Moon, Briefcase, Layout } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationMenuProps {
  items?: NavItem[];
  profileName?: string;
}

const defaultItems: NavItem[] = [
  { id: 'hero', label: 'Início' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'products', label: 'Produtos' },
  { id: 'reflections', label: 'Reflexões' },
];

const NavigationMenu = ({ items = defaultItems }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  const currentThemeData = themes.find(t => t.id === currentTheme);

  // Separate themes into categories
  const darkThemes = themes.filter(t => !t.isLight && !t.layout && !t.id.match(/corporate|executive|startup|finance|consulting|tech|luxury|modern|innovation|prestige/));
  const businessThemes = themes.filter(t => t.id.match(/corporate|executive|startup|finance|consulting|tech|luxury|modern|innovation|prestige/));
  const lightThemes = themes.filter(t => t.isLight && !t.layout);
  const layoutThemes = themes.filter(t => t.layout);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm' 
            : 'bg-background/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Theme Selector */}
            <Select value={currentTheme} onValueChange={(value) => setTheme(value as ThemeName)}>
              <SelectTrigger className="w-[180px] sm:w-[220px] bg-card/50 border-border hover:border-primary/50 transition-colors">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    {currentThemeData?.layout ? (
                      <Layout className="w-3 h-3 text-primary" />
                    ) : currentThemeData?.isLight ? (
                      <Sun className="w-3 h-3 text-primary" />
                    ) : (
                      <Moon className="w-3 h-3 text-primary" />
                    )}
                    <span className="truncate text-sm">{currentThemeData?.name}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-[400px]">
                {/* Light Themes Section */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Sun className="w-3 h-3" />
                  Temas Claros
                </div>
                {lightThemes.map((theme) => (
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
                
                {/* Separator */}
                <div className="h-px bg-border my-2" />
                
                {/* Dark Themes Section */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Moon className="w-3 h-3" />
                  Temas Escuros
                </div>
                {darkThemes.map((theme) => (
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
                
                {/* Separator */}
                <div className="h-px bg-border my-2" />
                
                {/* Business Themes Section */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3" />
                  Temas de Negócio
                </div>
                {businessThemes.map((theme) => (
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
                
                {/* Separator */}
                <div className="h-px bg-border my-2" />
                
                {/* Layout Themes Section */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Layout className="w-3 h-3" />
                  Temas com Layout Único
                </div>
                {layoutThemes.map((theme) => (
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

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-14 bottom-0 w-64 bg-card border-l border-border shadow-xl"
            >
              <div className="p-4 space-y-2">
                {items.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10 font-medium'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMenu;
