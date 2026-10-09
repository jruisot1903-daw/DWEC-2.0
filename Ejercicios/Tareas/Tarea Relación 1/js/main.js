// Ejercicio 1

let salida1 = document.getElementById("salida1");

let arrayBi = new Array();

arrayBi[0] = ["Javier", "Ruiz","2 DAW",[7,7,8]];
arrayBi[1] = ["Ana", "Lopez","2 DAW",[10,2,7]];
arrayBi[2] = ["Gabriel", "Torreblanca","2 DAW",[0,6,9]];
arrayBi[3] = ["Manolo", "Manolez","2 DAW",[1,2,3]];
arrayBi[4] = ["Natalia", "Natalipa","2 DAW",[6,4,4]];

for (let i = 0; i < arrayBi.length; i++) {
    salida1.innerHTML += arrayBi[i]+"<br>";
}

// Ejercicio 8

let salida8 = document.getElementById("salida8");

let filas = 50;

let num = [];

for (let i = 0; i < filas; i++) {
    num[i] = []; 
    for (let j = 0; j < i; j++) {
        num[i][j] = i;
    }
}

let contenidoPiramide = "";
for (let i = 0; i < num.length; i++) {
    // Unimos los números de cada fila con un espacio y añadimos un salto de línea <br>
    contenidoPiramide += num[i].join(" ") + "<br>";
}

salida8.innerHTML = contenidoPiramide;

// Ejercicio 9

let salida9 = document.getElementById("salida9");

let filas2 = 50;

let num2 = [];

for (let i = 1; i < filas2; i++) {
    num2[i] = []; 
    for (let j = 1; j < i; j++) {
        num2[i][j] = j;
        
    }
}

let contenidoPiramide2 = "";
for (let i = 1; i < num2.length; i++) {
    // Unimos los números de cada fila con un espacio y añadimos un salto de línea <br>
    contenidoPiramide2 += num2[i].join(" ") + "<br>";
}

salida9.innerHTML = contenidoPiramide2;


// Ejercicio18

let div18 = document.getElementById("div18");
let input18 = document.getElementById("input");
let salida18 = document.getElementById("salida18");
let numero = 0;

let menu = "Menú<br>";
menu += "---<br>";
menu += "1.Calcular si es múltiplo de 2.<br>";
menu += "2.Calcular si es múltiplo de 3.<br>";
menu += "3.Calcular si es múltiplo de 5.";

input18.addEventListener("input",function(){
    numero = input18.value;
    
    salida18.innerHTML = menu;

});
