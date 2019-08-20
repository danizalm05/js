//v-arry.js


// http://www.newthinktank.com/2015/09/learn-javascript-one-video/
// https://www.youtube.com/watch?v=fju9ii8YsGs
// line 253   28:56

 
 
 // ---------- ARRAYS ----------
// Arrays have variable sizes and can contain multiple types in JS
var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
document.write("1st State : ", tomSmith[0], "<br />");
 
// Add an item
tomSmith[3] = "tsmith@aol.com";
 
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// Delete the 4th index item
tomSmith.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");
 
// Delete an index
delete tomSmith[3];
 
// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();

// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x ( x-y ascending order y-x decending)
numbers.sort(function(x,y){ return x - y });// 
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(tomSmith);
 
// Remove the last item
tomSmith.pop();
 
// Add items to the end
tomSmith.push("555-1212", "US");
 
// Deletes the first item
tomSmith.shift();
 
// Adds item to the first index
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write(tomSmith[i], "<br />");
}

//34:41  line 308