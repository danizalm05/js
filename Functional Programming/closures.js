// https://www.youtube.com/watch?v=CQqwU2Ixu-U&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=5
//closers
  var me = 'Bruce Wayne'
	function greetMe() {
	console.log('Hello, ' + me + '!')
	}
	
	
	// example2.js
 function sendRequest() {
	var requestID = '123'
	$.ajax({
	    url: '/myUrl',
	    success: function(response) {
	        alert('Request ' + requestID + ' returned')
	    }
	});
 }
 greetMe(); // Hello, Bruce Wayne!
 sendRequest();