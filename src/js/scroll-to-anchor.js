document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          history.pushState(null, '', window.location.pathname);
        }, 500);
      }
    });
  });
});
