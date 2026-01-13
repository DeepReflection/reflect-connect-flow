// ============================================
// Main Application - Native HTML5 Version
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Populate profile data first
  populateProfile();
  
  // Setup share button
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', shareContent);
  }
  
  // Add intersection observer for scroll animations
  setupScrollAnimations();
  
  // Log success
  console.log('🌟 Native HTML5 version loaded successfully!');
  console.log('📍 Available pages:');
  console.log('   - /native/index.html');
  console.log('   - /native/vinihistoria.html');
  console.log('   - /native/gersonjunior.html');
  console.log('   - /native/claudiofrydman.html');
});

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

// Share functionality
function shareContent() {
  const profile = getCurrentProfile();
  
  if (navigator.share) {
    navigator.share({
      title: profile.name,
      text: profile.description,
      url: window.location.href,
    }).catch(console.error);
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Link copiado para a área de transferência!');
    }).catch(console.error);
  }
}

// Simple toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.75rem 1.5rem;
    background: hsl(var(--card));
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    border-radius: 0.5rem;
    font-size: 0.875rem;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);