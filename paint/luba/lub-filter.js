//lub-filter.js
/*
 *  lub-filter - v0.0.1
 *  Library for image processing

*/


var Lubfilt = {};

Lubfilt.getImage = function(img) {

  var c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;

  var ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);

  return ctx.getImageData(0, 0, img.width, img.height);
};

Lubfilt.printCanvas = function(selector, idata) {

  selector.width = idata.width;
  selector.height = idata.height;

  var ctx = selector.getContext('2d');
  ctx.putImageData(idata, 0, 0);

};

Lubfilt.filterImage = function(selector, filter, image) {

  var args = [this.getImage(image)];

  return this.printCanvas(selector, filter.apply(null, args));
};

Lubfilt.redrawCanvas = function(selector, filter) {

  var ctx = selector.getContext('2d');

  ctx = [ctx.getImageData(0, 0, selector.width, selector.height)];

  return this.printCanvas(selector, filter.apply(null, ctx));
};

Lubfilt.convolution = function(pixels, weights) {
  var side = Math.round(Math.sqrt(weights.length)),
    halfSide = Math.floor(side/2),
    src = pixels.data,
    canvasWidth = pixels.width,
    canvasHeight = pixels.height,
    temporaryCanvas = document.createElement('canvas'),
    temporaryCtx = temporaryCanvas.getContext('2d'),
    outputData = temporaryCtx.createImageData(canvasWidth, canvasHeight)

  for (var y = 0; y < canvasHeight; y++) {

    for (var x = 0; x < canvasWidth; x++) {

      var dstOff = (y * canvasWidth + x) * 4,
        sumReds = 0,
        sumGreens = 0,
        sumBlues = 0

      for (var kernelY = 0; kernelY < side; kernelY++) {
        for (var kernelX = 0; kernelX < side; kernelX++) {

          var currentKernelY = y + kernelY - halfSide,
            currentKernelX = x + kernelX - halfSide

          if (currentKernelY >= 0 &&
              currentKernelY < canvasHeight &&
              currentKernelX >= 0 &&
              currentKernelX < canvasWidth) {

            var offset = (currentKernelY * canvasWidth + currentKernelX) * 4,
              weight = weights[kernelY * side + kernelX]

            sumReds += src[offset] * weight
            sumGreens += src[offset + 1] * weight
            sumBlues += src[offset + 2] * weight
          }
        }
      }

      outputData.data[dstOff] = sumReds
      outputData.data[dstOff+1] = sumGreens
      outputData.data[dstOff+2] = sumBlues
      outputData.data[dstOff+3] = 255
    }
  }
  return outputData
}

Lubfilt.gradient = function(deltaX, deltaY) {
  var srcX = deltaX.data,
    canvasWidth = deltaX.width,
    canvasHeight = deltaX.height,
    srcY = deltaY.data,
    temporaryCanvas = document.createElement('canvas'),
    temporaryCtx = temporaryCanvas.getContext('2d'),
    outputData = temporaryCtx.createImageData(canvasWidth, canvasHeight),
    outputDataDir = new Array(srcX.length).fill(0)

  for (var y = 0; y < canvasHeight; y++) {

    for (var x = 0; x < canvasWidth; x++) {

      var dstOff = (y * canvasWidth + x) * 4

      outputData.data[dstOff] = Math.sqrt(Math.pow(srcX[dstOff], 2) +  Math.pow(srcY[dstOff], 2))
      outputData.data[dstOff+1] = Math.sqrt(Math.pow(srcX[dstOff+1], 2) +  Math.pow(srcY[dstOff+1], 2))
      outputData.data[dstOff+2] = Math.sqrt(Math.pow(srcX[dstOff+2], 2) +  Math.pow(srcY[dstOff+2], 2))
      outputData.data[dstOff+3] = 255

      outputDataDir[dstOff] = Math.atan2(srcY[dstOff], srcX[dstOff])
      outputDataDir[dstOff+1] = Math.atan2(srcY[dstOff+1], srcX[dstOff+1])
      outputDataDir[dstOff+2] = Math.atan2(srcY[dstOff+2], srcX[dstOff+2])
      outputDataDir[dstOff+3] = 255
    }
  }

  var result = {magnitude: outputData, direction: outputDataDir}

  return result
}

