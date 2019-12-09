//ml5.js  6: feature_extractor_load_save.js
//code: https://github.com/CodingTrain/website/blob/master/Courses/beginner_ml5/06_feature_extractor_load_save/P5/index.html
//https://www.youtube.com/watch?v=eU7gIy3xV30&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=7

//
// Transfer Learning Feature Extractor Classification with ml5
// https://youtu.be/eeO-rWYFuG0

let mobilenet;
let classifier;
let video;
let label = 'loading model';
let happyButton;
let sadButton;
let trainButton;


function modelReady() {
  console.log('Model is ready!!!');
  // classifier.load('model.json', customModelReady);
}

// function customModelReady() {
//   console.log('Custom Model is ready!!!');
//   label = 'model ready';
//   classifier.classify(gotResults);
// }

function videoReady() {
  console.log('Video is ready!!!');
 

}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  happyButton = createButton('happy');
  happyButton.mousePressed(function () {
    classifier.addImage('happy');
  });

  sadButton = createButton('sad');
  sadButton.mousePressed(function () {
    classifier.addImage('sad');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function () {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function () {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
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
    label = result;
    classifier.classify(gotResults);
  }
}
