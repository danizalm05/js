// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
let physics;

let p1;
let p2;

function setup() {
  createCanvas(640, 360);

  // Initialize the physics
  physics = new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.5)));

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));

  // Make two particles
  p1 = new Particle(new Vec2D(width / 13, 20));
  p2 = new Particle(new Vec2D(width / 2 +  60, 20));
  p3 = new Particle(new Vec2D(width / 5 + 160, 40));
 // Lock one in place
 p1.lock();
  

  // Make a spring connecting both Particles
  let spring = new VerletSpring2D(p1, p2, 160, 0.01);
  let spring2 = new VerletSpring2D(p1, p3, 60, 0.01);

  // Anything we make, we have to add into the physics world
  physics.addParticle(p1);
  physics.addParticle(p2);
  physics.addParticle(p3);
  physics.addSpring(spring);
  physics.addSpring(spring2);
}

function draw() {

  // Update the physics world
  physics.update();

  background(51);

  // Draw a line between the particles
  stroke(200);
  strokeWeight(2);
  line(p1.x, p1.y, p2.x, p2.y);
  line(p1.x, p1.y, p3.x, p3.y);

  // Display the particles
  p1.display();
  p2.display();
p3.display();
  // Move the second one according to the mouse
  if (mouseIsPressed) {
    p2.lock();
    p2.x = mouseX;
    p2.y = mouseY;
    p2.unlock();
  }
}