// Daniel Shiffman
// Matter.js + p5.js Examples
// This example is based on examples from:  brm.io/matter-js/
// www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6akvoNKE4GAxf6ZeBYoJ4uh&index=20
// github.com/shiffman/p5-matter
// github.com/liabru/matter-js
// github.com/liabru/matter-js/wiki/Getting-started
// file:///D:/js/codingtrain/chp05_lib/matters_basics/index.html
var Engine = Matter.Engine,

    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, world;
//var boxes = [];
var circles = [];
var ground;
var boundaries = [];

function mousePressed(){
	 //boxes.push(new Box(mouseX,mouseY, 20, 20));
   boxes.push(new Circle(mouseX,mouseY, 20, 20));
}


function setup() {

  createCanvas(400, 400);
  engine = Engine.create();
  world  = engine.world;
  //Engine.run(engine);
    boundaries.push(new Boundary(150, height / 4 ,width*0.6 ,10,  0.3));
  boundaries.push(new Boundary(200, height / 1.5 ,width*0.9 ,50, -0.3));

  //ground =  new Boundary(200, height ,width ,100);
  //World.add(world, ground);
 }



//function mousePressed(){
	 //boxes.push(new Box(mouseX,mouseY,random(10,30), random(10,30)));

//function mouseDragged(){
//   circles.push(new Circle(mouseX,mouseY,random(2,12) ));

//}

 // Using p5 to render
function draw() {
  background(51);
  circles.push(new Circle(200,50,random(2,12) ));

  Engine.update(engine);
  for(var i =0; i < circles.length; i++){
    	circles[i].show();
      if (circles[i].isOffScreen()){
            circles[i].removeFromWorld();
            circles.splice(i,1);
            i--;
      }
  }

  for(var i =0; i < boundaries.length; i++){
      boundaries[i].show();

  }
  //console.log(circles.length, world.bodies.length);
   
}
