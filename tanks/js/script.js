$(function(){
  canvas = document.getElementById('myCanvas');


  function initialize(){
    ctx = canvas.getContext("2d");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
  }

  function circle(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, (2* Math.PI));
    ctx.fill();
    ctx.closePath();
  }

  function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
  }
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      mouseX: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
      mouseY: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
  }

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.mouseX + ',' + mousePos.mouseY;
    mouseX = mousePos.mouseX; 
    mouseY = mousePos.mouseY;
    console.log(mouseX, mouseY);
    writeMessage(canvas, message);

  }, false);

  
  canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);


  })

  initialize();
});