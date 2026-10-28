// Assets / Accounts toggle
const segButtons = document.querySelectorAll('.seg-btn');
segButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    segButtons.forEach(b => b.classList.toggle('active', b === btn));
    document.getElementById('assets').classList.toggle('hidden', btn.dataset.tab !== 'assets');
    document.getElementById('accounts').classList.toggle('hidden', btn.dataset.tab !== 'accounts');
  });
});

// Bottom nav active state
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.toggle('active', b === btn));
  });
});

// Vero splash screen: shown on every launch, then fades into the wallet.
const SPLASH_MS = 10000; // total time the splash is on screen
const FADE_MS   = 700;   // fade-out length (matches .splash transition in splash.css)

(function () {
  const splash = document.getElementById('splash');
  if (!splash) { document.body.classList.remove('splash-on'); return; }

  setTimeout(() => {
    splash.classList.add('leave');
    document.body.classList.remove('splash-on');
    setTimeout(() => splash.remove(), FADE_MS + 100);
  }, SPLASH_MS - FADE_MS);
})();
