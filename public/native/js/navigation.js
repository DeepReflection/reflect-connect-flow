// ============================================
// Navigation Menu - Native HTML5 Version
// Unified with Theme Selector
// ============================================

// Theme configuration (imported from theme.js logic)
const THEME_CATEGORIES = {
  light: [
    { id: 'arctic-frost', name: 'Gelo Ártico', desc: 'Branco gelado com tons azuis' },
    { id: 'desert-sand', name: 'Areia do Deserto', desc: 'Tons terrosos e arenosos' },
    { id: 'cloud-silver', name: 'Nuvem Prateada', desc: 'Cinza elegante e moderno' },
    { id: 'rose-garden', name: 'Jardim de Rosas', desc: 'Rosa suave e romântico' },
    { id: 'mint-fresh', name: 'Menta Fresca', desc: 'Verde menta refrescante' },
    { id: 'lavender-dream', name: 'Sonho Lavanda', desc: 'Lilás suave e relaxante' },
    { id: 'peach-blossom', name: 'Flor de Pêssego', desc: 'Pêssego delicado e acolhedor' },
    { id: 'sky-blue', name: 'Céu Azul', desc: 'Azul claro e sereno' },
    { id: 'cream-vanilla', name: 'Creme Baunilha', desc: 'Tons creme suaves e elegantes' },
    { id: 'sage-morning', name: 'Sálvia Matinal', desc: 'Verde sálvia calmante' },
    { id: 'coral-reef', name: 'Recife de Coral', desc: 'Coral vibrante e tropical' },
    { id: 'golden-hour', name: 'Hora Dourada', desc: 'Dourado quente e luminoso' }
  ],
  dark: [
    { id: 'vintage-sepia', name: 'Vintage Sépia', desc: 'Tom clássico de fotografias antigas' },
    { id: 'midnight-gold', name: 'Meia-Noite Dourado', desc: 'Elegância noturna com acentos dourados' },
    { id: 'military-olive', name: 'Militar Oliva', desc: 'Tons táticos e robustos' },
    { id: 'ocean-deep', name: 'Oceano Profundo', desc: 'Azul marinho e tons aquáticos' },
    { id: 'crimson-war', name: 'Carmesim de Guerra', desc: 'Vermelho dramático e intenso' },
    { id: 'sunset-bronze', name: 'Pôr do Sol Bronze', desc: 'Cores quentes do entardecer' },
    { id: 'royal-purple', name: 'Púrpura Real', desc: 'Luxo e sofisticação imperial' },
    { id: 'forest-emerald', name: 'Floresta Esmeralda', desc: 'Verde profundo e natural' }
  ],
  business: [
    { id: 'corporate-navy', name: 'Corporativo Marinho', desc: 'Azul marinho profissional e confiável' },
    { id: 'executive-charcoal', name: 'Executivo Carvão', desc: 'Cinza escuro sofisticado e moderno' },
    { id: 'startup-teal', name: 'Startup Teal', desc: 'Verde-azulado inovador e dinâmico' },
    { id: 'finance-green', name: 'Finanças Verde', desc: 'Verde clássico de prosperidade' },
    { id: 'consulting-slate', name: 'Consultoria Ardósia', desc: 'Azul-cinza elegante e confiável' },
    { id: 'tech-indigo', name: 'Tech Índigo', desc: 'Azul-violeta tecnológico e futurista' },
    { id: 'luxury-black', name: 'Luxo Preto', desc: 'Preto premium com dourado sutil' },
    { id: 'modern-graphite', name: 'Grafite Moderno', desc: 'Cinza neutro contemporâneo' },
    { id: 'innovation-blue', name: 'Inovação Azul', desc: 'Azul elétrico vibrante e criativo' },
    { id: 'prestige-burgundy', name: 'Prestígio Borgonha', desc: 'Vermelho vinho elegante e exclusivo' }
  ],
  layout: [
    { id: 'neon-gamer', name: 'Neon Gamer', desc: 'Cyber gaming com efeitos neon vibrantes' },
    { id: 'minimal-zen', name: 'Minimalista Zen', desc: 'Design ultra limpo e contemplativo', isLight: true },
    { id: 'magazine-editorial', name: 'Magazine Editorial', desc: 'Estilo revista com layout assimétrico' },
    { id: 'retro-wave', name: 'Retro Wave', desc: 'Nostálgia anos 80 com visuais ousados' },
    { id: 'nature-organic', name: 'Natureza Orgânica', desc: 'Formas fluidas inspiradas na natureza', isLight: true },
    { id: 'brutalist-raw', name: 'Brutalista Cru', desc: 'Design cru e impactante em blocos' },
    { id: 'glassmorphism', name: 'Glassmorphism', desc: 'Efeitos de vidro fosco modernos' },
    { id: 'split-screen', name: 'Tela Dividida', desc: 'Layout equilibrado em duas metades' },
    { id: 'gradient-flow', name: 'Fluxo Gradiente', desc: 'Gradientes animados e fluidos' },
    { id: 'card-stack', name: 'Cartões Empilhados', desc: 'Efeito de cartões sobrepostos', isLight: true }
  ]
};

