class Bubble{
  constructor(x,y,r=50){
   this.x = x;
   this.y = y;
   this.r = r;
   this.brightness =0;
  }

intersects(other){
   let  d = dist(this.x,this.y,other.x,other.y);
   let rr = this.r+other.r;
   return  (d < rr);
}//intersects



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
    ellipse(this.x,this.y,2*this.r,2*this.r)
  }

}
