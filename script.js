// Small reveal animation for a polished portfolio feel.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});

document.querySelectorAll('.section, .stats, .project, .experience-card, .skill-grid article, .ai-grid > div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});
