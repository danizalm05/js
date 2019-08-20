//v-events.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
   

 
 
//44:01  line 394    
 
 
document.write("<b>EVENT HANDLING </b>  <br />");
 
  
// ---------- EVENT HANDLING ----------
function openAlert(mess){
  alert(mess);
}
 
 
// ---------- DATE ----------
// Get a Date object
var curDate = new Date();
 
document.write("Date : ", curDate.getDate(), "<br />");
document.write("Month : ", curDate.getMonth(), "<br />");
document.write("Day : ", curDate.getDay(), "<br />");
document.write("Year : ", curDate.getFullYear(), "<br />");
document.write("Time : ", curDate.getHours(), ":", curDate.getMinutes(),
  ":", curDate.getSeconds(), ":", curDate.getMilliseconds(), "<br />");
// Create a Date object for my birthday
var myBD = new Date("December 21, 2015");
 
var msForBD = myBD.getTime();
var timeNow = curDate.getTime();
var tilMyBD = msForBD - timeNow;
 
document.write("Days til Birthday : ", tilMyBD / (1000 * 60 * 60 * 24), "<br />");
 
//51:40  line 463



function getChar(event) {
 
  //which is a property of  the event object.
  // It contains the key code of the pressed key  

  if (event.which == null) {
 
    // Return the char if not a special character
    return String.fromCharCode(event.keyCode); // IE
  } else  if (event.which!=0 && event.charCode!=0) {
            return String.fromCharCode(event.which);   // Other Browsers
          } else {
                   return null; // Special Key Clicked
                 }
  }///getChar
 
 document.getElementById('charInput').onkeypress  =  function(event) {
  var char = getChar(event || window.event)
  if (!char) return false; // Special Key Clicked
 
  document.getElementById('keyData').innerHTML = char + " was clicked";
  return true;
}  
 
 
 //51:40  line 463
 // Change text when the input gains focus
document.getElementById('charInput').onfocus = function(event) {
  document.getElementById('keyData').innerHTML = "Input Gained Focus";
}
 
// Change text when the input loses focus
document.getElementById('charInput').onblur = function(event) {
  document.getElementById('keyData').innerHTML = "Input Lost Focus";
}
 
// Change text when text is selected
document.getElementById('charInput').onselect = function(event) {
  document.getElementById('keyData').innerHTML = "Text Selected";
}
 
// Add a listener that triggers a function on browser resize
window.addEventListener("resize", browserResized);
 
function browserResized() {
  document.getElementById('keyData').innerHTML = "I've been resized";
}
 
// Make image invisible on click
document.getElementById('logo').onclick = function(event) {
 
  // Change the class for the image
  document.getElementById('logo').className = "hidden";
 
  // Change the input element value
  document.getElementById('mouseInput').value = "Clicked on image with button " + event.button;
}
 
// Make image visible on click
document.getElementById('logoButton').onclick = function(event) {
  document.getElementById('logo').className = "show";
}
 
 
 
 // Change image src on mouseover
document.getElementById('logo').onmouseover = function(event) {
  document.getElementById('logo').src = "ntt-logo-horz.png";
  document.getElementById('mouseInput').value = "Mouse Over image";
}
 
// Change image src back on mouseout
document.getElementById('logo').onmouseout = function(event) {
  document.getElementById('logo').src = "ntt-logo.png";
  document.getElementById('mouseInput').value = "Mouse Left image";
}
 
// Get mouse x y coordinates
document.body.onmousemove = function(e) {
    e = e || window.event;
 
    // Get pageX, pageY : Mouse position relative to the html doc
    var pageX = e.pageX;
    var pageY = e.pageY;
    if (pageX === undefined) {
 
      // clientX, clientY : Mouse position relative to the browsers viewport
      // scrollLeft, scrollTop : Pixels an element is scrolled left or
      // from the top
       pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
       pageY = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
    }
 
    document.getElementById('mouseX').value = pageX;
    document.getElementById('mouseY').value = pageY;
};
 
 // Clear all input elements
document.getElementById('clearInputs').onclick = function(event) {
  var inputElements = document.getElementsByTagName('input');
 
  for (var i = 0; i < inputElements.length; i++) {
     if (inputElements[i].type == "text") {
         inputElements[i].value = "";
     }
    }
}
 
 
 
 // 1:03   line 567
 

