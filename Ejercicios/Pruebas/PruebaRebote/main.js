const ball = document.getElementById("pelota");

ball.style.top = (parseInt(screen.availHeight / 2) -50 )+"px";
ball.style.left = "0px";

let intervalo = setInterval(function (){
    let izq = parseInt(ball.style.left.substring(0,ball.style.left.length-2));
    while(izq < (screen.width - 100))
    ball.style.left = (izq + 10)+"px";
},100);