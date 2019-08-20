https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas

var img = new Image();
var canvas;
 var ctx;
function fixl(){
   img.src = './i.jpg';
   canvas = document.getElementById('cvs');
   ctx = canvas.getContext('2d');
   img.onload = function() {
     ctx.drawImage(img, 0, 0);
     img.style.display = 'none';
     zoom(img);
     grayscale();
    // invert();
     getPixel();
   };



}



function zoom(img) {
   var zoomctx = document.getElementById('zoom').getContext('2d');
   var zoom = function(event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(canvas,
                      Math.min(Math.max(0, x - 5), img.width - 10),
                      Math.min(Math.max(0, y - 5), img.height - 10),
                      10, 10,
                      0, 0,
                      200, 200);
  };

  canvas.addEventListener('mousemove', zoom);
}






 function grayscale() {
   var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
   var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };




function invert(){
   var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
   var data = imageData.data;

   for (var i = 0; i < data.length; i += 4) {

      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue

    }

    ctx.putImageData(imageData, 0, 0);
  }


  function pick(event) {
   var x = event.layerX;
   var y = event.layerY;
   var pixel = ctx.getImageData(x, y, 1, 1);
   var data = pixel.data;
   var rgba = 'rgba(' + data[0] + ', ' + data[1] +
              ', ' + data[2] + ', ' + (data[3] / 255) + ')';
   color.style.background =  rgba;
   color.textContent = rgba;
  }

function getPixel(){

   var color = document.getElementById('color');


  canvas.addEventListener('mousemove', pick);
}
