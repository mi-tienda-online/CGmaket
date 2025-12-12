
const audio = document.getElementById("audio-hero");

  // Activa sonido y reproduce
  function activarAudio() {
    audio.muted = false;
    audio.play();
  }

  // Pausa la reproducción
  function pausarAudio() {
    audio.pause();
  }

  // Detiene y reinicia al inicio
  function detenerAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

  // Permite que al primer clic en cualquier parte también se active el sonido
  document.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
  }, { once: true });

