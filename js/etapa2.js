<<<<<<< HEAD
import {recuperar} from "./sessionStorage.js";
import{redireccion} from "./Rutas.js";
const btnConfirmar = document.getElementById("btnConfirmar");
const nombreUsuario = document.getElementById("nombreUsuario");
const partida = recuperar();
=======
const partida = JSON.parse(sessionStorage.getItem("partida") || "null");
>>>>>>> 07d23049fab6f8d3a1d2676ccd264ade7f489334

if (partida && typeof partida.username === "string") {
    nombreUsuario.textContent = partida.username;
}

<<<<<<< HEAD
btnConfirmar.addEventListener("click", (event) => {
    event.preventDefault();
    redireccion(btnConfirmar.value);
});
=======
>>>>>>> 07d23049fab6f8d3a1d2676ccd264ade7f489334
