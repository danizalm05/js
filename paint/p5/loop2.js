function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  var i, j, a=30;
  for(i=0;i<windowWidth;i++){//dark to light gradient
    stroke(255*i/windowWidth);
    strokeWeight(1);
    line(i,2 ,i,windowHeight);
    }
    
  for(i=0;i<windowWidth;i+=160){//tambura being played constantly at background
    for(j=0;j<a; j++){
    stroke((255*j/a),150);
    strokeWeight(1);
    line(j+i,210,j+i,windowHeight);  
  }
  for(j=0;j<a;j++){
    stroke(((a-j)*255/a),150);
    strokeWeight(1);
    line(a+j+i,110,a+j+i,windowHeight);
  }
  }
  
  for(i=0; i<=windowWidth; i+=89){
    for(j=0; j<=windowHeight;j+=70){
      stroke(0);
      if((i+1)%4 == 0) //basic thaalam is 4 beats
        fill(200)
      else
       fill(140);
  		strokeWeight(2);
      ellipse(i+45,j+30,90,60);
}}
  /*fill(50);
  noStroke();
  for(i=0; i<=windowWidth; i+=89)
  {
    for(j=0; j<=windowHeight;j+=70){
      if(((i+1)%4)==0);
      else 
        if(j==0)
        arc(i+45,j+30,86,56,-3.05,-2);
      else if(j==70)
        arc(i+45,j+30,90,60,0.0,1.2);
      else if(j==70*3)
        arc(i+45,j+30,90,60,-1.2,0);
      else if(j==70*4)
      {arc(i+45,j+30,90,60,0.0,1.2);
       arc(i+45,j+30,90,60,-1.2,0);}
      else{
        arc(i+45,j+30,86,56,-3.05,-2);
        arc(i+45,j+30,90,60,0.0,1.2);}
      
      
  }}*/
  
}