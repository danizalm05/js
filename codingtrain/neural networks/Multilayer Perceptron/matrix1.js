//https://www.youtube.com/watch?v=uSzGdfdOoG8&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=6
/*
This is the simple virsion of matrix libs
the matrix.js contains the ES6  version

*/
 function  Matrix(rows, cols){
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];
  for (var i = 0; i< this.rows; i++){
     this.matrix[i] = [];
     for (var j = 0;j< this.cols; j++){
        this.matrix[i][j] = 0;
     }
   }
 }//Matrix

Matrix.prototype.randomize = function(){
  for (var i = 0; i< this.rows; i++){
     for (var j = 0;j< this.cols; j++){
         this.matrix[i][j]  = Math.floor(Math.random()*10);
     }
  }

}//randomize
Matrix.prototype.multiply = function(n){
    for (var i = 0; i< this.rows; i++){
       for (var j = 0;j< this.cols; j++){
           this.matrix[i][j] *= n;
       }
    }
}//Matrix.prototype.multiply

Matrix.prototype.add = function(n){
  if (n instanceof Matrix) { //n is a matrix
       console.log("n is a matrix")
       for (var i = 0; i< this.rows; i++){
          for (var j = 0;j< this.cols; j++){
              this.matrix[i][j] += n.matrix[i][j];
          }
        }
   }else{//n is a number
         for (var i = 0; i< this.rows; i++){
             for (var j = 0;j< this.cols; j++){
                 this.matrix[i][j]  += n;
         }
      }
  }//else
}


var   m1 = new Matrix(3,2);
var   m2 = new Matrix(3,2);
if (m1 instanceof Matrix) {
      console.log("m is instaceof Matrix not instaceof Array");
    }

m1.randomize();
m2.randomize();

//console.table(m1.matrix);
console.table(m2.matrix);
m2.add(4);
console.table(m2.matrix);
