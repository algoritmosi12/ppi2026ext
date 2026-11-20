import {recuperar} from "./sessionStorage.js";
import{redireccion} from "./Rutas.js";
import {relojgeneral} from "./clock.js";
const btnConfirmar = document.getElementById("btnConfirmar");
const nombreUsuario = document.getElementById("nombreUsuario");
const reloj = document.getElementById("reloj");
const partida = recuperar();

if (partida && typeof partida.username === "string") {
    nombreUsuario.textContent = partida.username;
}

relojgeneral(reloj);

btnConfirmar.addEventListener("click", (event) => {
    event.preventDefault();
    redireccion(btnConfirmar.value);
});

 
