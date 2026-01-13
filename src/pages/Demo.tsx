import { Instagram, Youtube, Linkedin } from 'lucide-react';
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
import { useTheme } from '@/contexts/ThemeContext';

const PROFILE_DATA = {
  name: "Demo Página",
  description: "Página de demonstração utilizando todos os recursos do sistema de temas e componentes React. Explore os diferentes temas e layouts disponíveis.",
  avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
};

const SOCIAL_LINKS = [
  {
    url: "https://instagram.com/demo",
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
  },
  {
    url: "https://youtube.com/demo",
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
  },
  {
    url: "https://linkedin.com/in/demo",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
];

const REFLECTIONS = [
  {
    title: "Tecnologia",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png",
  },
  {
    title: "Inovação",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png",
  },
  {
    title: "Design",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png",
  },
  {
    title: "Criatividade",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png",
  },
  {
    title: "Estratégia",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png",
  },
  {
    title: "Liderança",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png",
  },
  {
    title: "Colaboração",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png",
  },
  {
    title: "Resultados",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png",
  },
  {
    title: "Crescimento",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png",
  },
  {
    title: "Excelência",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png",
  },
  {
    title: "Qualidade",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png",
  },
  {
    title: "Sucesso",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png",
  },
];

// Layout themes that have unique section layouts
const layoutThemes: string[] = [
  'magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 
  'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 
  'minimal-zen', 'corporate-navy', 'executive-charcoal', 'startup-teal', 
  'finance-green', 'consulting-slate', 'tech-indigo', 'luxury-black', 
  'modern-graphite', 'innovation-blue', 'prestige-burgundy'
];

const Demo = () => {
  const { currentTheme } = useTheme();
  const hasUniqueLayout = layoutThemes.includes(currentTheme);

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />
      
      {/* Hero Section */}
      <div className="pt-14">
        <HeroSection
          name={PROFILE_DATA.name}
          description={PROFILE_DATA.description}
          avatarUrl={PROFILE_DATA.avatarUrl}
        />
      </div>

      {/* Main Content - Narrow sections */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 space-y-12">
        {/* CTA Button */}
        <CTAButton text="Fale Comigo" />

        {/* Social Links */}
        <section className="space-y-3">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLink
              key={link.url}
              url={link.url}
              icon={link.icon}
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
          <ThemedReflectionsSection reflections={REFLECTIONS} />
        </div>
      ) : (
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Minhas Reflexões" />
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
              {REFLECTIONS.map((reflection, index) => (
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
          © 2024 Demo Página
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Demonstração do sistema de temas e componentes
        </p>
      </footer>

      {/* Chatbot */}
      <ChatbotButton 
        name="Demo"
        welcomeMessage="Olá! Bem-vindo à página de demonstração. Como posso ajudá-lo?"
      />
    </div>
  );
};

export default Demo;
