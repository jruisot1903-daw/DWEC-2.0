// Control + Shift click Examen
/*
let veces = false;
for(elem of document.getElementsByTagName("div")){
    if(!veces){
        elem.addEventListener("click",ocultar,{once:true});
        veces = true;
    }else
        elem.addEventListener("click",ocultar);
}*/
/*
for(elem of document.getElementsByTagName("div")){
        elem.addEventListener("click",(e)=>{
            console.log(e.currentTarget)
            console.log(e.target)
            let local = e.currentTarget.querySelector("h3");
            if(local.style.visibility == "hidden")
                local.style.visibility = "visible"
            else
                local.style.visibility = "hidden"
        })
}

for(elem of document.getElementsByTagName("div")){
        elem.addEventListener("",(e)=>{
            console.log(e.currentTarget)
            console.log(e.target)
            let local = e.currentTarget.querySelector("h3");
            if(local.style.visibility == "hidden")
                local.style.visibility = "visible"
            else
                local.style.visibility = "hidden"
        })
}
*/

// for (elem of document.getElementsByTagName("div")) {
//     elem.addEventListener("click",ocultar);
//     elem.addEventListener("mouseenter",entrarSalir);
//     elem.addEventListener("mouseleave",entrarSalir);
// }

// function ocultar() {
//     let local = this.querySelector("h3");
//     if (local.style.visibility == "hidden")
//         local.style.visibility = "visible"
//     else
//         local.style.visibility = "hidden"
// }

// //mouseenter y mouseleave

// function entrarSalir(e) {
//     console.log(e.currentTarget)
//             console.log(e.target)
//             switch (e.type) {
//                 case "click":
//                     let local = e.currentTarget.querySelector("h3");
//                     if (local.style.visibility == "hidden")
//                         local.style.visibility = "visible";
//                     else
//                         local.style.visibility = "hidden";
//                     break;
//                 case "mouseenter":
//                     e.currentTarget.style.backgroundColor = "black";
//                     break;
//                 case "mouseleave":
//                      e.currentTarget.style.backgroundColor = "silver";
//                     break;
//             }

// }

//eventos de teclado
//keyholder examen


// const info = document.getElementById("infoTeclado");
// const infoRaton = document.getElementById("infoRaton");
// const text1 = document.getElementById("textarea1");

//  text1.addEventListener("keydown", (e) => {
//     info.innerHTML = `Tipo: ${e.type} | key: ${e.key} | code: ${e.code}<br>`;

//     // if(e.code == "KeyN" && e.altKey){
//     //        info.innerHTML = "";
//     // }
//     if(e.code === "KeyN"){
//         console.log("no se permite la n");
//     }
//  });

//  document.body.addEventListener("mousemove", (e) => {
//     infoRaton.innerHTML = `(page --> X: ${e.pageX}, Y: ${e.pageY})<br>`; // este es el que mas se utiliza   
//     infoRaton.innerHTML += `(client --> X: ${e.clientX}, Y: ${e.clientY})<br>`;
//     infoRaton.innerHTML += `(offset --> X: ${e.offsetX}, Y: ${e.offsetY})<br>`;
//     infoRaton.innerHTML += `(screen --> X: ${e.screenX}, Y: ${e.screenY})`;
//  })

