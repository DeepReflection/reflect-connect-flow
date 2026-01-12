import { Instagram, Youtube, Linkedin } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import SocialLink from '@/components/SocialLink';
import ReflectionCard from '@/components/ReflectionCard';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import ThemeSelector from '@/components/ThemeSelector';
import ProductsSection from '@/components/ProductsSection';
import ChatbotButton from '@/components/ChatbotButton';

const PROFILE_DATA = {
  name: "Claudio Frydman",
  description: "Executivo sênior de Vendas, Trade, Distribuição e Varejo no setor de FMCG, especialista em JBP e negociação consultiva.",
  avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
};

const SOCIAL_LINKS = [
  {
    url: "https://www.instagram.com/frydmanc_vendas_trade/",
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/claudio-frydman/",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
  {
    url: "https://www.youtube.com/@cfrydman",
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
  },
];

const REFLECTIONS = [
  {
    title: "Claudio Frydman",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "Vendas",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "Trade Marketing",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "Negociação",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "JBP",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "Liderança",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "Distribuição",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
  {
    title: "FMCG",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
  },
];

const ClaudioFrydman = () => {
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

      {/* Products & Services - Full width */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12">
        <ProductsSection />
      </div>

      {/* Reflections - Full width */}
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

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6">
        <p className="text-muted-foreground text-sm font-body">
          © 2024 Claudio Frydman
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Executivo sênior de Vendas, Trade e Distribuição
        </p>
      </footer>

      {/* Chatbot */}
      <ChatbotButton 
        avatarUrl="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png"
        name="Claudio Frydman"
        welcomeMessage="Olá! O que você gostaria de conversar? Podemos falar sobre vendas, negociação, JBP ou trade marketing!"
      />
    </div>
  );
};

export default ClaudioFrydman;
