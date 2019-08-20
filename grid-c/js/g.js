 //https://www.granneman.com/webdev/editors/sublime-text/

 //www.html5canvastutorials.com/tutorials/html5-canvas-circles/
 //github.com/curran/screencasts/blob/gh-pages/mathPatterns/changingColors/script.js
 var c = canvas.getContext("2d");
 
 var i,j,u,v, x, y,
     m = 30,
     n = 30,
     size = 6,
     t = 0;
 

  var c = canvas.getContext('2d');

var i, j, u, v, x, y,
    m = 30,
    n = 30,
    size = 5,
    t = 0;

function draw(){
  var sin = Math.sin,
      cos = Math.cos;
  
  c.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < m; i++){
    for(j = 0; j < n; j++){
      u = i/(m-1); 
      v = j/(n-1);
      x = u * canvas.width + sin(t+j)*4;
      y = v * canvas.height+sin(t+j)*2;
      
      size = (sin(u*30+t)+1)*2;
      
      c.beginPath();
      c.arc(x, y, size, 0, 2 * Math.PI);
      if(size > 3){
        c.fillStyle = "blue";
      }
      else{
        c.fillStyle = "red";
      }
      c.fill();
    }
  }
  t = t + 0.1;
  requestAnimationFrame(draw);
}

draw();//draw
  draw();