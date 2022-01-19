let canvas = document.getElementById('playground');
let ctx = canvas.getContext('2d');

canvas.style.backgroundColor = 'green';

function drawCircle() {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function colorCircle() {
    ctx.fillStyle = 'red';
    ctx.fill();
}

canvas.addEventListener('click', drawCircle);
canvas.addEventListener('dblclick', colorCircle);

