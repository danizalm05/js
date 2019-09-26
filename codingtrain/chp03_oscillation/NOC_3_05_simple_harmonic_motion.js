//www.youtube.com/watch?v=GvwPwIUSYqE&list=PLRqwX-V7Uu6bR4BcLjHHTopXItSjRA7yG&index=3
//https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp03_oscillation/
//file:///D:/js/codingtrain/chp03_oscillation/index.html
//

let amplitude = 300;
//let period = 20;
let angle = 0;


function setup() {
 createCanvas(640, 360);
}

function draw() {
 background(51);

 let aVelocity = 0.03;


 // Calculating horizontal position according to formula for simple harmonic motion
 //let x = amplitude * sin(TWO_PI * frameCount / period);
 x = amplitude *(sin(angle));
 stroke(255);
 strokeWeight(2);
 fill(127);
 translate(width / 2, height / 2);
 line(0, 0, x, 0);
 ellipse(x, 0, 48, 48);
  angle += aVelocity;
}
