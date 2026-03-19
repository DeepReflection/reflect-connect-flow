/**
 * Social Hub - Shared Sidebar with Account Validation
 * Replicates the React SocialHubLayout access control logic.
 */

(function () {
  'use strict';

  /* ── Mock registered networks (same as React) ── */
  var MOCK_REGISTERED_NETWORKS = ['INSTAGRAM', 'FACEBOOK'];
  var registeredNetworks = new Set(MOCK_REGISTERED_NETWORKS);

  /* ── Network labels ── */
  var NETWORK_LABELS = {
    INSTAGRAM: 'Instagram',
    FACEBOOK: 'Facebook',
    YOUTUBE: 'YouTube',
    LINKEDIN: 'LinkedIn',
    TWITTER: 'X (Twitter)',
    TIKTOK: 'TikTok'
  };

  /* ── SVG icons ── */
  var ICONS = {
    dashboard: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    email: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    instagram: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>',
    facebook: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    youtube: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    linkedin: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    tiktok: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>',
    settings: '<svg class="social-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    alertCircle: '<svg style="margin-left:auto;width:0.875rem;height:0.875rem;color:#f59e0b;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
  };

  /* ── Nav items definition ── */
  var NAV_ITEMS = [
    { label: 'Dashboard', path: '#', disabled: true, icon: ICONS.dashboard },
    { label: 'Email', path: 'social-email.html', icon: ICONS.email },
    { label: 'Instagram', path: 'social-post.html?social=INSTAGRAM', social: 'INSTAGRAM', icon: ICONS.instagram },
    { label: 'Facebook', path: 'social-post.html?social=FACEBOOK', social: 'FACEBOOK', icon: ICONS.facebook },
    { label: 'YouTube', path: 'social-post.html?social=YOUTUBE', social: 'YOUTUBE', icon: ICONS.youtube },
    { label: 'LinkedIn', path: 'social-post.html?social=LINKEDIN', social: 'LINKEDIN', icon: ICONS.linkedin },
    { label: 'X (Twitter)', path: 'social-post.html?social=TWITTER', social: 'TWITTER', icon: ICONS.twitter },
    { label: 'TikTok', path: 'social-post.html?social=TIKTOK', social: 'TIKTOK', icon: ICONS.tiktok },
    { label: 'Configurações', path: 'social-settings.html', icon: ICONS.settings }
  ];

  /**
   * Render the sidebar nav into #sidebar-nav.
   * @param {string|null} activeSocial  - e.g. 'INSTAGRAM' or null
   * @param {string|null} activePage    - e.g. 'email', 'settings', or null (auto-detect from social)
   */
  window.renderSharedSidebar = function (activeSocial, activePage) {
    var container = document.getElementById('sidebar-nav');
    if (!container) return;

    var html = '';
    NAV_ITEMS.forEach(function (item) {
      // Determine active state
      var isActive = false;
      if (item.social && activeSocial) {
        isActive = item.social === activeSocial;
      } else if (activePage === 'email' && item.path === 'social-email.html') {
        isActive = true;
      } else if (activePage === 'settings' && item.path === 'social-settings.html') {
        isActive = true;
      }

      var hasAccount = !item.social || registeredNetworks.has(item.social);

      if (item.disabled) {
        html += '<div class="social-nav-item disabled">' + item.icon + '<span>' + item.label + '</span><span class="social-nav-badge">Em breve</span></div>';
      } else {
        var classes = 'social-nav-item' + (isActive ? ' active' : '') + (!hasAccount && !isActive ? ' no-account' : '');
        if (item.social && !hasAccount) {
          // Intercept click — show dialog
          html += '<a href="' + item.path + '" class="' + classes + '" onclick="return handleNoAccountClick(event, \'' + item.social + '\')">' +
            item.icon + '<span>' + item.label + '</span>' + ICONS.alertCircle + '</a>';
        } else {
          html += '<a href="' + item.path + '" class="' + classes + '">' + item.icon + '<span>' + item.label + '</span></a>';
        }
      }
    });

    container.innerHTML = html;
  };

  /* ── No-account click handler ── */
  window.handleNoAccountClick = function (e, socialKey) {
    e.preventDefault();
    var label = NETWORK_LABELS[socialKey] || socialKey;
    showNoAccountDialog(label);
    return false;
  };

  /* ── Dialog ── */
  function showNoAccountDialog(networkLabel) {
    // Remove existing dialog if any
    var existing = document.getElementById('no-account-dialog');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'no-account-dialog';
    overlay.className = 'social-modal-overlay';
    overlay.style.display = 'flex';
    overlay.onclick = function (e) {
      if (e.target === overlay) overlay.remove();
    };

    overlay.innerHTML =
      '<div class="social-modal" style="max-width:420px;" onclick="event.stopPropagation()">' +
        '<div class="social-modal-header">' +
          '<h2 class="social-modal-title" style="display:flex;align-items:center;gap:0.5rem;">' +
            '<svg style="width:1.25rem;height:1.25rem;color:#f59e0b;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
            'Conta não cadastrada' +
          '</h2>' +
          '<button class="social-modal-close" onclick="document.getElementById(\'no-account-dialog\').remove()">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="social-modal-body">' +
          '<p style="font-size:0.875rem;color:hsl(var(--muted-foreground));line-height:1.6;">' +
            'Você ainda não possui uma conta de <strong style="color:hsl(var(--foreground));">' + networkLabel + '</strong> cadastrada. ' +
            'Para criar posts nesta rede, é necessário cadastrar uma conta nas configurações.' +
          '</p>' +
        '</div>' +
        '<div class="social-modal-actions" style="justify-content:flex-end;gap:0.5rem;">' +
          '<button class="social-btn social-btn-ghost" onclick="document.getElementById(\'no-account-dialog\').remove()">Cancelar</button>' +
          '<button class="social-btn social-btn-primary" onclick="window.location.href=\'social-settings.html\'">Ir para Configurações</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
  }

  /* ── Try to load real accounts from API ── */
  var API_BASE_URL = ''; // set if available
  if (API_BASE_URL) {
    fetch(API_BASE_URL + '/reflection-social-account/reflection/1')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) {
        if (Array.isArray(data)) {
          registeredNetworks.clear();
          data.forEach(function (a) {
            if (a.isActive) registeredNetworks.add(a.socialMedia);
          });
          // Re-render sidebar with real data
          if (window._sidebarActiveSocial !== undefined || window._sidebarActivePage !== undefined) {
            window.renderSharedSidebar(window._sidebarActiveSocial, window._sidebarActivePage);
          }
        }
      })
      .catch(function () { /* keep mock */ });
  }
})();
