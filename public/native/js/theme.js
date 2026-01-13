// ============================================
// Theme Management - Native HTML5 Version
// ============================================

const THEME_CONFIG = {
  // Dark themes (classic layout)
  'vintage-sepia': { name: 'Vintage Sépia', isLight: false, isLayout: false, layout: 'classic' },
  'midnight-gold': { name: 'Meia-Noite Dourado', isLight: false, isLayout: false, layout: 'classic' },
  'military-olive': { name: 'Militar Oliva', isLight: false, isLayout: false, layout: 'classic' },
  'ocean-deep': { name: 'Oceano Profundo', isLight: false, isLayout: false, layout: 'classic' },
  'crimson-war': { name: 'Carmesim de Guerra', isLight: false, isLayout: false, layout: 'classic' },
  'sunset-bronze': { name: 'Pôr do Sol Bronze', isLight: false, isLayout: false, layout: 'classic' },
  'royal-purple': { name: 'Púrpura Real', isLight: false, isLayout: false, layout: 'classic' },
  'forest-emerald': { name: 'Floresta Esmeralda', isLight: false, isLayout: false, layout: 'classic' },
  // Light themes (classic layout)
  'arctic-frost': { name: 'Gelo Ártico', isLight: true, isLayout: false, layout: 'classic' },
  'desert-sand': { name: 'Areia do Deserto', isLight: true, isLayout: false, layout: 'classic' },
  'cloud-silver': { name: 'Nuvem Prateada', isLight: true, isLayout: false, layout: 'classic' },
  'rose-garden': { name: 'Jardim de Rosas', isLight: true, isLayout: false, layout: 'classic' },
  'mint-fresh': { name: 'Menta Fresca', isLight: true, isLayout: false, layout: 'classic' },
  'lavender-dream': { name: 'Sonho Lavanda', isLight: true, isLayout: false, layout: 'classic' },
  'peach-blossom': { name: 'Flor de Pêssego', isLight: true, isLayout: false, layout: 'classic' },
  'sky-blue': { name: 'Céu Azul', isLight: true, isLayout: false, layout: 'classic' },
  'cream-vanilla': { name: 'Creme Baunilha', isLight: true, isLayout: false, layout: 'classic' },
  'sage-morning': { name: 'Sálvia Matinal', isLight: true, isLayout: false, layout: 'classic' },
  'coral-reef': { name: 'Recife de Coral', isLight: true, isLayout: false, layout: 'classic' },
  'golden-hour': { name: 'Hora Dourada', isLight: true, isLayout: false, layout: 'classic' },
  // Business themes (unique layouts)
  'corporate-navy': { name: 'Corporativo Marinho', isLight: false, isLayout: true, layout: 'corporate' },
  'executive-charcoal': { name: 'Executivo Carvão', isLight: false, isLayout: true, layout: 'executive' },
  'startup-teal': { name: 'Startup Teal', isLight: false, isLayout: true, layout: 'startup' },
  'finance-green': { name: 'Finanças Verde', isLight: false, isLayout: true, layout: 'corporate' },
  'consulting-slate': { name: 'Consultoria Ardósia', isLight: false, isLayout: true, layout: 'executive' },
  'tech-indigo': { name: 'Tech Índigo', isLight: false, isLayout: true, layout: 'startup' },
  'luxury-black': { name: 'Luxo Preto', isLight: false, isLayout: true, layout: 'luxury' },
  'modern-graphite': { name: 'Grafite Moderno', isLight: false, isLayout: true, layout: 'executive' },
  'innovation-blue': { name: 'Inovação Azul', isLight: false, isLayout: true, layout: 'startup' },
  'prestige-burgundy': { name: 'Prestígio Borgonha', isLight: false, isLayout: true, layout: 'prestige' },
  // Layout themes (unique layouts)
  'neon-gamer': { name: 'Neon Gamer', isLight: false, isLayout: true, layout: 'centered' },
  'minimal-zen': { name: 'Minimalista Zen', isLight: true, isLayout: true, layout: 'minimal' },
  'magazine-editorial': { name: 'Magazine Editorial', isLight: false, isLayout: true, layout: 'editorial' },
  'retro-wave': { name: 'Retro Wave', isLight: false, isLayout: true, layout: 'retro' },
  'nature-organic': { name: 'Natureza Orgânica', isLight: true, isLayout: true, layout: 'organic' },
  'brutalist-raw': { name: 'Brutalista Cru', isLight: false, isLayout: true, layout: 'brutalist' },
  'glassmorphism': { name: 'Glassmorphism', isLight: false, isLayout: true, layout: 'glass' },
  'split-screen': { name: 'Tela Dividida', isLight: false, isLayout: true, layout: 'split' },
  'gradient-flow': { name: 'Fluxo Gradiente', isLight: false, isLayout: true, layout: 'gradient' },
  'card-stack': { name: 'Cartões Empilhados', isLight: true, isLayout: true, layout: 'stacked' }
};

