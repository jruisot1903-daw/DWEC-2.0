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



