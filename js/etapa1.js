const partida = JSON.parse(sessionStorage.getItem("partida") || "null");

if (partida && typeof partida.username === "string") {
    const usuario = document.getElementById("user");
    if (usuario) {
        usuario.textContent = partida.username;
    }
}

document.getElementById("formEtapa1").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "etapa2.html";
});
    