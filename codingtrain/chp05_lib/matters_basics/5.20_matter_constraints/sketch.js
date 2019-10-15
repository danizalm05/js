// Daniel Shiffman
// Matter.js + p5.js Examples
// https://github.com/CodingTrain/website/tree/master/Courses/natureofcode/5.20_matter_constraints

// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/szztTszPp-8
//https://www.youtube.com/watch?v=W-ou_sVlTWk&list=PLRqwX-V7Uu6akvoNKE4GAxf6ZeBYoJ4uh&index=24
// 7:50
// module aliases
var Engine = Matter.Engine,
 // Render = Matter.Render,
 World = Matter.World,
 Bodies = Matter.Bodies,
 Constraint = Matter.Constraint,
 Mouse  =  Matter.Mouse,
 MouseConstraint =  Matter.MouseConstraint;
var engine;
var world;
var particles = [];
var boundaries = [];

var ground;
var mConstraint;

function setup() {
   var canvas = createCanvas(400, 400);
   engine = Engine.create();
   world = engine.world;
   var prev = null;
   for (var x = 40 ; x < 500; x += 20) {
      var fixed = false;
       if (!prev) {
           fixed = true;
       }
      if(x==300)   fixed = true;
      var p = new Particle(x, 100, 5, fixed);
      particles.push(p);
      if (prev) {
          var options = {
              bodyA: p.body,
              bodyB: prev.body,
              length: 20,
              stiffness: 0.4
             }
         var constraint = Constraint.create(options);
         World.add(world, constraint);
     }
    prev = p;
  }//for
  boundaries.push(new Boundary(200, height, width, 50, 0));
  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  var options = {
      mouse: canvasmouse

  }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
    console.log(mConstraint);
}//setup

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

// function mouseDragged() {
//   circles.push(new Circle(mouseX, mouseY, random(5, 10)));
// }

function draw() {
 background(51);
 Engine.update(engine);
 for (var i = 0; i < boundaries.length; i++) {
   boundaries[i].show();
 }

 for (var i = 0; i < particles.length; i++) {
   particles[i].show();
 }

  //line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y);
if(mConstraint.body){
    var pos = mConstraint.body.position;
    var m = mConstraint.mouse.position;
   var offset = mConstraint.constraint.pointB;
    stroke(0,255,0);
    //ellipse(pos.x,pos.y,20,20);
    line(pos.x+offset.x,pos.y+offset.y,m.x,m.y);
 }
}
