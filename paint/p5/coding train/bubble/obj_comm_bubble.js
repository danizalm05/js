
//https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33

 let  bubbles = [];
 //let  unicorn;

function setup() {
  createCanvas(600, 400);
  for (let i =0;i <200; i++){
    let x = random(width);
    let y = random(height);
    let r = random(5,8);
    bubbles[i] = new Bubble(x,y,r);

  }

 }



function draw() {
  background(50);


  //for (let i = 0 ;i < bubbles.length; i++){
  for(let b of bubbles) {
      b.show();
      b.move();
      let overlapping = false;
      for (let other of bubbles){
              if (b != other && b.intersects(other)){
                  overlapping = true;

            }
             if(overlapping){
                      b.changeColor(255);
               }else {  b.changeColor(0);}
      }

  }

 }
