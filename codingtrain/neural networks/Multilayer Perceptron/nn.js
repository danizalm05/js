//https://www.youtube.com/watch?v=MPmLWsHzPlU&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=13
//https://www.youtube.com/watch?v=r2-P1Fi1g60&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=15
//https://www.youtube.com/watch?v=qB2nwJxNVxM&list=PLRqwX-V7Uu6Y7MdSCaIfsxc561QI0U0Tb&index=17
//9:30
function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
}//sigmoid


function dsigmoid(y){ // derived of sigmoid
//  return  sigmoid(x) * (1-  sigmoid(x));
return y * (1-y);
}//dsigmoid

class NeuralNetwork {

   constructor( input_nodes,hidden_nodes, output_nodes) {
     this.input_nodes  = input_nodes;
     this.hidden_nodes = hidden_nodes;
     this.output_nodes = output_nodes;

     this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);  //weights between input and hidden
     this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes) ; //weights between hidden and output
     this.weights_ih.randomize();
     this.weights_ho.randomize();

     this.bias_h = new Matrix(this.hidden_nodes,1);  //bias of   hidden
     this.bias_o = new Matrix(this.output_nodes,1);  //bias of   hidden
     this.bias_h.randomize();
     this.bias_o.randomize();
     this.learning_rate = 0.1;
 }//constructor

feedforward(input_array){
  //www.youtube.com/watch?v=MPmLWsHzPlU&list=PLRqwX-V7Uu6Y7MdSCaIfsxc561QI0U0Tb&index=13
  let inputs = Matrix.fromArray(input_array);
  let hidden = Matrix.multiply(this.weights_ih,inputs);
  hidden.add(this.bias_h);

  // Activation  function
  hidden.map(sigmoid);
  // Generating the output's output!
  let output = Matrix.multiply( this.weights_ho ,hidden);
  output.add( this.bias_o);
  output.map(sigmoid);   // Activation  function

 return output.toArray();   //guess
}//feedforward



train (input_array, target_array){


  // ------Generating the hidden output
  let inputs = Matrix.fromArray(input_array);
  let hidden = Matrix.multiply(this.weights_ih,inputs);
  hidden.add(this.bias_h);

  // Activation  function
  hidden.map(sigmoid);
  // Generating the output's output!
  let outputs = Matrix.multiply( this.weights_ho ,hidden);
  outputs.add( this.bias_o);
  outputs.map(sigmoid);   // Activation  function
 ///------
  let targets = Matrix.fromArray(target_array); //Convert array to matrix object

 //calculate the error  Error= Ttarget -Output
 let output_errors = Matrix.subtract(targets, outputs);
 //let gradient =    outputs *(1 - outputs);
 //Calculate gradient
   //outputs.map(dsigmoid);
 let  gradients = Matrix.map(outputs,dsigmoid);
 gradients.multiply(output_errors);
 gradients.multiply(this.learning_rate);




     //Calculate deltas
 let hidden_T = Matrix.transpose(hidden);
 let weight_ho_deltas = Matrix.multiply(gradients, hidden_T);
    //Adjust the weights  by  deltas
 this.weights_ho.add(weight_ho_deltas);
     //Adjust the bias by its deltas (the gradients)
 this.bias_o.add(gradients);

 //Calculate the hidden layer error
 let who_t = Matrix.transpose(this.weights_ho);//Weights from Hidden to Output Transpose
 let hidden_errors = Matrix.multiply(who_t,output_errors);
 //Calculate the hidden gradient
 let hidden_gradient =  Matrix.map(hidden, dsigmoid);
 hidden_gradient.multiply(hidden_errors);
 hidden_gradient.multiply(this.learning_rate);

 //Calculate input -> hidden deltas
 let inputs_T = Matrix.transpose(inputs);
 let weight_ih_deltas = Matrix.multiply(hidden_gradient,hidden_T);


 this.weights_ih.add(weight_ih_deltas);

 //Adjust the
this.bias_h.add(hidden_gradient);

}//train

}//class NeuralNetwork
