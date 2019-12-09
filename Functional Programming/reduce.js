//var fs = require('fs')
//import fs  from 'fs'
//www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3
//www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4
 // "Reduce: Part 3, 4  of Functional Programming in JavaScript" 
 //The reduce() method applies a function against an accumulator 
 //and each value of the array 
 //(from left-to-right) to reduce it to a single value

 
 var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

var totalAmount = 0;
console.log(orders);
for (var i =0; i < orders.length; i++){
	//console.log(orders[2]);
   totalAmount += orders[i].amount;
} 
console.log(totalAmount);


/* 
var oneVal = function(sum, order) {
  return sum + order.amount;
} 
 

var totalAmount = orders.reduce(oneVal(total, orders) , 0)*/

var intialSum = 0;
//order: the itrated item
var totalAmount2 = orders.reduce(function(sum, order) {
 console.log(sum, order);
 return sum + order.amount;
}, intialSum)
console.log(totalAmount2);
//The same with arrow function
var totalAmount3 = orders.reduce((sum, order) =>  
  sum + order.amount,intialSum);
 
console.log(totalAmount3);


//chaper 4 
output ="mark johansson waffle iron 80 2\n"
output = output + "mark johansson knife 10 4 \n"
output = output + " mark johansson blender 200 1\n"
output = output + "Nikita Smith waffle iron 80 1\n"
output = output + "Nikita Smith knife 10 2\n"
output = output + " Nikita Smith pot 20 3\n"
//5:30
var output1 = output.trim().split('\n');//each line an array item
//trim():  Remove space before string and  after 
  
var output2 = output1.map(x => x.split('\t'));
console.log(output1);
console.log(output2);
/*
out = output2.reduce( (customers,line) =>{
	       //Itreates  all  lines 
		   //console.log(line);
		    customers[line[0]] =customers[line[0]] ||[];
		    customers[line[0]].push({
			  name: line[1],
			  price: line[2],
			  quantity: line[3]
			 }) 
		   return customers 
		   },{});
console.log('out',JSON.stringify(out,null,2));*/