const ICONS = {
  sun: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  briefcase: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  layout: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`
};

class NavigationMenu {
  constructor(options = {}) {
    this.items = options.items || [
      { id: 'hero', label: 'Início' },
      { id: 'agenda', label: 'Agenda' },
      { id: 'products', label: 'Produtos' },
      { id: 'reflections', label: 'Reflexões' }
    ];
    this.activeSection = 'hero';
    this.isOpen = false;
    this.themeDropdownOpen = false;
    this.currentTheme = this.getSavedTheme() || 'vintage-sepia';
    
    this.init();
  }
  
  init() {
    this.removeOldThemeBar();
    this.createNavigation();
    this.setupEventListeners();
    this.updateActiveSection();
    this.updateThemeDisplay();
  }
  
  removeOldThemeBar() {
    // Remove the old theme-selector-bar if it exists
    const oldBar = document.querySelector('.theme-selector-bar');
    if (oldBar) {
      oldBar.remove();
    }
  }
  
  getSavedTheme() {
    try {
      return localStorage.getItem('selected-theme');
    } catch (e) {
      return null;
    }
  }
  
  getThemeInfo(themeId) {
    for (const category of Object.values(THEME_CATEGORIES)) {
      const theme = category.find(t => t.id === themeId);
      if (theme) return theme;
    }
    return null;
  }
  
  isLightTheme(themeId) {
    const lightTheme = THEME_CATEGORIES.light.find(t => t.id === themeId);
    if (lightTheme) return true;
    const layoutTheme = THEME_CATEGORIES.layout.find(t => t.id === themeId);
    if (layoutTheme && layoutTheme.isLight) return true;
    return false;
  }
  
  isLayoutTheme(themeId) {
    return THEME_CATEGORIES.layout.some(t => t.id === themeId) || 
           THEME_CATEGORIES.business.some(t => t.id === themeId);
  }
  
  getThemeIcon(themeId) {
    if (this.isLayoutTheme(themeId)) return ICONS.layout;
    if (this.isLightTheme(themeId)) return ICONS.sun;
    return ICONS.moon;
  }
  
  createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'nav-menu';
    nav.id = 'nav-menu';
    
    const themeInfo = this.getThemeInfo(this.currentTheme);
    
    nav.innerHTML = `
      <div class="nav-menu-content">
        <!-- Theme Selector Dropdown -->
        <div class="nav-theme-dropdown" id="nav-theme-dropdown">
          <button class="nav-theme-trigger" id="nav-theme-trigger" type="button">
            <span class="nav-theme-icon" id="nav-theme-icon">${this.getThemeIcon(this.currentTheme)}</span>
            <span class="nav-theme-value" id="nav-theme-value">${themeInfo?.name || 'Vintage Sépia'}</span>
            ${ICONS.chevronDown}
          </button>
          <div class="nav-theme-content" id="nav-theme-content">
            ${this.renderThemeDropdownContent()}
          </div>
        </div>
        
        <!-- Section Navigation Items -->
        <div class="nav-items">
          ${this.items.map(item => `
            <button class="nav-item ${item.id === 'hero' ? 'active' : ''}" data-scroll="${item.id}">
              ${item.label}
            </button>
          `).join('')}
        </div>
        
        <button class="nav-mobile-btn" id="nav-mobile-btn" aria-label="Menu">
          <svg id="nav-menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <svg id="nav-close-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    `;
    
    // Create mobile overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-mobile-overlay';
    overlay.id = 'nav-mobile-overlay';
    
    overlay.innerHTML = `
      <div class="nav-mobile-backdrop" id="nav-mobile-backdrop"></div>
      <div class="nav-mobile-panel">
        <div class="nav-mobile-items">
          ${this.items.map(item => `
            <button class="nav-mobile-item ${item.id === 'hero' ? 'active' : ''}" data-scroll="${item.id}">
              ${item.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    // Insert at the beginning of body
    document.body.insertBefore(overlay, document.body.firstChild);
    document.body.insertBefore(nav, document.body.firstChild);
  }
  
  renderThemeDropdownContent() {
    return `
      <!-- Light Themes -->
      <div class="nav-theme-category">
        ${ICONS.sun}
        <span>Temas Claros</span>
      </div>
      ${THEME_CATEGORIES.light.map(t => `
        <div class="nav-theme-item ${this.currentTheme === t.id ? 'selected' : ''}" data-theme="${t.id}">
          <span class="nav-theme-item-name">${t.name}</span>
          <span class="nav-theme-item-desc">${t.desc}</span>
        </div>
      `).join('')}
      
      <div class="nav-theme-separator"></div>
      
      <!-- Dark Themes -->
      <div class="nav-theme-category">
        ${ICONS.moon}
        <span>Temas Escuros</span>
      </div>
      ${THEME_CATEGORIES.dark.map(t => `
        <div class="nav-theme-item ${this.currentTheme === t.id ? 'selected' : ''}" data-theme="${t.id}">
          <span class="nav-theme-item-name">${t.name}</span>
          <span class="nav-theme-item-desc">${t.desc}</span>
        </div>
      `).join('')}
      
      <div class="nav-theme-separator"></div>
      
      <!-- Business Themes -->
      <div class="nav-theme-category">
        ${ICONS.briefcase}
        <span>Temas de Negócio</span>
      </div>
      ${THEME_CATEGORIES.business.map(t => `
        <div class="nav-theme-item ${this.currentTheme === t.id ? 'selected' : ''}" data-theme="${t.id}">
          <span class="nav-theme-item-name">${t.name}</span>
          <span class="nav-theme-item-desc">${t.desc}</span>
        </div>
      `).join('')}
      
      <div class="nav-theme-separator"></div>
      
      <!-- Layout Themes -->
      <div class="nav-theme-category">
        ${ICONS.layout}
        <span>Temas com Layout Único</span>
      </div>
      ${THEME_CATEGORIES.layout.map(t => `
        <div class="nav-theme-item ${this.currentTheme === t.id ? 'selected' : ''}" data-theme="${t.id}">
          <span class="nav-theme-item-name">${t.name}</span>
          <span class="nav-theme-item-desc">${t.desc}</span>
        </div>
      `).join('')}
    `;
  }
  
  setupEventListeners() {
    // Scroll handler for nav background and active section
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.updateActiveSection();
    });
    
    // Click handlers for navigation items
    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-scroll');
        this.scrollToSection(targetId);
      });
    });
    
    // Mobile menu toggle
    const mobileBtn = document.getElementById('nav-mobile-btn');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    
    // Close mobile menu on backdrop click
    const backdrop = document.getElementById('nav-mobile-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeMobileMenu());
    }
    
    // Theme dropdown toggle
    const themeTrigger = document.getElementById('nav-theme-trigger');
    if (themeTrigger) {
      themeTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleThemeDropdown();
      });
    }
    
    // Theme item clicks
    document.querySelectorAll('.nav-theme-item').forEach(item => {
      item.addEventListener('click', () => {
        const themeId = item.getAttribute('data-theme');
        if (themeId) {
          this.setTheme(themeId);
          this.closeThemeDropdown();
        }
      });
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('nav-theme-dropdown');
      if (dropdown && !dropdown.contains(e.target)) {
        this.closeThemeDropdown();
      }
    });
  }
  
  toggleThemeDropdown() {
    this.themeDropdownOpen = !this.themeDropdownOpen;
    const dropdown = document.getElementById('nav-theme-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open', this.themeDropdownOpen);
    }
  }
  
  closeThemeDropdown() {
    this.themeDropdownOpen = false;
    const dropdown = document.getElementById('nav-theme-dropdown');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  }
  
  setTheme(themeId) {
    this.currentTheme = themeId;
    try {
      localStorage.setItem('selected-theme', themeId);
    } catch (e) {}
    
    // Use the global theme manager if available
    if (window.themeManager && typeof window.themeManager.setTheme === 'function') {
      window.themeManager.setTheme(themeId);
    } else {
      // Apply theme directly
      this.applyTheme(themeId);
    }
    
    this.updateThemeDisplay();
  }
  
  applyTheme(themeId) {
    const html = document.documentElement;
    
    // Remove all theme classes
    html.className = html.className.replace(/theme-[\w-]+/g, '').trim();
    
    // Add new theme class
    html.classList.add(`theme-${themeId}`);
  }
  
  updateThemeDisplay() {
    const themeInfo = this.getThemeInfo(this.currentTheme);
    const valueEl = document.getElementById('nav-theme-value');
    const iconEl = document.getElementById('nav-theme-icon');
    
    if (valueEl && themeInfo) {
      valueEl.textContent = themeInfo.name;
    }
    
    if (iconEl) {
      iconEl.innerHTML = this.getThemeIcon(this.currentTheme);
    }
    
    // Update selected state on items
    document.querySelectorAll('.nav-theme-item').forEach(item => {
      item.classList.toggle('selected', item.getAttribute('data-theme') === this.currentTheme);
    });
  }
  
  handleScroll() {
    const nav = document.getElementById('nav-menu');
    if (!nav) return;
    
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  
  updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    // Find the current section
    for (let i = this.items.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.items[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        this.setActiveItem(this.items[i].id);
        break;
      }
    }
  }
  
  setActiveItem(id) {
    if (this.activeSection === id) return;
    this.activeSection = id;
    
    // Update desktop items
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-scroll') === id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Update mobile items
    document.querySelectorAll('.nav-mobile-item').forEach(item => {
      if (item.getAttribute('data-scroll') === id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  scrollToSection(id) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const offset = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    this.closeMobileMenu();
  }
  
  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    this.updateMobileMenuState();
  }
  
  closeMobileMenu() {
    this.isOpen = false;
    this.updateMobileMenuState();
  }
  
  updateMobileMenuState() {
    const overlay = document.getElementById('nav-mobile-overlay');
    const menuIcon = document.getElementById('nav-menu-icon');
    const closeIcon = document.getElementById('nav-close-icon');
    
    if (overlay) {
      if (this.isOpen) {
        overlay.classList.add('open');
      } else {
        overlay.classList.remove('open');
      }
    }
    
    if (menuIcon && closeIcon) {
      menuIcon.style.display = this.isOpen ? 'none' : 'block';
      closeIcon.style.display = this.isOpen ? 'block' : 'none';
    }
  }
}

// Export for use in other files
window.NavigationMenu = NavigationMenu;
