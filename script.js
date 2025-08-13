/* Countdown for both cover & ceremony */
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

/* Scroll reveal animation */
const sections = document.querySelectorAll('.section');
function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < triggerBottom) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
revealSections();

/* Background Music Control */
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});
