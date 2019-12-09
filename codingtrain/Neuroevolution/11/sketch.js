
// https://github.com/CodingTrain/Toy-Neural-Network-JS

let brain;

function setup() {
    noCanvas();
    brain = new NeuralNetwork(2, 4, 1);
    console.log(brain);
    let child = brain.copy();
    console.log(child);
    child.mutate(0.5);
}

function draw() {
  background(0);

  }