/*global Lubfilt:false */
Lubfilt.histogram = function(image) {

  'use strict'

  var pixels = this.getImage(image),
    zeroedArray = new Array(257).join('0').split('')

  var histogram = {
    r: zeroedArray.map(Number),
    g: zeroedArray.map(Number),
    b: zeroedArray.map(Number)
  }

  for (var i = 0; i < pixels.data.length; i += 4) {

    histogram.r[pixels.data[i]]++

    histogram.g[pixels.data[i + 1]]++

    histogram.b[pixels.data[i + 2]]++

  }

  return histogram
}

Lubfilt.nonMaximumSuppression = function(pixels, direction) {
  var side = Math.round(Math.sqrt(25)),
    halfSide = Math.floor(side/2),
    src = pixels.data,
    canvasWidth = pixels.width,
    canvasHeight = pixels.height,
    temporaryCanvas = document.createElement('canvas'),
    temporaryCtx = temporaryCanvas.getContext('2d'),
    outputData = temporaryCtx.createImageData(canvasWidth, canvasHeight)

  for (var y = 0; y < canvasHeight; y++) {

    for (var x = 0; x < canvasWidth; x++) {
      var dstOff = (y * canvasWidth + x) * 4,
        maxReds = src[dstOff],
        maxGreens = src[dstOff+1],
        maxBlues = src[dstOff+2]

      for (var kernelY = 0; kernelY < side; kernelY++) {
        for (var kernelX = 0; kernelX < side; kernelX++) {

          var currentKernelY = y + kernelY - halfSide,
            currentKernelX = x + kernelX - halfSide

          if (currentKernelY >= 0 &&
              currentKernelY < canvasHeight &&
              currentKernelX >= 0 &&
              currentKernelX < canvasWidth) {

            var offset = (currentKernelY * canvasWidth + currentKernelX) * 4,
              currentKernelAngle = Math.atan2(currentKernelY - y, currentKernelX -x)

            maxReds = src[offset]*Math.abs(Math.cos(direction[dstOff]-currentKernelAngle)) > maxReds ? 0 : maxReds
            maxGreens = src[offset+1]*Math.abs(Math.cos(direction[dstOff+1]-currentKernelAngle)) > maxGreens ? 0 : maxGreens
            maxBlues = src[offset+2]*Math.abs(Math.cos(direction[dstOff+2]-currentKernelAngle)) > maxBlues ? 0 : maxBlues
          }
        }
      }

      outputData.data[dstOff] = maxReds *2
      outputData.data[dstOff+1] = maxGreens *2
      outputData.data[dstOff+2] = maxBlues *2
      outputData.data[dstOff+3] = 255
    }
  }
  return outputData
}

