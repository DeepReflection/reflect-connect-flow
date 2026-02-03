import { Instagram, Youtube, Twitter, Facebook, Linkedin, Globe, MessageCircle, Mail, BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import SocialLink from '@/components/SocialLink';
import ReflectionCard from '@/components/ReflectionCard';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import ThemeSelector from '@/components/ThemeSelector';
import ProductsSection from '@/components/ProductsSection';
import AgendaSection from '@/components/AgendaSection';
import ChatbotButton from '@/components/ChatbotButton';
import ThemedProductsSection from '@/components/sections/ThemedProductsSection';
import ThemedReflectionsSection from '@/components/sections/ThemedReflectionsSection';
import ThemedAgendaSection from '@/components/sections/ThemedAgendaSection';
import BlogCTA from '@/components/blog/BlogCTA';
import { useTheme } from '@/contexts/ThemeContext';
import { useProfile } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';

const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <Instagram className="w-6 h-6" />,
  youtube: <Youtube className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
  facebook: <Facebook className="w-6 h-6" />,
  linkedin: <Linkedin className="w-6 h-6" />,
  tiktok: <Globe className="w-6 h-6" />,
  website: <Globe className="w-6 h-6" />,
  whatsapp: <MessageCircle className="w-6 h-6" />,
  telegram: <MessageCircle className="w-6 h-6" />,
  email: <Mail className="w-6 h-6" />,
};

// Layout themes that have unique section layouts
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen', 'corporate-navy', 'executive-charcoal', 'startup-teal', 'finance-green', 'consulting-slate', 'tech-indigo', 'luxury-black', 'modern-graphite', 'innovation-blue', 'prestige-burgundy'];

const Index = () => {
  const { currentTheme } = useTheme();
  const { profile } = useProfile();
  const hasUniqueLayout = layoutThemes.includes(currentTheme);

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />
      
      {/* Edit Profile Button */}
      <Link 
        to="/profile/edit" 
        className="fixed top-4 right-4 z-50"
      >
        <Button variant="secondary" size="icon" className="shadow-lg">
          <Settings className="w-5 h-5" />
        </Button>
      </Link>
      
      {/* Hero Section */}
      <div className="pt-14">
        <HeroSection
          name={profile.name}
          description={profile.description}
          avatarUrl={profile.avatarUrl}
        />
      </div>

      {/* Main Content - Narrow sections */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 space-y-6">
        {/* CTA Button */}
        <CTAButton text="Fale Comigo" />

        {/* Blog CTA */}
        <BlogCTA variant="button" />

        {/* Dashboard Link */}
        <Link 
          to="/dashboard"
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-300 border border-slate-200"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="font-medium">Dashboard de Insights</span>
        </Link>

        {/* Social Links */}
        <section className="space-y-3">
          {profile.socialLinks.map((link, index) => (
            <SocialLink
              key={link.id}
              url={link.url}
              icon={ICON_MAP[link.iconType] || <Globe className="w-6 h-6" />}
              label={link.label}
              index={index}
            />
          ))}
        </section>
      </main>

      {/* Agenda Section - Full width */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-12">
        {hasUniqueLayout ? (
          <div className="w-full">
            <ThemedAgendaSection />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <AgendaSection />
          </div>
        )}
      </div>

      {/* Products & Services - Full width */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-12">
        {hasUniqueLayout ? (
          <div className="w-full">
            <ThemedProductsSection />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <ProductsSection />
          </div>
        )}
      </div>

      {/* Reflections - Full width */}
      {hasUniqueLayout ? (
        <div className="relative z-10 px-4 md:px-8 lg:px-12 py-12">
          <ThemedReflectionsSection reflections={profile.reflections} />
        </div>
      ) : (
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Minhas Reflexões" />
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
              {profile.reflections.map((reflection, index) => (
                <ReflectionCard
                  key={reflection.title}
                  title={reflection.title}
                  imageUrl={reflection.imageUrl}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6">
        <p className="text-muted-foreground text-sm font-body">
          © 2024 {profile.name}
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Preservando a história para as futuras gerações
        </p>
      </footer>

      {/* Chatbot */}
      <ChatbotButton />
    </div>
  );
};

export default Index;
