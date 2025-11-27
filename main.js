/* ==================== SHOW/HIDE MENU (MOBILE) ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* === KEMASKINI main.js === */

/* Tunjuk menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        // === TAMBAH BARIS INI ===
        document.querySelector('.main-content').classList.add('dimmed');
    });
}

/* Sembunyi menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        // === TAMBAH BARIS INI ===
        document.querySelector('.main-content').classList.remove('dimmed');
    });
}

/* Sembunyi menu bila klik link (untuk mobile) */
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    
    // === TAMBAH BARIS INI ===
    document.querySelector('.main-content').classList.remove('dimmed');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/* ==================== DARK/LIGHT THEME ==================== */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Ikon untuk toggle
const iconSun = 'fa-sun';
const iconMoon = 'fa-moon';

// Cek simpanan localStorage pengguna
let currentTheme = localStorage.getItem('wise-theme');
let currentIcon = localStorage.getItem('wise-icon');

// Set tema semasa load page
if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    // Default: dark-mode
    body.classList.add('dark-mode');
    currentTheme = 'dark-mode';
    currentIcon = iconSun; // Dalam dark-mode, tunjuk ikon sun
    localStorage.setItem('wise-theme', currentTheme);
    localStorage.setItem('wise-icon', currentIcon);
}

// Set ikon semasa load page
if (themeToggle) {
    const iconElement = themeToggle.querySelector('i');
    if (currentIcon) {
        iconElement.classList.add(currentIcon);
    } else {
        iconElement.classList.add(iconSun); // Default
    }

    // Fungsi bila butang di-klik
    themeToggle.addEventListener('click', () => {
        // Tukar class pada body
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            
            // Tukar ikon
            iconElement.classList.remove(iconSun);
            iconElement.classList.add(iconMoon);
            
            // Simpan pilihan
            localStorage.setItem('wise-theme', 'light-mode');
            localStorage.setItem('wise-icon', iconMoon);

        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            
            // Tukar ikon
            iconElement.classList.remove(iconMoon);
            iconElement.classList.add(iconSun);
            
            // Simpan pilihan
            localStorage.setItem('wise-theme', 'dark-mode');
            localStorage.setItem('wise-icon', iconSun);
        }
    });
}

fetch("http://127.0.0.1:5000/chat", {
   method: "POST",
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify({ message: userMessege })
})

