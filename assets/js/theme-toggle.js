/* Theme Toggle - Light/Dark mode switcher */
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

function updateThemeIcon() {
  const sunIcon = document.querySelector('.icon-sun');
  const moonIcon = document.querySelector('.icon-moon');
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    if (sunIcon) sunIcon.setAttribute('hidden', '');
    if (moonIcon) moonIcon.removeAttribute('hidden');
    updateFavicon('dark');
  } else {
    if (sunIcon) sunIcon.removeAttribute('hidden');
    if (moonIcon) moonIcon.setAttribute('hidden', '');
    updateFavicon('light');
  }
}

function updateFavicon(theme) {
  const faviconLink = document.querySelector('link[rel="icon"]');
  if (faviconLink) {
    faviconLink.href = theme === 'dark'
      ? 'assets/icons/favicon-dark.svg'
      : 'assets/icons/favicon.svg';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme-preference', newTheme);
    updateThemeIcon();
  });
}

/* Initialize theme from localStorage or system preference */
function initTheme() {
  const saved = localStorage.getItem('theme-preference');

  if (saved) {
    html.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateThemeIcon();
  });
} else {
  initTheme();
  updateThemeIcon();
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme-preference')) {
    html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  }
});