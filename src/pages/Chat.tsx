import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Sparkles, User, Mic, MicOff, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';
import { THEME_BANNER_MAP } from '@/themes/types';

// Default fallback banner
import defaultBanner from '@/assets/themes/vintage-sepia/images/banner.jpg';

// Cache for loaded banner images
const bannerCache: Record<string, string> = {};

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
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    role: 'user',
    content: 'Oi! Quero saber mais sobre o Dia D. O que aconteceu nesse dia?',
    timestamp: new Date(Date.now() - 280000),
  },
  {
    id: '3',
    role: 'assistant',
    content: 'O Dia D, ocorrido em 6 de junho de 1944, foi a maior operação anfíbia da história militar! 🏖️⚔️\n\nNesse dia, mais de 156.000 soldados aliados desembarcaram nas praias da Normandia, na França, para libertar a Europa Ocidental do domínio nazista.\n\nAs cinco praias de desembarque foram:\n• Utah e Omaha (americanos)\n• Gold e Sword (britânicos)\n• Juno (canadenses)\n\nFoi um momento decisivo que mudou o rumo da Segunda Guerra Mundial!',
    timestamp: new Date(Date.now() - 260000),
  },
  {
    id: '4',
    role: 'user',
    content: 'Incrível! E o Brasil participou da guerra?',
    timestamp: new Date(Date.now() - 200000),
  },
  {
    id: '5',
    role: 'assistant',
    content: 'Sim! O Brasil teve uma participação muito importante! 🇧🇷\n\nA Força Expedicionária Brasileira (FEB) foi enviada à Itália em 1944 com cerca de 25.000 soldados. Eles lutaram bravamente em diversas batalhas, sendo a mais famosa a conquista de Monte Castello.\n\nOs pracinhas, como ficaram conhecidos, enfrentaram condições extremas nos Apeninos italianos e foram fundamentais para a vitória aliada na Campanha da Itália.\n\nO lema da FEB era "A cobra vai fumar" - e fumou! 🐍💨',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '6',
    role: 'user',
    content: 'Muito legal! Quem foi o General Patton?',
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: '7',
    role: 'assistant',
    content: 'George S. Patton foi um dos generais mais lendários da Segunda Guerra Mundial! ⭐\n\nConhecido por seu estilo agressivo e carismático, ele comandou o 3º Exército dos EUA e ficou famoso por:\n\n• Liderar a libertação da França após o Dia D\n• A incrível corrida através da Europa\n• Socorrer as tropas cercadas em Bastogne durante a Batalha do Bulge\n\nPatton acreditava que "a guerra é o inferno, mas a batalha é o teste supremo do homem". Era controverso, mas seus soldados o admiravam pela coragem e liderança no campo de batalha! 🎖️',
    timestamp: new Date(Date.now() - 60000),
  },
];

const Chat = () => {
  const { currentTheme } = useTheme();
  const [bannerImage, setBannerImage] = useState<string>(defaultBanner);
  
  // Dynamically load banner for current theme
  useEffect(() => {
    const loadBanner = async () => {
      // Check cache first
      if (bannerCache[currentTheme]) {
        setBannerImage(bannerCache[currentTheme]);
        return;
      }
      
      const bannerLoader = THEME_BANNER_MAP[currentTheme];
      if (bannerLoader) {
        try {
          const module = await bannerLoader();
          bannerCache[currentTheme] = module.default;
          setBannerImage(module.default);
        } catch (error) {
          console.error(`Failed to load banner for theme: ${currentTheme}`, error);
          setBannerImage(defaultBanner);
        }
      } else {
        setBannerImage(defaultBanner);
      }
    };
    
    loadBanner();
  }, [currentTheme]);
  
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
                          delay: i * 0.15,
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

      {/* Quick Actions */}
      <div className="px-4 py-3 border-t border-border/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => {
                  setInput(action.query);
                  inputRef.current?.focus();
                }}
                className="flex-shrink-0 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-foreground hover:bg-secondary hover:border-primary/30 transition-all"
              >
                {action.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 py-4 bg-background border-t border-border/50">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            {/* Voice Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsListening(!isListening)}
              className={`p-3 rounded-xl transition-all ${
                isListening 
                  ? 'bg-destructive text-destructive-foreground' 
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </motion.button>

            {/* Input Field */}
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="w-full px-4 py-3 pr-12 bg-secondary/30 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/50 transition-all"
              />
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Listening Indicator */}
          <AnimatePresence>
            {isListening && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex items-center justify-center gap-2 text-destructive"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-destructive"
                />
                <span className="text-sm font-medium">Ouvindo...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Chat;
