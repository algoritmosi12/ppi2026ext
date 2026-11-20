
let min= 18;
let seg= 0;
export function relojgeneral(reloj){


 const contador = setInterval(() =>{ 
  if(seg===0 && min > 0 ) {
    seg=59;
    min--;
  }else if (seg > 0){
    seg --;
  } else { 
    clearInterval(contador);
  }
  if(seg < 10 ){
    reloj.textContent= min + ":0" + seg; 
    
  }else{
     reloj.textContent= min + ":" + seg;
  }
  
},1000)
}


const etapa = document.getElementById("tiempoEtapa");
let minutos= 3;
let segundos= 0;
const contar = setInterval(() =>{ 
  if(segundos===0 && minutos > 0 ) {
    segundos=59;
    minutos--;
  }else if (segundos > 0){
    segundos --;
  } else { 
    clearInterval(contar);
  }
  if(segundos < 10 ){
    etapa.textContent= minutos + ":0" + segundos; 
    
  }else{
     etapa.textContent= minutos + ":" + segundos;
  }
  etapa.textContent= minutos + ":" + segundos;
},1000)
