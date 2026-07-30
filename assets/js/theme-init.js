/* Theme initialization - runs before page render */
(function() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme-preference');

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }
})();