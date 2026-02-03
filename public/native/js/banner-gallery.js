// ============================================
// Banner Gallery - Native HTML5 Version
// ============================================

const PROFILE_STORAGE_KEY = 'profile-data';

// State
let currentCategory = null;
let viewMode = 'grid';
let searchQuery = '';

// DOM Elements
const galleryContent = document.getElementById('gallery-content');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const galleryTitle = document.getElementById('gallery-title');
const backLink = document.getElementById('back-link');
const viewButtons = document.querySelectorAll('.gallery-view-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initViewToggle();
  initSearch();
  renderCategories();
  applyTheme();
  console.log('🖼️ Banner Gallery loaded successfully!');
});

// Apply saved theme
function applyTheme() {
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme) {
    document.documentElement.className = `theme-${savedTheme}`;
  }
}

// Initialize view toggle
function initViewToggle() {
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      viewMode = btn.dataset.view;
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (currentCategory) {
        renderBanners(currentCategory);
      } else if (searchQuery) {
        renderSearchResults();
      } else {
        renderCategories();
      }
    });
  });
}

// Initialize search
function initSearch() {
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.classList.toggle('hidden', !searchQuery);
    
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (searchQuery) {
        currentCategory = null;
        renderSearchResults();
        updateHeader('Resultados da Busca', true);
      } else {
        renderCategories();
        updateHeader('Galeria de Banners', false);
      }
    }, 300);
  });
  
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.add('hidden');
    currentCategory = null;
    renderCategories();
    updateHeader('Galeria de Banners', false);
  });
}

// Update header
function updateHeader(title, showBack) {
  galleryTitle.textContent = title;
  backLink.onclick = showBack ? handleBack : null;
}

// Handle back navigation
function handleBack(e) {
  e.preventDefault();
  if (currentCategory) {
    currentCategory = null;
    if (searchQuery) {
      renderSearchResults();
      updateHeader('Resultados da Busca', true);
    } else {
      renderCategories();
      updateHeader('Galeria de Banners', false);
    }
  } else if (searchQuery) {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.add('hidden');
    renderCategories();
    updateHeader('Galeria de Banners', false);
  } else {
    window.location.href = 'profile-editor.html';
  }
}

// Render categories grid
function renderCategories() {
  const gridClass = viewMode === 'grid' ? 'gallery-categories-grid' : 'gallery-categories-list';
  
  galleryContent.innerHTML = `
    <div class="${gridClass}">
      ${BANNER_CATEGORIES.map(cat => `
        <button class="gallery-category-card" onclick="selectCategory('${cat.id}')">
          <img src="../extras/${cat.id}-01.jpg" alt="${cat.name}" loading="lazy">
          <div class="gallery-category-overlay"></div>
          <div class="gallery-category-info">
            <span class="gallery-category-name">${cat.name}</span>
            <span class="gallery-category-count">${cat.count} banners</span>
          </div>
        </button>
      `).join('')}
    </div>
  `;
}

// Select a category
function selectCategory(categoryId) {
  currentCategory = getCategoryById(categoryId);
  if (currentCategory) {
    updateHeader(currentCategory.name, true);
    renderBanners(currentCategory);
  }
}

// Render banners for a category
function renderBanners(category) {
  const banners = getBannersForCategory(category.id);
  const gridClass = viewMode === 'grid' ? 'gallery-banners-grid' : 'gallery-banners-list';
  
  galleryContent.innerHTML = `
    <div class="${gridClass}">
      ${banners.map(banner => `
        <button class="gallery-banner-card" onclick="selectBanner('${banner.url}')">
          <img src="${banner.url}" alt="${banner.id}" loading="lazy">
        </button>
      `).join('')}
    </div>
  `;
}

// Render search results
function renderSearchResults() {
  const matchingCategories = searchCategories(searchQuery);
  
  if (matchingCategories.length === 0) {
    galleryContent.innerHTML = `
      <div class="gallery-empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
          <path d="M8 8l6 6"/>
          <path d="M14 8l-6 6"/>
        </svg>
        <p>Nenhum banner encontrado para "${searchQuery}"</p>
      </div>
    `;
    return;
  }
  
  let html = '<div class="gallery-search-results">';
  
  matchingCategories.forEach(cat => {
    const banners = getBannersForCategory(cat.id);
    const gridClass = viewMode === 'grid' ? 'gallery-banners-grid' : 'gallery-banners-list';
    
    html += `
      <div class="gallery-search-category">
        <div class="gallery-search-category-header">
          <h3 class="gallery-search-category-title">${cat.name}</h3>
          <span class="gallery-search-category-badge">${cat.count}</span>
          <button class="gallery-search-category-expand" onclick="selectCategory('${cat.id}')">
            Ver todos
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
        <div class="${gridClass}">
          ${banners.slice(0, 6).map(banner => `
            <button class="gallery-banner-card" onclick="selectBanner('${banner.url}')">
              <img src="${banner.url}" alt="${banner.id}" loading="lazy">
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  galleryContent.innerHTML = html;
}

// Select a banner and save it
function selectBanner(url) {
  // Load current profile data
  let profileData = {};
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (stored) {
    try {
      profileData = JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing profile data:', e);
    }
  }
  
  // Update banner URL
  profileData.bannerUrl = url;
  
  // Save to localStorage
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
  
  // Redirect back to editor
  window.location.href = 'profile-editor.html';
}
