//https://github.com/googlecreativelab/quickdraw-dataset
//https://www.youtube.com/watch?v=gX7U6WA7Ffk&list=PLRqwX-V7Uu6Zs14zKVuTuit6jApJgoYZQ&index=2
//https://console.cloud.google.com/storage/browser/quickdraw_dataset/full/numpy_bitmap
//  catsData = loadBytes('C:\Users\rockman\Downloads\Toy-Neur\examples\doodle_classification\data/cats1000.bin');
 
function preload() {
  catsData = loadBytes('C:\Users\rockman\Downloads\Toy-Neur\examples\doodle_classification\data\cats1000.bin');
 
  trainsData = loadBytes('C:\Users\rockman\Downloads\Toy-Neur\examples\doodle_classification\data\trains1000.bin');
  rainbowsData = loadBytes('C:\Users\rockman\Downloads\Toy-Neur\examples\doodle_classification\data\rainbows1000.bin');
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
   


}