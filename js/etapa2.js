const btnConfirmar = document.getElementById("btnConfirmar");
const partida = JSON.parse(sessionStorage.getItem("partida") || "null");

if (partida && typeof partida.username === "string") {
    document.getElementById("nombreUsuario").textContent = partida.username;
}

btnConfirmar.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "etapa3.html";
});
