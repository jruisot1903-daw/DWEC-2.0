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

let myArray = new Array();

myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push("78.98");
myArray.push(new Array(1,2,3));
myArray.push({marca: "Ford", matricula: "123456A"});
myArray.push(false);
myArray.push(Math.PI);

for(let elem = 0; elem < myArray.length; elem++){

    if((typeof myArray[elem] == "object") && (Object.hasOwn(myArray[elem],"marca") && (Object.hasOwn(myArray[elem],"matricula"))))
        h21.innerHTML += "{Marca: "+myArray[elem].marca + ",Matricula: "+myArray[elem].matricula+"} - ";
    else
        if(elem == (myArray.length - 1))
        h21.innerHTML += myArray[elem];
        else
            h21.innerHTML += myArray[elem] +" - ";
}



// Prueba con Filter



let myBooleanArray = myArray.filter((elem) => {
    return (typeof elem == "boolean");
})

h21.textContent = "";
for (let elem of myBooleanArray)
    h21.textContent += elem + " - ";




// Prueba con Maps



let myMap = new Map();

myMap.set(1,"Pepe");
myMap.set(2,"María");
myMap.set(true,"Antonio");
myMap.set("123456c","Ana");
myMap.set(1,"Nombre Falso");

h21.innerText = "";
for ([clave, valor] of myMap)
    h21.innerHTML += `Clave ${clave}: ${valor}<br>`;

h21.innerHTML += `Tamaño: ${myMap.size}`;



// Prueba DATE

const calendario = document.getElementById("date");
let myDate = new Date(2004,2,19);
let dateNow = new Date();

h21.innerHTML = "Llevas vivo "+ (dateNow - myDate) / (1000*60*60*24*365) +" años";

calendario.onchange = function (){
    h21.innerHTML = "Desde la fecha seleccionada llevas vivo "+ (new Date(this.value) - myDate) / (1000*60*60*24*365) +" años";
}

h21.innerHTML = dateNow.toLocaleDateString();  