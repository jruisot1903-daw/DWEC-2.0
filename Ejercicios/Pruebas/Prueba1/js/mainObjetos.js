const h11 = document.getElementById("h11");

// Las dos formas de crear los Objetos en JS

// let myAlumn = {
//     name:"John",
//     surname: "Power",
//     age: 19,
//     active: true,
//     mail: "john@mail.com"
// }

// // Object.preventExtensions(myAlumn); hacer que no se puedan añadir nuevas propiedades

// myAlumn.grades= [6,7.85,9.25];
// myAlumn.age = 20;
// delete myAlumn.name;

// h11.innerHTML = "Nombre del alumno/a:" + myAlumn.name + ".Nota1: " + myAlumn.grades[0] + ".Edad: " + myAlumn.age;

// let myAlumn2 = new Object();

// myAlumn2.name="Anne";
// myAlumn2.surname= "Flowers";
// myAlumn2.age= 21;
// myAlumn2.active= false;
// myAlumn2.mail= "anne@mail.com";
// myAlumn2.grades= [6.9,8.85,10];

// delete myAlumn2.name;
// myAlumn2["phone"] = "666 333 222";
// h11.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn2.name + ".Nota1: " + myAlumn2.grades[0] + ". Phone: "+ myAlumn2.phone;

// let myAlumn3 = new Object();

// Object.defineProperties(myAlumn3, {
//     name: {configurable: true, enumerable: false, writable:false, value:"Pepe"},
//     surname: {configurable: true, enumerable: false, writable:false, value:"Pérez"}
// });

// Object.defineProperty(myAlumn3, "age", {configurable: true, enumerable: true, writable:false, value:23});

// h11.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn3.name + ". Edad: " + myAlumn3.age;

// let myAlumns = new Array(myAlumn, myAlumn2, myAlumn3);

// for (let data of myAlumns) {
//     let claves = Object.getOwnPropertyNames(data)//Object.keys(data);
//     console.log (claves)
//     for (let i = 0; i < claves.length; i++)
//         console.log("Valor de la clave " + i + " es " + data[claves[i]]);
// }

// math.random

// let random = Math.floor(Math.random()*99) + 1;
// const h21 = document.getElementById("h21");
// console.log(random);
// var quijote = "Don Quijote";
// var texto = `Lorem ipsum 'dolor' ${quijote} sit amet consectetur, adipisicing elit. ${quijote} Ducimus rerum quaerat, molestias maxime adipisci ${quijote} officiis voluptatibus autem ${quijote} distinctio tempora voluptate molestiae, consequatur reiciendis soluta similique magnam, ${quijote} animi asperiores rem temporibus!`;
// h21.innerText = texto;

// var encontrado = texto.matchAll("Quijote");

// if (!encontrado)
//     h21.innerHTML += "No se ha encontrado."
// else
//     h21.innerHTML += "<hr>Encontrado: " + encontrado + " en " + encontrado.index;

// var myArray = new Array();

// myArray.push("Pepe");
// myArray.push(true);
// myArray.push("Ana");
// myArray.push(25.36);
// myArray.push({name:"Adela", surname: "Alcalá", age: 19});
// myArray.push(false);

// h21.innerHTML += "<hr>"

// for (elem of myArray)
//     h21.innerHTML += " - " + elem;

// h21.innerHTML += "<hr>" + myArray.splice(1,0,44,"hola",66);

// h21.innerHTML += "<hr>"

// for (elem of myArray)
//     h21.innerHTML += " - " + elem;

// let myArray = new Array();

// myArray.push("Pepe");
// myArray.push(56);
// myArray.push(true);
// myArray.push("Ana");
// myArray.push("78.98");
// myArray.push(new Array(1,2,3));
// myArray.push({marca: "Ford", matricula: "123456A"});
// myArray.push(false);
// myArray.push(Math.PI);

// for(let elem = 0; elem < myArray.length; elem++){

//     if((typeof myArray[elem] == "object") && (Object.hasOwn(myArray[elem],"marca") && (Object.hasOwn(myArray[elem],"matricula"))))
//         h21.innerHTML += "{Marca: "+myArray[elem].marca + ",Matricula: "+myArray[elem].matricula+"} - ";
//     else
//         if(elem == (myArray.length - 1))
//         h21.innerHTML += myArray[elem];
//         else
//             h21.innerHTML += myArray[elem] +" - ";
// }

// // Prueba con Filter

// let myBooleanArray = myArray.filter((elem) => {
//     return (typeof elem == "boolean");
// })

// h21.textContent = "";
// for (let elem of myBooleanArray)
//     h21.textContent += elem + " - ";

// // Prueba con Maps

// let myMap = new Map();

// myMap.set(1,"Pepe");
// myMap.set(2,"María");
// myMap.set(true,"Antonio");
// myMap.set("123456c","Ana");
// myMap.set(1,"Nombre Falso");

// h21.innerText = "";
// for ([clave, valor] of myMap)
//     h21.innerHTML += `Clave ${clave}: ${valor}<br>`;

// h21.innerHTML += `Tamaño: ${myMap.size}`;

// // Prueba DATE

