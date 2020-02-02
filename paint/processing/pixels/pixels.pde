 
//https://www.youtube.com/watch?v=-f0WEitGmiw&list=PLRqwX-V7Uu6YB9x6f23CBftiyx0u_5sO9
PImage dali;
 
void setup() {
  size(612, 512);
 dali= loadImage("dali.jpg");
 
}
 
void draw() {
   //background(0);
    image(dali,0,0);
  // imageMode(CENTER);
   // image(flower,320,120);
   //tint( 144,157 ,120);//fill(0,255,0);
   //ellipse(300,200,150,10);
   
   
   }
   
   
 
 
 
 /*
 
 loadPixels();
   for(int x =0; x<width; x++){
      for (int y = 0; y < height; y ++){
        
        float d = dist(x,y,width/2,height/2);//distance from the center
        int index = x+y*width;
        pixels[index] = color(d,d/2,d/3);
      }
   updatePixels();
 
 
 */
