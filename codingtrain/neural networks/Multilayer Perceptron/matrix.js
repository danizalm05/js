//https://www.youtube.com/watch?v=puWqNBFDMMk&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=8
/*
https://www.youtube.com/watch?v=NgZAIkDcPkI&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=9
https://www.youtube.com/watch?v=HuZbYEn8AvY&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=11
14:00
This is the ES6  version   of matrix libs
the matrix1.js contains the   Simple virsion

*/

/*
Using static methods, we can access only the elements in
a class but not the elements in the object.
It is possible to call  a static method only inside
a class but not in an object.

*/
class Matrix{
 constructor (rows, cols){
   this.rows = rows;
   this.cols = cols;
   this.data = [];
  for (let i = 0; i< this.rows; i++){
     this.data[i] = [];
     for (let j = 0;j< this.cols; j++){
        this.data[i][j] = 0;
     }
   }
 }//constractor Matrix

static fromArray(array){
  //Translate an array to Matrix object
  let m = new Matrix(array.length,1);
  for(let i=0; i < array.length; i++){
    m.data[i][0] = array[i];
  }
  //m.print();
  return m;
}//fromArray


static subtract(a, b){
  let result = new Matrix(a.rows, a.cols);
  for (let i = 0; i< result.rows; i++){
     for (let j = 0;j< result.cols; j++){
       result.data[i][j] =  a.data[i][j] -  b.data[i][j];
     }
  }
  return result;
}//subtract


toArray(){
 //  //Translate Matrix object to one dim array
 let arr = [];
 for (let i = 0; i< this.rows; i++){
    for (let j = 0;j< this.cols; j++){
       arr.push(this.data[i][j]);
    }
 }
 return arr;
}//toArray




 randomize(){

  for (let i = 0; i< this.rows; i++){
     for (let j = 0;j< this.cols; j++){
         this.data[i][j]  = Math.random()*2 -1;// {-1 1}
     }
  }

}//randomize



add(n){
  if (n instanceof Matrix) { //n is a matrix

       for (let i = 0; i< this.rows; i++){
          for (let j = 0;j< this.cols; j++){
              this.data[i][j] += n.data[i][j];
          }
        }
   }else{//n is a number
         for (let i = 0; i< this.rows; i++){
             for (let j = 0;j< this.cols; j++){
                 this.data[i][j]  += n;
         }
      }
  }//else
}//add

static transpose(matrix){
 let  result = new Matrix(matrix.cols, matrix.rows);//Error
//  console.log(matrix.cols,':', matrix.rows);
 for (let i = 0; i< matrix.rows; i++){
     for (let j = 0; j< matrix.cols; j++){
         result.data[j][i] = matrix.data[i][j];
     }
  }
  return result;
}//transpose

static multiply(a, b){
  // matrix product
  if(a.cols !== b.rows){
   console.log("a.cols !== b.rows");
   return undefined;
  }
  let  result = new Matrix(a.rows, b.cols);
  for (let i = 0; i< result.rows; i++){
   for (let j = 0; j< result.cols; j++){
     //Dot product of values in col
       let sum = 0;
       for (let k = 0; k< a.cols; k++){
             sum += a.data[i][k] * b.data[k][j];
        }
       result.data[i][j] = sum;
    }
  }
  return result;
}//static multiply

multiply(n){
  //scalar product
  for (let i = 0; i< this.rows; i++){
       for (let j = 0;j< this.cols; j++){
           this.data[i][j] *= n;
        }
   }
 }//multiply

 map(func){
   //Apply  a function 'func' to every element of matrix
   for (let i = 0; i< this.rows; i++){
        for (let j = 0;j< this.cols; j++){
            let val = this.data[i][j];
            this.data[i][j] = func(val);
            //console.log(this.data[i][j],' --- ',val);
         }
    }
  }//map

static  map(matrix, func){
   let result = new Matrix(matrix.rows,matrix.cols) ; //weights between hidden and output

    for (let i = 0; i< matrix.rows; i++){
         for (let j = 0;j< matrix.cols; j++){
             let val = matrix.data[i][j];
             result.data[i][j] = func(val);
             //console.log(this.data[i][j],' --- ',val);
          }
     }
     return result;
   }// static map




print(){
  //console.table(this.constructor.name);
  console.table(this.data);
}//print

}//class Matrix
