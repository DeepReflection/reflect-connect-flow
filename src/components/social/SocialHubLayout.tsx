import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Instagram, LayoutDashboard, Linkedin, Mail, Settings, Twitter, Youtube, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeSelector from '@/components/ThemeSelector';
import { SocialMediaEnum } from '@/types/socialPost';

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
  { label: 'Configurações', icon: Settings, path: '/social/settings', disabled: true },
];

interface SocialHubLayoutProps {
  children: ReactNode;
  activeSocialMedia?: SocialMediaEnum;
}

const SocialHubLayout = ({ children, activeSocialMedia }: SocialHubLayoutProps) => {
  const location = useLocation();

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
                      className={cn(
                        'flex items-center gap-3 px-5 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="ml-56 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default SocialHubLayout;
