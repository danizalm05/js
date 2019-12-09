//ml5.js  3, 4: Transfer Learning with Feature Extractor
//code:  https://github.com/CodingTrain/website/tree/master/Courses/beginner_ml5/03_video_classification/P5
//https://www.youtube.com/watch?v=kRpZ5OqUY6Y   1
//https://www.youtube.com/watch?v=eeO-rWYFuG0   2
 //https://learn.ml5js.org/docs/#/reference/index
 //https://teachablemachine.withgoogle.com/
//http://www.image-net.org/
// Transfer Learning Feature Extractor Classification with ml5
// https://youtu.be/eeO-rWYFuG0

let mobilenet;
let classifier;
let video;
let label = 'test';
let ukeButton;
let whistleButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}


function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {

    //console.log(result[0].label);
    label = result[0].label;
    classifier.classify(gotResults);
  }
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  ukeButton = createButton('happy');
  ukeButton.mousePressed(function() {
    classifier.addImage('happy');
  });

  whistleButton = createButton('sad');
  whistleButton.mousePressed(function() {
    classifier.addImage('sad');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });


}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}
