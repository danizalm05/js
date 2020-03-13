
// The Nature of Code
// https://www.youtube.com/watch?v=D1BBj2VaBl4&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=7




var inc = 0.01;

function setup() {
  createCanvas(200,200);
  pixelDensity(1);

 }

function draw() {
  var yoff = 0;

  loadPixels();
  for (var y=0;y<height;y++){
   var xoff = 0;
   for (var x=0;x<width;x++){
       var index = (x + y*width)*4;
       var r =noise(xoff,yoff) * 255;
  	   pixels[index]   = r;
  		 pixels[index+1] = r ;
  		 pixels[index+2] = r;
  		 pixels[index+3] = 222;
       xoff += inc;
    }
     yoff += inc;
   }
  updatePixels();
 }
