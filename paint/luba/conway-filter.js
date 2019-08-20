//conway-filter.js
/*
 *     v0.0.2
 */

// Conway's Game of Life
//------------------------------------------


 const LIFE_VALUE = 350;
 const DEAD=0,LIVE=1 ;
var Lubfilt = {};
var color_arr = Array.from(Array(9), () => new Array(2));
color_arr[0][DEAD] = [ 0,0,50];
color_arr[1][DEAD] = [ 0,150,60];
color_arr[2][DEAD] = [ 50,50,100];
color_arr[3][DEAD] = [ 0,220,125];
color_arr[4][DEAD] = [ 70,70,150];
color_arr[5][DEAD] = [ 0,110,180];
color_arr[6][DEAD] = [ 110,0,200];
color_arr[7][DEAD] = [ 110,110,230];
color_arr[8][DEAD] = [ 240,250,250];

color_arr[0][LIVE] = [ 100,0,0];
color_arr[1][LIVE] = [ 120,110,50];
color_arr[2][LIVE] = [ 140,50,0];
color_arr[3][LIVE] = [ 160,70,50];
color_arr[4][LIVE] = [ 180,0,100];
color_arr[5][LIVE] = [ 200,100,0];
color_arr[6][LIVE] = [ 220,100,100];;
color_arr[6][LIVE] = [ 230,0,150];
color_arr[7][LIVE] = [ 240,150,0];
color_arr[8][LIVE] = [ 250,150,150];
//console.info(arr);
function Legend ()
{
  var c =  document.getElementById("legened");
 var ctx = [];
var i;

for(i = 0; i < color_arr.length; i++){
   ctx[i] = c.getContext("2d");
   ctx[i].beginPath();
    ctx[i].fillStyle ='rgb( ' + color_arr[i][DEAD] + ')';
    ctx[i].fillRect(i*50, 5, 40, 70);
    //console.log(i,' : ' ,ctx[i].fillStyle)
   ctx[i].fillStyle ='rgb( ' + color_arr[i][LIVE] + ')';
    ctx[i].fillRect(i*50, 100, 40, 70);
};

}//Legend
function Create2DArray(rows,columns) {
   var arr = [];
   columns = 2*columns;
   for(var x = 0; x <= rows; x++){
        arr[x] = [];
        for(var y = 0; y <=columns; y++){
           arr[x][y] = [ 220,220,220];
    }
}
return arr;
}


 Lubfilt.getPix = function(pixels,x,y){
  var src = pixels.data;
  var   canvasWidth = pixels.width;
  var dstOff = (y * canvasWidth + x) * 4;

  return [pixels.data[dstOff],pixels.data[dstOff+1],pixels.data[dstOff+2], pixels.data[dstOff+3]];
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


 Lubfilt.changeLiveingCell = function(neig_counter,color,cycle) {
   // this cell is alive (life_value >= LIFE_VALUE)
   //change it acording to neig number
    if (cycle ==0) return color_arr[neig_counter][LIVE]
    switch (neig_counter) {
        case 0:
        case 1: //return color;  break;
        case 2:
        case 3://return color;  break;
        case 4://return (color_arr[neig_counter][LIVE]);   break;
        case 5:

  	    case 6:
        case 7:
        case 8:   return ( [  color[0]-50, color[1]-50, color[1]-50  ]);    break;

    }
 }//changeLiveingCell

 Lubfilt.changeDeadCell = function(neig_counter,color,cycle) {
       // this cell is dead (life_value< LIFE_VALUE)
       //change it acording to neig number
     if (cycle ==0) return  (color_arr[neig_counter][DEAD]);

     switch (neig_counter) {
         case 0:
         case 1:
         case 2:

         case 3:
         case 4:
         case 5:
         case 6:

         case 7:
         case 8:  return ( [  color[0]+150, color[1]+150, color[1]+150  ]);    break;


     }
  }//changeDeadCell


  Lubfilt.changePix = function  (pixels,x,y,ncolor){

     var src = pixels.data
     var   canvasWidth = pixels.width;
     var dstOff = (x * canvasWidth + y) * 4;

     src[dstOff] =  ncolor[0] ;
     src[dstOff+1]= ncolor[1];
     src[dstOff+2]= ncolor[2];

     return pixels;
   }

   Lubfilt.calculateColor = function(pixels,x,y){

    var  canvasWidth = pixels.width;
    var dst;
    dst = (x * canvasWidth +y) * 4;
     return [pixels.data[dst], pixels.data[dst+1], pixels.data[dst+2]];
   }//calculateColor

 Lubfilt.conway = function(imgObj,cycle) {
     var canvas = document.createElement('canvas');
     var canvasContext = canvas.getContext('2d');

     var imgW = imgObj.width;
     var imgH = imgObj.height;
     canvas.width = imgW;
     canvas.height = imgH;
     var  temp_image_pixels = Create2DArray(imgH,imgW);

     canvasContext.drawImage(imgObj, 0, 0);
     var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);


     for(var y = 0; y <  imgPixels.width; y++){
       for(var x = 0; x <  imgPixels.height; x++){

        neig_counter =  Lubfilt.countNeig( imgPixels,x, y);
        life_value =  Lubfilt.calculateLife( imgPixels,x, y);
        color = Lubfilt.calculateColor (imgPixels,x,y);

        if (life_value >= LIFE_VALUE){

            temp_image_pixels[x][y] =  Lubfilt.changeLiveingCell(neig_counter,color,cycle);

          }else{
            //  c=  Lubfilt.changeDeadCell(neig_counter,color,cycle);
             temp_image_pixels[x][y] =  Lubfilt.changeDeadCell(neig_counter,color,cycle);
            // console.log(neig_counter,'  ' ,temp_image_pixels[x][y]);

           }
       }
  }

     for(var y = 0; y < imgPixels.width; y++){
       for(var x = 0; x < imgPixels.height; x++){
          color=temp_image_pixels[x][y];
          //  console.log(neig_counter,'  ' ,color);
          Lubfilt.changePix (imgPixels,x,y,color)
       }
     }
     canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
     return canvas.toDataURL();
 }
