// https://www.youtube.com/watch?time_continue=2866&v=BWXggB-T1jQ

//  http://www.newthinktank.com/2015/10/learn-jquery-one-video/
// 47:00

$(document).ready(function() {
  
  $("#shMenu").menu({
    position: {
      // Popup menu comes on the right by default
      my: "center top",
      at: "center bottom"
    },

  });

  $("#accordion").accordion({
    // Slide animation or not or length
    animate: 1500,
    // Starting tab
    active: 1,
    // Collapsible if same tab is clicked
    collapsible: true,
    // Event that triggers
    event: "click",
    // Height based on content (content) or largest (auto)
    heightStyle: "content"
  });

  $("#shTabs").tabs({
    // The event that switches the panel
    event: "click",
    // Effects: fadeIn, fadeOut, slideDown, slideUp, animate
    show: "fadeIn",
    hide: "fadeOut",
    // Starting panel
    active: 3,
    // Collapse by clicking the current tab
    collapsible: true,
    // Height based on content (content) or largest (auto)
    heightStyle: "auto"
  });

  // Create a draggable / resizable dialog box
  $('#customDialog').dialog({
    draggable: true, // Set true by default
    resizable: false, // Set true by default
    // You can use minWidth, minHeight, maxWidth, maxHeight
    height: 300, // Defined in pixels
    width: 300,
    // If set true the user can't do anything until the
    // dialog is closed
    modal: true,
    // Position the dialog with my and define the browser
    // position with at
    // 1st: left, right, center
    // 2nd: top, center, bottom
    position: {
      my: 'center top',
      at: 'center bottom',
      // You can also target to place based on an element
      // on the screen (center under the link)
      of: "#openDialog"
    },
    // Define a delay for showing or hiding it
    show: 1000,
    hide: '1000',
    autoOpen: false, // Open true by default
    // create buttons for the dialog
    buttons : {
      "OK" : function(){
        $("#openDialog").html("You clicked ok");
        $(this).dialog("close");
      },
      "CANCEL": function(){  //56
        $("#openDialog").html("You clicked cancel");
        $(this).dialog("close");
      }
    }
  });

  // Displays the dialog box on click
  $("#openDialog").click(function() {
    $('#customDialog').dialog("open");
  });

  // Use custom tooltip if the element has a title
  $("[title]").tooltip();

  // JQUERY UI FORMS

  $("#present").selectmenu({
    width: 200
  });

  $("#birthday").datepicker({
    // Show month dropdown
    changeMonth: true,
    // Show year dropdown
    changeYear: true,
    dateFormat: "MM dd, yy",
    // Number of months to display
    numberOfMonths: 1,
    // Define maxDate
    maxDate: 365,
    // Define minDate
    minDate: -3650
  });

  // Style radio buttons
  $("#radioPresents").buttonset();

  // Style buttons
  $("#randButton").button();

  // You can make any element draggable
  $("#sampForm").draggable();

  // Dragging and dropping elements
  $("#toy1").draggable();
  $("#toy2").draggable();
  $("#toy3").draggable();

  $("#cartDiv").droppable({
    // Adds the class highlight to the droppable
    activeClass: "highlight",

    // Adds class for when element is hovered
    hoverClass: "hoverDroppable",

    // Function to call when element is dropped
    drop: function(event, ui){

      // Apply an effect when an element is dropped
      // clip, explode, fade, puff,
      // pulsate, scale, shake, slide,
      ui.helper.hide("fade");

      // Get the alt for the itm dropped
      var itemAlt = $(ui.draggable).attr("alt");

      // Display the item dropped
      alert("Item added : " + itemAlt);
    },

    // Define class of elements that can be dropped
    accept: ".toy",

    // Can elements currently be dropped on it
    disabled: false,

    // Add an element when droppable items starts to drag
    activate: function(event, ui){

      $("#cartMsg").remove();
      $(this).append("<span id='cartMsg'>Drop Toy Here</span>");
    },

    // Called when an item isn't dropped in the dropzone
    deactivate: function(event, ui){

      $("#cartMsg").remove();
      $(this).append("<span id='cartMsg'>You know you want it</span>");
    },

    // Called when draggable is over droppable
    over: function(event, ui){

      $("#cartMsg").remove();
      $(this).append("<span id='cartMsg'>Drop It!!!</span>");
    },

    // Called when item leaves dropzone
    out: function(event, ui){

      $("#cartMsg").remove();
      $(this).append("<span id='cartMsg'>NOOOOOO!!!</span>");
    }
  });

}); // End of JQuery