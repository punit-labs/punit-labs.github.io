(() => {
  const root = document.documentElement;

  // Theme toggle (remembered per browser; falls back to OS preference)
  const btn = document.querySelector('.theme-toggle');
  btn?.addEventListener('click', () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  // Demos show their final frame as a still; the animated GIF loads only on request
  document.querySelectorAll('.media').forEach(media => {
    const img = media.querySelector('img[data-gif]');
    const play = media.querySelector('.play');
    play?.addEventListener('click', () => {
      img.src = img.dataset.gif;
      media.classList.add('playing');
    });
  });

  // Highlight current section in the nav
  const links = [...document.querySelectorAll('.nav nav a')];
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        byId.get(e.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();
