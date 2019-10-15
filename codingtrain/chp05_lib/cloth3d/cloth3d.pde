
//8:01
//https://www.youtube.com/watch?v=jrk_lOg_pVA&list=PLRqwX-V7Uu6akvoNKE4GAxf6ZeBYoJ4uh&index=19 
//https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_020_ClothSimulation/Processing/CC_020_Cloth2D
// http://toxiclibs.org/docs/verletphysics/toxi/physics/VerletParticle.html
// http://toxiclibs.org/docs/verletphysics/toxi/physics2d/behaviors/GravityBehavior.html



import toxi.geom.*; 
import toxi.physics2d.*;
import toxi.physics2d.behaviors.*;
import toxi.physics2d.constraints.*;
 
 int cols = 40;
int rows = 40;

//ArrayList<Particle>particles;

Particle[][] particles = new Particle[cols][rows];
ArrayList<Spring>springs;

float w = 10;

VerletPhysics2D physics;

void setup() {
  size(600, 600); 
   
  springs = new ArrayList<Spring>();
  physics = new VerletPhysics2D();
  Vec2D gravity = new Vec2D(0, 0.1 );//vectot points down
  GravityBehavior2D gb = new GravityBehavior2D(gravity);
  physics.addBehavior(gb); 
  
    float x = 100;
   
  for (int i = 0; i < cols; i++) {
     float y =  10;
    for (int j = 0; j < rows;  j++) {
      
      Particle p = new Particle(x, y);
      particles[i][j] = p;
      physics.addParticle(p);
      y = y + w;
    }
    x =x + w;
  }

  for (int i = 0; i < cols-1; i++) {
    for (int j = 0; j < rows-1; j++) {
       Particle a = particles[i][j] ;
       Particle b1 = particles[i+1][j] ;
       Particle b2 = particles[i][j+1] ;
       Spring  s1 = new Spring(a,b1) ;
       springs.add(s1);
       physics.addSpring(s1);
       Spring  s2 = new Spring(a,b2) ;
       springs.add(s2);
       physics.addSpring(s2);
    }
  }
 
 
 
     //Particle p = particles.get(20);
      particles[0][0].lock();
      particles[cols-1][0].lock();
       
     //Particle p1 = particles.get(particles.size()-5);
     //p1.lock();
}

void draw() {
  background(51);
  physics.update();
   
   for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
       //particles[i][j].display();
    }
  }
  for (Spring s :springs){
     s.display();
  } 

 
}



/* for(int i = 0; i < particles.size() -1; i++){
   Particle a = particles.get(i);
   Particle b = particles.get(i+1);
   Spring  s = new Spring(a,b) ;
   springs.add(s);
   physics.addSpring(s);
 }*/ 
