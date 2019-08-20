 // v-code.js
 // http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs


  // Using + instead of , will treat everything as a string unless you use ()
document.write("5 + 4 = " + (5 + 4) + "<br/>");
 
document.write("5 - 4 = ", 5 - 4, "<br/>");
document.write("5 * 4 = ", 5 * 4, "<br/>");
document.write("5 / 4 = ", 5 / 4, "<br/>"); //5 / 4 = 1.25
 
// Modulus remainder of a division
document.write("5 % 4 = ", 5 % 4, "<br/>");  //5 % 4 = 1
 

var maxNum = Number.MAX_VALUE;
 
document.write("Max Num = ", maxNum, "<br/>");
document.write("Min Num = ", Number.MIN_VALUE, "<br/>");
 
// Numbers have 16 digits of precision
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");
 
// Round number to 2 decimal places
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");

var randNum=5;

document.write("randNum++ = ",randNum++,"<br/>");//print 5
document.write("++randNum = ",++randNum ,"<br/>");// prind 7
document.write("randNum += 5 = ", randNum += 5, "<br/>");
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");
// 10:10   line   93
 
// Math properties and methods
 document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");
 