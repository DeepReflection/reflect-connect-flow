// ============================================
// Chat System - Native HTML5 Version
// ============================================

class ChatManager {
  constructor() {
    this.modal = document.getElementById('chat-modal');
    this.messagesContainer = document.getElementById('chat-messages');
    this.quickActionsContainer = document.getElementById('chat-quick-actions');
    this.input = document.getElementById('chat-input');
    this.sendBtn = document.getElementById('chat-send');
    this.closeBtn = document.getElementById('chat-close');
    this.openBtn = document.getElementById('chatbot-btn');
    
    this.messages = [];
    this.isTyping = false;
    this.profile = null;
    
    this.init();
  }
  
  init() {
    if (!this.modal) return;
    
    this.profile = getCurrentProfile();
    
    // Event listeners
    this.openBtn?.addEventListener('click', () => this.open());
    this.closeBtn?.addEventListener('click', () => this.close());
    this.sendBtn?.addEventListener('click', () => this.send());
    this.input?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.send();
    });
    
    // Close on backdrop click
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
    
    // Render quick actions
    this.renderQuickActions();
  }
  
  open() {
    this.modal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add welcome message if no messages
    if (this.messages.length === 0) {
      this.addMessage('assistant', this.profile.chatWelcome);
    }
    
    this.input?.focus();
  }
  
  close() {
    this.modal?.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  send() {
    const text = this.input?.value.trim();
    if (!text || this.isTyping) return;
    
    // Add user message
    this.addMessage('user', text);
    this.input.value = '';
    
    // Simulate typing
    this.showTyping();
    
    // Generate response after delay
    setTimeout(() => {
      this.hideTyping();
      const response = this.generateResponse(text);
      this.addMessage('assistant', response);
    }, 1000 + Math.random() * 1000);
  }
  
  addMessage(role, content) {
    const message = {
      id: Date.now(),
      role,
      content,
      timestamp: new Date()
    };
    
    this.messages.push(message);
    this.renderMessage(message);
    this.scrollToBottom();
  }
  
  renderMessage(message) {
    const div = document.createElement('div');
    div.className = `chat-message ${message.role}`;
    
    const time = message.timestamp.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    if (message.role === 'assistant') {
      div.innerHTML = `
        <img src="${this.profile.avatarUrl}" alt="${this.profile.name}" class="message-avatar">
        <div class="message-content">
          <div class="message-bubble">${message.content}</div>
          <span class="message-time">${time}</span>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="message-content">
          <div class="message-bubble">${message.content}</div>
          <span class="message-time">${time}</span>
        </div>
      `;
    }
    
    this.messagesContainer?.appendChild(div);
  }
  
  showTyping() {
    this.isTyping = true;
    const div = document.createElement('div');
    div.className = 'chat-message assistant typing-indicator';
    div.id = 'typing-indicator';
    div.innerHTML = `
      <img src="${this.profile.avatarUrl}" alt="${this.profile.name}" class="message-avatar">
      <div class="message-content">
        <div class="message-bubble typing">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    `;
    this.messagesContainer?.appendChild(div);
    this.scrollToBottom();
  }
  
  hideTyping() {
    this.isTyping = false;
    const indicator = document.getElementById('typing-indicator');
    indicator?.remove();
  }
  
  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }
  
  renderQuickActions() {
    if (!this.quickActionsContainer || !this.profile.quickActions) return;
    
    this.quickActionsContainer.innerHTML = this.profile.quickActions.map(action => `
      <button class="quick-action-btn" data-action="${action}">${action}</button>
    `).join('');
    
    // Add click handlers
    this.quickActionsContainer.querySelectorAll('.quick-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.input.value = btn.dataset.action;
        this.send();
      });
    });
  }
  
  generateResponse(input) {
    const lowerInput = input.toLowerCase();
    
    // Profile-specific responses
    const responses = {
      default: [
        "Obrigado pela sua mensagem! O Projeto Outro Brasileiro busca preservar e compartilhar a história da Segunda Guerra Mundial.",
        "Estamos sempre trabalhando em novos conteúdos sobre a Segunda Guerra. Fique ligado em nossas redes sociais!",
        "A história da Segunda Guerra Mundial é fascinante e cheia de lições importantes para o presente.",
        "Temos diversos materiais disponíveis sobre batalhas, personagens e eventos da Segunda Guerra.",
      ],
      vinihistoria: [
        "Fico feliz com seu interesse em história! Temos muito conteúdo disponível sobre diversos temas.",
        "A Segunda Guerra Mundial é um dos meus temas favoritos! Há tantas histórias incríveis para contar.",
        "Curiosidades históricas são fascinantes, não é? Continue explorando nosso conteúdo!",
        "Obrigado por acompanhar o canal! Estamos sempre trazendo novos vídeos e análises.",
      ],
      gersonjunior: [
        "Que bom falar com você! Podemos conversar sobre tecnologia, automobilismo ou mentoria.",
        "A combinação de TI e automobilismo é incrível - ambos exigem precisão e inovação!",
        "Mentoria é uma das minhas paixões. Ajudar outros profissionais a crescer é muito gratificante.",
        "A Mercedes AMG Cup Brasil é uma experiência incrível! Velocidade e tecnologia de ponta.",
      ],
      claudiofrydman: [
        "Negociação é uma arte! JBP e trade marketing são fundamentais para resultados consistentes.",
        "No setor de FMCG, a execução no ponto de venda faz toda a diferença.",
        "Vendas consultivas criam relacionamentos duradouros e geram valor para todas as partes.",
        "A experiência em distribuição e varejo me ensinou muito sobre o mercado brasileiro.",
      ],
    };
    
    const profileId = document.body.dataset.profile || 'default';
    const profileResponses = responses[profileId] || responses.default;
    
    // Return random response
    return profileResponses[Math.floor(Math.random() * profileResponses.length)];
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.chatManager = new ChatManager();
});