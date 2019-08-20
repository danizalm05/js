//v-dom.js
// MANIPULATING THE DOM  
// http://www.w3schools.com/jsref/dom_obj_document.asp
// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
    
 // 1:05   line 527
 


// Get current web page info
document.write("Current URL : ", window.location.href, "<br />");
document.write("Current Host : ", window.location.hostname, "<br />");
document.write("Current Path : ", window.location.pathname, "<br />");
 
 // Change site on button click
document.getElementById('goToGoogle').onclick = function(event) {
  window.location.href = "http://google.com";
  // OR
  // window.location.assign("http://google.com");
}
 
// Go forward a page on click
document.getElementById('forwardPage').onclick = function(event) {
  history.forward();
}
 
// Go back a page on click
document.getElementById('forwardPage').onclick = function(event) {
  history.back();
}
 
// Use history.go(-2) or history.go(2) to jump multiple pages
 
// Reload page on button click
 ////////////////////////////////////////






 // Reload page on button click
document.getElementById('reload').onclick = function(event) {
  window.location.reload(true);
}
 
// You can get all ps and then target them like an array
var pElements = document.getElementsByTagName('p');
pElements[3].style.backgroundColor = "#EFDECD";
 
// Target the html
//document.childNodes[1].style.backgroundColor = "#FAEBD7";
 
// Change the color of the 1st child in sampDiv2
var sampDiv2 = document.getElementById('sampDiv2');
sampDiv2.childNodes[0].style.backgroundColor = "#F0FFFF";
 
// Style the 1st child of sampDivs 1st child
sampDiv2.childNodes[0].childNodes[1].style.backgroundColor = "#BFAFB2";
 
// JavaScript can get confused by text nodes when targeting elements
// Text nodes are whitespace, which nodeType will identify with a 3
// while elements as a 1
// You can eliminate text nodes by deleting whitespace or by using a
// minimizer (lastChild and firstChild may not work)
document.write("Node Type : ", sampDiv2.childNodes[0].childNodes[0].nodeType, "<br />");
 
document.write("Node Name : ", sampDiv2.childNodes[0].childNodes[0].nodeName, "<br />");
 
sampDiv2.childNodes[1].childNodes[3].style.backgroundColor = "#BFAFB2";
// 1:15   line 677


// Changing element attributes
var nttLogo2 = document.getElementById('logo2');
 
// Check for attributes
document.write("Logo has alt : ", nttLogo2.hasAttribute("alt"), "<br />");
 
// Change attribute
nttLogo2.setAttribute("alt", "NTT Logo 2");
 
// Get attribute
document.write("Logo alt Value : ", nttLogo2.getAttribute("alt"), "<br />");
 
// Get all attributes and print them
var attribList = document.getElementById('logo2').attributes;
 
for(i = 0; i < attribList.length; i++){
  document.write("Attribute ", i, " : ", attribList[i].nodeName, " : ", attribList[i].nodeValue, "<br />");
}
 
// Add a p element after setting an attribute and text
var paragraph3 = document.createElement("p");
 
paragraph3.setAttribute("id", "paragraph3");
 
paragraph3.innerHTML = "mmmmmmmmmmmmmmmmProin eget turpis eget quam luctus malesuada ut ac nulla.";
 
sampDiv2.appendChild(paragraph3);
// Insert the element before the 1st child
sampDiv2.insertBefore(paragraph3, sampDiv2.childNodes[0]);
 //  1:19:55  line 711
