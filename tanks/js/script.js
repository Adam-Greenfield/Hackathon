

$(function(){
  canvas = document.getElementById('myCanvas');

  // var tank_1 = new Image();
  // tank_1.src = "/css/images/Tank-bottom2.jpg";
  var tank_1 = document.getElementById('tank_1');
  var turret_1 = document.getElementById('turret_1');


  var p1t1mouseX;
  var p1t1mouseY;
  var p1t2mouseX;
  var p1t2mouseY;
  var p1t3mouseX;
  var p1t3mouseY;

  var p2t1mouseX;
  var p2t1mouseY;
  var p2t2mouseX;
  var p2t2mouseY;
  var p2t3mouseX;
  var p2t3mouseY;



  var tank1 = {
    x: p1t1mouseX,
    y: p1t1mouseY,
    turret: turret_1
  }

  var currentTank;
  function setCurrentTank(tank){
    currentTank = tank
  }

  var self = this
  self.shapes = [];

  function initialize(){
    ctx = canvas.getContext("2d");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    var mouseX;
    var mouseY;
    drawInterval = setInterval(draw, 1);
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
    // console.log(mouseX, mouseY);
    writeMessage(canvas, message);

  }, false);
  var turn = 0;
  canvas.addEventListener('click', function(evt){

    var mousePos = getMousePos(canvas, evt);
    console.log(turn);
    switch(turn){
      case 0:
        p1t1mouseX = mousePos.mouseX; 
        p1t1mouseY = mousePos.mouseY;
        turn += 1;
        break;
      case 1:
        p2t1mouseX = mousePos.mouseX; 
        p2t1mouseY = mousePos.mouseY;
        turn += 1;
        break;
      case 2:
        p1t2mouseX = mousePos.mouseX; 
        p1t2mouseY = mousePos.mouseY;
        turn += 1;
        break;
      case 3:
        p2t2mouseX = mousePos.mouseX; 
        p2t2mouseY = mousePos.mouseY;
        turn += 1;
        break;
      case 4:
        p1t3mouseX = mousePos.mouseX; 
        p1t3mouseY = mousePos.mouseY;
        turn += 1;
        break;
      case 5:
        p2t3mouseX = mousePos.mouseX; 
        p2t3mouseY = mousePos.mouseY;
        turn += 1;
        break;
    }
    // } else {
    })
    // }
    $(document).keydown(function(){
      if(event.keyCode == 65){
        ctx = currentTank;
        ctx.rotate
      }
    })

  function addShape(shape){
    self.shapes.push(shape);
    console.log(self.shapes);
  }

  function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw(){
    // clear();
    var ctx = this.ctx;
    ctx.drawImage(tank_1, p1t1mouseX, p1t1mouseY, 46, 46);
    ctx.drawImage(turret_1, p1t1mouseX-15, p1t1mouseY-5, 56, 56)

    ctx.drawImage(tank_1, p1t2mouseX, p1t2mouseY, 36, 36);


    ctx.drawImage(tank_1, p1t3mouseX, p1t3mouseY, 36, 36);

    ctx.drawImage(tank_1, p2t1mouseX, p2t1mouseY, 36, 36);
    ctx.drawImage(tank_1, p2t2mouseX, p2t2mouseY, 36, 36);
    ctx.drawImage(tank_1, p2t3mouseX, p2t3mouseY, 36, 36);

    var shapes = self.shapes;

}
  initialize();
});

