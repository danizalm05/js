/ EXAMINE THE DOCUMENT OBJECT  26.00//
//https://www.youtube.com/watch?v=wK2cBMcDTss&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=7
 console.log("EXAMINE THE DOCUMENT OBJECT ")
 //console.dir('document: ',document);
 console.log('',document.domain);
 console.log('document.URL: ',document.URL);
 console.log('document.title: ',document.title);
   document.title =  123;
  console.log('document.doctype: ',document.doctype);
  console.log('document.head: ',document.head);
  console.log('document.body: ',document.body);
  console.log('document.all: ',document.all);
  console.log('document.all[10]: ',document.all[10]);
  document.all[10].textContent = 'Hello';
 console.log('document.forms[0]: ',document.forms[0]);
 console.log('document.links: ',document.links);
 console.log('document.images: ',document.images);


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

 // EVENTS //

 var button = document.getElementById('button').addEventListener('click', buttonClick);

 function buttonClick(e){
     console.log('Button clicked');
     document.getElementById('header-title').textContent = 'Changed5';
     document.querySelector('#main').style.backgroundColor = '#44f4f4';
     console.log( 'e: ', e);

 console.log('e.target: ',e.target);
  console.log('e.target.id: ',e.target.id);
  console.log('e.target.className: ',e.target.className);
  console.log('e.target.classList: ',e.target.classList);
  var output = document.getElementById('output');
  output.innerHTML = '<br><h3>'+"document.getElementById('output')"+e.target.classList+'</h3>';
  output.innerHTML = '<br><h3>'+"e.type"+e.type+'</h3>';
//   // console.log(e.type);

//   //console.log(e.clientX);
//   //console.log(e.clientY);
outstr = '<br><h3>'+"e.offsetX = "+e.offsetX +'</h3>';
outstr = outstr + ' <h3>'+"e.offsetY = "+e.offsetY +'</h3>'
outstr = outstr + ' <h3>'+"e.clientX = "+e.clientX +'</h3>'
outstr = outstr + ' <h3>'+"e.clientY = "+e.offsetY +'</h3>'
//   //console.log(e.offsetX);
//   //console.log(e.offsetY);
output.innerHTML = outstr;
  console.log('e.altKey :',e.altKey);
  console.log('e.ctrlKey :',e.ctrlKey);
  console.log('e.shiftKey :',e.shiftKey);
  }

var button = document.getElementById('button2');
var box = document.getElementById('box');
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');


 //itemInput.addEventListener('keydown', runEvent);
 //itemInput.addEventListener('keyup', runEvent);
 //itemInput.addEventListener('keypress', runEvent);

 //itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

 itemInput.addEventListener('cut', runEvent);
 itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

var select = document.querySelector('select');
 select.addEventListener('change', runEvent);
 select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  console.log(e.target.value);
  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
//   output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
//   document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}
