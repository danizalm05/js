function sym() {
      ii=0;
      var argst = [];
	   
	 
     /* arguments is an object that hold the input of 4 arrays 
	  0: Array(3) [ 1, 2, 3 ]
​      1: Array(4) [ 5, 2, 1, … ]
​      2: Array(4) [ 15, 12, 1, … ]
​      3: Array(4) [ 8, 9, 1, … ]
	 */	   
      for (var i = 0; i < arguments.length; i++) {
        argst.push(arguments[i]);// break down the arguments object to an array, argst.
      }
      
	 //  argst =[1,2,3,5,2,1,4,15,12,1,4,8,9,1,4]
	   
 
    //The symDiff function finds the symmetric difference between two sets. 
	//It is used as a callback function for the reduce() method called on args.

    function symDiff(arrayOne, arrayTwo) {
         
	  ii++;
	   console.log('i=',ii);
	  var result = [];
	     console.log('result',result);
         console.log('arrayOne',arrayOne);
        arrayOne.forEach(function(item) {
		  	
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
          }
        });

		
		console.log('arrayTwo',arrayTwo);
        arrayTwo.forEach(function(item) {
			
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
            result.push(item);
          }
		  
        });
       
        return result;
      }

      // Apply reduce method to argst array, using the symDiff function
      
	 return argst.reduce(symDiff);
    }
	
	
	s=sym([1, 2, 3], [5, 2, 1, 4],[15, 12, 1, 4],[8, 9, 1, 4]);
	/*
 1
arrayOne  [ 1, 2, 3 ]
arrayTwo  [ 5, 2, 1, 4 ]
result [3,5,4]
 2  
arrayOne  [ 3, 5, 4 ]
arrayTwo  [ 15, 12, 1, 4 ]
result [3,5,4, 12, 1]
 3  
arrayOne  [ 3, 5, 15, 12, 1 ]
arrayTwo  [ 8, 9, 1, 4 ]
result [3,5,4, 15,12, 8, 9,  4]
	
	*/
	 
	
	document.getElementById('algoritem').innerHTML =  'Symmetric difference result' ;
	document.getElementById('output').innerHTML = s;