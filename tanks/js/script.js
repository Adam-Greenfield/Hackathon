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
















var Tank = [];


$(function(){
  canvas = document.getElementById('myCanvas');

  var p1t1mouseX;
  var p1t1mouseY;

  var self = this
  self.shapes = [];

  function initialize(){
    ctx = canvas.getContext("2d");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    var mouseX;
    var mouseY;
    drawInterval = setInterval(draw, 10);
  }

  function circle(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, (2* Math.PI));
    ctx.fill();
    ctx.closePath();
  }

  function tank1(){
    tank1 = new Tank(game, "/css/images/Tank-bottom2.jpg", 25, 25)
    tank1.setSpeed(0);
    tank1.setPosition(p1t1mouseX, p1t1mouseY);
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

  canvas.addEventListener('click', function(evt){
    // if(playerOneTurn){
      var mousePos = getMousePos(canvas, evt);
      p1t1mouseX = mousePos.mouseX; 
      p1t1mouseY = mousePos.mouseY;
    // } else {

    // }
})

  function addShape(shape){
    self.shapes.push(shape);
    console.log(self.shapes);
  }

  function addTank(tank1){
    self.Tank.push(tank1);
    console.log(self.tank1);
  }

  function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw(){
    // clear();
    // tank1(p1t1mouseX, p1t1mouseY)
    var ctx = self.ctx;
    var shapes = self.shapes;
    var tank1 = document.getElementById("tank1-img");
    ctx.drawImage(tank1, p1t1mouseX, p1t1mouseY)

}
  initialize();
});

