/* Theme initialization - runs before page render.
   Default is dark; light only when the OS prefers light (or a saved choice). */
(function() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme-preference');

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
  }
})();
