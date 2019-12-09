 //https://www.youtube.com/watch?v=yNkAuWz5lnY&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=2
//https://learn.ml5js.org/docs/#/reference/index
//http://www.image-net.org/
let mobilenet;
let puffin;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let prob = results[0].confidence;
    console.log(  results[0].confidence);

    fill(0);
    textSize(64);
    text(label , 10, height - 100);
    createP(label);
    createP(prob);
  }
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('pf.jpg', imageReady);
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
