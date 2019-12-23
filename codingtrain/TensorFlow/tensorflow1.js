
// TensorFlow.js  6.2 3 lesson
// https://www.youtube.com/watch?v=KzWF_wzx9PU&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=3

//S6.4: TensorFlow.js: Memory Management - Intelligence and Learning
// https://www.youtube.com/watch?v=FbSlrm2GmC8&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=4
//https://www.youtube.com/watch?v=F4WWukTWoXY
// https://js.tensorflow.org/api/latest/
// https://js.tensorflow.org/api/latest/#Operations
//https://js.tensorflow.org/api/latest/#sequential
// 6:13

var   tense;
function setup() {
  noCanvas();
  frameRate(1);
  createCanvas(400, 400);
  // tf.tensor (values, shape?, dtype?)
  //tf.tensor([1, 2, 3, 4]).print();
 // values [0, 0, 127, 255, 100, 50, 24, 54]
 // shape: 2 matrix of size 2x2 -->  [2, 2, 2] (3 dim matrix)
 //dtype: int32
  const data1 = tf.tensor([0, 0, 127, 255, 100, 50, 24, 54],[2, 2, 2], 'int32');

  console.log("  console.log(data1)  ",data1);
  // console.log(data1.toString());
 data1.dispose();//Clean from memory
  const values = [];
  for ( let i =0; i < 30; i++){
       values[i] = random(0, 100);
  }
  const shape = [2,5,3];// shape: 2 matrix of size 5x3 (3 dim matrix)
  const data = tf.tensor(values, shape, 'int32');
  data.print();
  console.log(data );
  data.dispose();
  const ttf = tf.scalar(3.14);// single number tensor
   ttf.print();
  ttf.dispose();
 // Creates rank-3 tf.Tensor with the provided values,
 //shape and dtype.
  tense =  tf.tensor3d(values,shape,'float32');

//Promise
tense.data().then(function(stuff){
       console.log('** promisestuff ',stuff);
 });

 tense.print();//Output data in a matrix format
  console.log('data ------ Sync',tense.dataSync());//Output the data in one line
   //console.log(tense.get(1));   // Doesn't work
   console.log('---tense.data()---',tense.data());

  const vtense = tf.variable(tense);//Copy a tensor to a variable
  console.log('vtense =', vtense);
  vtense.dispose();
  tense.dispose();
}// setup



 function draw(){
   const values = [] ;
   for ( let i =0; i < 15; i++){
        values[i] = random(0, 100);
   }
   const shape  = [5,3];
   tf.tidy(myStuff);//Clean  all  tenser at the
                   // end of this function
   function myStuff(){
      const a =  tf.tensor2d(values,shape,'int32');
      const b =  tf.tensor2d(values,shape,'int32');
      const b_t = b.transpose();
      const c = a.matMul(b_t)  // or tf.matMul(a, b)  Dot product
   }//myStuff

  tf.tidy(()=> {  //The same with anonmous function
     const a =  tf.tensor2d(values,shape,'int32');
     const b =  tf.tensor2d(values,shape,'int32');
     const b_t = b.transpose();
     const c = a.matMul(b_t)  // or tf.matMul(a, b)  Dot product
  });

  //const test =  tf.tensor2d(values,shape,'int32');

  console.log("hello");
  console.log('numTensors  : ' + tf.memory().numTensors);//https://js.tensorflow.org/api/latest/#memory
 }
