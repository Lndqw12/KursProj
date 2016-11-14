/*
  Johan Karlsson (DonKarlssonSan)
  All my #codevember Pens:
  http://codepen.io/collection/XwMkWm/
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
ctx.lineWidth = 3;
ctx.fillStyle = "black";

function draw() {
  var x1 = Math.random() * width;
  var y1 = Math.random() * height;
  var x2 = Math.random() * width;
  var y2 = Math.random() * height;
  // Fill with black to avoid transparent
  // images when doing Save as... on canvas.
  ctx.fillRect(0, 0, width, height);
  for(var x = 0; x < width; x++) {
    ctx.strokeStyle = `hsla(${x/width*360}, 100%, 50%, 0.3)`;
    ctx.beginPath();
    ctx.moveTo(x, 0); 
    ctx.bezierCurveTo(
      x1, y1, 
      x2, y2, 
      x, height);
    ctx.stroke();

    x1 = random(x1, width);
    y1 = random(y1, height);
    x2 = random(x2, width);
    y2 = random(y2, height);
  }
}

function random(current, limit) {
  var step = 10;
  var value = current + Math.random() * step - step/2;
  while(value < -limit || value > limit) {
    value = current + Math.random() * step - step/2;
  }
  return value;
}

draw();

canvas.addEventListener("click", draw);