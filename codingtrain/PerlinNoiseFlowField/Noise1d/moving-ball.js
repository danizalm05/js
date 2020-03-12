
// The Nature of Code
// file:///home/user/Desktop/d/js/codingtrain/PerlinNoiseFlowField/Noise1d/index.html
// https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=5

var xoff1 = 0,xoff2 = 1000, yoff = 0;
var xincrement = 0.01;

function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(51);
   
  fill(200);
   
   
  var x  = map(noise(xoff1),0,1,0,width);
  var y  = map(noise(xoff2),0,1,0,height);
 
  xoff1 += 0.01;
  xoff2 += 0.01;
 ellipse(x ,y, 64, 64);
  

  
}