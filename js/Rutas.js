function irAProyecto2 () {
window.location.href="/paginas/proyecto2.html";
}
function irAProyect3 () {
    window.location.href="/paginas/proyect3.html";
}    

 const btnComenzar=document.getElementById("btnComenzar");
 if(btnComenzar){
 btnComenzar.addEventListener("click", irAProyecto2);
 }

 const btnEmpezarPartida=document.getElementById("btnEmpezarPartida");
 if(btnEmpezarPartida)  {
    btnEmpezarPartida.addEventListener("click",irAProyect3);
 }

