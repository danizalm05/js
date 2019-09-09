 //https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=24
let bubbles = [] ;

function setup() {
  createCanvas(600, 400);
  for(let i=0;i<7;i++){
    let x = random(width-20);
    let y = random(height-20);
    let r = random(10,50);
    let b = new Bubble(x,y,r);
    bubbles.push(b);
    }
}
// function mousePressed(){
//   for(let i=0;i<bubbles.length;i++){
//      bubbles[i].clicked(mouseX,mouseY);
//   }
// }
// function mouseDragged(){
//   r = random(5,12);
//   let b   = new Bubble(mouseX,mouseY,r);
//   bubbles.push(b);
// }

function mousePressed(){
    for(let i=bubbles.length-1;i>=0;i--){
  //for(let i=0;i<bubbles.length;i++){
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles.splice(i,1);//https://deaveloper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    }
  }
}//mousePressed



function draw() {
  background(20);

  for(let i=0;i<bubbles.length;i++){
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles[i].changeColor(255);
    }else{
     bubbles[i].changeColor(0);

    }
    bubbles[i].show();
    bubbles[i].move();
   }

}
