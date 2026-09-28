document.addEventListener('DOMContentLoaded', () => {
  const tiempoTotalEl = document.getElementById('reloj');
  const tiempoEtapaEl = document.getElementById('tiempoetapa');

  let segTotal = 20 * 60; // 20 minutos
  let segEtapa = 3 * 60;  // 3 minutos por etapa

  function formatear(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const r = (s % 60).toString().padStart(2, '0');
    return `${m}:${r}`;
  }

  // Mostrar tiempo inicial
  tiempoTotalEl.textContent = formatear(segTotal);
  tiempoEtapaEl.textContent = formatear(segEtapa);

  const Reloj = setInterval(() => {
    // Descontar segundos si son mayores a 0
    if (segTotal > 0) segTotal--;
    if (segEtapa > 0) segEtapa--;

    // Actualizar pantalla
    tiempoTotalEl.textContent = formatear(segTotal);
    tiempoEtapaEl.textContent = formatear(segEtapa);

    // Frenar todo cuando el tiempo total llegue a cero
    if (segTotal === 0) {
      clearInterval(Reloj);
    }
  }, 1000);

  // Función opcional para reiniciar solo el tiempo de la etapa al avanzar de fase
  function reiniciarTiempoEtapa(nuevosMinutos) {
    segEtapa = nuevosMinutos * 60;
    tiempoEtapaEl.textContent = formatear(segEtapa);
  }
});


