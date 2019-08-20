//Using_images
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images


  var canvas;
  var ctx;

 window.onload = function draw() {
      ctx = document.getElementById('tutorial').getContext('2d');

      sliceImage();
      //tilingImage();
    //  loadImagene();


  }

function sliceImage(){
/*
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 Given an image, this function takes the area of the source image specified
 by the rectangle whose top-left corner is (sx, sy)
 and whose width and height are sWidth and sHeight
 and draws it into the canvas,
 placing it on the canvas at (dx, dy)
 and  scaling it to the size specified by dWidth and dHeight.
*/
    // Draw slice
    ctx.drawImage(document.getElementById('source'),
                  33, 71, 104, 124, 21, 20, 87, 104);

    // Draw frame
    ctx.drawImage(document.getElementById('frame'), 0, 0);
}



  function tilingImage() {

    var img = new Image();
    img.onload = function() {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
         //   drawImage(image, x, y,        width, height)
          ctx.drawImage(img, j * 100, i * 108, 100, 108);
        }
      }
    };
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  }


 function loadImagene() {
    var img = new Image();

    img.onload = function() {
    ctx.drawImage(img, 0, 0);
   };
  img.src = 'https://bandedbrewing.com/wp-content/uploads/2018/05/bb_diamond_black_big.png';
}//
