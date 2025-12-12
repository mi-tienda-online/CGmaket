document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card-reveal');

  const observerCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerCards.unobserve(entry.target);
      }
    });
  });

  cards.forEach(card => observerCards.observe(card));
});