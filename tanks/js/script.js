// <<<<<<< HEAD
var boxes = [];

function Box() {
  this.x = 0;
  this.y = 0;
  this.w = 1; // default width and height?
  this.h = 1;
  this.fill = '#444444';
}

function addRect(x, y, w, h, fill) {
  var rect = new Box;
  rect.x = x;
  rect.y = y;
  rect.w = w
  rect.h = h;
  rect.fill = fill;
  boxes.push(rect);
  invalidate();
}

var canvas;
var ctx;
var WIDTH;
var HEIGHT;
var INTERVAL = 20;
var isDrag = false;
var mx, my;
var canvasValid = false;

var mySel;
var mySelColor = '#CC0000';
var mySelWidth = 2;

var ghostcanvas;
var gctx;




















$(function(){
  canvas = document.getElementById('myCanvas');

  var self = this
  self.shapes = [];

  function initialize(){
    ctx = canvas.getContext("2d");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    var mouseX;
    var mouseY;
    // drawInterval = setInterval(draw, 10);
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

  canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    mouseX = mousePos.mouseX; 
    mouseY = mousePos.mouseY;


  function addShape(shape){
    self.shapes.push(shape);
    console.log(self.shapes);
  }

  function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw(){
    clear();
    var ctx = this.ctx;
    var shapes = self.shapes;
  }
})
  initialize();
});
