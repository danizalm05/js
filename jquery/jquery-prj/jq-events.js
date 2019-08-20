//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS
// 28:34  line 258  
$("document").ready(function() { // 

  // EVENTS IN JQUERY
 
  // Trigger events on mouseover
  $("#logo2").mouseover(function() {
    $("#logo2").attr("src", "ntt-logo-horz.png");
  });

   // Trigger events on mouseout
  $("#logo2").mouseout(function() {
    $("#logo2").attr("src", "ntt-logo.png");
  });


  // Handle mouseover and mouseout with hover
  $("h2").hover(function() {
    // mouseover
    $("h2").css("color", "green");
  }, function() {
    // mouseout
    $("h2").css("color", "black");
  });

    // Perform an action on double click
  $("#logo2").dblclick(function() {
    $("#logo2").attr("src", "ntt-logo-plastic.png");
  });

  // Get the document x and y position on click
  $(document).click(function(e) {
    $("#mClickXPos").val(e.pageX);
    $("#mClickYPos").val(e.pageY);
  });
 
  // Get the x and y as the mouse moves
  // Use screenX and screenY to get x and y for the screen
  $(document).mousemove(function(e) {
    $("#mMoveXPos").val(e.screenX);
    $("#mMoveYPos").val(e.screenY);
  });
 // 33:0  line 295  
 
 // Show key pressed on the keyboard
  // You can also use keydown() and keyup()
  $(document).keypress(function(e){
 
    // e.which returns the keycode which we convert into
    // the key with fromCharCode
    var keyPressed = String.fromCharCode(e.which)
    $("#keyPressed").val(keyPressed);
  });
 
  // Execute when input loses focus  - blur
  $("#inputFormEvent").blur(function() {
    $("#formEvent").text("Left Input Element");
  });
 
  // Execute when input value changes (Conflicts with blur)
  $("#inputFormEvent").change(function() {
    $("#formEvent").text("Input Element Changed");
  });
  
   // Execute when input gains focus
  $("#inputFormEvent").focus(function() {
    $("#formEvent").text("Input Element Focused");
  });
 
  // Execute when input value is selected
  $("#inputFormEvent").select(function() {
    $("#formEvent").text("Input Element Selected");
  });
  // We can assign events with on and pass the event to
  // track, an argument to pass and the function to call
  // You can attach multiple events by seperating them with
  // a space ex. "mouseover keypress"
 
  function showWhatTouched(e){
    alert(e.data.message);
  }
 
  var bsMsg = { message:"Best Selling Touched" };
 
  var teMsg = { message:"Track Events Touched" };
 
  $("#bestSelling").on("mouseover", bsMsg, showWhatTouched);
 
  $("#trackEvents").on("mouseover", teMsg, showWhatTouched);
 
  // Catch when the document loads with ready()
  // Catch if the browser resizes with resize()
  // Catch when an element is scrolled with scroll()
 
  // Create simple slide show
  var accidentImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
 
  var focusImg = 1;
 
  $("#accident").click(function() {
 
    var image = accidentImgs[focusImg];
    focusImg++;
    if(focusImg > 3){
      focusImg = 0;
    }
 
    $("#accident").attr("src", image);
 
  });
 // 40:0  line 362
}); <!-- End of JQuery Code -->