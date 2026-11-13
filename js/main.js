import {generar} from "./sessionStorage.js";
import {redireccion} from "./Rutas.js";
const username = document.getElementById("usuario");
const btnComenzar=document.getElementById("btnComenzar");
btnComenzar.addEventListener("click",()=>{
    const nombre = username.value.trim();
    if (!nombre) {
        username.focus();
        return;
    }

    generar({username: nombre})
    redireccion(btnComenzar.value)
});
username.addEventListener("input", () => {
    btnComenzar.disabled = username.value.trim() === "";
});

