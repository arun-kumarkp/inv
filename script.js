/* ==============================
   COUNTDOWN FOR COVER & CEREMONY
   ============================== */
const weddingDate = new Date("Sep 14, 2025 09:30:00").getTime();
const countdownEls = [
    document.getElementById("countdown"),
    document.getElementById("cover-countdown")
];

setInterval(function () {
    const now = new Date().getTime();
    const dist = weddingDate - now;
    let displayText;

    if (dist < 0) {
        displayText = "Happily Married 🎉";
    } else {
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        displayText = `${d}d ${h}h ${m}m ${s}s`;
    }

    countdownEls.forEach(el => {
        if (el) el.textContent = displayText;
    });
}, 1000);

/* ==============================
   SCROLL REVEAL ANIMATION (Staggered sequence)
   ============================== */
const sections = document.querySelectorAll('.section');
let animationSequence = [];

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach((sec, index) => {
        if (sec.getBoundingClientRect().top < triggerBottom && !sec.classList.contains('visible')) {
            // Add to animation sequence with delay based on section order
            const delay = index * 300; // 300ms delay between each section
            animationSequence.push({ section: sec, delay: delay });
        }
    });
    
    // Process animation sequence
    animationSequence.forEach(({ section, delay }) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, delay);
    });
    
    // Clear processed animations
    animationSequence = animationSequence.filter(item => !item.section.classList.contains('visible'));
}

window.addEventListener('scroll', revealSections);

// Initial reveal for sections already in view
setTimeout(() => {
    revealSections();
}, 500);

/* ==============================
   BACKGROUND MUSIC CONTROL
   ============================== */
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

// Initialize cute emoji icon and a11y label
musicBtn.textContent = "🎵";
musicBtn.setAttribute('aria-label', 'Play music');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🎶";
        musicBtn.classList.add('is-playing');
        musicBtn.setAttribute('aria-label', 'Pause music');
        musicBtn.title = 'Pause music';
    } else {
        music.pause();
        musicBtn.textContent = "🎵";
        musicBtn.classList.remove('is-playing');
        musicBtn.setAttribute('aria-label', 'Play music');
        musicBtn.title = 'Play music';
    }
});

// Pause music when tab is hidden or page is about to unload
document.addEventListener('visibilitychange', () => {
    if (document.hidden && !music.paused) {
        music.pause();
        musicBtn.textContent = "🎵";
        musicBtn.classList.remove('is-playing');
        musicBtn.setAttribute('aria-label', 'Play music');
        musicBtn.title = 'Play music';
    }
});

window.addEventListener('pagehide', () => {
    if (!music.paused) {
        music.pause();
        music.currentTime = 0;
        musicBtn.textContent = "🎵";
        musicBtn.classList.remove('is-playing');
    }
});


// Blinking heart in browser tab title
const originalTitle = "✨";
let showHeart = true;

setInterval(() => {
    document.title = showHeart ? "❤️ " + originalTitle : "   " + originalTitle;
    showHeart = !showHeart;
}, 800); // change every 800ms

/* ==============================
   SCROLL PROGRESS BAR
   ============================== */
const progressBar = document.querySelector('#scroll-progress .bar');
function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = progress + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
document.addEventListener('DOMContentLoaded', updateProgress);