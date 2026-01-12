// ============================================
// Component Renderers - Native HTML5 Version
// ============================================

// SVG Icons
const Icons = {
  clock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>`,
  
  mapPin: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>`,
  
  calendar: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>`,
  
  download: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>`,
  
  externalLink: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>`,
};

// Render Event Card
function renderEventCard(event, index) {
  return `
    <article class="event-card glass-card animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
      <div class="event-image">
        <img src="${event.imageUrl}" alt="${event.title}" loading="lazy">
        <span class="event-date-badge">${event.date}</span>
      </div>
      <div class="event-content">
        <div class="event-meta">
          <span>${Icons.clock} ${event.time}</span>
          ${event.location ? `<span>${Icons.mapPin} ${event.location}</span>` : ''}
        </div>
        <h3 class="event-title font-display">${event.title}</h3>
        <p class="event-description">${event.description}</p>
        <button class="event-btn" onclick="addToCalendar('${event.title}', '${event.date}', '${event.time}')">
          ${Icons.calendar} Adicionar ao Calendário
        </button>
      </div>
    </article>
  `;
}

// Render Product Card
function renderProductCard(product, index) {
  return `
    <article class="product-card glass-card animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-content">
        <h3 class="product-title font-display">${product.title}</h3>
        <p class="product-description">${product.description}</p>
        ${product.downloadUrl ? `
          <a href="${product.downloadUrl}" class="product-btn">
            ${Icons.download} Download
          </a>
        ` : ''}
      </div>
    </article>
  `;
}

// Render Service Card
function renderServiceCard(service, index) {
  return `
    <article class="service-card glass-card animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
      <div class="service-image">
        <img src="${service.imageUrl}" alt="${service.title}" loading="lazy">
      </div>
      <div class="service-content">
        <h3 class="service-title font-display">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        ${service.linkUrl ? `
          <a href="${service.linkUrl}" class="service-btn">
            ${Icons.externalLink} Saiba Mais
          </a>
        ` : ''}
      </div>
    </article>
  `;
}

// Render Reflection Card
function renderReflectionCard(reflection, index) {
  return `
    <div class="reflection-card animate-fade-in-up" style="animation-delay: ${index * 0.05}s">
      <div class="reflection-image">
        <img src="${reflection.imageUrl}" alt="${reflection.title}" loading="lazy">
      </div>
      <span class="reflection-title">${reflection.title}</span>
    </div>
  `;
}

// Add to Calendar function
function addToCalendar(title, date, time) {
  alert(`Adicionar ao calendário:\n${title}\n${date} às ${time}`);
  // In a real implementation, this would create an .ics file or open a calendar app
}

// Share functionality
function shareContent() {
  if (navigator.share) {
    navigator.share({
      title: PROFILE_DATA.name,
      text: PROFILE_DATA.description,
      url: window.location.href,
    }).catch(console.error);
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copiado para a área de transferência!');
    }).catch(console.error);
  }
}
