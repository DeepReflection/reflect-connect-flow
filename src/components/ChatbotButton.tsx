import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatbotButtonProps {
  avatarUrl?: string;
  name?: string;
  welcomeMessage?: string;
}

const DEFAULT_AVATAR = "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png";
const DEFAULT_NAME = "outrobrasileironodiad";

const ChatbotButton = ({ 
  avatarUrl = DEFAULT_AVATAR, 
  name = DEFAULT_NAME,
  welcomeMessage = "E ai pessoal do canal? 👋"
}: ChatbotButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const simulatedMessages = [
    {
      role: 'assistant',
      content: welcomeMessage,
      time: '14:32'
    },
    {
      role: 'user',
      content: 'Opa! Tudo bem? Queria saber mais sobre a Segunda Guerra Mundial',
      time: '14:33'
    },
    {
      role: 'assistant',
      content: 'Claro! A Segunda Guerra Mundial foi o maior conflito da história, ocorrendo entre 1939 e 1945. Envolveu mais de 70 nações. Sobre qual aspecto você quer saber mais? 🎖️',
      time: '14:33'
    },
    {
      role: 'user',
      content: 'Qual foi a batalha mais decisiva?',
      time: '14:34'
    },
    {
      role: 'assistant',
      content: 'Muitos historiadores consideram a Batalha de Stalingrado (1942-1943) como o ponto de virada. Foi uma vitória soviética crucial que mudou o rumo da guerra na Europa! 🏛️',
      time: '14:34'
    }
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full shadow-xl flex items-center justify-center overflow-hidden border-[3px] border-foreground bg-background"
        style={{
          boxShadow: '0 0 25px hsl(var(--foreground) / 0.3), 0 8px 20px hsl(var(--background) / 0.6)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label="Abrir chat"
      >
        <img
          src={avatarUrl}
          alt="Chat"
          className="w-full h-full object-cover"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90%] max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt="Bot"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{name}</p>
                  <p className="text-xs text-green-500">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 p-4 overflow-y-auto bg-white space-y-3">
              {simulatedMessages.map((msg, index) => (
                <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'assistant' && (
                    <img
                      src={avatarUrl}
                      alt="Bot"
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                  )}
                  <div className={`rounded-2xl p-3 max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-[10px] mt-1 text-right ${
                      msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 text-right">
                {message.length}/2000
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;
