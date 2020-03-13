
// The Nature of Code
// file:///home/user/Desktop/d/js/codingtrain/PerlinNoiseFlowField/Noise1d/index.html
// https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=5

var start = 0;
var inc = 0.01;

function setup() {
  createCanvas(400,400);
 }
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  //console.log(xoff);
   for (var x=0;x<width;x++){
	     stroke(255);
	     y = noise(xoff) * height; 	//y = sin(xoff) * height;
	     vertex(x,y);
       xoff += inc;
   }
  endShape();
  start += inc;
  print
  //noLoop();
 }
