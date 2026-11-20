import { obstaculos } from "./obstaculos.js";

const personaje = document.getElementById("personaje");
const personajeStyle = window.getComputedStyle(personaje); // guardamos todo el css de personaje
let positionLeft = personajeStyle.getPropertyValue("left");
let positionTop = personajeStyle.getPropertyValue("top");
let anchoPer = personajeStyle.getPropertyValue("width");
const velocidad = 10;
// de esta forma le quitamos el px que viene junto a la propiedad css
positionLeft = new Number(positionLeft.substring(0, positionLeft.length - 2));
positionTop = new Number(positionTop.substring(0, positionTop.length - 2));
anchoPer = new Number(anchoPer.substring(0, anchoPer.length - 2));
// hacer que se mueva con las teclas de teclado

dibujaObstaculos();

/********************************************************************************************* */
document.addEventListener("keydown", function (e) {
  if (e.repeat) {
    // .repeat es para ver si la segimos manteniendo la tecla
    switch (e.key) {
      case "ArrowRight":
        if (!colision(e.key)) {
          positionLeft += velocidad;
          personaje.style.left = positionLeft + "px";
        }
        break;
      case "ArrowLeft":
        if (!colision(e.key)) {
          positionLeft -= velocidad;
          personaje.style.left = positionLeft + "px";
        }

        break;
      case "ArrowDown":
        if (!colision(e.key)) {
          positionTop += velocidad;
          personaje.style.top = positionTop + "px";
        }
        break;
      case "ArrowUp":
        if (!colision(e.key)) {
          positionTop -= velocidad;
          personaje.style.top = positionTop + "px";
        }
        break;
    }
  }
});

function dibujaObstaculos() {
  for (let elem of obstaculos) {
    let obstaculo = document.createElement("div");
    obstaculo.style.position = "absolute";
    obstaculo.style.left = elem.x + "px";
    obstaculo.style.top = elem.y + "px";
    obstaculo.style.width = elem.ancho + "px";
    obstaculo.style.height = elem.alto + "px";
    obstaculo.style.backgroundColor = elem.colorFondo;
    document.body.appendChild(obstaculo);
  }
}

function colision(direcc) {
  let colision = false;
  switch (direcc) {
    case "ArrowRight":
      for (let elem of obstaculos) {
        if (positionLeft + anchoPer > elem.x) {
          if (positionLeft > elem.y + elem.alto) {
            colision = true;
            break;
          }
        }
      }
      break;
    case "ArrowLeft":
      break;
    case "ArrowDown":
      break;
    case "ArrowUp":
      break;
  }
  return colision;
}
