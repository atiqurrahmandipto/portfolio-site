/**
 * Md. Atiqur Rahman Portfolio — Interactive JavaScript
 * Tailored for Software Engineering & Product Thinking.
 */

// ==========================================================================
// App Controller Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSkillsFilter();
  initScrollAnimations();
  initUtilities();
});

// ==========================================================================
// 1. Theme Engine (Dark / Light Mode Toggle with Persistence)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`, 'info');
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

// ==========================================================================
// 2. Navigation & Mobile Drawer Menu
// ==========================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');

  const openDrawer = () => {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => scrollSpyObserver.observe(sec));
}

// ==========================================================================
// 3. Skills Category Filtering
// ==========================================================================
function initSkillsFilter() {
  const skillTabs = document.querySelectorAll('[data-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 4. Toast Notifications System
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'status');

  const iconMap = {
    success: '✔',
    error: '✖',
    info: 'ℹ'
  };

  toast.innerHTML = `
    <span class="toast-icon">${iconMap[type] || 'ℹ'}</span>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

// ==========================================================================
// 5. Scroll Reveal Animations
// ==========================================================================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ==========================================================================
// 6. Utilities (Copy Email & Dynamic Year)
// ==========================================================================
function initUtilities() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailElem = document.getElementById('email-address');

  if (copyBtn && emailElem) {
    copyBtn.addEventListener('click', async () => {
      const emailText = emailElem.textContent.trim();
      try {
        await navigator.clipboard.writeText(emailText);
        showToast('📋 Email copied to clipboard: ' + emailText, 'success');
      } catch (err) {
        showToast('Email address: ' + emailText, 'info');
      }
    });
  }

  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
