
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let xoff = 0;
let xincrement = 0.01;

function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(51);
   
  fill(200);
   var x1 = random(width);
   
  var x2 = map(noise(xoff),0,1,0,width);
  xoff += 0.01;
 ellipse(x2,200, 64, 64);
 ellipse(x1,350, 64, 64);

  
}