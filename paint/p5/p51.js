 function setup() {
  createCanvas(600, 600);
  //background(177, 174, 113);
  background( 150);
}

function draw() {
  stroke(18,80,80);
  strokeWeight(1);	
  fill(120,10,10)
  strokeWeight(2);
  rect(100, 100, 80, 80);
  line(0,10,134,155);
  for (var i=0;i<width;i++){
	 stroke(i/width*255,10+i,66) ;
	 line(i,0,i,height );  
	  
  }
 
   
  
}