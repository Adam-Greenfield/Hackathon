
// $(function(){
// var boxes = [];

// function Box() {
//   this.x = 0;
//   this.y = 0;
//   this.w = 1; // default width and height?
//   this.h = 1;
//   this.fill = '#444444';
// }


// function addRect(x, y, w, h, fill) {
//   var rect = new Box;
//   rect.x = x;
//   rect.y = y;
//   rect.w = w
//   rect.h = h;
//   rect.fill = fill;
//   boxes.push(rect);
//   // invalidate();
// }

// var canvas;
// var ctx;
// var WIDTH;
// var HEIGHT;
// var INTERVAL = 20;
// var isDrag = false;
// var mx, my;
// var canvasValid = false;

// var mySel;
// var mySelColor = '#CC0000';
// var mySelWidth = 2;

// var ghostcanvas;
// var gctx;
// var offsetx, offsety;

// function init(){
//   canvas = document.getElementById('myCanvas');
//   console.log(canvas);
//   HEIGHT = canvas.height;
//   WIDTH = canvas.width;
//   ctx = canvas.getContext('2d');
//   ghostcanvas = document.createElement('canvas');
//   ghostcanvas.height = HEIGHT;
//   ghostcanvas.width = WIDTH;
//   gctx = ghostcanvas.getContext('2d');


//   canvas.onSelectStart = function () { return false; }

//   if (document.defaultView && document.defaultView.getComputedStyle) {
//     stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
//     stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
//     styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
//     styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
//   }

//   setInterval(draw, INTERVAL);

//   canvas.onmousedown = myDown;
//   canvas.onmouseup = myUp;
//   // canvas.ondblclick = myDblClick;

//   addRect(200, 200, 40, 40, '#FFC02B');
//   addRect(25, 90, 25, 25, '#2BB8FF');
// }
// function clear(){
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
// }

// function draw() {
//   if (canvasValid == false) {
//     clear();

//     var l = boxes.length;
//     for (var i = 0; i < l; i++) {
//       drawshape(ctx, boxes[i], boxes[i].fill);
//     }
//     if (mySel != null) {
//       ctx.strokeStyle = mySelColor;
//       ctx.lineWidth = mySelWidth;
//       ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
//     }
//     canvasValid = true;
//   }
// }


//   console.log(boxes);

//   function myDown(e){
//     getMouse(e);
//     clear(gctx); // clear the ghost canvas from its last use
//     var l = boxes.length;
//       for (var i = l-1; i >= 0; i--) {
//         drawshape(gctx, boxes[i], 'black');
//         var imageData = gctx.getImageData(mx, my, 1, 1);
//          var index = (mx + my * imageData.width) * 4;
//          if (imageData.data[3] > 0) {
//                mySel = boxes[i];
//                offsetx = mx - mySel.x;
//                offsety = my - mySel.y;
//                mySel.x = mx - offsetx;
//                mySel.y = my - offsety;
//                isDrag = true;
//                canvas.onmousemove = myMove;
//                invalidate();
//                clear(gctx);
//                return;
//              }
//            }
//            mySel = null;
//            clear(gctx);
//            invalidate();
//          }
//          function myMove(e){
//            if (isDrag){
//              getMouse(e);
             
//              mySel.x = mx - offsetx;
//              mySel.y = my - offsety;   
//              invalidate();
//            }
//          }

//          function myUp(){
//            isDrag = false;
//            canvas.onmousemove = null;
//          }

// init();
// });












$(function(){
  canvas = document.getElementById('myCanvas');
  
  // $('canvas').click{
  //   console.log(click)
  // };
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

  // var audio = getElementId



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
  };
  

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

};
  initialize();
});

