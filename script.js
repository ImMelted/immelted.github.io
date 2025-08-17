window.addEventListener('scroll', function() {
  const bg = document.querySelector('.full-screen-bg');
  const content = document.querySelector('.content');
  if (window.scrollY > 50) {
    bg.classList.add('hidden');
    content.classList.add('scrolled');
  } else {
    bg.classList.remove('hidden');
    content.classList.remove('scrolled');
  }
});
