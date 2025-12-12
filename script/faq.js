document.addEventListener("DOMContentLoaded", () => {
  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {
      pregunta.classList.toggle("activa");
    });
  });
});