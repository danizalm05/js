//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS

$("document").ready(function() { // line 108

    // ADDING / REMOVING / CHANGING ELEMENTS
 
  // You can change CSS attributes like this
  // # targets ids and . targets classes
  $("#wrapper").css("width", 500);
  $("#wrapper").css("margin", "auto");
  $("#logo2").css("float", "left");
  $("#p_two").css("color", "red");
  
  // How to pass in multiple arguments
  $("#p_two").css({
	  "background" : "url('repeatBkgrnd.png') repeat-y"
	  });
 
   // line 122  6:58
  
   $("a").css("color", "blue"); // <a href...
 
  // Target tags only in other tags, classes, or ids
  // In this case only <a href ...>  inside <table id="tableData"> ....</table>
  $("#tableData a").css("color", "green");
 
  // Target every a element that comes after a em(<em>:  emphasized text)
  $("em + a").css("color", "orange");
 
  // Target children elements in elements(every <em> tag inside <p> tag)
  $("p > em").css("color", "gray");
 
  // Target the 3rd li in a list
  $("#oListIndent li:nth-child(3)").css("color", "red");
 
  // Change the text in an html element if the li has a
  // name attribute
  $("li[name]").html("'and the Goblet of Fire'");
 
  // Change the value in a text input element
  $("input[type='text']#yourName").val("Derek");
 
  // Target items that contain a value (*=)
  $("a[href*='google']").css("font-weight", "bolder");
 
  // Target an image with an alt that starts with (^=) NTT
  // and change the border
  $("img[alt^='NTT']").css({
	         "border-color": "black",
             "border-width":"1px",
             "border-style":"solid"
		});
 
  $("a[href^='http://g']").css("color", "cyan");
 
  $("a[href^='mailto:']").css("color", "yellow");
  // line 157  13:51
   // Change an image height and width on one line
  $("img[alt^='NTT']").width(150)
                      .height(150); 
  // Target items that end with ($=) a value
  $("a[href$='pdf']").css("color", "red");
 
  // Select the odd (1,3,5) and even (0,2,4) items
  $("#tableData tr:even").css("background-color", "#FFFDD0");
  $("#tableData tr:odd").css("background-color", "#F0F8FF");
 
  // Select the first matching element
  $("#tableData tr:first").css({   "background-color" : "#001A57", 
  "color" : "white"
  });
 
  // Select the last matching element
  $("#tableData tr:last").css("background-color", "#FFC0DB");
 
  // Select the elements that don't contain 'and' in them
  $("#oListTypes li:not(:contains(and))").css("color", "red");
 
  // Select every a element that contains 'gravida'
  $("a:contains(gravida)").css("color", "blue");
 
  // Select every p element that contains a i element
  // and hide it
  $("p:has(i)").hide();
 
  // Display the text between the matching p element
  alert($("p:has(i)").html());
  
   // line 187  18:30
// Change the text in the matching p element and show it
  // .text() works the same but it doesn't recognize html
  // elements
  $("p:has(i)").html("<i>Some 666666666666666666666666normal text</i>").show();
 
  // Append adds text at the end of an element
  $("p:has(i)").append(" I go at the end");
 
  // Prepend adds text at the beginning of an element
  $("p:has(i)").prepend("I go at the beginning ");
 
  // Add a new element before the targeted one
  $("p:has(i)").before("<p id='before_p'>A new paragraph before   <b> Click to change</b></p>");
 
  // Add a new element after the targeted one
  $("p:has(i)").after("<p id='after_p'>A new paragraph after   <b> Click to remove</b></p>");
  // When the element with the id 'after_p' is clicked
  // remove it from the document
  $("#after_p").click(function() {
    $(this).remove();
  });
 
// Replace an element with another on click
  $("#before_p").click(function() {
    $(this).replaceWith('<p>I\'m the new paragraph1231213123123</p>');
  });
  

  // line215  22:30
   // Perform a different action on each matching element
  $("#oListIndent li").each(function(index) {
 
    // Get the value in the input element
    var inputListStuff = $("#listStuff").val();
 
    // Assign a new value to the input element
    // $(this).text() gets the value for each individual
    // li element and put all of them inside 
    //<input type="text" id="listStuff" size="50"><br />
    $("#listStuff").val(inputListStuff + ", " + $(this).text());
 
  });



  // CHANGING ELEMENT ATTRIBUTES
 
  // Add a class to elements
  // .removeClass() will take the class away
  $("#oListIndent li").addClass("Harry_Potter");
 
  $(".Harry_Potter").css("color", "#0000FF");// change letter in list to blue
 
  // You can toggle classes on and off an element
  $("#oListIndent li").click(function() {
    $(this).toggleClass("highlight");
 
    // Get the changing background color and display it
    // in the input element
    var bgColor = $(this).css("background-color");
    $("input[type=text]#yourName").val(bgColor);
  });
 
  $("#logo2").click(function() {
 
    // Get the value stored in an attribute
    var imgName = $(this).attr("src");
    $("input[type=text]#yourName").val(imgName);
 
    // Change the value of an attribute
    $("#logo2").attr("src", "ntt-logo-horz.png");
  });
}); <!-- End of JQuery Code -->