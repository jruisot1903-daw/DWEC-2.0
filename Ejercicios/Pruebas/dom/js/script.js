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
// const info = document.getElementById("info");
// var listaPaises = document.getElementsByTagName("li");
// const opRadio = document.getElementsByName("edad");
// // const sections1 = document.getElementsByClassName("section1");
// const lista = document.getElementById("paises");

// const oplista1 = Array.from(document.getElementsByClassName("pares"));
// const oplista2 = Array.from(document.getElementsByClassName("impares"));

// sections1[1].getElementsByTagName("img")[0].setAttribute("src", "../images.jpg");

// info.innerHTML = "Opciones del radio edad: "; 
// for (let op of opRadio)
//     info.innerHTML += op.value + ", ";


//   let nuevoNodo = createNode("a", "Registrarse", "")
//     if (nuevoNodo) {
//         nuevoNodo.href = "#";
//         document.getElementById("nav1").appendChild(nuevoNodo);
//     }

// let enlaceImagen = createNode("a", "Cambiar imagen", "", "background-color:#1276af;border-radius:8px; color:white; padding:0.5%;margin:1%;cursor:pointer");
// let borraAtributo = createNode("a", "Borrar atributo", "", "background-color:#1276af;border-radius:8px; color:white; padding:0.5%;margin:1%;cursor:pointer");

// if (sections1.length >= 2) {
//     sections1[1].appendChild(enlaceImagen);
//     sections1[1].appendChild(borraAtributo);

//     enlaceImagen.onclick = function () {
//         sections1[1].getElementsByTagName("img")[0].setAttribute("src", "../images2.jpg");
//     }

//     borraAtributo.onclick = function () {
//         sections1[1].getElementsByTagName("img")[0].removeAttribute("src");
//     }
// }

/*Propiedades de los nodos*/

// console.log("Atributos: "+lista.attributes[0].name+", Valor del atributo: "+lista.attributes[0].value);

// chilNodes nos devuleve todos los elementos no solo los nodos , texto etc ect ....
// for(let elem of lista.childNodes){
//   console.log("Elemento: "+elem);
// }

// con children solo nos devuelve los elementos que sean nodos
// for(let elem of lista.children){
//   console.dir(elem);
// }

// console.dir(lista.firstElementChild);



// /*********************************************************************** */
// document.getElementById("bChangeClassStyle").onclick = function () {
    
//     for (let op of oplista1)
//         if (op.className == "pares")
//             op.className = "impares";
//         else
//             op.className = "pares";

//     for (let op of oplista2)
//         if (op.className == "pares")
//             op.className = "impares";
//         else
//             op.className = "pares";
// }

// document.getElementById("bNuevoPais").onclick = function () {

// listaPaises = document.getElementById("paises").getElementsByTagName("li");

// let nuevoPais = document.getElementById("nuevoPais").value;

// if (nuevoPais == "") 
//     info.innerHTML ="Debe escribir un País";
// else { // Insertamos nuevo nodo en la lista
//     let nuevoNodo = createNode("li", nuevoPais, "", "background-color:blue; color:white;")
//     if (nuevoNodo) {
//         // document.getElementById("paises").appendChild(nuevoNodo);
//         document.getElementById("paises").insertBefore(nuevoNodo,listaPaises[2]);

//         let insertado = listaPaises[2].before(nuevoNodo);
//         console.dir(insertado);
        
//         info.innerHTML = "<span style='color:lightgreen; background-color:green;'>Nodo insertado correctamente!</span>"
//     }
//     else info.innerHTML = "<span style='color:red'>No se ha podido insertar el nodo</span>"
// }
// }

// document.getElementById("bBorraPais").onclick = function () {
//     let lista = document.getElementById("paises");

//     let opcionesLista = lista.getElementsByTagName("li");

//     if (opcionesLista.length > 3) {
//     //     let elemBorrado = opcionesLista[2].parentNode.removeChild(opcionesLista[2]);
//     //     console.log(elemBorrado);

//         let elemBorrado = opcionesLista[2].remove();
//         console.log(elemBorrado);

//     }


// }

// document.getElementById("aBloquear").addEventListener("click", function () {
//     if (this.innerText == "Bloquear") {
//         this.innerText = "Desbloquear";
//         document.getElementById("it1").setAttribute("readonly", "true");
//         document.getElementById("it1").setAttribute("style", "background-color:lightgray;");
//     }
//     else {
//         this.innerText = "Bloquear";
//         document.getElementById("it1").removeAttribute("readonly");
//         document.getElementById("it1").setAttribute("style", "background-color:white;");
//     }
// })

// document.getElementById("bDevuelveImpares").onclick = function () {
//     let lista2 = document.querySelectorAll("#paises li");
//     console.log(lista2.innerText)
//     let arrayImpares = new Array();

//     for (let paisImpar = 0; paisImpar < lista2.length; paisImpar+=2)
//         arrayImpares.push(lista2[paisImpar].innerText);

//     console.dir(arrayImpares);

// }

// document.getElementById("aModoNoche").addEventListener("click", function () {
//     let buttonStyle = window.getComputedStyle(document.getElementsByTagName("button")[0]);
    
//     if (buttonStyle.getPropertyValue("background-color") == "rgb(152, 151, 151)") {
//         // Estoy en modo noche, cambio a modo día
//         this.innerText = "Cambiar a modo noche"
//         document.body.className = "";
//     }
//     else {
//         document.body.className = "modoNoche";
//         this.innerText = "Cambiar a modo dia";
//     }
// });

// document.getElementById("bSustituye").addEventListener("click", ()=> {
//     let paisSustituir = createNode("li", document.getElementById("nuevoPais").value, "", "");
//     lista.replaceChild(paisSustituir, listaPaises[2]);

// });

// document.getElementById("bClonaLista").addEventListener("click", ()=> {
//     let section = document.getElementById("s4");

//     let clon = lista.cloneNode(true);
//     console.log(clon);

//     clon.appendChild(createNode("li", "Noruega", "", ""));

//     section.appendChild(clon);
// })



const info = document.getElementById("info");


let paisesLi = document.getElementById("paises").getElementsByTagName("li");

for (let pais of paisesLi)
    pais.addEventListener("click", pulsaPais);




/***************************************************************************** */

function pulsaPais(e) {

    if (e.target.parentNode.getElementsByTagName("li").length == 1)
        e.target.parentNode.remove();
    else 
        e.target.remove();
}





/**
 * @param {string} tipo
 * @param {string} texto
 * @param {string} id
 * @param {string} estilos
 * @return node o null si no se ha podido crear el nodo
 */
function createNode (tipo, texto, id, styles) {
    let elemento = null;

    if ((tipo) && (typeof tipo === "string")) 
        elemento = document.createElement(tipo);
    else
        return null;
        
    if ((texto != "") && (typeof texto === "string")) {
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if (id != "") 
        elemento.id = id;

    if ((styles) && (typeof styles === "string") && (styles != ""))
        elemento.style = styles;

    return elemento;
}