export { saludo, edad };

function saludo(nombre) {
  return iniciaSaludo() + nombre;
}

var edad = 30;
function iniciaSaludo() {
  let dayNow = new Date();
  let result = "";

  if (dayNow.getHours() <= 12) {
    result = "Buenos días ";
  } else result = "Buenas tardes ";

  return result;
}

export var pass = "PedroSanchezMiBizcochitoDelimon";

export default function muestraPassword() {
  return pass;
}

export class Usuario{
    constructor(nombre = "anonimo",apellidos = ""){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}
