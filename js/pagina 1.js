import {redireccion} from "./Rutas.js";
import { recuperar } from "./sessionStorage.js";
const user=document.getElementById("user");
const datos=recuperar();
user.textContent=datos.username;
const btnEmpezarPartida=document.getElementById("btnEmpezarPartida");
btnEmpezarPartida.addEventListener("click",()=>{
    redireccion(btnEmpezarPartida.value)
});
