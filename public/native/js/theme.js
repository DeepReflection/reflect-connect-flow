// ============================================
// Theme Manager - Native HTML5 Version
// ============================================

// All available themes
const ALL_THEMES = [
  // Dark themes
  { id: 'vintage-sepia', name: 'Sépia Vintage', category: 'dark', isLight: false },
  { id: 'midnight-gold', name: 'Ouro da Meia-Noite', category: 'dark', isLight: false },
  { id: 'military-olive', name: 'Oliva Militar', category: 'dark', isLight: false },
  { id: 'ocean-deep', name: 'Oceano Profundo', category: 'dark', isLight: false },
  { id: 'crimson-war', name: 'Carmesim de Guerra', category: 'dark', isLight: false },
  { id: 'sunset-bronze', name: 'Bronze do Pôr do Sol', category: 'dark', isLight: false },
  { id: 'royal-purple', name: 'Púrpura Real', category: 'dark', isLight: false },
  { id: 'forest-emerald', name: 'Esmeralda da Floresta', category: 'dark', isLight: false },
  // Light themes
  { id: 'arctic-frost', name: 'Gelo Ártico', category: 'light', isLight: true },
  { id: 'desert-sand', name: 'Areia do Deserto', category: 'light', isLight: true },
  { id: 'cloud-silver', name: 'Prata das Nuvens', category: 'light', isLight: true },
  { id: 'rose-garden', name: 'Jardim de Rosas', category: 'light', isLight: true },
  { id: 'mint-fresh', name: 'Menta Fresca', category: 'light', isLight: true },
  { id: 'lavender-dream', name: 'Sonho de Lavanda', category: 'light', isLight: true },
  { id: 'peach-blossom', name: 'Flor de Pêssego', category: 'light', isLight: true },
  { id: 'sky-blue', name: 'Céu Azul', category: 'light', isLight: true },
  { id: 'cream-vanilla', name: 'Creme Baunilha', category: 'light', isLight: true },
  { id: 'sage-morning', name: 'Sálvia Matinal', category: 'light', isLight: true },
  { id: 'coral-reef', name: 'Recife de Coral', category: 'light', isLight: true },
  { id: 'golden-hour', name: 'Hora Dourada', category: 'light', isLight: true },
  // Business themes
  { id: 'corporate-navy', name: 'Corporativo Marinho', category: 'business', isLight: false },
  { id: 'executive-charcoal', name: 'Executivo Carvão', category: 'business', isLight: false },
  { id: 'startup-teal', name: 'Startup Teal', category: 'business', isLight: false },
  { id: 'finance-green', name: 'Finanças Verde', category: 'business', isLight: false },
  { id: 'consulting-slate', name: 'Consultoria Ardósia', category: 'business', isLight: false },
  { id: 'tech-indigo', name: 'Tech Índigo', category: 'business', isLight: false },
  { id: 'luxury-black', name: 'Luxo Preto', category: 'business', isLight: false },
  { id: 'modern-graphite', name: 'Grafite Moderno', category: 'business', isLight: false },
  { id: 'innovation-blue', name: 'Inovação Azul', category: 'business', isLight: false },
  { id: 'prestige-burgundy', name: 'Prestígio Borgonha', category: 'business', isLight: false },
  // Layout themes
  { id: 'neon-gamer', name: 'Neon Gamer', category: 'layout', isLight: false },
  { id: 'minimal-zen', name: 'Minimalista Zen', category: 'layout', isLight: true },
  { id: 'magazine-editorial', name: 'Magazine Editorial', category: 'layout', isLight: false },
  { id: 'retro-wave', name: 'Retro Wave', category: 'layout', isLight: false },
  { id: 'nature-organic', name: 'Natureza Orgânica', category: 'layout', isLight: true },
  { id: 'brutalist-raw', name: 'Brutalista Cru', category: 'layout', isLight: false },
  { id: 'glassmorphism', name: 'Glassmorphism', category: 'layout', isLight: false },
  { id: 'split-screen', name: 'Tela Dividida', category: 'layout', isLight: false },
  { id: 'gradient-flow', name: 'Fluxo Gradiente', category: 'layout', isLight: false },
  { id: 'card-stack', name: 'Cartões Empilhados', category: 'layout', isLight: false },
];

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('native-theme') || 'vintage-sepia';
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeDropdown = document.getElementById('theme-dropdown');
    this.bannerImg = document.getElementById('hero-banner-img');
    
    this.init();
  }
  
  init() {
    // Build dropdown
    this.buildDropdown();
    
    // Apply saved theme
    this.applyTheme(this.currentTheme);
    
    // Toggle dropdown
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.themeDropdown.classList.toggle('hidden');
      });
    }
    
    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.theme-selector')) {
        this.themeDropdown?.classList.add('hidden');
      }
    });
  }
  
  buildDropdown() {
    if (!this.themeDropdown) return;
    
    const categories = {
      dark: { title: 'Temas Escuros', themes: [] },
      light: { title: 'Temas Claros', themes: [] },
      business: { title: 'Temas Empresariais', themes: [] },
      layout: { title: 'Temas de Layout', themes: [] },
    };
    
    ALL_THEMES.forEach(theme => {
      if (categories[theme.category]) {
        categories[theme.category].themes.push(theme);
      }
    });
    
    let html = '';
    Object.entries(categories).forEach(([key, category]) => {
      if (category.themes.length > 0) {
        html += `
          <div class="theme-category">
            <h4>${category.title}</h4>
            ${category.themes.map(theme => `
              <button class="theme-option ${theme.id === this.currentTheme ? 'active' : ''}" 
                      data-theme="${theme.id}">
                ${theme.name}
              </button>
            `).join('')}
          </div>
        `;
      }
    });
    
    this.themeDropdown.innerHTML = html;
    
    // Add click handlers
    this.themeDropdown.querySelectorAll('.theme-option').forEach(option => {
      option.addEventListener('click', () => {
        const themeId = option.dataset.theme;
        this.setTheme(themeId);
        this.themeDropdown.classList.add('hidden');
      });
    });
  }
  
  applyTheme(themeId) {
    // Remove all theme classes
    ALL_THEMES.forEach(theme => {
      document.body.classList.remove(`theme-${theme.id}`);
    });
    
    // Add current theme class
    document.body.classList.add(`theme-${themeId}`);
    
    // Update banner image - use local assets
    if (this.bannerImg) {
      this.bannerImg.src = `assets/themes/${themeId}/images/banner.jpg`;
    }
    
    // Update active state in dropdown
    this.updateActiveState();
  }
  
  setTheme(themeId) {
    this.currentTheme = themeId;
    localStorage.setItem('native-theme', themeId);
    this.applyTheme(themeId);
  }
  
  updateActiveState() {
    this.themeDropdown?.querySelectorAll('.theme-option').forEach(option => {
      const themeId = option.dataset.theme;
      option.classList.toggle('active', themeId === this.currentTheme);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});