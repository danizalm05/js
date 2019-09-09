// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
//
var nums =[100,25,12,72];
var num = 23;
var idx =0;
var words =["sdffsdfsdf","ddd" ," df35dd"];
function setup() {
 createCanvas(600, 400);


}

function draw() {
  background(20);
  fill(255);
  ellipse(100,200,num,num);
  ellipse(150,250,nums[2],nums[2]);
  text(words[idx],12,200)

 }
 function mousePressed(){
   idx = idx+1;
   if (idx == words.length) {
     idx=0;
   }
    
 }
