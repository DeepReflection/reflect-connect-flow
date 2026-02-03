// ============================================
// Navigation Menu - Native HTML5 Version
// ============================================

class NavigationMenu {
  constructor(options = {}) {
    this.profileName = options.profileName || 'Menu';
    this.items = options.items || [
      { id: 'hero', label: 'Início' },
      { id: 'social', label: 'Redes Sociais' },
      { id: 'agenda', label: 'Agenda' },
      { id: 'products', label: 'Produtos' },
      { id: 'reflections', label: 'Reflexões' }
    ];
    this.activeSection = 'hero';
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    this.createNavigation();
    this.setupEventListeners();
    this.updateActiveSection();
  }
  
  createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'nav-menu';
    nav.id = 'nav-menu';
    
    nav.innerHTML = `
      <div class="nav-menu-content">
        <button class="nav-brand" data-scroll="hero">${this.profileName}</button>
        
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
