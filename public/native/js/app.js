// ============================================
// Main Application - Native HTML5 Version
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Render all sections
  renderEvents();
  renderProducts();
  renderServices();
  renderReflections();
  
  // Setup share button
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', shareContent);
  }
  
  // Setup chatbot button
  const chatbotBtn = document.getElementById('chatbot-btn');
  if (chatbotBtn) {
    chatbotBtn.addEventListener('click', () => {
      alert('Chatbot em construção! Em breve você poderá conversar conosco.');
    });
  }
  
  // Add intersection observer for scroll animations
  setupScrollAnimations();
});

function renderEvents() {
  const container = document.getElementById('events-grid');
  if (container && AGENDA_EVENTS) {
    container.innerHTML = AGENDA_EVENTS.map((event, index) => 
      renderEventCard(event, index)
    ).join('');
  }
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (container && PRODUCTS) {
    container.innerHTML = PRODUCTS.map((product, index) => 
      renderProductCard(product, index)
    ).join('');
  }
}

function renderServices() {
  const container = document.getElementById('services-grid');
  if (container && SERVICES) {
    container.innerHTML = SERVICES.map((service, index) => 
      renderServiceCard(service, index)
    ).join('');
  }
}

function renderReflections() {
  const container = document.getElementById('reflections-grid');
  if (container && REFLECTIONS) {
    container.innerHTML = REFLECTIONS.map((reflection, index) => 
      renderReflectionCard(reflection, index)
    ).join('');
  }
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  
  // Observe all cards
  document.querySelectorAll('.glass-card, .reflection-card').forEach(card => {
    observer.observe(card);
  });
}

// Log that native version is loaded
console.log('🌟 Native HTML5 version loaded successfully!');
console.log('📍 Access this version at: /native/index.html');
