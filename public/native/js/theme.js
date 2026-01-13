// ============================================
// Theme Management - Native HTML5 Version
// ============================================

const THEME_CONFIG = {
  'vintage-sepia': { name: 'Vintage Sépia', isLight: false },
  'midnight-gold': { name: 'Midnight Gold', isLight: false },
  'military-olive': { name: 'Military Olive', isLight: false },
  'ocean-deep': { name: 'Ocean Deep', isLight: false },
  'crimson-war': { name: 'Crimson War', isLight: false },
  'sunset-bronze': { name: 'Sunset Bronze', isLight: false },
  'royal-purple': { name: 'Royal Purple', isLight: false },
  'forest-emerald': { name: 'Forest Emerald', isLight: false },
  'arctic-frost': { name: 'Arctic Frost', isLight: true },
  'desert-sand': { name: 'Desert Sand', isLight: true },
  'cloud-silver': { name: 'Cloud Silver', isLight: true },
  'rose-garden': { name: 'Rose Garden', isLight: true },
  'mint-fresh': { name: 'Mint Fresh', isLight: true },
  'lavender-dream': { name: 'Lavender Dream', isLight: true },
  'peach-blossom': { name: 'Peach Blossom', isLight: true },
  'sky-blue': { name: 'Sky Blue', isLight: true },
  'cream-vanilla': { name: 'Cream Vanilla', isLight: true },
  'sage-morning': { name: 'Sage Morning', isLight: true },
  'coral-reef': { name: 'Coral Reef', isLight: true },
  'golden-hour': { name: 'Golden Hour', isLight: true },
  'corporate-navy': { name: 'Corporate Navy', isLight: false },
  'executive-charcoal': { name: 'Executive Charcoal', isLight: false },
  'startup-teal': { name: 'Startup Teal', isLight: false },
  'finance-green': { name: 'Finance Green', isLight: false },
  'consulting-slate': { name: 'Consulting Slate', isLight: false },
  'tech-indigo': { name: 'Tech Indigo', isLight: false },
  'luxury-black': { name: 'Luxury Black', isLight: false },
  'modern-graphite': { name: 'Modern Graphite', isLight: false },
  'innovation-blue': { name: 'Innovation Blue', isLight: false },
  'prestige-burgundy': { name: 'Prestige Burgundy', isLight: false },
  'neon-gamer': { name: 'Neon Gamer', isLight: false, layout: 'centered' },
  'minimal-zen': { name: 'Minimal Zen', isLight: false, layout: 'minimal' },
  'magazine-editorial': { name: 'Magazine Editorial', isLight: false, layout: 'editorial' },
  'retro-wave': { name: 'Retro Wave', isLight: false, layout: 'retro' },
  'nature-organic': { name: 'Nature Organic', isLight: false, layout: 'organic' },
  'brutalist-raw': { name: 'Brutalist Raw', isLight: false, layout: 'brutalist' },
  'glassmorphism': { name: 'Glassmorphism', isLight: false, layout: 'glass' },
  'split-screen': { name: 'Split Screen', isLight: false, layout: 'split' },
  'gradient-flow': { name: 'Gradient Flow', isLight: false, layout: 'gradient' },
  'card-stack': { name: 'Card Stack', isLight: false, layout: 'stacked' }
};

class ThemeManager {
  constructor() {
    this.currentTheme = this.getSavedTheme() || 'vintage-sepia';
    this.init();
  }

  init() {
    // Apply saved theme on load
    this.applyTheme(this.currentTheme);
    
    // Setup theme select dropdown
    this.setupThemeSelect();
  }

  setupThemeSelect() {
    const themeSelect = document.getElementById('theme-select');
    if (!themeSelect) return;
    
    // Set current value
    themeSelect.value = this.currentTheme;
    
    // Listen for changes
    themeSelect.addEventListener('change', (e) => {
      this.setTheme(e.target.value);
    });
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
    
    // Remove all theme classes
    Object.keys(THEME_CONFIG).forEach(theme => {
      html.classList.remove(`theme-${theme}`);
    });
    
    // Add new theme class
    html.classList.add(`theme-${themeId}`);
    
    // Update banner image
    this.updateBannerImage(themeId);
    
    // Update select value if exists
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.value = themeId;
    }
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