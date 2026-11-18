import {recuperar} from "./sessionStorage.js";
import{redireccion} from "./Rutas.js";
const btnConfirmar = document.getElementById("btnConfirmar");
const nombreUsuario = document.getElementById("nombreUsuario");

const partida = recuperar();
if (partida && typeof partida.username === "string") {
    nombreUsuario.textContent = partida.username;
}


btnConfirmar.addEventListener("click", (event) => {
    event.preventDefault();
    redireccion(btnConfirmar.value);
});

 
