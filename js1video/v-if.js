//v-str.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
//18:19  line 170

// ---------- CONDITIONALS ----------
// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && \\ !
 
var age = 8;
 
if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
 
document.write("'true || false' = ", true || false, "<br />");
 
document.write("'!true' = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");

// Switch is used to match a limited number of options
var age = 5;
switch(age) {
  case 5 :
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;
 
  case 7 :
    document.write("Go to 1st Grade<br />");
    break;
 
  default :
    document.write("Subtract 5 from your age<br />");
}

 