// ============================================
// Profile Data - Native HTML5 Version
// ============================================

const PROFILES = {
  // Default profile (index page)
  default: {
    name: "outrobrasileironodiad",
    description: "O Projeto Outro Brasileiro é uma iniciativa independente e sem fins lucrativos dedicada à criação de conteúdos audiovisuais sobre a Segunda Guerra Mundial, explorando de forma aprofundada seus principais eventos, batalhas, personagens e contextos históricos.",
    avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
    footerText: "© 2024 Outro Brasileiro no D-Day",
    footerSubtitle: "Preservando a história para as futuras gerações",
    chatWelcome: "Olá! Bem-vindo ao Projeto Outro Brasileiro. Como posso ajudá-lo hoje?",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/outrobrasileironodiad/', label: 'Instagram' },
      { type: 'youtube', url: 'https://www.youtube.com/@outrobrasileironodiad9205', label: 'YouTube' },
    ],
    reflections: REFLECTIONS,
    products: PRODUCTS,
    services: SERVICES,
    events: AGENDA_EVENTS,
    quickActions: [
      "O que é o Projeto?",
      "Sobre a Segunda Guerra",
      "Como participar?",
      "Próximos eventos"
    ]
  },

  // Vini Historia profile
  vinihistoria: {
    name: "Vini Historia",
    description: "Canal dedicado à história, com vídeos sobre a Segunda Guerra Mundial, curiosidades históricas e análises de eventos significativos.",
    avatarUrl: "https://vortice-deep-reflection-production.s3.us-east-1.amazonaws.com/resources/66.jpeg",
    footerText: "© 2024 Vini Historia",
    footerSubtitle: "Explorando a história para as futuras gerações",
    chatWelcome: "Olá! Eu sou o Vini História e seja muito bem-vindo ao meu Canal. 📚",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/vinihistoria/', label: 'Instagram' },
      { type: 'youtube', url: 'https://www.youtube.com/@vinihistoria', label: 'YouTube' },
    ],
    reflections: [
      { title: "Vini Historia", imageUrl: "https://vortice-deep-reflection-production.s3.us-east-1.amazonaws.com/resources/66.jpeg" },
      { title: "Segunda Guerra", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png" },
      { title: "Curiosidades", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png" },
      { title: "Análises", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png" },
      { title: "Batalhas", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png" },
      { title: "Personagens", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png" },
      { title: "Documentários", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png" },
      { title: "História Geral", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png" },
    ],
    products: PRODUCTS,
    services: [],
    events: [],
    quickActions: [
      "Sobre o canal",
      "Vídeos recentes",
      "Curiosidades históricas",
      "Segunda Guerra Mundial"
    ]
  },

  // Gerson Junior profile
  gersonjunior: {
    name: "Gerson Júnior",
    description: "IT Manager, Mentor e Piloto Mercedes AMG Cup Brasil.",
    avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png",
    footerText: "© 2024 Gerson Júnior",
    footerSubtitle: "IT Manager, Mentor e Piloto Mercedes AMG Cup Brasil",
    chatWelcome: "Opa!! Tudo bem? Do que vamos falar hoje?! Gente? Carros? Palestras? Vamos nessa!",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/gersonjunior/', label: 'Instagram' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/gersonjunior/', label: 'LinkedIn' },
      { type: 'youtube', url: 'https://www.youtube.com/@gersonjunior', label: 'YouTube' },
    ],
    reflections: [
      { title: "Gerson Júnior", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Mercedes AMG", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Tecnologia", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Mentoria", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Automobilismo", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Liderança", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Inovação", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
      { title: "Gestão", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/280.png" },
    ],
    products: PRODUCTS,
    services: [],
    events: [],
    quickActions: [
      "Sobre minha carreira",
      "Mentoria em TI",
      "Mercedes AMG Cup",
      "Palestras e eventos"
    ]
  },

  // Claudio Frydman profile
  claudiofrydman: {
    name: "Claudio Frydman",
    description: "Executivo sênior de Vendas, Trade, Distribuição e Varejo no setor de FMCG, especialista em JBP e negociação consultiva.",
    avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png",
    footerText: "© 2024 Claudio Frydman",
    footerSubtitle: "Executivo sênior de Vendas, Trade e Distribuição",
    chatWelcome: "Olá! O que você gostaria de conversar? Podemos falar sobre vendas, negociação, JBP ou trade marketing!",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/frydmanc_vendas_trade/', label: 'Instagram' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/claudio-frydman/', label: 'LinkedIn' },
      { type: 'youtube', url: 'https://www.youtube.com/@cfrydman', label: 'YouTube' },
    ],
    reflections: [
      { title: "Claudio Frydman", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "Vendas", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "Trade Marketing", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "Negociação", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "JBP", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "Liderança", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "Distribuição", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
      { title: "FMCG", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/357.png" },
    ],
    products: PRODUCTS,
    services: [],
    events: [],
    quickActions: [
      "Sobre JBP",
      "Negociação consultiva",
      "Trade Marketing",
      "Mentoria em vendas"
    ]
  }
};

// Get current profile based on page
function getCurrentProfile() {
  const profileId = document.body.dataset.profile || 'default';
  return PROFILES[profileId] || PROFILES.default;
}

// Populate profile data on page
function populateProfile() {
  const profile = getCurrentProfile();
  
  // Update profile elements
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  const descriptionEl = document.getElementById('profile-description');
  const footerEl = document.getElementById('footer');
  
  if (avatarEl) avatarEl.src = profile.avatarUrl;
  if (nameEl) nameEl.textContent = profile.name;
  if (descriptionEl) descriptionEl.textContent = profile.description;
  
  if (footerEl) {
    footerEl.innerHTML = `
      <p>${profile.footerText}</p>
      <p class="footer-subtitle">${profile.footerSubtitle}</p>
    `;
  }
  
  // Update chatbot button avatar (like React)
  const chatbotAvatarEl = document.getElementById('chatbot-avatar');
  if (chatbotAvatarEl) chatbotAvatarEl.src = profile.avatarUrl;
  
  // Update chat modal elements
  const chatAvatarEl = document.getElementById('chat-avatar');
  const chatNameEl = document.getElementById('chat-name');
  
  if (chatAvatarEl) chatAvatarEl.src = profile.avatarUrl;
  if (chatNameEl) chatNameEl.textContent = profile.name;
  
  // Render social links
  renderSocialLinks(profile.socialLinks);
  
  // Render reflections
  renderProfileReflections(profile.reflections);
  
  // Render products
  renderProfileProducts(profile.products);
  
  // Render services (if any)
  if (profile.services && profile.services.length > 0) {
    renderProfileServices(profile.services);
  } else {
    // Hide services section if no services
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) servicesSection.style.display = 'none';
  }
  
  // Render events (if any)
  if (profile.events && profile.events.length > 0) {
    renderProfileEvents(profile.events);
  } else {
    // Hide agenda section if no events
    const agendaSection = document.querySelector('.agenda-section');
    if (agendaSection) agendaSection.style.display = 'none';
  }
}

function renderSocialLinks(links) {
  const container = document.getElementById('social-links');
  if (!container || !links) return;
  
  container.innerHTML = links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener" class="social-link">
      <div class="icon-wrapper">
        ${getSocialIcon(link.type)}
      </div>
      <span>${link.label}</span>
      <div class="external-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
    </a>
  `).join('');
}

function getSocialIcon(type) {
  const icons = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>`,
  };
  return icons[type] || '';
}

function renderProfileReflections(reflections) {
  const container = document.getElementById('reflections-grid');
  if (!container || !reflections) return;
  
  container.innerHTML = reflections.map((reflection, index) => 
    renderReflectionCard(reflection, index)
  ).join('');
}

function renderProfileProducts(products) {
  const container = document.getElementById('products-grid');
  if (!container || !products) return;
  
  container.innerHTML = products.map((product, index) => 
    renderProductCard(product, index)
  ).join('');
}

function renderProfileServices(services) {
  const container = document.getElementById('services-grid');
  if (!container || !services) return;
  
  container.innerHTML = services.map((service, index) => 
    renderServiceCard(service, index)
  ).join('');
}

function renderProfileEvents(events) {
  const container = document.getElementById('events-grid');
  if (!container || !events) return;
  
  container.innerHTML = events.map((event, index) => 
    renderEventCard(event, index)
  ).join('');
}