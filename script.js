// Small interaction layer: keep the page feeling alive without a framework.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });
