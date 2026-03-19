import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, LayoutDashboard, Linkedin, Mail, Music, Settings, Twitter, Youtube, Facebook, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeSelector from '@/components/ThemeSelector';
import { SocialMediaEnum } from '@/types/socialPost';
import { SOCIAL_MEDIA_META } from '@/data/socialPostConfig';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Mock: simulates which networks have registered accounts
const MOCK_REGISTERED_NETWORKS = new Set([
  SocialMediaEnum.INSTAGRAM,
  SocialMediaEnum.FACEBOOK,
]);

interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
  socialMedia?: SocialMediaEnum;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/social', disabled: true },
  { label: 'Email', icon: Mail, path: '/social/email' },
  { label: 'Instagram', icon: Instagram, path: '/social/post/INSTAGRAM', socialMedia: SocialMediaEnum.INSTAGRAM },
  { label: 'Facebook', icon: Facebook, path: '/social/post/FACEBOOK', socialMedia: SocialMediaEnum.FACEBOOK },
  { label: 'YouTube', icon: Youtube, path: '/social/post/YOUTUBE', socialMedia: SocialMediaEnum.YOUTUBE },
  { label: 'LinkedIn', icon: Linkedin, path: '/social/post/LINKEDIN', socialMedia: SocialMediaEnum.LINKEDIN },
  { label: 'X (Twitter)', icon: Twitter, path: '/social/post/TWITTER', socialMedia: SocialMediaEnum.TWITTER },
  { label: 'TikTok', icon: Globe, path: '/social/post/TIKTOK', socialMedia: SocialMediaEnum.TIKTOK },
  { label: 'Configurações', icon: Settings, path: '/social/settings' },
];

interface SocialHubLayoutProps {
  children: ReactNode;
  activeSocialMedia?: SocialMediaEnum;
}

const SocialHubLayout = ({ children, activeSocialMedia }: SocialHubLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [registeredNetworks, setRegisteredNetworks] = useState<Set<SocialMediaEnum>>(MOCK_REGISTERED_NETWORKS);
  const [showNoAccountDialog, setShowNoAccountDialog] = useState(false);
  const [pendingNetwork, setPendingNetwork] = useState<SocialMediaEnum | null>(null);

  useEffect(() => {
    if (!API_BASE_URL) return;
    const loadAccounts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reflection-social-account/reflection/1`);
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data)) {
          const networks = new Set(data.filter((a: any) => a.isActive).map((a: any) => a.socialMedia as SocialMediaEnum));
          setRegisteredNetworks(networks);
        }
      } catch {
        // keep mock
      }
    };
    loadAccounts();
  }, [location.pathname]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (!item.socialMedia) return; // let normal links work
      if (!registeredNetworks.has(item.socialMedia)) {
        e.preventDefault();
        setPendingNetwork(item.socialMedia);
        setShowNoAccountDialog(true);
      }
    },
    [registeredNetworks],
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ThemeSelector />

      <div className="flex flex-1 pt-[52px]">
        <aside className="fixed bottom-0 left-0 top-[52px] z-40 flex w-56 shrink-0 flex-col border-r border-border bg-card">
          <div className="border-b border-border p-5">
            <h2 className="font-display text-lg font-bold text-primary">Social Hub</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Gerenciamento de Redes</p>
          </div>
          <nav className="flex-1 overflow-y-auto py-3">
            {navItems.map((item) => {
              const isActive = item.socialMedia
                ? activeSocialMedia === item.socialMedia || location.pathname === item.path
                : location.pathname === item.path;
              const Icon = item.icon;
              const hasAccount = !item.socialMedia || registeredNetworks.has(item.socialMedia);

              return (
                <div key={item.path}>
                  {item.disabled ? (
                    <div className="flex cursor-not-allowed items-center gap-3 px-5 py-2.5 text-muted-foreground/50">
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                      <span className="ml-auto text-[10px] uppercase tracking-wider opacity-60">Em breve</span>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={cn(
                        'flex items-center gap-3 px-5 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                        !hasAccount && !isActive && 'opacity-60',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                      {item.socialMedia && !hasAccount && (
                        <AlertCircle className="ml-auto h-3.5 w-3.5 text-amber-500" />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="ml-56 flex-1 overflow-auto">{children}</main>
      </div>

      <Dialog open={showNoAccountDialog} onOpenChange={setShowNoAccountDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              Conta não cadastrada
            </DialogTitle>
            <DialogDescription>
              {pendingNetwork && (
                <>
                  Você ainda não possui uma conta de <strong>{SOCIAL_MEDIA_META[pendingNetwork].label}</strong> cadastrada.
                  Para criar posts nesta rede, é necessário cadastrar uma conta nas configurações.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => setShowNoAccountDialog(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                setShowNoAccountDialog(false);
                navigate('/social/settings');
              }}
            >
              Ir para Configurações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SocialHubLayout;
