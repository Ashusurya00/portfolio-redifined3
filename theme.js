// ── THEME ──────────────────────────────────────────
const THEME_KEY = 'as-theme';

function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(i => i.textContent = t === 'dark' ? '☀️' : '🌙');
  localStorage.setItem(THEME_KEY, t);
}

function toggleTheme() {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

// Apply on load immediately (before paint)
applyTheme(getTheme());

// ── HAMBURGER / MOBILE NAV ──────────────────────────
function initNav() {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-nav');
  if (!ham || !mob) return;

  ham.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    ham.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !mob.contains(e.target)) {
      mob.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', initNav);
