//ml5.js: Webcam Image Classification
//code:  https://github.com/CodingTrain/website/tree/master/Courses/beginner_ml5/03_video_classification/P5
//https://www.youtube.com/watch?v=D9BoBSkLvFo
 //https://learn.ml5js.org/docs/#/reference/index
//http://www.image-net.org/
let mobilenet;
let video, label='';
let prob;

function modelReady() {
  //console.log('Model is ready!!!');
  mobilenet.predict( gotResults);
}

function gotResults(error, results) {
  console.log("Inside gotResults function");
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    prob = results[0].confidence;
    label = results[0].label;
    //console.log(label);
    //let prob = results[0].confidence;

    mobilenet.predict( gotResults);
  }
}//gotResults



function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video,modelReady);
}//setup


function draw(){
  background(0);
  image(video,0,0);
  fill(255);
  textSize(32);
  text(label+'  ' +prob, 10, height - 20);
}//draw
