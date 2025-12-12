document.addEventListener("DOMContentLoaded", () => {
  const tiempoLimite = new Date().getTime() + 24 * 60 * 60 * 1000;

  function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = tiempoLimite - ahora;

    if (diferencia <= 0) {
      document.getElementById("horas").textContent = "00";
      document.getElementById("minutos").textContent = "00";
      document.getElementById("segundos").textContent = "00";
      return;
    }

    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
  }

  // IntersectionObserver para activar animación
  const contador = document.getElementById("contador-dinamico");
  contador.classList.add("fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contador.classList.add("visible");
        setInterval(actualizarContador, 1000); // inicia el contador solo cuando se ve
        observer.unobserve(contador); // deja de observar después de activarse
      }
    });
  });

  observer.observe(contador);
});