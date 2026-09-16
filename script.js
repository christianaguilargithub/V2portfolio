const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLogo = document.getElementById('navLogo');
const logoImg = document.getElementById('navLogoImg');
const navOverlay = document.getElementById('navOverlay');

history.scrollRestoration = 'manual';

window.addEventListener('load', function () {
  history.replaceState(null, document.title, window.location.pathname + window.location.search + '#home');
  window.scrollTo(0, 0);
}, { once: true });

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navLogo.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  logoImg.src = './css/images/cj_logo_label.png';
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
  const isOpen = !hamburger.classList.contains('open');

  if (!isOpen) {
    closeMenu();
    return;
  }

  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navLogo.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  logoImg.src = './css/images/cj_logo_label.png';
  document.body.style.overflow = 'hidden';
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu();
  });
});

navOverlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && hamburger.classList.contains('open')) {
    closeMenu();
  }
});