Lubfilt.bigGaussian = function(pixels) {
  var divider = 159,
    operator = [2/divider, 4/divider, 5/divider, 4/divider, 2/divider,
      4/divider, 9/divider,12/divider, 9/divider, 4/divider,
      5/divider,12/divider,15/divider,12/divider, 5/divider,
      4/divider, 9/divider,12/divider, 9/divider, 4/divider,
      2/divider, 4/divider, 5/divider, 4/divider, 2/divider]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.canny = function(pixels) {
  pixels = Lubfilt.bigGaussian(pixels)
  var deltaX = Lubfilt.sobelHorizontal(pixels)
  var deltaY = Lubfilt.sobelVertical(pixels)
  var r = Lubfilt.gradient(deltaX, deltaY) //Magnitude and Angle of edges
  var lp = Lubfilt.laplacian(pixels) //The laplacian represent better the magnitude

  pixels = Lubfilt.nonMaximumSuppression(lp, r.direction)

  return Lubfilt.thresholding(pixels, 8)
}

Lubfilt.gaussian = function(pixels) {
  var divider = 16,
    operator = [1/divider, 2/divider, 1/divider,
      2/divider, 4/divider, 2/divider,
      1/divider, 2/divider, 1/divider]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.grayscale = function(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = 0.2126*r + 0.7152*g + 0.0722*b
  }

  return pixels
}

Lubfilt.highpass = function(pixels) {
  var operator = [-1, -1, -1,
    -1,  8, -1,
    -1, -1, -1]

  return Lubfilt.convolution(pixels, operator)
}



Lubfilt.laplacian = function(pixels) {
  var operator = [ 0, -1, 0,
    -1, 4, -1,
    0, -1, 0 ]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.lowpass3 = function(pixels) {
  var k = 1/9
  var operator = [ k, k, k,
    k, k, k,
    k, k, k]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.lowpass5 = function(pixels) {
  var k = 1/25

  var operator = [ k, k, k, k, k,
    k, k, k, k, k,
    k, k, k, k, k,
    k ,k, k, k, k,
    k ,k, k, k, k]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.mirror = function(pixels) {
  var tmp = []
  var width = (pixels.width * 4)

  for (var h = 0; h < pixels.height; h++) {
    var offset = h * width
    var middle = pixels.width / 2

    for (var w = 0; w < middle; w++) {
      var pos = w * 4
      var pxl = pos + offset
      var lastPxl = width - pos - 4 + offset

      tmp[0] = pixels.data[pxl]
      tmp[1] = pixels.data[pxl + 1]
      tmp[2] = pixels.data[pxl + 2]
      tmp[3] = pixels.data[pxl + 3]

      pixels.data[pxl] = pixels.data[lastPxl]
      pixels.data[pxl + 1] = pixels.data[lastPxl + 1]
      pixels.data[pxl + 2] = pixels.data[lastPxl + 2]
      pixels.data[pxl + 3] = pixels.data[lastPxl + 3]

      pixels.data[lastPxl] = tmp[0]
      pixels.data[lastPxl + 1] = tmp[1]
      pixels.data[lastPxl + 2] = tmp[2]
      pixels.data[lastPxl + 3] = tmp[3]
    }
  }

  return pixels
}

Lubfilt.prewittHorizontal = function(pixels) {
  var divider = 3

  var operator = [1/divider, 1/divider, 1/divider,
    0, 0, 0,
    -1/divider, -1/divider, -1/divider]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.prewittVertical = function(pixels) {
  var divider = 3

  var operator = [-1/divider, 0, 1/divider,
    -1/divider, 0, 1/divider,
    -1/divider, 0, 1/divider]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.red = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {

    d[i] = d[i]
    d[i+1] = 0
    d[i+2] = 0
  }

  return pixels
}

Lubfilt.green = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {
    d[i] = 0
    d[i+2] = 0
  }

  return pixels
}

Lubfilt.blue = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {
    d[i] = 0
    d[i+1] = 0
  }

  return pixels
}

Lubfilt.roberts = function(pixels) {
  var operator = [0, 0, 0,
    1, -1, 0,
    0, 0, 0]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.saturation = function(pixels) {
  var level = 2.9,
    RW = 0.3086,
    RG = 0.6084,
    RB = 0.0820,
    RW0 = (1 - level) * RW + level,
    RW1 = (1 - level) * RW,
    RW2 = (1 - level) * RW,
    RG0 = (1 - level) * RG,
    RG1 = (1 - level) * RG + level,
    RG2 = (1 - level) * RG,
    RB0 = (1 - level) * RB,
    RB1 = (1 - level) * RB,
    RB2 = (1 - level) * RB + level

  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i]   = RW0*pixels.data[i] + RG0*pixels.data[i+1] + RB0*pixels.data[i+2]
    pixels.data[i+1] = RW1*pixels.data[i] + RG1*pixels.data[i+1] + RB1*pixels.data[i+2]
    pixels.data[i+2] = RW2*pixels.data[i] + RG2*pixels.data[i+1] + RB2*pixels.data[i+2]
  }

  return pixels
}

Lubfilt.sepia = function(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = 0.3*r + 0.59*g + 0.11*b

    pixels.data[i] += 40
    pixels.data[i+1] += 20
    pixels.data[i+2] -= 20
  }

  return pixels
}

Lubfilt.sharpen = function(pixels) {
  var operator = [0, -0.2, 0,
    -0.2, 1.8, -0.2,
    0, -0.2, 0]

  return Lubfilt.convolution(pixels, operator)
}

Lubfilt.sobelHorizontal = function(pixels) {
  var divider = 4,
    operator = [ 1/divider, 2/divider, 1/divider,
      0, 0, 0,
      -1/divider, -2/divider, -1/divider ]

  pixels = Lubfilt.convolution(pixels, operator)

  return pixels
}

Lubfilt.sobelVertical = function(pixels) {
  var divider = 4,
    operator = [ 1/divider, 0, -1/divider,
      2/divider, 0, -2/divider,
      1/divider, 0, -1/divider ]

  pixels = Lubfilt.convolution(pixels, operator)

  return pixels
}

Lubfilt.thresholding = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.2126*r + 0.7152*g + 0.0722*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}


