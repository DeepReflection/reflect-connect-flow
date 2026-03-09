import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Twitter, Globe, Settings, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/social', disabled: true },
  { label: 'Email', icon: Mail, path: '/social/email' },
  { label: 'Instagram', icon: Instagram, path: '/social/instagram', disabled: true },
  { label: 'LinkedIn', icon: Linkedin, path: '/social/linkedin', disabled: true },
  { label: 'X (Twitter)', icon: Twitter, path: '/social/twitter', disabled: true },
  { label: 'TikTok', icon: Globe, path: '/social/tiktok', disabled: true },
  { label: 'Configurações', icon: Settings, path: '/social/settings', disabled: true },
];

interface SocialHubLayoutProps {
  children: ReactNode;
}

const SocialHubLayout = ({ children }: SocialHubLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-card flex flex-col shrink-0">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-bold text-primary font-display">Social Hub</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Gerenciamento de Redes</p>
        </div>
        <nav className="flex-1 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <div key={item.path}>
                {item.disabled ? (
                  <div className="flex items-center gap-3 px-5 py-2.5 text-muted-foreground/50 cursor-not-allowed">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-wider opacity-60">Em breve</span>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-5 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default SocialHubLayout;
