document.querySelectorAll('nav li a, .hero a, .hero-jerseys a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    // Solo prevenir el comportamiento por defecto si es un ID interno (ej. #about, #services)
    if (targetId.startsWith('#') && document.querySelector(targetId)) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


