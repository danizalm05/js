//https://www.youtube.com/watch?v=E-_Lc6FrDRw 40:35
 //https://github.com/curran/screencasts/tree/gh-pages/grapher
 //https://jsbin.com/pevivufujo/edit?html,css,js
 //https://jsbin.com/golicigiwa/edit?js,output      
 //http://mathjs.org/  Math.js is an extensive math library for JavaScript and Node.js
 
 //http://mathnotepad.com/   editor for your day-to-day mathematical calculations
 //  https://cdnjs.com/about
 var canvas = document.getElementById("myCanvas");
 var c=canvas.getContext("2d");
    /* Returns an object that provides methods and    	 properties for drawing on the canvas. http://www.w3schools.com/tags/ref_canvas.asp   */
 var n=100;
  // Define math  windowx
  
  var xMin=-10 ,xMax=10 ,yMin=-10 ,yMax=10;
  var math = mathjs(),
      expr = 'sin(x)*x',
      scope = {x: 0},
      tree = math.parse(expr, scope);
 
// This is the main program
 drawCurve(0,0,canvas.width,canvas.height);   
 initTextField();  
 
 
 function drawCurve() {
   var i;
   var xPixel, yPixel, percentX, percentY;
   var mathX,mathY;// math coordinate
   
   c.clearRect();
   c.beginPath();
   for( i =0;i<n;i++) {
	 percentX=i/(n-1);
	 mathX = percentX*(xMax-xMin)+xMin;
	  
	 mathY = evaluteMathExpr(mathX);
	 percentY=(mathY -yMin)/ (yMax-yMin)   ;
	
	 //console.log(percentY);
	 
	 xPixel=percentX*canvas.width;
	 yPixel=percentY*canvas.height; 
     c.lineTo(xPixel, yPixel);	
   }
   c.stroke();
}//drawCurve

function evaluteMathExpr(mathX){
	var  mathY ;
	scope.x = mathX;
	mathY =  tree.eval();
	return mathY;
}//evaluteMathExpr


function initTextField(){
	

// Make a jQuery selection to access the input DOM element.
  var input = $('#inputField');
      // Set the initial text value programmatically using jQuery.
  input.val(expr);
      
  // Listen for changes using jQuery.
  input.keyup(
        function (event) {
            exper = input.val(); 
            tree  = math.parse(expr, scope);
            drawCurve();
			console.log(exper)
          }
	);
}//initTextField

