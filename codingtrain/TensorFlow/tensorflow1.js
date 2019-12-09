
// TensorFlow.js  6.2 3 lesson
// https://www.youtube.com/watch?v=KzWF_wzx9PU&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=3
// https://www.youtube.com/watch?v=FbSlrm2GmC8&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=4
// https://js.tensorflow.org/api/latest/
//
// 10:00

var   tense;
function setup() {
  noCanvas();
  createCanvas(400, 400);
  // tf.tensor (values, shape?, dtype?)
  //tf.tensor([1, 2, 3, 4]).print();
 // values [0, 0, 127, 255, 100, 50, 24, 54]
 // shape: 2 matrix of size 2x2 -->  [2, 2, 2] (3 dim matrix)
 //dtype: int32
  const data1 = tf.tensor([0, 0, 127, 255, 100, 50, 24, 54],[2, 2, 2], 'int32');
  // data1.print();
  // console.log(data1);
  // console.log(data1.toString());

  const values = [];
  for ( let i =0; i < 30; i++){
       values[i] = random(0, 100);
  }
  const shape = [2,5,3];// shape: 2 matrix of size 5x3 (3 dim matrix)
  const data = tf.tensor(values, shape, 'int32');
  data .print();
  console.log(data );

  tf.scalar(3.14).print();// single number tensor

 // Creates rank-3 tf.Tensor with the provided values,
 //shape and dtype.
  tense=  tf.tensor3d(values,shape,'float32');

//Promise
/* tense.data().then(function(stuff){
       console.log('stuff ',stuff);
 }); */

 tense.print();//Output data in a matrix format
  console.log(tense.dataSync());//Output the data in one line
  //console.log(tense.get(20));   // Doesn't work
  const vtense = tf.variable(tense);//Copy a tensor to a variable
  console.log('vtense =', vtense);
 //Operations
 //https://js.tensorflow.org/api/latest/#Operations
//add
 const a = tf.tensor1d([1, 2, 3, 4]);
 const b = tf.tensor1d([10, 20, 30, 40]);

 a.add(b).print();  // [11, 22, 33, 44]
 //              or tf.add(a, b)

 const shapeA = [10,3];
 const shapeB = [3,10];
  const aa=  tf.tensor2d(values,shapeA,'int32');
  const bb=  tf.tensor2d(values,shapeB,'int32');
  const cc = a.mul(b).print();  // or tf.mul(a, b)

  //tf.matMul (a, b, transposeA?, transposeB?)
  // Computes the dot product of two matrices, A * B. These must be matrices.
  const c = aa.matMul(bb).print();  // or tf.matMul(a, b)


}// setup


//Functional Programming in JavaScript
//https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
//https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2
