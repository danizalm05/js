class Bubble{
  constructor(x,y,r){
   this.x = x;
   this.y = y;
   this.r = r;
   this.brightness =0;
  }

changeColor(bright){
 this.brightness = bright;

}
contains(px,py){
 let d = dist(px,py,this.x,this.y)
 if (d < this.r){ //Clicked Inside
   //this.brightness =255;
   return true;
 }else {
   //this.brightness =0;
   return false
 }


}
  move(){
   this.x = this.x + random(-1,1);
   this.y = this.y + random(-1,1);
  }

  show(){
    stroke(255);

    strokeWeight(4) ;
    //noFill();
    //noStroke() ;
    //strokeWeight(4) ;
   fill(this.brightness,115 );
    ellipse(this.x,this.y,this.r,this.r)
  }

}
