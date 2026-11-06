/*
const info = document.getElementById("info");
const listaPaises = document.getElementById("paises");

const opciones = document.getElementsByTagName("li");
const opRadio = document.getElementsByName("edad");

const opLista1 = document.getElementsByClassName("pares");
const opLista2 = document.getElementsByClassName("impares");
 
if(opciones.length > 0){
    console.log("Numero de opciones en la lista: "+opciones.length)
    info.innerHTML = opciones[2].innerHTML;
        
}else{
    throw Error ("No existe opcines de lista");
}
    
info.innerHTML = "Opciones del radio edad: ";

for (let op of opRadio){
    info.innerHTML += op.value+ ", ";
}
*/

/*
    for (let x = 0; x<opRadio.length; x++){
        info.innerHTML += opRadio[x].value+ ", ";
    }
*/

//Stript profesor
const info = document.getElementById("info");
var listaPaises = document.getElementsByTagName("li");
const opRadio = document.getElementsByName("edad");

const oplista1 = Array.from(document.getElementsByClassName("pares"));
const oplista2 = Array.from(document.getElementsByClassName("impares"));

info.innerHTML = "Opciones del radio edad: ";
for (let op of opRadio) info.innerHTML += op.value + ", ";

let nuevoNodo = createNode("a", "Registrarse", "");
if (nuevoNodo) {
  nuevoNodo.href = "#";
  document.getElementById("nav1").appendChild(nuevoNodo);
}

document.getElementById("bChangeClassStyle").onclick = function () {
  for (let op of oplista1)
    if (op.className == "pares") op.className = "impares";
    else op.className = "pares";

  for (let op of oplista2)
    if (op.className == "pares") op.className = "impares";
    else op.className = "pares";
};

document.getElementById("bNuevoPais").onclick = function () {
  listaPaises = document.getElementsByTagName("li");
  let nuevoPais = document.getElementById("nuevoPais").value;

  if (nuevoPais == "") info.innerHTML = "Debe escribir un País";
  else {
    // Insertamos nuevo nodo en la lista
    // if ((listaPaises.length % 2) == 0)
    //     nuevoNodoPais.className = "impares";
    // else
    //     nuevoNodoPais.className = "pares";

    let nuevoNodo = createNode(
      "li",
      nuevoPais,
      "",
      "background-color:blue; color:white;",
    );
    if (nuevoNodo) {
      document.getElementById("paises").appendChild(nuevoNodo);
      info.innerHTML =
        "<span style='color:lightgreen; background-color:green;'>Nodo insertado correctamente!</span>";
    } else
      info.innerHTML =
        "<span style='color:red'>No se ha podido insertar el nodo</span>";
  }
};

document.getElementById("bBorraPais").onclick = function () {
  let lista = document.getElementById("paises");

  let opcionesLista = lista.getElementsByTagName("li");

  if (opcionesLista.length > 3) {
    opcionesLista[2].remove();

    // let elemBorrado = opcionesLista[2].parentNode.removeChild(opcionesLista[2]); devuelve el nodo borrao
    // console.log(elemBorrado);
  }
};

let enlaceImagen = createNode(
  "a", // O "button", el que prefieras para hacer clic
  "Cambiar imagen",
  "",
  "background-color:#1276af;border-radius:8px; color:white; padding:0.2%;margin:0.2%;cursor:pointer;",
);

if (document.getElementsByClassName("section1").length >= 2)
  document.getElementsByClassName("section1")[1].appendChild(enlaceImagen);

enlaceImagen.onclick = function () {
  let miImagen = document.querySelector(".section1 img"); 


  if (miImagen) {
    if (miImagen.src.includes("images2.jpg")) {
      miImagen.src = "images.jpg";
    } else {
      miImagen.src = "images2.jpg";
    }
  } else {
    console.error("No se encontró ninguna etiqueta <img> dentro de .section1");
  }
};

let input = createNode("input");
input.type = "text";


let bReadOnly = createNode("button","Bloquear / Desbloquear escritura");
bReadOnly.id = "bReadOnly";

document.getElementsByClassName("section1")[2].appendChild(input);
document.getElementsByClassName("section1")[2].appendChild(bReadOnly);

document.getElementById("bReadOnly").addEventListener("click",function(){
    if(input.readOnly){
        input.readOnly = false;
        input.style.backgroundColor = "white";
    }else {
        input.readOnly = true;
        input.style.backgroundColor = "darkgrey";
    }
    
})



// enlaceImagen.onclick = function(){
//     document.getElementById("img1").src = "./images.jpg";
// }

// Funcion Crear nodos

function createNode(tipoNodo, tipoTexto, tipoid) {
  let nodo;
  let nodoText;

  switch (arguments.length) {
    case 0:
      throw "Se necesita al menos el tipo de elemento a crear.";
      break;
    case 1:
      nodo = document.createElement(tipoNodo);
      break;
    case 2:
      nodo = document.createElement(tipoNodo);
      nodoText = document.createTextNode(tipoTexto);
      nodo.appendChild(nodoText);
      break;
    case 3:
      nodo = document.createElement(tipoNodo);
      nodoText = document.createTextNode(tipoTexto);
      nodo.appendChild(nodoText);
      nodo.id = tipoid;
      break;
  }

  return nodo;
}

/* Funcion creada en clase este año*/

/**
 * @param {string} tipo
 * @param {string} texto
 * @param {string} id
 * @param {string} estilos
 * @return node o null si no se ha podido crear el nodo
 */
function createNode(tipo, texto, id, styles) {
  let elemento = null;

  if (tipo && typeof tipo === "string") elemento = document.createElement(tipo);
  else return null;

  if (texto != "" && typeof texto === "string") {
    let elementoText = document.createTextNode(texto);
    elemento.appendChild(elementoText);
  }

  if (id != "") elemento.id = id;

  if (styles && typeof styles === "string" && styles != "")
    elemento.style = styles;

  return elemento;
}
