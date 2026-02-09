// ============================================
// Profile Editor - Native HTML5 Version
// ============================================

const STORAGE_KEY = 'profile-data';

// Default profile data
const DEFAULT_PROFILE = {
  name: "outrobrasileironodiad",
  description: "O Projeto Outro Brasileiro é uma iniciativa independente e sem fins lucrativos dedicada à criação de conteúdos audiovisuais sobre a Segunda Guerra Mundial, explorando de forma aprofundada seus principais eventos, batalhas, personagens e contextos históricos.",
  avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
  bannerUrl: "",
  socialLinks: [
    { id: "1", url: "https://www.instagram.com/outrobrasileironodiad/", label: "Instagram", iconType: "instagram" },
    { id: "2", url: "https://www.youtube.com/@outrobrasileironodiad9205", label: "YouTube", iconType: "youtube" },
  ],
  agendaEvents: AGENDA_EVENTS || [],
  products: PRODUCTS || [],
  services: SERVICES || [],
  reflections: REFLECTIONS || [],
};

const ICON_OPTIONS = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'website', label: 'Website' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'email', label: 'Email' },
];

// State
let profileData = {};
let currentImageTarget = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  initTabs();
  initDialogTabs();
  initUrlPreview();
  renderAll();
  console.log('✏️ Profile Editor loaded successfully!');
});

// Load profile from localStorage
function loadProfile() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      profileData = JSON.parse(stored);
    } catch {
      profileData = { ...DEFAULT_PROFILE };
    }
  } else {
    profileData = { ...DEFAULT_PROFILE };
  }
}

// Save profile to localStorage
function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
  showToast('Alterações salvas!');
}

// Initialize tabs
function initTabs() {
  const tabs = document.querySelectorAll('.editor-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show corresponding section
      document.querySelectorAll('.editor-section').forEach(s => s.classList.remove('active'));
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// Initialize dialog tabs
function initDialogTabs() {
  const dialogTabs = document.querySelectorAll('.editor-dialog-tab');
  dialogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.dialogTab;
      
      dialogTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      document.querySelectorAll('.editor-dialog-tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(`dialog-tab-${tabId}`).classList.add('active');
    });
  });
}

// URL preview
function initUrlPreview() {
  const urlInput = document.getElementById('image-url-input');
  const preview = document.getElementById('url-preview');
  const previewImg = document.getElementById('url-preview-img');
  
  urlInput.addEventListener('input', (e) => {
    const url = e.target.value.trim();
    if (url) {
      previewImg.src = url;
      previewImg.onload = () => preview.classList.add('has-image');
      previewImg.onerror = () => preview.classList.remove('has-image');
    } else {
      preview.classList.remove('has-image');
    }
  });
}

// Render all sections
function renderAll() {
  renderBasicInfo();
  renderSocialLinks();
  renderAgenda();
  renderProducts();
  renderServices();
  renderReflections();
}

// Render basic info
function renderBasicInfo() {
  const nameInput = document.getElementById('profile-name');
  const descInput = document.getElementById('profile-description');
  const descCount = document.getElementById('desc-count');
  const avatarContainer = document.getElementById('avatar-preview');
  const avatarImg = document.getElementById('avatar-img');
  const bannerContainer = document.getElementById('banner-preview');
  const bannerImg = document.getElementById('banner-img');
  
  nameInput.value = profileData.name || '';
  descInput.value = profileData.description || '';
  descCount.textContent = (profileData.description || '').length;
  
  // Avatar
  if (profileData.avatarUrl) {
    avatarImg.src = profileData.avatarUrl;
    avatarContainer.classList.add('has-image');
  } else {
    avatarContainer.classList.remove('has-image');
  }
  
  // Banner
  if (profileData.bannerUrl) {
    bannerImg.src = profileData.bannerUrl;
    bannerContainer.classList.add('has-image');
  } else {
    bannerContainer.classList.remove('has-image');
  }
  
  // Event listeners
  nameInput.addEventListener('input', (e) => {
    profileData.name = e.target.value;
    saveProfile();
  });
  
  descInput.addEventListener('input', (e) => {
    profileData.description = e.target.value;
    descCount.textContent = e.target.value.length;
    saveProfile();
  });
}

