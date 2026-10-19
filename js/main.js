import {redireccion} from "./Rutas.js";
const username = document.getElementById("usuario");
const btnComenzar=document.getElementById("btnComenzar");
btnComenzar.addEventListener("click",()=>{
    redireccion(btnComenzar.value)
});
username.addEventListener("input", () => {
    btnComenzar.disabled = false;
});