// All possible layout classes
const LAYOUT_CLASSES = [
  'layout-classic', 'layout-centered', 'layout-minimal', 'layout-editorial',
  'layout-retro', 'layout-organic', 'layout-brutalist', 'layout-glass',
  'layout-split', 'layout-gradient', 'layout-stacked',
  'layout-corporate', 'layout-executive', 'layout-startup', 'layout-luxury', 'layout-prestige'
];

// SVG icons for dropdown
const ICONS = {
  sun: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,
  moon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>`,
  layout: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>`
};

class ThemeManager {
  constructor() {
    this.currentTheme = this.getSavedTheme() || 'vintage-sepia';
    this.isOpen = false;
    this.init();
  }

  init() {
    // Apply saved theme on load
    this.applyTheme(this.currentTheme);
    
    // Setup custom dropdown
    this.setupCustomDropdown();
  }

  setupCustomDropdown() {
    const dropdown = document.getElementById('theme-dropdown');
    const trigger = document.getElementById('theme-dropdown-trigger');
    const content = document.getElementById('theme-dropdown-content');
    
    if (!dropdown || !trigger || !content) return;
    
    // Toggle dropdown on trigger click
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDropdown();
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        this.closeDropdown();
      }
    });
    
    // Handle theme item clicks
    const items = content.querySelectorAll('.theme-dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const themeId = item.dataset.theme;
        if (themeId) {
          this.setTheme(themeId);
          this.closeDropdown();
        }
      });
    });
    
    // Update display with current theme
    this.updateDropdownDisplay();
  }

  toggleDropdown() {
    const dropdown = document.getElementById('theme-dropdown');
    if (!dropdown) return;
    
    this.isOpen = !this.isOpen;
    dropdown.classList.toggle('open', this.isOpen);
  }

  closeDropdown() {
    const dropdown = document.getElementById('theme-dropdown');
    if (!dropdown) return;
    
    this.isOpen = false;
    dropdown.classList.remove('open');
  }

  updateDropdownDisplay() {
    const valueEl = document.getElementById('theme-dropdown-value');
    const iconEl = document.getElementById('theme-dropdown-icon');
    const content = document.getElementById('theme-dropdown-content');
    
    if (!valueEl || !iconEl) return;
    
    const config = THEME_CONFIG[this.currentTheme];
    if (!config) return;
    
    // Update displayed name
    valueEl.textContent = config.name;
    
    // Update icon based on theme type
    if (config.isLayout) {
      iconEl.innerHTML = ICONS.layout;
    } else if (config.isLight) {
      iconEl.innerHTML = ICONS.sun;
    } else {
      iconEl.innerHTML = ICONS.moon;
    }
    
    // Update selected state on items
    if (content) {
      const items = content.querySelectorAll('.theme-dropdown-item');
      items.forEach(item => {
        item.classList.toggle('selected', item.dataset.theme === this.currentTheme);
      });
    }
  }

  getSavedTheme() {
    try {
      return localStorage.getItem('selected-theme');
    } catch (e) {
      return null;
    }
  }

  saveTheme(themeId) {
    try {
      localStorage.setItem('selected-theme', themeId);
    } catch (e) {
      console.warn('Could not save theme preference');
    }
  }

  setTheme(themeId) {
    if (!THEME_CONFIG[themeId]) {
      console.warn(`Theme "${themeId}" not found`);
      return;
    }
    
    this.currentTheme = themeId;
    this.saveTheme(themeId);
    this.applyTheme(themeId);
  }

  applyTheme(themeId) {
    const html = document.documentElement;
    const heroSection = document.querySelector('.hero-section');
    const config = THEME_CONFIG[themeId];
    
    // Remove all theme classes
    Object.keys(THEME_CONFIG).forEach(theme => {
      html.classList.remove(`theme-${theme}`);
    });
    
    // Add new theme class
    html.classList.add(`theme-${themeId}`);
    
    // Apply layout class to hero section
    if (heroSection && config) {
      // Remove all layout classes
      LAYOUT_CLASSES.forEach(cls => heroSection.classList.remove(cls));
      // Add the appropriate layout class
      heroSection.classList.add(`layout-${config.layout}`);
    }
    
    // Update banner image
    this.updateBannerImage(themeId);
    
    // Update dropdown display
    this.updateDropdownDisplay();
  }

  updateBannerImage(themeId) {
    const bannerImg = document.getElementById('hero-banner-img');
    if (!bannerImg) return;
    
    // Try to load theme-specific banner
    const bannerPath = `assets/themes/${themeId}/images/banner.jpg`;
    const fallbackPath = 'assets/themes/vintage-sepia/images/banner.jpg';
    
    // Test if image exists
    const testImg = new Image();
    testImg.onload = () => {
      bannerImg.src = bannerPath;
    };
    testImg.onerror = () => {
      bannerImg.src = fallbackPath;
    };
    testImg.src = bannerPath;
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});
