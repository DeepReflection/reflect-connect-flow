import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Sparkles, User, Mic, MicOff, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';

// Import all theme-specific banners
import bannerVintageSepia from '@/assets/banners/hero-vintage-sepia.jpg';
import bannerMidnightGold from '@/assets/banners/hero-midnight-gold.jpg';
import bannerMilitaryOlive from '@/assets/banners/hero-military-olive.jpg';
import bannerOceanDeep from '@/assets/banners/hero-ocean-deep.jpg';
import bannerCrimsonWar from '@/assets/banners/hero-crimson-war.jpg';
import bannerSunsetBronze from '@/assets/banners/hero-sunset-bronze.jpg';
import bannerRoyalPurple from '@/assets/banners/hero-royal-purple.jpg';
import bannerForestEmerald from '@/assets/banners/hero-forest-emerald.jpg';
import bannerArcticFrost from '@/assets/banners/hero-arctic-frost.jpg';
import bannerDesertSand from '@/assets/banners/hero-desert-sand.jpg';
import bannerCloudSilver from '@/assets/banners/hero-cloud-silver.jpg';
import bannerRoseGarden from '@/assets/banners/hero-rose-garden.jpg';
import bannerMintFresh from '@/assets/banners/hero-mint-fresh.jpg';
import bannerLavenderDream from '@/assets/banners/hero-lavender-dream.jpg';
import bannerPeachBlossom from '@/assets/banners/hero-peach-blossom.jpg';
import bannerSkyBlue from '@/assets/banners/hero-sky-blue.jpg';
import bannerCreamVanilla from '@/assets/banners/hero-cream-vanilla.jpg';
import bannerSageMorning from '@/assets/banners/hero-sage-morning.jpg';
import bannerCoralReef from '@/assets/banners/hero-coral-reef.jpg';
import bannerGoldenHour from '@/assets/banners/hero-golden-hour.jpg';

const themeBanners: Record<ThemeName, string> = {
  'vintage-sepia': bannerVintageSepia,
  'midnight-gold': bannerMidnightGold,
  'military-olive': bannerMilitaryOlive,
  'ocean-deep': bannerOceanDeep,
  'crimson-war': bannerCrimsonWar,
  'sunset-bronze': bannerSunsetBronze,
  'royal-purple': bannerRoyalPurple,
  'forest-emerald': bannerForestEmerald,
  'arctic-frost': bannerArcticFrost,
  'desert-sand': bannerDesertSand,
  'cloud-silver': bannerCloudSilver,
  'rose-garden': bannerRoseGarden,
  'mint-fresh': bannerMintFresh,
  'lavender-dream': bannerLavenderDream,
  'peach-blossom': bannerPeachBlossom,
  'sky-blue': bannerSkyBlue,
  'cream-vanilla': bannerCreamVanilla,
  'sage-morning': bannerSageMorning,
  'coral-reef': bannerCoralReef,
  'golden-hour': bannerGoldenHour,
};

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Olá! Sou o assistente do Outro Brasileiro no D-Day. 🎖️ Posso te ajudar com informações sobre a Segunda Guerra Mundial, os vídeos do canal, ou responder suas curiosidades históricas. Como posso te ajudar hoje?',
    timestamp: new Date(),
  },
];

const Chat = () => {
  const { currentTheme } = useTheme();
  const bannerImage = themeBanners[currentTheme] || bannerVintageSepia;
  
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponses = [
        'Excelente pergunta! A Segunda Guerra Mundial foi um conflito que envolveu praticamente todas as nações do mundo, divididas em duas alianças militares opostas: os Aliados e o Eixo.',
        'O Dia D, ocorrido em 6 de junho de 1944, foi a maior invasão anfíbia da história. Mais de 156.000 soldados aliados desembarcaram nas praias da Normandia.',
        'O General Patton foi um dos comandantes mais carismáticos e controversos da guerra, conhecido por sua liderança agressiva e estratégia audaciosa.',
        'Os brasileiros da FEB (Força Expedicionária Brasileira) lutaram bravamente na Itália, sendo fundamentais na conquista de Monte Castello.',
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: '🏖️ Dia D', query: 'Me conte sobre o Dia D' },
    { label: '🇧🇷 FEB', query: 'Qual foi o papel do Brasil na guerra?' },
    { label: '⭐ Generais', query: 'Quem foram os principais generais?' },
    { label: '⚔️ Batalhas', query: 'Quais foram as batalhas decisivas?' },
  ];

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Hero Banner Header */}
      <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
        {/* Banner Image */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={bannerImage}
          alt="Chat Banner"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        
        {/* Animated Particles Overlay */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20">
          <Link 
            to="/"
            className="p-2.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50 hover:bg-background/80 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          
          <button className="p-2.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50 hover:bg-background/80 transition-all">
            <MoreVertical className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Profile Card - Centered */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 px-4 pb-6"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            {/* Avatar with glow effect */}
            <div className="relative mb-3">
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 20px hsl(var(--primary) / 0.3)', '0 0 40px hsl(var(--primary) / 0.5)', '0 0 20px hsl(var(--primary) / 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-primary/50"
              >
                <img 
                  src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Info */}
            <h1 className="font-display text-xl md:text-2xl font-bold text-foreground drop-shadow-lg">
              Outro Brasileiro IA
            </h1>
            <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary">Especialista WWII</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0 mt-1">
                  {message.role === 'assistant' ? (
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border border-primary/30">
                      <img 
                        src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                        alt="AI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center border border-border">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[85%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <motion.div
                    className={`rounded-2xl px-4 py-3 shadow-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-md'
                        : 'bg-card/80 backdrop-blur-sm border border-border/50 rounded-tl-md'
                    }`}
                    whileHover={{ scale: 1.005 }}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </motion.div>
                  <span className={`text-[10px] text-muted-foreground mt-1.5 px-1 block ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border border-primary/30">
                  <img 
                    src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                    alt="AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary/60"
                        animate={{ 
                          y: [0, -5, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ 
                          duration: 0.5, 
                          repeat: Infinity, 
                          delay: i * 0.12 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions - Show only at start */}
      <AnimatePresence>
        {messages.length <= 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 px-4 pb-3"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-xs text-muted-foreground mb-2.5 text-center font-medium">Perguntas populares</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {quickActions.map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setInput(action.query);
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-20 border-t border-border/30 bg-background/95 backdrop-blur-xl"
      >
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            {/* Voice Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsListening(!isListening)}
              className={`p-3 rounded-xl transition-all shadow-sm ${
                isListening 
                  ? 'bg-red-500 text-white' 
                  : 'bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {isListening ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <MicOff className="w-5 h-5" />
                </motion.div>
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </motion.button>

            {/* Input Field */}
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pergunte sobre a Segunda Guerra..."
                className="w-full bg-card border border-border/50 rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm shadow-sm"
              />
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:shadow-primary/20"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          
          <p className="text-[10px] text-muted-foreground/60 text-center mt-3">
            Powered by <span className="text-primary/80 font-medium">Deep Reflection AI</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
