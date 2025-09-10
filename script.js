let canv = document.getElementById("myCanvas");
let ctx = canv.getContext("2d");

let posX = 300;
let posY = 200;

let radius = 10;

let speedX = Math.random() * 10 - 5; // velocidade aleatória entre 1 e 5
let speedY = Math.random() * 10 - 5; // velocidade aleatória entre 1 e 5

function Desenha()
{
    ctx.clearRect(0, 0, canv.width, canv.height); // limpa o canvas
    posX += speedX; // soma speedX ao valor de posX
    posY += speedY; // soma speedY ao valor de posY
    if (posX > canv.width - radius || posX < radius) 
        speedX = -speedX; // inverte a direção ao bater na parede
    if (posY > canv.height - radius || posY < radius) 
        speedY = -speedY; // inverte a direção ao bater na parede

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

setInterval(Desenha, 20); // chama a função Desenha a cada 20 milissegundos