const btnConfirmar = document.getElementById("btnConfirmar");
const siguiente = document.getElementById("siguiente");
const btnContinuar = document.getElementById("btnContinuar");
const partida = JSON.parse(sessionStorage.getItem("partida") || "null");

if (partida && typeof partida.username === "string") {
    document.getElementById("nombreUsuario").textContent = partida.username;
}

btnConfirmar.addEventListener("click", () => {
    siguiente.classList.remove("d-none");
});

btnContinuar.addEventListener("click", () => {
    window.location.href = "etapa2.html";
});
    