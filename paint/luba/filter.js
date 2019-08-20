 var imageLoader = document.getElementById('imageLoader');
var originalImage = document.getElementById("original-image");
var filteredImageCanvas = document.getElementById("filtered-image");
var filterChanger = document.getElementById("filter-changer");
var imageUploaded = false;


function readImgFile(e){
            var reader = new FileReader();
            reader.onload = function(event){
                       originalImage.onload = function(){
                              console.log("Image Succesfully Loaded");
                              imageUploaded = true;
                        };
                       originalImage.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
          }

function changeFilter(e){
	     var filter = filterChanger.value;
       if(imageUploaded && filter != "none"){
    	// Apply filter
        	Lubfilt.filterImage(filteredImageCanvas, Lubfilt[filter], originalImage);
            }
}
// Handle image upload into img tag
imageLoader.addEventListener('change'  , function (e) { readImgFile(e)  });
filterChanger.addEventListener("change", function (e) { changeFilter(e) });
