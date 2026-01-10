import { Instagram, Youtube } from 'lucide-react';
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
  name: "outrobrasileironodiad",
  description: "O Projeto Outro Brasileiro é uma iniciativa independente e sem fins lucrativos dedicada à criação de conteúdos audiovisuais sobre a Segunda Guerra Mundial, explorando de forma aprofundada seus principais eventos, batalhas, personagens e contextos históricos.",
  avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
};

const SOCIAL_LINKS = [
  {
    url: "https://www.instagram.com/outrobrasileironodiad/",
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
  },
  {
    url: "https://www.youtube.com/@outrobrasileironodiad9205",
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
  },
];

const REFLECTIONS = [
  {
    title: "General Patton",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png",
  },
  {
    title: "Montgomery",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png",
  },
  {
    title: "MacArthur",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png",
  },
  {
    title: "Zhukov",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png",
  },
  {
    title: "Churchill",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png",
  },
  {
    title: "Rommel",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png",
  },
  {
    title: "Eisenhower",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png",
  },
  {
    title: "De Gaulle",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png",
  },
  {
    title: "Roosevelt",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png",
  },
  {
    title: "Stalin",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png",
  },
  {
    title: "Bradley",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png",
  },
  {
    title: "Nimitz",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png",
  },
  {
    title: "Yamamoto",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png",
  },
  {
    title: "Guderian",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png",
  },
  {
    title: "Manstein",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png",
  },
  {
    title: "Konev",
    imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png",
  },
];

const Index = () => {
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
        <CTAButton text="Fale com a minha Reflection" />

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
          © 2024 Outro Brasileiro no D-Day
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
