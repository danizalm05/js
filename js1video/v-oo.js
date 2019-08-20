//v-dom.js
// MANIPULATING THE DOM  
// http://www.w3schools.com/jsref/dom_obj_document.asp
// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
    
 // 1:05   line 527
 


// Get current web page info
document.write("Current URL : ", window.location.href, "<br />");

 //  1:19:55  line 711
<!-- ---------- OO JAVASCRIPT ---------- -->
 
 
 
// Create a one customer object by defining the attributes of John Smith
// The variable is a reference to the object in memory
// with  this method you are creating only one object .
var cust1 = {
  name: "John Smith",
  street: "123 Main",
  city: "Pittsburgh",
  state: "PA",
  email: "jsmith@aol.com",
  balance: 120.50,
  payDownBal: function(amtPaid){
    this.balance -= amtPaid;
  },
  addToBal: function(amtCharged){
    this.balance += amtCharged;
  }
};
 
// Retrieve the value for the object
document.write("Customer Name : ", cust1.name, "<br />");

// Change the value for the object
cust1.street = "215 Main St";
document.write("Customer Address : ", cust1.street, "<br />");
 
// Add a property to cust1
cust1.country = "US";
document.write("Customer Country : ", cust1.country, "<br />");
 
// Delete a property
delete cust1.country;
 
// Cycle through all the properties for the object
for (var prop in cust1) {
    if (cust1.hasOwnProperty(prop)) {
        document.write(prop, "<br />");
    }
}
 
// Check if a property is in an object
document.write("name in cust1 : ", "name" in cust1, "<br />");
 
// Interact with an object using a function
function getInfo(cust){
  return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
}
 
document.write(getInfo(cust1), "<br />");
 
 
//    // 1:25   line 763 
// Call object methods

cust1.payDownBal(20.50);
cust1.addToBal(10.00);
 
document.write(getInfo(cust1), "<br />");
 
// Create an object constructor . With method you can create  many  //objects 

document.write("<br /><br /><br /><b>Create an object constructor</b><br /><br />");
function Customer(name, street, city, state, email, balance){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.email = email;
  this.balance = balance;
 
  this.payDownBal = function(amtPaid){
    this.balance -= amtPaid;
  };
  this.addToBal = function(amtCharged){
    this.balance += amtCharged;
  };
}

 //   creating objects 
var cust2 = new Customer("Sally Smith", "234 Main", "Pittsburgh", "PA", "ssmith@aol.com", 0.00);
 
cust2.addToBal(15.50);
 
// Define a shared prototype property for all objects
//  this is a static verible  definition
Customer.prototype.isCreditAvail = true;
 
// We define prototype methods that are shared by every object created
// we are overiding the original  'toString'
Customer.prototype.toString = function(){
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " Creditworthy : " + this.isCreditAvail;
};
 
document.write(cust2.toString());

 // 1:28   line 798 