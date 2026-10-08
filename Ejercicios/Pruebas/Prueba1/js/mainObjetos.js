const h11 = document.getElementById("h11");

// Las dos formas de crear los Objetos en JS

let myAlumn = {
    name:"John",
    surname: "Power",
    age: 19,
    active: true,
    mail: "john@mail.com"
}

// Object.preventExtensions(myAlumn); hacer que no se puedan añadir nuevas propiedades

myAlumn.grades= [6,7.85,9.25];
myAlumn.age = 20;
delete myAlumn.name;

h11.innerHTML = "Nombre del alumno/a:" + myAlumn.name + ".Nota1: " + myAlumn.grades[0] + ".Edad: " + myAlumn.age;

let myAlumn2 = new Object();

myAlumn2.name="Anne";
myAlumn2.surname= "Flowers";
myAlumn2.age= 21;
myAlumn2.active= false;
myAlumn2.mail= "anne@mail.com";
myAlumn2.grades= [6.9,8.85,10];

delete myAlumn2.name;
myAlumn2["phone"] = "666 333 222";
h11.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn2.name + ".Nota1: " + myAlumn2.grades[0] + ". Phone: "+ myAlumn2.phone;

let myAlumn3 = new Object();

Object.defineProperties(myAlumn3, {
    name: {configurable: true, enumerable: false, writable:false, value:"Pepe"},
    surname: {configurable: true, enumerable: false, writable:false, value:"Pérez"}    
});

Object.defineProperty(myAlumn3, "age", {configurable: true, enumerable: true, writable:false, value:23});

h11.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn3.name + ". Edad: " + myAlumn3.age;

let myAlumns = new Array(myAlumn, myAlumn2, myAlumn3);

for (let data of myAlumns) {
    let claves = Object.getOwnPropertyNames(data)//Object.keys(data);
    console.log (claves)
    for (let i = 0; i < claves.length; i++)
        console.log("Valor de la clave " + i + " es " + data[claves[i]]);
}

// math.random

let random = Math.floor(Math.random()*99) + 1;
const h21 = document.getElementById("h21");
console.log(random);
var quijote = "Don Quijote";
var texto = `Lorem ipsum 'dolor' ${quijote} sit amet consectetur, adipisicing elit. ${quijote} Ducimus rerum quaerat, molestias maxime adipisci ${quijote} officiis voluptatibus autem ${quijote} distinctio tempora voluptate molestiae, consequatur reiciendis soluta similique magnam, ${quijote} animi asperiores rem temporibus!`;
h21.innerText = texto;

var encontrado = texto.matchAll("Quijote");

if (!encontrado)
    h21.innerHTML += "No se ha encontrado."
else
    h21.innerHTML += "<hr>Encontrado: " + encontrado + " en " + encontrado.index;

var myArray = new Array();

myArray.push("Pepe");
myArray.push(true);
myArray.push("Ana");
myArray.push(25.36);
myArray.push({name:"Adela", surname: "Alcalá", age: 19});
myArray.push(false);

h21.innerHTML += "<hr>"

for (elem of myArray)
    h21.innerHTML += " - " + elem;

h21.innerHTML += "<hr>" + myArray.splice(1,0,44,"hola",66);

h21.innerHTML += "<hr>"

for (elem of myArray)
    h21.innerHTML += " - " + elem;