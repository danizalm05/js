 
//https://www.youtube.com/watch?v=-f0WEitGmiw&list=PLRqwX-V7Uu6YB9x6f23CBftiyx0u_5sO9
PImage img;
PImage flower;
void setup() {
  size(380, 480);
 img= loadImage("../imgs/dali.jpg");
}

 
 

void draw() {
   //background(0);
  // image(img,0,0);
  // imageMode(CENTER);
   // image(flower,320,120);
   //tint( 144,157 ,120);//fill(0,255,0);
   //ellipse(300,200,150,10);
   loadPixels();
    for(int x =0; x<width; x++){
      for (int y = 0; y < height; y ++){
        int loc =x+y*width;
        float brt = brightness(img.pixels[loc]);
        if(brt>mouseX){
          pixels[loc] = color(255);
        }else{
          pixels[loc] = color(0);
        }
        
      //  float r= red(img.pixels[loc]);
      //  float g= green(img.pixels[loc]);
      //  float b= blue(img.pixels[loc]);
      //  //float d= dist(width/2, height/2 ,x,y);//distence from the cenrer
      //   float d= dist(mouseX, mouseY ,x,y);//distence from the cenrer
      //  float factor = map (d,0,200,2,0);//map d from 0,200 to 2,0
      //  //pixels[loc] =color(r+mouseX,g+mouseX,b+mouseX);
      //  pixels[loc] =color(r*factor,g*factor,b*factor);
      //
    }
   updatePixels(); 
   
   }
   
   
}
