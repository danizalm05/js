//v-str.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
// Convert strings to numbers 
document.write("Converted String : ", Number("3.14"), "<br />");
 
document.write("Converted String to Int : ", parseInt("5"), "<br />");
document.write("Converted String to Float : ", parseFloat("5.555"), "<br />");
 // ---------- STRINGS ----------
var randStr = "A long " + "string that " + "goes on and on";
 document.write("<b>The string ==> </b>",randStr  + "</br>");
 document.write("String length ",randStr.length + "</br>");
 document.write("Index for \"goes\":",randStr.indexOf("goes") + "</br>");
  // Return the value using a start and end index
document.write(" .slice(19, 23) = "+randStr.slice(19, 23) + "<br/>");
 
// Return everything after the start index
document.write(" .slice(19) = "+randStr.slice(19) + "<br/>");
 
// Return the value using the start index and length
document.write(" .substr(19, 4) ="+randStr.substr(19, 4) + "<br/>");

document.write(" .substr(19, 4) ="+randStr.substr(19, 4) + "<br/>");

// Replace a string
document.write(".replace('and on','forever')  ="+randStr.replace('and on','forever') + "<br/>");
 
// Get character at an index
document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");
 
// Split a string into an array
var randStrArray = randStr.split(" ");
 
// Trim white space
randStr = randStr.trim();
 
// Convert to uppercase
document.write(randStr.toUpperCase() + "<br/>"); 

// Convert to lowercase
document.write(randStr.toLowerCase() + "<br/>");
 
// Styling with JavaScript
var strToStyle = "Random String";
 
document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
document.write("Strike : ", strToStyle.strike(), "<br />");
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");
18:19  line 170