//https://medium.com/@colinpatrickreid/creating-impressionistic-art-with-photography-and-p5-js-e073d794aa40

let inputFactor, inputUserPic, colorCheckbox, resetButton, ditherSelect;
let userFile, userImage;
let reharmoniseCheckbox, invertCheckbox;

function setup() {
  createElement("h2", "Dither Kitty!");

  createCanvas(100, 100);

  createSpan("Dither type: ");
  ditherSelect = createSelect();
  ditherSelect.option("None");
  ditherSelect.option("Simple");
  ditherSelect.option("Floyd-Steinberg");
  ditherSelect.changed(handleChange);

  colorCheckbox = createCheckbox('Color', true);
  colorCheckbox.changed(handleChange);

  invertCheckbox = createCheckbox('Invert', false);
  invertCheckbox.changed(handleChange);

  reharmoniseCheckbox = createCheckbox('Reharmonise', false);
  reharmoniseCheckbox.changed(handleChange);

  createSpan("Dither amount: ");
  inputFactor = createSlider(1, 510, 255, 1);
  inputFactor.changed(handleChange);

  createSpan("Upload an image: ");
  inputUserPic = createFileInput(handleNewImage);
  inputUserPic.elt.accept = "image/*";

  createSpan("Get the kitten back: ");
  resetButton = createButton("Reset");
  resetButton.mouseClicked(reset);

  createA("https://github.com/stellartux/CC90", "Source Code");

  noLoop();
  reset();
}

function reset() {
  userImage = loadImage("data/kitten.jpg", display);
  userFile = undefined;
}

function handleChange() {
  if (userFile) {
    handleNewImage(userFile);
  } else {
    reset();
  }
}

function handleNewImage(file) {
  userFile = file;
  userImage = loadImage(file.data, display);
}

function display(img) {
  resizeCanvas(img.width, img.height);
  background(0);
  if (!colorCheckbox.checked()) {
    img.filter(GRAY);
  }
  if (invertCheckbox.checked()) {
    img.filter(INVERT)
  }
  if (reharmoniseCheckbox.checked()) {
    reharmoniseColors(img);
  }
  if (ditherSelect.value() === "Simple") {
    simpleDither(img);
  } else if (ditherSelect.value() === "Floyd-Steinberg") {
    floydSteinbergDither(img);
  }
  image(img, 0, 0);
  redraw();
}

function simpleDither(img) {
 img.loadPixels();
  
    
  for (i = 0; i < img.width; i ++) {
    for (j = 0; j < img.height; j ++) { 
	index =loc(i, j);
    red   = img.pixels[index]    
	green = img.pixels[index+1]  
	blue  = img.pixels[index+2] 
    alpha = img.pixels[index+3] 
    img.pixels[index+2]  = 55 
     strokeWeight(9 * Math.random())
      stroke(red, blue, green, alpha/(5 * Math.random()))
     // line(i + Math.random() * 40,j ,i + 50,j + 50 * Math.random())
   }
  }
  img.updatePixels();
}

function floydSteinbergDither(img) {
  img.loadPixels();
  img.pixels.forEach((value, index, pixels) => {
    let x = floor(index / 4) % img.width;
    let y = floor(index / 4 / img.width);

    pixels[index] = quantise(value);
    let error = quantError(value);
    if (x < img.width - 1) {
      pixels[index + 4] += round(error * 7 / 16);
    }
    if (y < img.height - 1) {
      pixels[index + img.width * 4] += round(error * 5 / 16);
      if (x > 0) {
        pixels[index - 4 + img.width * 4] += round(error * 3 / 16);
      }
      if (x < img.width - 1) {
        pixels[index + 4 + img.width * 4] += round(error / 16);
      }
    }
  });
  img.updatePixels();
}

function quantise(value, factor = inputFactor.value()) {
  return round(value / factor) * factor;
}
function quantError(value, factor = inputFactor.value()) {
  return value - round(value / factor) * factor;
}


function loc(x, y) {
  return 4*(x + y * userImage.width);
}
function reharmoniseColors(img) {
  img.loadPixels();
  
    
  for (var i = 0; i < img.width; i ++) {
    for (var j = 0; j < img.height; j ++) { 
	var index =loc(i, j);
    red   = img.pixels[index]    
	green = img.pixels[index+1]  
	blue  = img.pixels[index+2] 
    alpha = img.pixels[index+3] 
    //fill(red,blue,green,alpha)
    //rect(i,j,1,1)	
    img.pixels[index]   = random (255) 
   }
  }
  img.updatePixels();
}
