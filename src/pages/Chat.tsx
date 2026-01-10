import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Sparkles, Bot, User, Mic, MicOff, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

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

    // Simulate AI response
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
    { label: 'Dia D', query: 'Me conte sobre o Dia D' },
    { label: 'FEB', query: 'Qual foi o papel do Brasil na guerra?' },
    { label: 'Generais', query: 'Quem foram os principais generais?' },
    { label: 'Batalhas', query: 'Quais foram as batalhas decisivas?' },
  ];

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <ParticleBackground />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-20 border-b border-border/50 backdrop-blur-xl bg-background/80"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            to="/"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 0 0 hsl(var(--primary) / 0.4)', '0 0 0 10px hsl(var(--primary) / 0)', '0 0 0 0 hsl(var(--primary) / 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary"
              >
                <img 
                  src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
            </div>
            
            <div>
              <h1 className="font-display text-lg font-semibold text-foreground">
                Outro Brasileiro IA
              </h1>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted-foreground">Especialista em WWII</span>
              </div>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </motion.header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 ${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
                  {message.role === 'assistant' ? (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden border border-primary/30">
                      <img 
                        src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                        alt="AI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[80%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <motion.div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-card border border-border rounded-bl-md'
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </motion.div>
                  <span className="text-[10px] text-muted-foreground mt-1 px-2 block">
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png" 
                    alt="AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ 
                          y: [0, -6, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 0.6, 
                          repeat: Infinity, 
                          delay: i * 0.15 
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
      {messages.length <= 1 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 px-4 pb-4"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground mb-3 text-center">Sugestões rápidas</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickActions.map((action) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setInput(action.query);
                    inputRef.current?.focus();
                  }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  {action.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Input Area */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-20 border-t border-border/50 backdrop-blur-xl bg-background/80"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            {/* Voice Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsListening(!isListening)}
              className={`p-3 rounded-full transition-all ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
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
                placeholder="Pergunte sobre a Segunda Guerra..."
                className="w-full bg-card border border-border rounded-2xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all pr-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                {input.length}/2000
              </div>
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 rounded-full bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          
          <p className="text-[10px] text-muted-foreground text-center mt-3">
            Powered by <span className="text-primary font-medium">Deep Reflection AI</span> • Respostas baseadas em fontes históricas verificadas
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
