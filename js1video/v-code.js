 // v-code.js
 // http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs


 var yourName = prompt("What is your name????");
 
   if(yourName != null){
 
    // Set text in an HTML element with the id sayHello
    // You concatenate (combine) strings with +
    document.getElementById("sayHello").innerHTML = "Hello " + yourName;
  } else {
 
    // Alert opens a popup that contains a message
    alert("Please Enter Your Name Next Time");
  }