let pelota = document.getElementById("pelota"); // pelota
let pelotaLeft = 0; // posicion inicial de la ventana
let pelotaCSS = window.getComputedStyle(pelota);
const incremento = 25;
const speed = 20;
let left = 0;
/*Centrar verticalmente la pelota */

/*
   1 - obtener el alto útil de la ventana
   2 - Dividirlo por la mitad menos la mitad el alto de la pelota
   3 - aplicar el nuevo alto
 */

// declaramos el alto util de la pantalla
let wHeight = window.innerHeight;
// dividrlo por la mitad
wHeight = wHeight / 2;

// Para accerder a los estilos si tenemos el css en un archivo externo

let pelotaHeight = pelotaCSS.getPropertyValue("height");

// utlizamos el .slice para quitarle al string los utlimos digitos que serian el px de la propiedad
pelotaHeight = quitarPX(pelotaHeight);

let positionHeight = wHeight - pelotaHeight / 2;
//Le añadimos la cadena px para que lo coja el css
pelota.style.top = positionHeight + "px";

rebota();

/**************************FUNCIONES*****************************/
// funcion para quitar el px de las propiedades css para utilizarlas
function quitarPX(cad) {
  cad = parseFloat(cad.slice(0, cad.length - 2));
  return cad;
}

//Funcion que aumenta el left de la pelota hasta el final de la ventana
function LeftPlus() {
    left++;

  pelota.style.left = (left + incremento) + "px";
}

function LeftMenos() {
    left--;

  pelota.style.left = (left - incremento) + "px";
}

function rebota() {
  let wWidth = window.innerWidth;
    let direction = 1; // 1 va hacia la derecha , -1 hacia la izquierda
  let widthPelota = pelotaCSS.getPropertyValue("width");
  widthPelota = quitarPX(widthPelota);

   setInterval(function () {
    if (direction == 1){
        if(left < (wWidth - widthPelota)){
            LeftPlus();
        }else 
            direction = -1;
    } else{
        if(left > 0){
            LeftMenos();
        }
    }

});
}