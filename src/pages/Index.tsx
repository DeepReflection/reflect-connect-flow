import { Instagram, Youtube, Twitter, Facebook, Linkedin, Globe, MessageCircle, Mail, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import SocialLink from '@/components/SocialLink';
import ReflectionCard from '@/components/ReflectionCard';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import ProductsSection from '@/components/ProductsSection';
import AgendaSection from '@/components/AgendaSection';
import ChatbotButton from '@/components/ChatbotButton';
import ThemedProductsSection from '@/components/sections/ThemedProductsSection';
import ThemedReflectionsSection from '@/components/sections/ThemedReflectionsSection';
import ThemedAgendaSection from '@/components/sections/ThemedAgendaSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import BlogCTA from '@/components/blog/BlogCTA';
import NavigationMenu from '@/components/NavigationMenu';
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

// All themes now have alternating section backgrounds
const alternatingBgThemes: string[] = [
  // Light themes
  'desert-sand', 'arctic-frost', 'cloud-silver', 'rose-garden', 'mint-fresh',
  'lavender-dream', 'peach-blossom', 'sky-blue', 'cream-vanilla', 'sage-morning',
  'coral-reef', 'golden-hour', 'minimal-zen', 'nature-organic', 'card-stack',
  // Dark themes
  'vintage-sepia', 'midnight-gold', 'military-olive', 'ocean-deep', 'crimson-war',
  'sunset-bronze', 'royal-purple', 'forest-emerald',
  // Business themes
  'corporate-navy', 'executive-charcoal', 'startup-teal', 'finance-green',
  'consulting-slate', 'tech-indigo', 'luxury-black', 'modern-graphite',
  'innovation-blue', 'prestige-burgundy',
  // Layout themes
  'neon-gamer', 'magazine-editorial', 'retro-wave', 'brutalist-raw',
  'glassmorphism', 'split-screen', 'gradient-flow'
];

const Index = () => {
  const { currentTheme } = useTheme();
  const { profile } = useProfile();
  const hasUniqueLayout = layoutThemes.includes(currentTheme);
  const hasAlternatingBg = alternatingBgThemes.includes(currentTheme);

  return (
    <div className="min-h-screen bg-background relative">
      <NavigationMenu />
      <ParticleBackground />
      
      {/* Edit Profile Button */}
      <Link 
        to="/profile/edit" 
        className="fixed top-[60px] right-4 z-40"
      >
        <Button variant="secondary" size="icon" className="shadow-lg">
          <Settings className="w-5 h-5" />
        </Button>
      </Link>
      
      {/* Hero Section */}
      <section id="hero" className="pt-14">
        <HeroSection
          name={profile.name}
          description={profile.description}
          avatarUrl={profile.avatarUrl}
        />
      </section>

      {/* Main Content - Narrow sections */}
      <main id="social" className="relative z-10 max-w-2xl mx-auto px-6 py-12 space-y-6">
        {/* CTA Buttons - Side by Side */}
        <div className="grid grid-cols-2 gap-4">
          <CTAButton text="Fale Comigo" />
          <BlogCTA variant="button" />
        </div>

        {/* Dashboard Link */}
        <Link 
          to="/dashboard"
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-muted hover:bg-muted/80 text-muted-foreground rounded-xl transition-all duration-300 border border-border"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="font-medium">Dashboard de Insights</span>
        </Link>

        {/* Social Links - Horizontal Icons */}
        <section className="flex justify-center gap-4 flex-wrap">
          {profile.socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={link.label}
            >
              {ICON_MAP[link.iconType] || <Globe className="w-5 h-5" />}
            </motion.a>
          ))}
        </section>
      </main>

      {/* Agenda Section - Full width with alternating background */}
      <section 
        id="agenda" 
        className={`relative z-10 px-4 md:px-8 lg:px-12 py-12 ${hasAlternatingBg ? 'section-dark' : ''}`}
      >
        {hasUniqueLayout ? (
          <div className="w-full">
            <ThemedAgendaSection />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <AgendaSection />
          </div>
        )}
      </section>

      {/* Products & Services - Full width */}
      <section id="products" className="relative z-10 px-4 md:px-8 lg:px-12 py-12">
        {hasUniqueLayout ? (
          <div className="w-full">
            <ThemedProductsSection />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <ProductsSection />
          </div>
        )}
      </section>

      {/* Blog Preview Section - Latest Posts */}
      <section className={`relative z-10 px-4 md:px-8 lg:px-12 py-12 ${hasAlternatingBg ? 'section-dark' : ''}`}>
        <BlogPreviewSection />
      </section>

      {/* Reflections - Full width with alternating background */}
      <section 
        id="reflections"
        className={hasAlternatingBg ? '' : ''}
      >
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
      </section>

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
