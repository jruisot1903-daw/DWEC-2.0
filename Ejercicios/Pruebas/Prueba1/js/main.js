// // Primer Ejemplo general de una composición HTML con JS
// const mainHTML = document.getElementById("main");

//     const btnColor = document.createElement("button");

//     btnColor.innerHTML = "Cambiar color Main";
//     btnColor.style.borderRadius = "5px";
//     btnColor.style.border = "1px solid black";
//     btnColor.style.padding = "0.5%";
//     btnColor.style.marginTop = "10px";

//     mainHTML.appendChild(btnColor);
// // Función utilizda para al hacer click en el boton le cambie el color aleatoriamente al main
//     btnColor.addEventListener("click", function (){

//         var randomColor = Math.floor(Math.random()*16777215).toString(16);
//         mainHTML.style.backgroundColor = "#" + randomColor;

//     })

// // función para controlar la opacidad del boton al entrar o salir con el raton
//     btnColor.addEventListener("mouseover", function(){
//         btnColor.style.opacity = "0.5";
//     })

//     btnColor.addEventListener("mouseout", function(){
//         btnColor.style.opacity = "1";

//     })

// // Inciamos Pruebas con JS

// let userName = "Payicox Poni";

// console.log("Nombre de usuario logeado:" + userName);

// userName = 3;

// console.log("Numero introducido: " + userName);

// userName = "Ana";

// console.log("Nombre de usuario logeado: " + userName);

// userName = 3.33;

// console.log("Numero introducido: " + userName);

// /* Inicializar una variable con
//    Var = valores globales
//    Let = Variables locales (solo se ven desde el bloque de codigo en el que se han creado)
// */

// let num = 5;

// if(num >= 1 && num <= 3){
//     console.log("MUY MAL");

// }else if(num >= 4 && num <= 6) {
//     console.log("MAL");
// }else if (num >= 7 && num <= 9){
//     console.log("BIEN");
// }else if (num = 10){
//     console.log("MUY BIEN");
// }

// /***************** FUNCTIONS *************************************************/
// document.getElementById("btnCalcular").addEventListener("click", function () {
//   try {

//     if (
//       numItemsCarrito == "" ||
//       numItemsCarrito == "0" ||
//       numItemsCarrito < "0"
//     )
//       throw Error("Valor número está vacío , es 0 o es un numero negativo!");
//     else {
//       numItemsCarrito = parseInt(numItemsCarrito); // Convertimos en number
//       switch(numItemsCarrito){
//         case 1:
//         case 2:
//         case 3:
//             alert("Muy mal");
//             break;
//         case 4:
//         case 5:
//         case 6:
//             alert("Mal");
//             break;
//         case 7:
//         case 8:
//         case 9:
//             alert("Bien");
//             break;
//         case 10:
//             alert("Muy bien");
//             break;
//         default:
//             alert("Valor no valido");
//       }
//     //   if (numItemsCarrito < 4) alert("Muy mal");
//     //   else if (numItemsCarrito <= 6) alert("Mal");
//     //   else if (numItemsCarrito <= 9) alert("Bien");
//     //   else alert("Muy bien");
//     }
//   } catch (err) {
//     alert(err);
//   }
// });

// let myArray = ["arroz","calabacín","patata",true,"mazorca","fernandito","kitkat"];

// for (let i = 0; i < myArray.length; i++) {
//     if(!(typeof i ==  "boolean")){
//         h11.innerText += myArray[i] + " -  ";

//     }else{
//         break;
//     }

// }
// h11.innerHTML = "Salimos del bucle";

const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const h11 = document.getElementById("h11");
const btnSumar = document.getElementById("btnSumar");

// se lo asignamos al btn (funcion sin parametros)
// btnSumar.onclick = doSuma;

let result = doSuma(56, 77,44,22,11);
console.log("Resultado de la suma: " + result);

/******** FUNCTIONS *****************************************/

// function doSuma (dato1,dato2) {
//     // de esta forma podemos hacer que nos sirva por si le pasamos valores o por si no le pasamos
//     let a = dato1 || parseFloat(in1.value);
//     let b = dato2 || parseFloat(in2.value);
//     let result = 0;

//     if ((typeof a == "number") && (typeof b == "number")) {
//         result = a+b;
//         h11.innerHTML = "Resultado de la operación: "+result;
//         in1.value = "0";
//         in2.value = "0";

//     }
//     else
//         h11.innerHTML = "Valores no válidos para hacer la suma.";
//     return result;
// }

// fuction con array arguments

function doSuma() {
  console.dir(arguments);
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

   h11.innerHTML = "Resultado de la operación: " + result;

    return result;
}
