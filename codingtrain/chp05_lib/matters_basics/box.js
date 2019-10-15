//function Box(x,y,w,h){
function Circle(x,y,r){
	 var options = {
	   friction  : 0.2,
	   restitution: 0.6
	  }



	//this.body  = Bodies.rectangle(x,y,w,h,options);
  this.body  = Bodies.circle(x,y,r,options);
	this.r = r;
	World.add(world, this.body);


  this.isOffScreen = function (){
     	var pos = this.body.position;
      return  (pos.y > height+100)
  	}//isOffScreen


  this.removeFromWorld = function (){
      World.remove(world, this.body);

	}//removeFromWorld


	this.show = function (){
		var pos = this.body.position;
		var angle = this.body.angle;
	    push();
		translate(pos.x,pos.y);
		rotate( angle );
		rectMode(CENTER);

        strokeWeight(1);
		stroke(255);
		fill(108 ,188, 208 );
		//rect(0,0,this.w,this.h);
		ellipse(0,0,this.r * 2);
		pop();

	}


}
