$(function(){

	// chaining method

	/*
	$("#sample-heading").css("font-size", "64px");

	$("#sample-heading").css("background-color", "lightyellow");

	$("#sample-heading").css("text-align", "center");
	*/

	 
	
	$("#sample-heading")
		.css({
			"font-size" : "84px",
			"background-color" : "lightblue",
			"text-align" : "center"
		})
		.text("Hi");
});