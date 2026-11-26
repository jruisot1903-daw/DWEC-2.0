const info = document.getElementById("info");
const listaColores = document.getElementById("colores");
const login = document.getElementById("login");

login.focus();

document.activeElement.style.border = "3px solid pink";


info.innerHTML = `Número de formularios en la app: ${document.forms.length}`

for (let radioElement of document.getElementsByName("edades"))
    radioElement.addEventListener("change", checkRadioEdades)




/***************************************************************************** */
document.getElementById("aForm1").onclick = function () {

    const primerForm = document.forms.form1;

    primerForm.elements[0].placeholder = "Campo actualmente desabilitado";
    primerForm.elements[0].disabled = "true";

    console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`)
    console.log(`Login introducido: ${primerForm.elements[0].value}`)

    
}

function checkRadioEdades(e) {
    for (let radioElement of document.getElementsByName("edades"))
        if (radioElement.checked) {
            info.innerHTML = `Valor del radio pulsado ${radioElement.value}`
            break;
        }

}

listaColores.addEventListener("change", function (e) {
    info.innerHTML = "Color seleccionado: " + this.value;
    document.body.style.backgroundColor = "#" + this.value;

    console.dir(this.options[this.selectedIndex].text);

    console.dir (this.selectedOptions);
})

// para que no deje poner en el text area la letra e
// document.getElementById("ta1").addEventListener("input", (e)=> {
//     let ultimaLetra = e.target.value.charAt(e.target.value.length-1);
//     if ((ultimaLetra == "e") || (ultimaLetra == "E")) {
//         e.target.value = e.target.value.substring(0, e.target.value.length-1);
//     }
// })

document.getElementById("rango").addEventListener("change",function(e){
    info.innerHTML = e.target.value;
})