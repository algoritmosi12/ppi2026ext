const reloj = document.getElementById("reloj");
let min= 18;
let seg= 0;
const contador = setInterval(() =>{ 
  if(seg===0 && min > 0 ) {
    seg=59;
    min--;
  }else if (seg > 0){
    seg --;
  } else { 
    clearInterval(contador);
  }
  reloj.textContent= min + ":" + seg;
},1000)
