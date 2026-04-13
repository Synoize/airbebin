// ── Theme toggle ──────────────────────────────────────────────
const html = document.documentElement;
const btn = document.getElementById('theme-toggle');

// Load saved theme, default = light
const saved = localStorage.getItem('fd-theme') || 'light';
html.className = saved;

btn.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    html.className = isDark ? 'light' : 'dark';
    localStorage.setItem('fd-theme', html.className);
});

// ── Mobile menu ───────────────────────────────────────────────
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {

    if (mobileMenu.classList.contains("max-h-0")) {

        mobileMenu.classList.remove("max-h-0", "opacity-0", "-translate-y-4");
        mobileMenu.classList.add("max-h-96", "opacity-100", "translate-y-0");

    } else {

        mobileMenu.classList.remove("max-h-96", "opacity-100", "translate-y-0");
        mobileMenu.classList.add("max-h-0", "opacity-0", "-translate-y-4");

    }

});

function closeMobile() {
    mobileMenu.classList.remove("max-h-96", "opacity-100", "translate-y-0");
    mobileMenu.classList.add("max-h-0", "opacity-0", "-translate-y-4");
}

// ── Scroll reveal ─────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
