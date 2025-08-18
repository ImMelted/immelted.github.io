window.addEventListener('scroll', function() {
  const bg = document.querySelector('.full-screen-bg');
  const header = document.querySelector('.animated-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    bg.classList.add('hidden');
    header.classList.add('active');
  } else {
    bg.classList.remove('hidden');
    header.classList.remove('active');
  }
});

// Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('.animated-header');
const logo = document.getElementById('logo');
const trackItems = document.querySelectorAll('.track-item');
const aboutSection = document.querySelector('.about-section');

function setTheme(isLight) {
  if (isLight) {
    body.classList.add('light-theme');
    header.classList.add('light-theme');
    logo.src = 'source/img/logo-im-melted-light.png';
    trackItems.forEach(item => item.classList.add('light-theme'));
    aboutSection.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    header.classList.remove('light-theme');
    logo.src = 'source/img/logo-im-melted-dark.png';
    trackItems.forEach(item => item.classList.remove('light-theme'));
    aboutSection.classList.remove('light-theme');
  }
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  setTheme(true);
} else {
  setTheme(false);
}

themeToggle.addEventListener('click', function(e) {
  e.preventDefault();
  const isLight = body.classList.toggle('light-theme');
  setTheme(isLight);
});
