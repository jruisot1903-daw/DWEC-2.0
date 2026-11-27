//import {sayHello, edad} from "./modules/usuarios.js";
import { Usuario as User } from "../modules/usuarios.js";
const info = document.getElementById("info");

// info.innerHTML = sayHello("Pepe") + ", tienes " + edad + " años.";
// info.innerHTML += "<br>" + muestraPassword();

// document.getElementById("revelaPass").addEventListener("click", async function () {
//     const usuarios = await import("../modules/usuarios.js");
//     info.innerHTML = ` tu contraseña es ${usuarios.default()}`
// })


var user1 = new User("Pepe", "Ordoñez");
var user2 = new User();

info.innerHTML = "Usuario: "+user1.nombre+" "+user1.apellidos+" creado Correctamente.<br>";
info.innerHTML += "Usuario: "+user2.nombre+" "+user2.apellidos+" creado Correctamente.";
