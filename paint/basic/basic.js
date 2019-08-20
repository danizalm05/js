   var canvas;
  var ctx;
    window.onload = function draw() {
         canvas = document.getElementById('tutorial');
         canvas.width = 340;
        canvas.height = 500;
        if (canvas.getContext) {
          ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgb(200, 0, 0)';
         // rect();
         //drLine();
        //drawTrig();
        //drawFace();
     drawArc();
        

     }
    }

function rect(){

      ctx.fillRect(10, 10, 50, 80);
      ctx.strokeRect(30, 120 , 50, 80);
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 60, 50, 50);
}


function drLine(){
	 drawLine(30,30,300,30,20,"orange", "butt"); 
     drawLine(30,80,300,80,30, "blue", "round"); //round cap
     drawLine(30,130,300,130,15, "teal", "square"); //square cap
}


function drawLine( xstart, ystart, xend, yend, width, color, cap ){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = cap;
  ctx.moveTo(xstart, ystart);
  ctx.lineTo(xend, yend);
  ctx.stroke();
  ctx.closePath();
  
}

function drawFace() {
	ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
	
}
    
function drawTrig() {
  

 
	ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }//drawtrig
 
   function drawArc() {
  
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
   
}  