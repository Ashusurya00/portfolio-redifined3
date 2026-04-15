// 🌙 Apply selected theme styles dynamically
function applyTheme(theme) {
    if (theme === 'ocean') {
        document.documentElement.style.setProperty('--bg-gradient', 'linear-gradient(135deg, #1CA9C9, #0A3D62)');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#cce7ff');
        document.documentElement.style.setProperty('--btn-bg', '#00ffff');
        document.documentElement.style.setProperty('--btn-hover', '#00bfff');
    } else {
        // 🌌 Galactic (default)
        document.documentElement.style.setProperty('--bg-gradient', 'radial-gradient(circle at 50% 50%, #0a0a1a, #0f0c29, #1a1a40)');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#ccc');
        document.documentElement.style.setProperty('--btn-bg', '#7b2ff7');
        document.documentElement.style.setProperty('--btn-hover', '#ff6ec4');
    }
}

// 🌗 Toggle theme on button click
function changeTheme() {
    const current = localStorage.getItem('theme') || 'galactic';
    const next = current === 'galactic' ? 'ocean' : 'galactic';
    localStorage.setItem('theme', next);
    applyTheme(next);

    const icon = document.querySelector('.theme-btn i');
    if (icon) {
        icon.setAttribute('data-feather', next === 'galactic' ? 'moon' : 'sun');
        feather.replace();
    }
}

// 🍀 Toggle navbar visibility (for mobile)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.style.display = (navLinks.style.display === 'none' || !navLinks.style.display) ? 'flex' : 'none';
    }
}

// 🚀 Run this when page loads
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme') || 'galactic';
    applyTheme(saved);

    // Set correct icon based on saved theme
    const icon = document.querySelector('.theme-btn i');
    if (icon) {
        icon.setAttribute('data-feather', saved === 'galactic' ? 'moon' : 'sun');
    }

    // Activate Feather icons globally
    feather.replace();
});
