$(function(){
  canvas = document.getElementById('myCanvas');



  function initialize(){
    ctx = canvas.getContext("2d");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;

  }

  // var images = ['arctic.jpg', 'desert.jpg', 'grass.jpg', 'moon.jpg', 'space.jpg', 'whitehouse.png' ];

  // $('#myCanvas').css(
  //   {'background-image': 'url(./css/images/' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/},
  //   {'background-size' : "cover"}
  //   );

//WORKING CODE
// function arctic(){
//     $("#myCanvas").css("background-image","url(./css/images/arctic.jpg)");
//   }

//   function loadimage(){
//     if (document.getElementById("arctic")){
//     $('#myCanvas').css(
//         {'background-image': 'url(./css/images/arctic.jpg' + images[Math.floor(Math.random() * images.length)]+ ')'}
//         );
//     } else {
//       console.log("Not working")
//     }
// }

//   var e1 = document.getElementById("arctic");
//   e1.addEventListener('click', loadimage, false)

//MY CODE
  //   function loadimage(){
  //     // if ($('#arctic')){
  //     // $('#myCanvas').css(
  //     //     {'background-image': 'url(./css/images/arctic.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
  //     //     )
  //     } else if ($("#desert")) {
  //       $('#myCanvas').css(
  //         {'background-image': 'url(./css/images/desert.jpg' /*+ images[Math.floor(Math.random() * images.length)]+ ')'*/}
  //         );
  //     } else {
  //       console.log("Unfinished")
  //     }
  // }

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