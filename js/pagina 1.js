import {redireccion} from "./Rutas.js";
const btnEmpezarPartida=document.getElementById("btnEmpezarPartida");
btnEmpezarPartida.addEventListener("click",()=>{
    redireccion(btnEmpezarPartida.value)
});