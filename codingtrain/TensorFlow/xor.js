//32:00
//Coding Challenge #106: XOR Problem with TensorFlow.js
 //https://www.youtube.com/watch?v=N3ZnNa01BPM&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=9
//https://github.com/CodingTrain/Toy-Neural-Network-JS

//https://www.tensorflow.org/js/
//         https://js.tensorflow.org/api/latest/
//Basic    https://js.tensorflow.org/api/latest/#layers.dense
//Models   https://js.tensorflow.org/api/latest/#sequential

// https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_106_xor_tfjs/P5


// XOR with tf.js
// https://youtu.be/N3ZnNa01BPM
let nn;
let model;

let resolution = 25;
let cols;
let rows;

let xs;
// Training  data
const train_xs = tf.tensor2d([
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
]);
const train_ys = tf.tensor2d([
     [0],
     [1],
     [1],
     [0]
   ]);



/////////////////////////////////////////
function setup() {
  createCanvas(400, 400);
  cols = width / resolution;
  rows = height / resolution;

  // Create the input data
  let inputs = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols;
      let x2 = j / rows;
      inputs.push([x1, x2]);
    }
  }
  xs = tf.tensor2d(inputs);

  model = tf.sequential();
  let hidden = tf.layers.dense({
    inputShape: [2],
    units: 16,
    activation: 'sigmoid'
  });
  let output = tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  });
  model.add(hidden);
  model.add(output);

  const optimizer = tf.train.adam(0.5);
  model.compile({
    optimizer: optimizer,
    loss: 'meanSquaredError'
  });

  setTimeout(train, 10);
}

function train() {
  trainModel().then(result => {
    ///console.log(result.history.loss[0]);
    setTimeout(train, 10);
  });
}

function trainModel() {
  //https://js.tensorflow.org/api/latest/#tf.LayersModel.fit
  return model.fit(train_xs, train_ys, {
    shuffle: true,
    epochs: 1
  });
}//setup
/////////////////////////////////////////


function draw() {
  background(0);

  tf.tidy(() => {//Tidy means, clean memory at the end of ths  block
          // Get the predictions
    let ys = model.predict(xs);
    let y_values = ys.dataSync();

    // Draw the results
    let index = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let br = y_values[index] * 255;
        fill(br);
        rect(i * resolution, j * resolution, resolution, resolution);
        fill(255 - br);
        textSize(8);
        textAlign(CENTER, CENTER);
        text(
          nf(y_values[index], 1, 2),
          i * resolution + resolution / 2,
          j * resolution + resolution / 2
        );
        index++;
      }
    }
  }

);//end of tidy block
}
