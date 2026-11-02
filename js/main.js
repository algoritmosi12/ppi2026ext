import {generar} from "./sessionStorage.js";
import {redireccion} from "./Rutas.js";
const username = document.getElementById("usuario");
const btnComenzar=document.getElementById("btnComenzar");
btnComenzar.addEventListener("click",()=>{
    generar({username: username.value})
    redireccion(btnComenzar.value)
});
username.addEventListener("input", () => {
    btnComenzar.disabled = false;
});

