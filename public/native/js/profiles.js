// ============================================
// Profile Data - Native HTML5 Version
// ============================================

const PROFILE_STORAGE_KEY = 'profile-data';

// Get stored profile from localStorage (synced with React version)
function getStoredProfile() {
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

const PROFILES = {
  // Default profile (index page) - will be overridden by stored data
  default: {
    name: "outrobrasileironodiad",
    description: "O Projeto Outro Brasileiro é uma iniciativa independente e sem fins lucrativos dedicada à criação de conteúdos audiovisuais sobre a Segunda Guerra Mundial, explorando de forma aprofundada seus principais eventos, batalhas, personagens e contextos históricos.",
    avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
    bannerUrl: "",
    footerText: "© 2024 Outro Brasileiro no D-Day",
    footerSubtitle: "Preservando a história para as futuras gerações",
    chatWelcome: "Olá! Bem-vindo ao Projeto Outro Brasileiro. Como posso ajudá-lo hoje?",
    socialLinks: [
      { id: '1', type: 'instagram', iconType: 'instagram', url: 'https://www.instagram.com/outrobrasileironodiad/', label: 'Instagram' },
      { id: '2', type: 'youtube', iconType: 'youtube', url: 'https://www.youtube.com/@outrobrasileironodiad9205', label: 'YouTube' },
    ],
    reflections: REFLECTIONS,
    products: PRODUCTS,
    services: SERVICES,
    events: AGENDA_EVENTS,
    agendaEvents: AGENDA_EVENTS,
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
  
  // For default profile, try to get stored data from localStorage
  if (profileId === 'default') {
    const storedProfile = getStoredProfile();
    if (storedProfile) {
      // Merge stored data with defaults
      const defaultProfile = PROFILES.default;
      return {
        ...defaultProfile,
        name: storedProfile.name || defaultProfile.name,
        description: storedProfile.description || defaultProfile.description,
        avatarUrl: storedProfile.avatarUrl || defaultProfile.avatarUrl,
        bannerUrl: storedProfile.bannerUrl || '',
        footerText: `© 2024 ${storedProfile.name || defaultProfile.name}`,
        socialLinks: storedProfile.socialLinks ? storedProfile.socialLinks.map(link => ({
          ...link,
          type: link.iconType || link.type || 'website'
        })) : defaultProfile.socialLinks,
        reflections: storedProfile.reflections || defaultProfile.reflections,
        products: storedProfile.products || defaultProfile.products,
        services: storedProfile.services || defaultProfile.services,
        events: storedProfile.agendaEvents || defaultProfile.events,
        agendaEvents: storedProfile.agendaEvents || defaultProfile.agendaEvents,
      };
    }
  }
  
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
  const bannerEl = document.getElementById('hero-banner-img');
  
  if (avatarEl) avatarEl.src = profile.avatarUrl;
  if (nameEl) nameEl.textContent = profile.name;
  if (descriptionEl) descriptionEl.textContent = profile.description;
  
  // Update banner if custom banner is set
  if (bannerEl && profile.bannerUrl) {
    bannerEl.src = profile.bannerUrl;
  }
  
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
  
  // Render blog preview
  renderBlogPreview();
}

function renderSocialLinks(links) {
  const container = document.getElementById('social-links');
  if (!container || !links) return;
  
  // Add class for horizontal icons layout
  container.className = 'social-icons';
  
  container.innerHTML = links.map((link, index) => `
    <a href="${link.url}" target="_blank" rel="noopener" class="social-icon-link" style="animation-delay: ${index * 0.05}s" aria-label="${link.label}">
      ${getSocialIcon(link.iconType || link.type)}
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

// Render Blog Preview Cards (latest 4 posts)
function renderBlogPreview() {
  const container = document.getElementById('blog-preview-grid');
  if (!container || typeof BLOG_POSTS === 'undefined') return;
  
  const latestPosts = BLOG_POSTS.slice(0, 4);
  
  container.innerHTML = latestPosts.map((post, index) => {
    const date = new Date(post.publishedAt);
    const formattedDate = date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    
    return `
      <a href="blog-post.html?slug=${post.slug}" class="blog-preview-card" style="animation-delay: ${index * 0.1}s">
        <div class="blog-preview-card-image">
          <img src="${post.coverImage}" alt="${post.title}" loading="lazy">
          <span class="blog-preview-card-category">${post.category}</span>
        </div>
        <div class="blog-preview-card-content">
          <div class="blog-preview-card-meta">
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${formattedDate}
            </span>
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${post.readingTime}
            </span>
          </div>
          <h3 class="blog-preview-card-title">${post.title}</h3>
          <p class="blog-preview-card-excerpt">${post.excerpt}</p>
          <div class="blog-preview-card-readmore">
            Ler mais
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </a>
    `;
  }).join('');
}