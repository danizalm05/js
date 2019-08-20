 function setup() {
  /*
  1024 x 768
  
  line(), triangle(), quad(), rect(), ellipse(), and arc().
  must ues:  stroke(), fill(), and background() 
  You will need to submit a zip file that only contains the following files:

    Your p5js sketch, which must be named "sketch.js"
    A cropped version of the reference image that your sketch recreates, 
	which must be named "crop.jpg" or "crop.png"
    An html file, called 'index.html' that loads your 'sketch.js' file. 
	If you are using the P5js IDE this file gets created with your sketch. 
	If you are developing outside of the P5js IDE, you can download the attached 
	coursework resource called 'index.html'.
    P5js Library Files - 'p5.js' etc. Either in a sub-directory or the root directory,
	wherever your index file expects them to be. These files will be used to generate 
	course gallery views.
    Please do not include any js files that are not part of your program.

  
   1024x768
  
  */
  createCanvas(1024, 768);
  background(118, 178, 153);
   
}

function draw() {
  stroke(18,80,80);
  strokeWeight(1);	
 noStroke(); 
      
    // Set the fill color 
    fill(70,100,74); 
    quad(1 , 2,   26, 2,   12, 77,   1, 79 );
    quad(0 , 79,   34, 85,   22, 504,   0, 505 );

    fill(107,145,108)
	
    rect(30, 86, 90, 150);	
    quad(32 , 220,   85, 223,   72, 480,   22, 493 );
    fill(131,122,102) 
    quad(112 , 3,   237, 3,   237, 92,   112,  87 );
	fill(90,110,83) 
     quad(122 , 89,   237, 86,   237, 500,   122,  500 );
    fill(109,122,99); 
     quad(122 , 490,   237, 490,   237, 700,   122,  700 );
  
    fill(158,163,123);
	ellipse(700,450,470,455);


  
    strokeWeight(4);
    fill(228,200,163);
  ellipse(494,434,520,514);
  noStroke(); 
  fill(162,180,133);
  ellipse(563,372,345,330);
  
  fill(77,138,105); 
  stroke(28,110,93);
     strokeWeight(4);
       
    triangle(807, 1, 876, 1, 807, 82);  
	 
	  noStroke(); 
	  fill(77,90,50); 
	quad(937 , 4,  1024, 4,   1024, 96,   935,  95 );
	 fill(86,91,71); 
	quad(914 , 93,  1024, 94,   1024, 436,   920,  430 );
	 fill(75,80,60); 
	quad(920 ,430,  958, 430,   938, 775,   880,  768 );
	 fill(5,8,6); 
	quad(232 ,650,  890, 690,   880, 760,  232,  768 );

}