
// Catálogo de servicios: el id coincide con el id del input del HTML
const SERVICIOS = [
  { id: "aceite", nombre: "Cambio de aceite", precio: 45 },
  { id: "filtros", nombre: "Cambio de filtros", precio: 30 },
  { id: "frenos", nombre: "Pastillas de freno (eje)", precio: 80 },
  { id: "neumaticos", nombre: "Neumático", precio: 70 },
  { id: "alineado", nombre: "Alineado de dirección", precio: 35 }
];

// declaramos las variables que vamos a necesitar en la practica

let totalIVA = document.getElementById("total");
let mensaje = document.getElementById("mensaje");
let presupuesto = document.getElementById("presupuesto");
let mensajeServicios = document.getElementById("servi");
let texto = "";
let generaPresu = false;

let nomCLi = document.getElementById("cliente");
let matriCli = document.getElementById("matricula");
let tipoVehi = document.getElementById("vehiculo");

let btPresu = document.getElementById("btnPresupuesto");
let btLimpiar = document.getElementById("btnLimpiar");
let pago = document.getElementById("pago");
let multiVehi = 0;

// declaramos las variables de los servicios para comrpobar si lo necesita el cliente o no
let aceite = document.getElementById("aceite");
let filtros = document.getElementById("filtros");
let frenos = document.getElementById("frenos");
let neumaticos = document.getElementById("neumaticos");
let alineado = document.getElementById("alineado");


// Le ponemos que como maximo pueden seleccionar un max de 4 de cada servicio y como minio 0
aceite.max = 4;
filtros.max = 4;
frenos.max = 4;
neumaticos.max = 4;
alineado.max = 4;

aceite.min = 0;
filtros.min = 0;
frenos.min = 0;
neumaticos.min = 0;
alineado.min = 0;


let suma = 0;
let sumaIva = 0;

btPresu.addEventListener("click",function(){
  // cada vez que le demos al boton de presupuesto borramos los mensajes anteriores
  mensaje.innerHTML = "";

  // hacemos las comprobaciones para crear el presupuesto
  if(nomCLi.value === ""){
    mensaje.innerHTML = "No has introducido el nombre del cliente";
  }else if(matriCli.value > 7 || matriCli.value == "" ){
    mensaje.innerHTML += "<br>La matricula no puede tener menos de 7 caracteres o estar vacia";
  }else if(tipoVehi.value == ""){
    mensaje.innerHTML += "<br>El tipo vehiculo no puede estar vacio";
  }else if(pago.value == ""){
    mensaje.innerHTML += "<br>El metodo de pago no puede estar vacio"
  }else {
    generaPresu = true; // si se cumple todos los requisitos podemos generar el presupuesto
  }

 // llamamos a la función obtenerMulti para obtener el multplicador teniendo en cuenta el tipo de vehiculo que es 
  multiVehi = obtenerMulti();

  if(aceite.value > 0){
    suma = (SERVICIOS[0].precio * aceite.value) * multiVehi;
    texto = SERVICIOS[0].nombre+" "+aceite.value+"ud  "+SERVICIOS[0].precio+"€<br>";
  }

  if(filtros.value > 0){
    suma += (SERVICIOS[1].precio * filtros.value) * multiVehi;
    texto += SERVICIOS[1].nombre+" "+filtros.value+"ud  "+SERVICIOS[1].precio+"€<br>";
  }

  if(frenos.value > 0){
    suma += (SERVICIOS[2].precio * frenos.value) *multiVehi;
    texto += SERVICIOS[2].nombre+" "+frenos.value+"ud "+SERVICIOS[2].precio+"€<br>";
  }

  if(neumaticos.value > 0){
    suma += (SERVICIOS[3].precio * neumaticos.value) * multiVehi;
    texto += SERVICIOS[3].nombre+" "+neumaticos.value+"ud "+SERVICIOS[3].precio+"€<br>";
  }

  if(alineado.value > 0){
    suma += (SERVICIOS[4].precio * alineado.value) * multiVehi;
    texto += SERVICIOS[4].nombre+" "+alineado.value+"ud  "+SERVICIOS[4].precio+"€<br>";
  }

  calcularDescuento(suma); 
  comprobarPago(suma);
  
  sumaIva = calcularIVA(suma);
  

  if(generaPresu){
    presupuesto.innerHTML = "Nombre: "+nomCLi.value+" <br>Matricula: "+matriCli.value+"<br> Precio: "+suma;
    totalIVA.value  = sumaIva;
    mensajeServicios.innerHTML = texto;
  }else{
    mensaje.innerHTML += "<br>El presupuesto no cumple los requisitos y no se puede generar"
  }
  
})


function calcularIVA(suma){
  return suma = suma + (suma *0.21);
}

function calcularDescuento(suma){
  if(suma >= 300){
    suma  = suma - (suma * 0.10);
  }else if((suma > 150) && (suma < 299)){
    suma = suma - (suma * 0.05);
  }
}


function comprobarPago(suma){
  switch(pago.value){
    case "efectivo":
    case "tarjeta":
      suma = suma;
    break;

    case "financiado":
      suma = suma + (suma *0.05);
    break;
  }
}

function obtenerMulti(){
   switch(tipoVehi.value){
    case "moto":
    return 0.7;
    break;

    case "turismo":
      return  1;
    break;

    case "suv":
      return  1.2;
    break;

    case "furgoneta":
     return 1.35;
    break;
  }
}

btLimpiar.addEventListener("click", function(){
  nomCLi.value == "";
  matriCli.value == "";

})
