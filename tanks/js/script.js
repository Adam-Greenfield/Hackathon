

$(function(){
  canvas = document.getElementById('myCanvas');
  

  // $('canvas').click{
  //   console.log(click)
  // };
  // var tank_1 = new Image();
  // tank_1.src = "/css/images/Tank-bottom2.jpg";

  // var tank_1 = document.getElementById('tank_1');
  var self = this

  var tank_1 = document.getElementById('tank_1');

  var turret_1 = document.getElementById('turret_1');
  var ctx = canvas.getContext('2d');


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

  // var audio = getElementId




  var tank1 = {
    img: document.getElementById('tank_1'),
    x: p1t1mouseX,
    y: p1t1mouseY,
    turret: document.getElementById('turret_1'),
    turretAngle: 0,
    rotateTurret: function(){
      console.log(this.turret);
      // this.turret.rotate(5*Math.PI/180);
    }
  }

  // var shot1 = {
  //   x: p1t1mouseX,
  //   y: p1t1mouseY,
  //   vx: v * cos(angle),
  //   vy: v * sin(angle)

  // };


  tank1.rotateTurret();

currentTank = tank1

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


  }

    var e1 = document.getElementById("arctic");
    e1.addEventListener('click', function(){
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/arctic.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
      }, false);
  
    var e2 = document.getElementById("desert");
    e2.addEventListener('click', function(){ 
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/desert.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
        } , false);

    var e3 = document.getElementById("grass");
    e3.addEventListener('click', function(){ 
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/grass.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
        } , false);

    var e4 = document.getElementById("moon");
    e4.addEventListener('click', function(){ 
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/moon.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
        } , false);

    var e5 = document.getElementById("space");
    e5.addEventListener('click', function(){ 
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/space.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
        } , false);

    var e6 = document.getElementById("whitehouse");
    e6.addEventListener('click', function(){ 
      $('#myCanvas').css(
        {'background-image': 'url(./css/images/whitehouse.png' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
        )
        } , false);


    var mouseX;
    var mouseY;

    drawInterval = setInterval(draw, 50);





  function circle(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, (2* Math.PI));
    ctx.fill();
    ctx.closePath();
  }

  function writeMessage(canvas, message) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
  }
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      mouseX: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
      mouseY: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
  };
  
  var turn = 0;
  canvas.addEventListener('click', function(evt){

    var mousePos = getMousePos(canvas, evt);
    switch(turn){
      case 0:
        tank1.x = mousePos.mouseX; 
        tank1.y = mousePos.mouseY;
        shot1.x = mousePos.mouseX;
        shot1.y = mousePos.mouseY;
        console.log(tank1)
        console.log(tank_1)
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
  });
  
  document.addEventListener('keydown', function(evt) {
    evt.preventDefault();
    if(evt.keyCode === 37) {
      tank1.turretAngle -= 0.2;
      if(tank1.turretAngle < 0) tank1.turretAngle = 6;
    }
    if(evt.keyCode === 39) {
      tank1.turretAngle += 0.2;
      if(tank1.turretAngle > 6) tank1.turretAngle = 0;
    }
    if(evt.keyCode === 32) {
      shot1.x += 5
      shot1.y -= 5
    }
 });


  function addShape(shape){
    self.shapes.push(shape);
  }

  function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw(){
    clear();
    ctx.drawImage(tank1.img, tank1.x, tank1.y, 46, 46);
    ctx.save();
    ctx.translate(tank1.x+32, tank1.y+20);
    ctx.rotate(tank1.turretAngle);
    ctx.drawImage(tank1.turret, -38, -25, 56, 56);
    ctx.restore();
    console.log(shot1.x)
    circle(shot1.x, shot1.y, 3);
    ctx.drawImage(tank_1, p1t2mouseX, p1t2mouseY, 36, 36);

    ctx.drawImage(tank_1, p1t3mouseX, p1t3mouseY, 36, 36);

    ctx.drawImage(tank_1, p2t1mouseX, p2t1mouseY, 36, 36);
    ctx.drawImage(tank_1, p2t2mouseX, p2t2mouseY, 36, 36);
    ctx.drawImage(tank_1, p2t3mouseX, p2t3mouseY, 36, 36);

    var shapes = self.shapes;

    $(document).keydown(function(){
      if(event.keyCode == 65){
        ctx = turret_1;
        console.log(ctx);
        ctx.rotate(5);
      }
    })
}




  initialize();

});