// const calendario = document.getElementById("date");
// let myDate = new Date(2004,2,19);
// let dateNow = new Date();

// h21.innerHTML = "Llevas vivo "+ (dateNow - myDate) / (1000*60*60*24*365) +" años";

// calendario.onchange = function (){
//     h21.innerHTML = "Desde la fecha seleccionada llevas vivo "+ (new Date(this.value) - myDate) / (1000*60*60*24*365) +" años";
// }

// h21.innerHTML = dateNow.toLocaleDateString();

// // Propiedades del Objeto NAVIGATOR

// h21.innerHTML = " ";

// let navObj = new Object({
//     userAgent: navigator.userAgent,
//     platform: navigator.platform,
//     language: navigator.language,
//     languages: navigator.languages,
//     onLine: navigator.onLine,
//     cookie: navigator.cookieEnabled,
//     hardwar: navigator.hardwareConcurrency,
//     memory: navigator.deviceMemory,
//     vendor: navigator.vendor,
//     product: navigator.product
// });

// h21.innerHTML += "Navegador y Sitema:<br>"+  navObj.userAgent + "<br>";
// h21.innerHTML += "Plataforma del SO: "+  navObj.platform + "<br>";
// h21.innerHTML += "Lenguaje: "+  navObj.language + "<br>";
// h21.innerHTML += "Idiomas: "+  navObj.languages + "<br>";
// h21.innerHTML += "Conectado a internet?: "+  navObj.onLine + "<br>";
// h21.innerHTML += "Cookies permitidas?: "+  navObj.cookie + "<br>";
// h21.innerHTML += "Numeros de nucleos CPU: "+  navObj.hardwar + "<br>";
// h21.innerHTML += "Memoria RAM: "+  navObj.memory + "<br>";
// h21.innerHTML += "Vendedor: "+  navObj.vendor + "<br>";
// h21.innerHTML += "Producto: "+  navObj.product + "<br>";

// // Propiedades del Objeto screen

// h21.innerHTML = "";

// h21.innerHTML = `Ancho total: ${screen.width}, Alto total: ${screen.height}<br>`;
// h21.innerHTML += `Ancho disponible: ${screen.availWidth}, Alto disponible   : ${screen.availHeight}`;
// h21.innerHTML +=`<br>Numero de colores : ${screen.colorDepth}`;

// h21.innerHTML +=`<br>Orientacion: ${screen.orientation.angle}`;

// if(screen.orientation.angle == 0){
//     h21.innerHTML = "La pantalla es landscape";
// }else{
//     h21.innerHTML = "La pantalla es portrail";
// }

// document.body.onresize = function () {
//     if (screen.height > screen.width)
//         h21.innerHTML = "landscape";
//     else
//         h21.innerHTML = "portrait";
// }

// const ball = document.getElementById("ball");

// console.log("Alto: " + screen.height);
// ball.style.top = (parseInt(screen.availHeight/2) - 50) + "px";
// ball.style.left = "0px";

// const intervalo = setInterval(function () {
//     let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
//     if (izq < (screen.width - 100))
//         ball.style.left = (izq + 10) + "px";
// }, 100);

/****************************************************************** */

// document.getElementById("bStop").addEventListener("click", () => {
//     clearInterval(intervalo);
//     ball.style.backgroundColor = "#569";
// })

// Objeto windows

// Abrimos ventanas

var usersWindow = null;
const info = document.getElementById("info");
const login = document.getElementById("login");
const mail = document.getElementById("mail");
const href = document.getElementById("href");

const url = "http://127.0.0.1:5500/" 

//location.href = "http://127.0.0.1:5500/Ejercicios/Pruebas/Prueba1/ventanaPrueba.html";

href.addEventListener("click", function () {
 // location.assign("http://127.0.0.1:5500/Ejercicios/Pruebas/Prueba1/ventanaPrueba.html");
    location.replace(url+"Ejercicios/Pruebas/Prueba1/ventanaPrueba.html");
  
});

/********************************************************************** */
document.getElementById("aSendMail").onclick = function (e) {
  e.preventDefault();
  try {
    if (login.value == "") throw Error("Nombre está vacío!");
    if (document.getElementById("pass").value == "")
      throw Error("Password está vacío!");
    if (mail.value == "") throw Error("Email está vacío!");

    if (!usersWindow || usersWindow.closed)
      usersWindow = window.open(
        "./ventanaPrueba.html",
        "_blank",
        "width=650,height=850",
      );
    else {
      info = "Ya tienes la ventana email abierta";
      usersWindow.focus();
    }

    // Pasamos Login e email:
    usersWindow.onload = function () {
      usersWindow.document.getElementById("nombre").value = login.value;
      usersWindow.document.getElementById("mail").value = mail.value;
    };
  } catch (err) {
    info.innerHTML = "<b style='color:red;'>" + err + "</b>";
    setTimeout(function () {
      info.innerHTML = "";
    }, 3000);
  }
};

document.getElementById("aMoveWindow").onclick = function () {
  if (usersWindow) {
    usersWindow.moveBy(500, 300);
    usersWindow.focus();
  } else {
    alert("La ventana ya se cerró");
  }
};
