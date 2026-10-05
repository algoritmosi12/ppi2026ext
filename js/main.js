import {redireccion} from "./Rutas.js";
const btnComenzar=document.getElementById("btnComenzar");
btnComenzar.addEventListener("click",()=>{
    redireccion(btnComenzar.value)
});