Lubfilt.invert = function(pixels) {

  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = 255 - pixels.data[i]
    pixels.data[i+1] = 255 - pixels.data[i+1]
    pixels.data[i+2] = 255 - pixels.data[i+2]
  }

  return pixels
}








 Lubfilt.changePix = function  (pixels,x,y,ncolor){
  var src = pixels.data
  var   canvasWidth = pixels.width;
  var dstOff = (y * canvasWidth + x) * 4;
    src[dstOff] =  ncolor[0] ;
    src[dstOff+1]= ncolor[1];
    src[dstOff+2]= ncolor[2];
  return pixels;
  //return [pixels.data[dstOff],pixels.data[dstOff+1],pixels.data[dstOff+2], pixels.data[dstOff+3]];
}


Lubfilt.getPix = function(pixels,x,y){
  var src = pixels.data;
  var   canvasWidth = pixels.width;
  var dstOff = (y * canvasWidth + x) * 4;

  return [pixels.data[dstOff],pixels.data[dstOff+1],pixels.data[dstOff+2], pixels.data[dstOff+3]];
}


// Conway's Game of Life
//------------------------------------------

const LIFE_VALUE = 250,DEAD=0,LIVE=1 ;

 function Create2DArray(rows,columns) {
    var arr = [];
    for(var x = 0; x <= rows; x++){
         arr[x] = [];
         for(var y = 0; y <=columns; y++){
         arr[x][y] = DEAD;
     }
 }
 return arr;
}




Lubfilt.Conway = function(pixels) {
   var src = pixels.data,
      cWidth = pixels.width,
      cHeight = pixels.height;
   //var colorPix ;

  var  temp_image_pixels = Create2DArray(cHeight,cWidth);
    live_color = [150,150,150];
    dead_color = [10,10, 0];
   for (var y = 0; y < cWidth  ;y++) {
      for (var x = 0; x <cHeight ; x++) {
           neig_counter =  Lubfilt.countNeig( pixels,x, y);
           life_value =  Lubfilt.calculateLife( pixels,x, y);
           //Rules of game

           // the cell   alive and  neig <=1
          if (life_value >= LIFE_VALUE && neig_counter <=1){
            temp_image_pixels[x][y] = DEAD ;
            }
          // the cell   alive and      neig > 3
         if (life_value >= LIFE_VALUE && neig_counter>3){
                temp_image_pixels[x][y] = DEAD ;
           }
           // the cell   dead  and      neig = 3
          if (life_value < LIFE_VALUE && neig_counter ==3){
              temp_image_pixels[x][y] = LIVE ;
       }
  }
}
for (var y = 0; y < cWidth  ;y++) {
   for (var x = 0; x <cHeight ; x++) {
      if (temp_image_pixels[x][y] == DEAD) {
         pixels = Lubfilt.changePix(pixels,y,x,dead_color);
      }
      else {       // LIVE
         pixels = Lubfilt.changePix(pixels,y,x,live_color);
      }
   }
 }
 return  pixels;
}


 Lubfilt.calculateLife = function(pixels,x,y){

  var  canvasWidth = pixels.width;
  var dstOff;

  dstOff = (x * canvasWidth +y) * 4;
  sumColor = pixels.data[dstOff] + pixels.data[dstOff+1] + pixels.data[dstOff+2];
 return sumColor;
}

Lubfilt.countNeig = function(pixels,x,y){
  var src = pixels.data;
  var ht = pixels.height,  wt = pixels.width;
  //var dstOff;
  var neig_counter =0,life_value=0;

   for (var i = x-1; i <= x+1; i++) {
       for (var j = y-1; j <= y+1; j++) {
          if  (!(i == x  &&  j == y) &&  !(j < 0 ||  i <  0)&&  !(j >wt-1 ||  i > ht-1))   {
            life_value =  Lubfilt.calculateLife( pixels,i,j);
              if (life_value > LIFE_VALUE) {
                 neig_counter++
             }
         }
     }
  }
  return  neig_counter;
}
