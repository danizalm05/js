
// 6.5: TensorFlow.js: Layers API Part 1 - Intelligence and Learning
//6.6: TensorFlow.js: Layers API Part 2 - Intelligence and Learning
// https://www.youtube.com/watch?v=F4WWukTWoXY
// https://www.youtube.com/watch?v=iUiOx2fBx18
 



//Models   https://js.tensorflow.org/api/latest/#sequential
//Basic    https://js.tensorflow.org/api/latest/#layers.dense
//https://js.tensorflow.org/api/latest/#layers.dense


//This is the model
const model  = tf.sequential();

 //Create the hidden layer
 //dense is a "full connected  layer"
const hidden = tf.layers.dense({
   units: 4,  //Number  of nodes
   inputShape: [2],  //Input shape
   activation: 'sigmoid'
});
//Add the layer
model.add(hidden);

//Create another layer
const output = tf.layers.dense({
   units: 1,
   //Input shape is "inferred" from previous layer
   activation: 'sigmoid'
});
//https://js.tensorflow.org/api/latest/#tf.Sequential.add

model.add(output);
//https://js.tensorflow.org/api/latest/#tf.LayersModel.compile
//https://js.tensorflow.org/api/latest/#Models-Classes


//An  optimizer using gradient descent
const sgdOpt = tf.train.sgd(0.1); //Learning rate

//Compile the model
model.compile({
  optimizer: sgdOpt,
  loss: tf.losses.meanSquaredError
});
    //Traning  data
  const xs = tf.tensor2d([
     [0,0],
     [0.5,  0.5],
     [1,  1]
   ]);

  const ys = tf.tensor2d([
    [1],
    [0.5],
    [0 ]
  ]);
//https://js.tensorflow.org/api/latest/#tf.Sequential.fit
 //const history0 =model.fit(xs, ys).then(history0 =>console.log(history));
 //fit is a function that exectes asynchronously
 //console.log(history0);


/*
 let ys = model.predict(xs);
 ys.print();
*/
// fit (x, y, args?) Trains the model for a fixed number
// of epochs (iterations on a dataset).
/*
const config = {
   verbose: true,
   epochs: 115
}
const history  =model.fit(xs, ys, config).then(response =>
      console.log("response.history.loss = ",response.history.loss[0]));
*/
//16:11

train().then( () => {
   console.log('Training is complete');
   let outputs = model.predict(xs);
    console.log('predict(xs) = ');
   outputs.print();

 });
async function train(){

  for(let i = 0; i < 1000; i++){
      const config ={
        shuffle: true,
        epochs: 10
      }
      const response = await model.fit(xs,ys,config);
      console.log("history.loss = ",response.history.loss[0]);
  }
}
