// theme
const toggle = document.getElementById('themeToggle');
const setTheme = t => document.documentElement.classList.toggle('light', t === 'light');
setTheme(localStorage.getItem('theme') || 'dark');
if (toggle) toggle.addEventListener('click', () => {
  const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  setTheme(next); localStorage.setItem('theme', next);
});

// year
document.getElementById('year')?.append(new Date().getFullYear());

// simple gallery loader
// Replace /data/artifacts.json with your hosted JSON (or hardcode cards).
const FEED = '/data/artifacts.json';
fetch(FEED).then(r => r.ok ? r.json() : []).then(list => {
  const wrap = document.getElementById('gallery');
  if (!wrap) return;
  if (!Array.isArray(list) || list.length === 0) {
    // fallback demo tiles
    list = [
      {img:'https://picsum.photos/seed/olive1/800/600', meta:'Sketch — abstract cut'},
      {img:'https://picsum.photos/seed/olive2/800/900', meta:'Coffee craft — bitter proof'},
      {img:'https://picsum.photos/seed/olive3/800/700', meta:'Pickles mischief — continuity'}
    ];
  }
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img'); img.src = item.img; img.alt = item.meta || 'artifact';
    const meta = document.createElement('div'); meta.className = 'meta'; meta.textContent = item.meta || '';
    card.append(img, meta); wrap.append(card);
  });
}).catch(()=>{});
