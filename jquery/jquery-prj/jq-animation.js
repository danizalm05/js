//jq-animation.js
//http://www.newthinktank.com/2015/10/learn-jquery-one-video/

//https://www.youtube.com/watch?v=BWXggB-T1jQ

//https://developer.mozilla.org/en-US/docs/Web/CSS
// 40:0  line 362
$("document").ready(function() { // 

  // Animation  IN JQUERY
 
  
   // hide an element on click
  //$("#p_one").click(function() {
   // $(this).hide();
  //});


// slowly fade out an element over 2000 ms
  // You can also use fast, normal, and slow
  $("#p_two").click(function() {
    $(this).fadeOut(2000);
 
    // Redisplay the hidden element
    // You can also use .toggle(), .show() and .fadeIn()
    $("#p_one").fadeToggle(2000);
  });
 

  // Fade an image to a given opacity
  $("#logo2").click(function() {
    $(this).fadeTo('slow', .50);
  });
 
  // Target td that contains 'Bonds'
  $("td:contains('Bonds')").click(function() {
 
    // Hide row that contains a td that contains 'Bonds'
    $("tr:has(td:contains('Bonds'))").slideUp(1000);
  });
 
  // Make the Bonds row reappear
  // You can also use slideToggle()
  $("td:contains('Hall')").click(function() {
    $("tr:has(td:contains('Bonds'))").slideDown(1000);
  });
 // 44:0  line 398


 // You can create custom animations with animate
  $("#p_one").click(function() {
 
    // To define left, right, top or bottom the element must
    // have a position property of relative or absolute
    $(this).css("position", "relative");
 
    // Pass an object that contains the properties to change,
    // duration in milliseconds, easing function to use for
    // the transition and the function to call after the
    // animation completes
    // The easing method functions are "swing or "linear"
    // You also have the JQuery UI animations : easeInQuad,
    // easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
    // easeInOutCubic, easeInQuart, easeOutQuart,
    // easeInOutQuart, easeInQuint, easeOutQuint,
    // easeInOutQuint, easeInExpo, easeOutExpo,
    // easeInOutExpo, easeInSine, easeOutSine, easeInOutSine,
    // easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic,
    // easeOutElastic, easeInOutElastic, easeInBack,
    // easeOutBack, easeInOutBack, easeInBounce,
    // easeOutBounce, easeInOutBounce
    $("#p_one").animate(
    {
      left: 300,
      opacity: .5,
      'font-size': "22px",
      width: 300
    }, 2000, "easeOutExpo", function(){alert("All Done");});
  });

  // It is common to use stop to prevent multiple
  // animations on the same object like this
  // $("#p_one").stop().animate( ...
  //  // 45:0  line 429
}); <!-- End of JQuery Code -->