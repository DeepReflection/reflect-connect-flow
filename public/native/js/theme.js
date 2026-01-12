// ============================================
// Theme Manager - Native HTML5 Version
// ============================================

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('native-theme') || 'vintage-sepia';
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeDropdown = document.getElementById('theme-dropdown');
    this.themeOptions = document.querySelectorAll('.theme-option');
    
    this.init();
  }
  
  init() {
    // Apply saved theme
    this.applyTheme(this.currentTheme);
    
    // Toggle dropdown
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.themeDropdown.classList.toggle('hidden');
      });
    }
    
    // Theme option clicks
    this.themeOptions.forEach(option => {
      option.addEventListener('click', () => {
        const themeId = option.dataset.theme;
        this.setTheme(themeId);
        this.themeDropdown.classList.add('hidden');
      });
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.theme-selector')) {
        this.themeDropdown.classList.add('hidden');
      }
    });
    
    // Update active state
    this.updateActiveState();
  }
  
  applyTheme(themeId) {
    // Remove all theme classes
    THEMES.forEach(theme => {
      document.body.classList.remove(`theme-${theme.id}`);
    });
    
    // Add current theme class
    document.body.classList.add(`theme-${themeId}`);
  }
  
  setTheme(themeId) {
    this.currentTheme = themeId;
    localStorage.setItem('native-theme', themeId);
    this.applyTheme(themeId);
    this.updateActiveState();
  }
  
  updateActiveState() {
    this.themeOptions.forEach(option => {
      const themeId = option.dataset.theme;
      option.classList.toggle('active', themeId === this.currentTheme);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});
