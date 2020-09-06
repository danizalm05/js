
// TensorFlow.js  6.2 3 lesson
// https://www.youtube.com/watch?v=KzWF_wzx9PU&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=3
// https://www.youtube.com/watch?v=Qt3ZABW5lD0&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ
//S6.4: TensorFlow.js: Memory Management - Intelligence and Learning
// https://www.youtube.com/watch?v=FbSlrm2GmC8&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=4
//https://www.youtube.com/watch?v=F4WWukTWoXY

//6.5
//https://www.youtube.com/watch?v=F4WWukTWoXY&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=7



//                    API
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
  
  const data11  = tf.tensor([1, 2, 3, 4])
  
  data11.print()
 
 
 // values [0, 0, 127, 255, 100, 50, 24, 54]
 // shape: 2 matrix of size 2x2 -->  [2, 2, 2] (3 dim matrix)
 // dtype: int32
  const data1 = tf.tensor([0, 0, 127, 255, 100, 50, 24, 54],[2, 2, 2], 'int32');

  console.log("  console.log(data1)  ",data1);
  console.log("  console.log(data1).toString()  ",data1.toString() );
   
 data1.dispose();//Clean from memory
  const values = [];
  for ( let i =0; i < 30; i++){
       values[i] = random(0, 100);
  }
  const shape = [2,5,3];// shape: 2 matrix of size 5x3 (3 dim matrix)
  const data = tf.tensor(values, shape, 'int32');
  data.print();
  console.log("data ==> ",data );
  data.dispose();
  const ttf = tf.scalar(3.14);// single number tensor
  console.log("pi ==> " );
  ttf.print();
  ttf.dispose();
 
 // Creates rank-3 tf.Tensor with the provided values,
 //shape and dtype.
  tense =  tf.tensor3d(values,shape,'float32');

//Promise
tense.data().then(function(stuff){
       console.log('** promise  stuff ',stuff);
 });
 console.log('tense.print() ------  ')
 tense.print();//Output data in a matrix format
  console.log('data ------ Sync',tense.dataSync());//Output the data in one line
   //console.log("tense.get(1)",tense.get(1));   // Doesn't work
   console.log('---tense.data()---',tense.data());
  //https://js.tensorflow.org/api/latest/#variable
  const vtense = tf.variable(tense);//Copy a tensor to a variable
  console.log('vtense =', vtense);
  vtense.dispose();
  tense.dispose();
}// setup

//opreation  10:40
// https://js.tensorflow.org/api/latest/#Operations


const a = tf.tensor1d([1, 2, 3, 4]);
const b = tf.tensor1d([10, 20, 355, 40]);
console.log('a.add(b).print() ');
a.add(b).print();

const a1 = tf.tensor2d([1, 2], [1, 2]);//1 row 3 column
const b1 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
console.log('a1.matMul(b1).print() ');
a1.print()
b1.print()
a1.matMul(b1).print();  // or tf.matMul(a, b)




 function draw(){
   const values = [] ;
   for ( let i =0; i < 150000; i++){
        values[i] = random(0, 100);
   }
   const shape  = [500,300];
   tf.tidy(myStuff);//Clean  all  tenser at the
                   // end of this function
   function myStuff(){
      const a =  tf.tensor2d(values,shape,'int32');
      const b =  tf.tensor2d(values,shape,'int32');
      const b_t = b.transpose();
      const c = a.matMul(b_t)  // or tf.matMul(a, b)  Dot product
   }//myStuff

  tf.tidy(()=> {  //Clean  all  tenser at the
                   // end of this function
     const a =  tf.tensor2d(values,shape,'int32');
     const b =  tf.tensor2d(values,shape,'int32');
     const b_t = b.transpose();
     const c = a.matMul(b_t)  // or tf.matMul(a, b)  Dot product
      console.log("hello");
 });

  //const test =  tf.tensor2d(values,shape,'int32');

 
  console.log('numTensors  : ' + tf.memory().numTensors);//https://js.tensorflow.org/api/latest/#memory
 }
