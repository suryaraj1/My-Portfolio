const navLink = document.querySelectorAll('.nav_link');

const showMenu = (toggleId, navId) => {
  const toggle = document.querySelector(`#${toggleId}`);
  const nav = document.querySelector(`#${navId}`);

  if (toggle && nav)
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    })
};

navLink.forEach(item => item.addEventListener('click', () => {
  navLink.forEach(item => item.classList.remove('active'));
  item.classList.add('active');

  const navMenu = document.querySelector(".nav_menu");
  navMenu.classList.remove('show');
}));

// for scroll-reveals
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home_title');
sr.reveal('.home_img', { delay: 400 });
sr.reveal('.home_image', { delay: 400 });
sr.reveal('.home_social-media-icon', { interval: 200});

sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 200 });
sr.reveal('.about_text', { delay: 400 });

sr.reveal('.project-wrapper', { interval: 200 });
sr.reveal('.project-section-btn-wrapper', { interval: 400 });

sr.reveal('.skill-item', { interval: 200 });

sr.reveal('.achievements-card', { interval: 200 });
sr.reveal('.achievements-text', { interval: 300 });
sr.reveal('.achievements-section-btn-wrapper', { interval: 400 });

showMenu('nav-toggle', 'nav-menu');

const medal = String.fromCodePoint(0x1F3C5);
const checkMark = String.fromCodePoint(0x2705);

// for the tool-tip