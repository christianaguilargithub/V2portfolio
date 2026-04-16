// const hamburger = document.getElementById('hamburger');
// const navLinks   = document.getElementById('navLinks');
// const navLogo  = document.getElementById('navLogo');
// const menuLogoMobile  = document.getElementById('menuLogoMobile');
// const logoImg = document.getElementById('navLogoImg');

// hamburger.addEventListener('click', function () {
//   hamburger.classList.toggle('open');
//   navLinks.classList.toggle('open');
//   navLogo.classList.toggle('open');
//   document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  
// });

// navLinks.querySelectorAll('a').forEach(function (link) {
//   link.addEventListener('click', function () {
//     hamburger.classList.remove('open');
//     navLinks.classList.remove('open');
//     document.body.style.overflow = '';
//   });
// });


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLogo = document.getElementById('navLogo');
const logoImg = document.getElementById('navLogoImg');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  navLogo.classList.toggle('open');

  const isOpen = hamburger.classList.contains('open');

  // ✅ correct logic (open = alternate logo)
  logoImg.src = isOpen
    ? './css/images/logo_label.png'
    : './css/images/cj_logo_label.png';

  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navLogo.classList.remove('open');

    // ✅ reset logo when menu closes
    logoImg.src = './css/images/cj_logo_label.png';

    document.body.style.overflow = '';
  });
});