// Primer Ejemplo general de una composición HTML con JS
const mainHTML = document.getElementById("main");

    const btnColor = document.createElement("button");

    btnColor.innerHTML = "Cambiar color Main";
    btnColor.style.borderRadius = "5px";
    btnColor.style.border = "1px solid black";
    btnColor.style.padding = "0.5%";
    btnColor.style.marginTop = "10px";
   

    mainHTML.appendChild(btnColor);

    btnColor.addEventListener("click", function (){
        
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        mainHTML.style.backgroundColor = "#" + randomColor;

    })

    btnColor.addEventListener("mouseover", function(){
        btnColor.style.opacity = "0.5";
    })

    btnColor.addEventListener("mouseout", function(){
        btnColor.style.opacity = "1";
        
    })

// Inciamos Pruebas con JS

let userName = "Payicox Poni";

console.log("Nombre de usuario logeado:" + userName);

userName = 3;

console.log("Numero introducido: " + userName);

userName = "Ana";

console.log("Nombre de usuario logeado: " + userName);

userName = 3.33;

console.log("Numero introducido: " + userName);

