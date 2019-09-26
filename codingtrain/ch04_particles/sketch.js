
//https://www.youtube.com/watch?v=IsdZKG9wyBc&list=PLRqwX-V7Uu6Z9hI4mSgx2FlE5w8zvjmEy&index=3	*/



let particles = [];

function setup() {
 createCanvas(640, 360);
}

function draw() {
 background(51);
 particles.push(new Particle(createVector(width / 2, 50)));

 // Looping through backwards to delete
 for (var i = particles.length - 1; i >= 0; i--) {
   var p = particles[i];
   p.run();
   if (p.isDead()) {
     //remove the particle
     particles.splice(i, 1);
   }
 }

}
