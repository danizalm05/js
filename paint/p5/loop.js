 function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  
}

function draw() {
  count=0;
  background( 250);
  for (var x=50;x<width;x+=30){
	for (var y=50;y<height;y+=130){ 
	 //1
	 /*line(x-5,y-5,x+5,y+5 ); 
     line(x+5,y-5,x-5,y+5 );
	 */
	 //2
	 //line(x,y,width/2,height/2);
	 //3
	 /*strokeWeight(count*0.05);
	   ellipse(x,y,60,84);
	 */
	
    //4
	for (var i=0;i<10;i+=4){
		line(x+i,y,x+i,y+12)
	} 
	line(x,y,x+12,y+12)
	count++;
	}  
  }
 
   
  
}