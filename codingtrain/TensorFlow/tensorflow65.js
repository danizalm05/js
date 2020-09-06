
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
//Add the layers
model.add(hidden);

//Create another layer
const output = tf.layers.dense({
   units: 1,
   //Input shape (4) is "inferred" from previous layer (hidden)
   activation: 'sigmoid'
});


model.add(output);
//https://js.tensorflow.org/api/latest/#tf.LayersModel.compile
//https://js.tensorflow.org/api/latest/#Models-Classes


//An  optimizer using gradient descent
const sgdOpt = tf.train.sgd(0.5); //Learning rate

//https://js.tensorflow.org/api/latest/#Training-Losses
//Compile the model
model.compile({
  optimizer: sgdOpt,
  loss: tf.losses.meanSquaredError
});

const xs = tf.tensor2d([
         [0, 0],
		     [0.5, 0.5],
	    	 [1, 1]

])

 const ys = tf.tensor2d([
    [1],
    [0.5],
	  [0]

  ]);

/*const config = {
	verbose: true,
    epochs: 95
}*/

train().then( () =>
   {
      console.log("training  complete")
      let outputs = model.predict(xs);
      outputs.print();
    })
// 18:31 fit https://js.tensorflow.org/api/latest/#tf.LayersModel.fit
async function train () {
  for(let i =0; i<100; i++){
        const config = {
          shuffle:true,
          epochs:5
        }
      	const response = await model.fit(xs, ys, config)//Wait for result
        console.log(response.history.loss[0]);
  }
}


/*
const inputs = tf.tensor2d([
         [0.25, 0.92],
		 [0.27, 0.2],
		 [0.4, 0.7],
		 [0.1, 0.22],
])

 let outputs = model.predict(inputs);
 outputs.print();
 */