// Render social links
function renderSocialLinks() {
  const container = document.getElementById('social-links-list');
  const links = profileData.socialLinks || [];
  
  if (links.length === 0) {
    container.innerHTML = '<p class="editor-empty">Nenhum link social adicionado ainda.</p>';
    return;
  }
  
  container.innerHTML = links.map((link, index) => `
    <div class="editor-item" data-index="${index}">
      <div class="editor-link-row">
        <select class="editor-select" onchange="updateSocialLink(${index}, 'iconType', this.value)">
          ${ICON_OPTIONS.map(opt => `
            <option value="${opt.value}" ${link.iconType === opt.value ? 'selected' : ''}>${opt.label}</option>
          `).join('')}
        </select>
        <input type="text" class="editor-input" placeholder="Nome do link" value="${link.label || ''}" 
          onchange="updateSocialLink(${index}, 'label', this.value)">
        <div style="display: flex; gap: 0.5rem;">
          <input type="url" class="editor-input" placeholder="URL" value="${link.url || ''}" 
            onchange="updateSocialLink(${index}, 'url', this.value)">
          <button class="editor-btn editor-btn-destructive editor-btn-icon" onclick="removeSocialLink(${index})" title="Remover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Add social link
function addSocialLink() {
  if (!profileData.socialLinks) profileData.socialLinks = [];
  profileData.socialLinks.push({
    id: Date.now().toString(),
    url: '',
    label: '',
    iconType: 'website'
  });
  saveProfile();
  renderSocialLinks();
}

// Update social link
function updateSocialLink(index, field, value) {
  if (profileData.socialLinks && profileData.socialLinks[index]) {
    profileData.socialLinks[index][field] = value;
    saveProfile();
  }
}

// Remove social link
function removeSocialLink(index) {
  if (confirm('Remover este link?')) {
    profileData.socialLinks.splice(index, 1);
    saveProfile();
    renderSocialLinks();
  }
}

// Generic item renderer
function renderItemList(containerId, items, type, fields) {
  const container = document.getElementById(containerId);
  
  if (!items || items.length === 0) {
    container.innerHTML = '<p class="editor-empty">Nenhum item adicionado ainda.</p>';
    return;
  }
  
  container.innerHTML = items.map((item, index) => `
    <div class="editor-item" data-index="${index}">
      <div class="editor-item-header" onclick="toggleItem(this.parentElement)">
        ${item.imageUrl ? `<img src="${item.imageUrl}" alt="" class="editor-item-thumb">` : ''}
        <div class="editor-item-info">
          <div class="editor-item-title">${item.title || 'Sem título'}</div>
          ${item.description ? `<div class="editor-item-subtitle">${item.description.substring(0, 50)}...</div>` : ''}
        </div>
        <div class="editor-item-actions">
          <svg class="editor-item-expand" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
          <button class="editor-btn editor-btn-destructive editor-btn-icon" onclick="event.stopPropagation(); removeItem('${type}', ${index})" title="Remover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="editor-item-content">
        ${fields.map(field => `
          <div class="editor-field">
            <label class="editor-label">${field.label}</label>
            ${field.type === 'textarea' 
              ? `<textarea class="editor-textarea" rows="3" placeholder="${field.placeholder || ''}" 
                  onchange="updateItem('${type}', ${index}, '${field.key}', this.value)">${item[field.key] || ''}</textarea>`
              : `<input type="${field.type || 'text'}" class="editor-input" placeholder="${field.placeholder || ''}" 
                  value="${item[field.key] || ''}" onchange="updateItem('${type}', ${index}, '${field.key}', this.value)">`
            }
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Toggle item expansion
function toggleItem(element) {
  element.classList.toggle('expanded');
}

// Render agenda
function renderAgenda() {
  const fields = [
    { key: 'title', label: 'Título', type: 'text' },
    { key: 'description', label: 'Descrição', type: 'textarea' },
    { key: 'date', label: 'Data', type: 'text', placeholder: 'Ex: 15 Jan 2025' },
    { key: 'time', label: 'Horário', type: 'text', placeholder: 'Ex: 19:00' },
    { key: 'location', label: 'Local', type: 'text' },
    { key: 'imageUrl', label: 'URL da Imagem', type: 'url' },
  ];
  renderItemList('agenda-list', profileData.agendaEvents, 'agendaEvents', fields);
}

// Render products
function renderProducts() {
  const fields = [
    { key: 'title', label: 'Título', type: 'text' },
    { key: 'description', label: 'Descrição', type: 'textarea' },
    { key: 'imageUrl', label: 'URL da Imagem', type: 'url' },
    { key: 'downloadUrl', label: 'Link de Download', type: 'url' },
  ];
  renderItemList('products-list', profileData.products, 'products', fields);
}

// Render services
function renderServices() {
  const fields = [
    { key: 'title', label: 'Título', type: 'text' },
    { key: 'description', label: 'Descrição', type: 'textarea' },
    { key: 'imageUrl', label: 'URL da Imagem', type: 'url' },
    { key: 'linkUrl', label: 'Link do Serviço', type: 'url' },
  ];
  renderItemList('services-list', profileData.services, 'services', fields);
}

// Render reflections
function renderReflections() {
  const fields = [
    { key: 'title', label: 'Título', type: 'text' },
    { key: 'imageUrl', label: 'URL da Imagem', type: 'url' },
  ];
  renderItemList('reflections-list', profileData.reflections, 'reflections', fields);
}

// Add item functions
function addAgendaEvent() {
  if (!profileData.agendaEvents) profileData.agendaEvents = [];
  profileData.agendaEvents.push({
    title: 'Novo Evento',
    description: '',
    date: '',
    time: '',
    location: '',
    imageUrl: ''
  });
  saveProfile();
  renderAgenda();
}

function addProduct() {
  if (!profileData.products) profileData.products = [];
  profileData.products.push({
    title: 'Novo Produto',
    description: '',
    imageUrl: '',
    downloadUrl: ''
  });
  saveProfile();
  renderProducts();
}

function addService() {
  if (!profileData.services) profileData.services = [];
  profileData.services.push({
    title: 'Novo Serviço',
    description: '',
    imageUrl: '',
    linkUrl: ''
  });
  saveProfile();
  renderServices();
}

function addReflection() {
  if (!profileData.reflections) profileData.reflections = [];
  profileData.reflections.push({
    title: 'Nova Reflexão',
    imageUrl: ''
  });
  saveProfile();
  renderReflections();
}

// Update item
function updateItem(type, index, field, value) {
  if (profileData[type] && profileData[type][index]) {
    profileData[type][index][field] = value;
    saveProfile();
  }
}

// Remove item
function removeItem(type, index) {
  if (confirm('Remover este item?')) {
    profileData[type].splice(index, 1);
    saveProfile();
    
    switch(type) {
      case 'agendaEvents': renderAgenda(); break;
      case 'products': renderProducts(); break;
      case 'services': renderServices(); break;
      case 'reflections': renderReflections(); break;
    }
  }
}

// closeImageDialog and applyImageUrl remain here
function closeImageDialog(event) {
  if (event && event.target !== document.getElementById('image-dialog')) return;
  document.getElementById('image-dialog').classList.remove('open');
  currentImageTarget = null;
}

function applyImageUrl() {
  const url = document.getElementById('image-url-input').value.trim();
  if (url && currentImageTarget) {
    if (currentImageTarget === 'avatar') {
      profileData.avatarUrl = url;
    } else if (currentImageTarget === 'banner') {
      profileData.bannerUrl = url;
    }
    saveProfile();
    renderBasicInfo();
    closeImageDialog();
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (currentImageTarget === 'avatar') {
        profileData.avatarUrl = reader.result;
      } else if (currentImageTarget === 'banner') {
        profileData.bannerUrl = reader.result;
      }
      saveProfile();
      renderBasicInfo();
      closeImageDialog();
    };
    reader.readAsDataURL(file);
  }
}

// ============================================
// Inline Banner Gallery (inside profile editor)
// ============================================
let galleryViewMode = 'grid';
let gallerySelectedCategory = null;
let gallerySearchQuery = '';

// Open image dialog - show gallery tab only for banner
function openImageDialog(target) {
  currentImageTarget = target;
  document.getElementById('image-dialog').classList.add('open');
  document.getElementById('image-url-input').value = '';
  document.getElementById('url-preview').classList.remove('has-image');
  
  // Show/hide gallery tab based on target
  const galleryTabBtn = document.getElementById('dialog-tab-gallery-btn');
  if (target === 'banner') {
    galleryTabBtn.style.display = '';
  } else {
    galleryTabBtn.style.display = 'none';
    // If gallery tab was active, switch to url
    if (document.querySelector('.editor-dialog-tab[data-dialog-tab="gallery"]').classList.contains('active')) {
      document.querySelectorAll('.editor-dialog-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.editor-dialog-tab-content').forEach(c => c.classList.remove('active'));
      document.querySelector('.editor-dialog-tab[data-dialog-tab="url"]').classList.add('active');
      document.getElementById('dialog-tab-url').classList.add('active');
    }
  }
}

function openInlineGallery() {
  gallerySelectedCategory = null;
  gallerySearchQuery = '';
  document.getElementById('inline-gallery-search').value = '';
  document.getElementById('inline-gallery-search-clear').classList.add('hidden');
  document.getElementById('inline-gallery').classList.add('open');
  renderGalleryContent();
}

function closeInlineGallery(event) {
  if (event && event.target !== document.getElementById('inline-gallery')) return;
  document.getElementById('inline-gallery').classList.remove('open');
}

function setGalleryView(mode) {
  galleryViewMode = mode;
  document.querySelectorAll('.inline-gallery-view-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.gview === mode);
  });
  renderGalleryContent();
}

function galleryGoBack() {
  gallerySelectedCategory = null;
  gallerySearchQuery = '';
  document.getElementById('inline-gallery-search').value = '';
  document.getElementById('inline-gallery-search-clear').classList.add('hidden');
  renderGalleryContent();
}

function onGallerySearch(query) {
  gallerySearchQuery = query.trim();
  gallerySelectedCategory = null;
  document.getElementById('inline-gallery-search-clear').classList.toggle('hidden', !gallerySearchQuery);
  renderGalleryContent();
}

function clearGallerySearch() {
  gallerySearchQuery = '';
  document.getElementById('inline-gallery-search').value = '';
  document.getElementById('inline-gallery-search-clear').classList.add('hidden');
  renderGalleryContent();
}

function renderGalleryContent() {
  const body = document.getElementById('inline-gallery-body');
  const backBtn = document.getElementById('inline-gallery-back');
  const title = document.getElementById('inline-gallery-title');

  // Search mode
  if (gallerySearchQuery) {
    backBtn.classList.add('hidden');
    title.textContent = 'Galeria de Banners';
    const matchingCats = searchCategories(gallerySearchQuery);
    
    if (matchingCats.length === 0) {
      body.innerHTML = '<div class="gallery-empty"><p>Nenhum banner encontrado para "' + gallerySearchQuery + '"</p></div>';
      return;
    }

    let html = '';
    matchingCats.forEach(cat => {
      const banners = getBannersForCategory(cat.id);
      html += '<div class="gallery-search-group">';
      html += '<div class="gallery-search-group-header">';
      html += '<span class="gallery-search-group-title">' + cat.name + '</span>';
      html += '<span class="gallery-search-group-badge">' + banners.length + '</span>';
      html += '</div>';
      html += '<div class="' + (galleryViewMode === 'grid' ? 'gallery-banners-grid' : 'gallery-banners-list') + '">';
      banners.forEach(b => {
        html += '<div class="gallery-banner-card" onclick="selectGalleryBanner(\'' + b.url + '\')">';
        html += '<img src="' + b.url + '" alt="' + b.id + '" loading="lazy">';
        html += '</div>';
      });
      html += '</div></div>';
    });
    body.innerHTML = html;
    return;
  }

  // Category view
  if (gallerySelectedCategory) {
    backBtn.classList.remove('hidden');
    title.textContent = gallerySelectedCategory.name;
    const banners = getBannersForCategory(gallerySelectedCategory.id);
    
    let html = '<div class="' + (galleryViewMode === 'grid' ? 'gallery-banners-grid' : 'gallery-banners-list') + '">';
    banners.forEach(b => {
      html += '<div class="gallery-banner-card" onclick="selectGalleryBanner(\'' + b.url + '\')">';
      html += '<img src="' + b.url + '" alt="' + b.id + '" loading="lazy">';
      html += '</div>';
    });
    html += '</div>';
    body.innerHTML = html;
    return;
  }

  // Categories grid (default)
  backBtn.classList.add('hidden');
  title.textContent = 'Galeria de Banners';
  
  let html = '<div class="gallery-categories-grid">';
  BANNER_CATEGORIES.forEach(cat => {
    const thumbUrl = '../extras/' + cat.id + '-01.jpg';
    html += '<div class="gallery-category-card" onclick="selectGalleryCategory(\'' + cat.id + '\')">';
    html += '<img src="' + thumbUrl + '" alt="' + cat.name + '" loading="lazy">';
    html += '<div class="category-overlay"></div>';
    html += '<div class="category-info">';
    html += '<div class="category-name">' + cat.name + '</div>';
    html += '<div class="category-count">' + cat.count + ' banners</div>';
    html += '</div></div>';
  });
  html += '</div>';
  body.innerHTML = html;
}

function selectGalleryCategory(categoryId) {
  gallerySelectedCategory = getCategoryById(categoryId);
  renderGalleryContent();
}

function selectGalleryBanner(url) {
  profileData.bannerUrl = url;
  saveProfile();
  renderBasicInfo();
  closeInlineGallery();
  closeImageDialog();
}

// Open banner gallery (from the external button)
function openBannerGallery() {
  openInlineGallery();
}

// Reset to default
function resetToDefault() {
  if (confirm('Tem certeza que deseja restaurar os dados padrão? Todas as alterações serão perdidas.')) {
    profileData = { ...DEFAULT_PROFILE };
    saveProfile();
    renderAll();
    showToast('Perfil restaurado!');
  }
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Apply saved theme
const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme) {
  document.documentElement.className = `theme-${savedTheme}`;
}
