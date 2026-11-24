const info = document.getElementById("info");

info.innerHTML = `Número de formularios en la app: ${document.forms.length}`

for (let radioElement of document.getElementsByName("edad")){
   
   radioElement.addEventListener("change", checkRadioEdades(radioElement))
    
}

/***************************************************************************** */
document.getElementById("aForm1").onclick = function () {
    
        const primerForm =document.getElementById("form1");
        
        primerForm.elements[0].disabled = true;
        primerForm.elements[1].disabled = true;
        
        console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`)
        console.log(`Login introducido: ${primerForm.elements[0].value}`)

        const segundoForm = document.getElementById("form2");

        
}

function checkRadioEdades(radioElement){
    for (let radioElement of document.getElementsByName("edad")){
        if(radioElement.checked){
            info.innerHTML = `radio pulsado: ${radioElement.value}`;
            break;
        }
    }
}