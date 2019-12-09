//ml5.js  knn
//code:https://github.com/CodingTrain/website/tree/master/Courses/beginner_ml5/07_knn_classifier/P5
 //https://www.youtube.com/watch?v=KTNqXwkLuM4

// https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js
// 15:00
// KNN Classification with Feature Extractor
// 1: https://youtu.be/KTNqXwkLuM4
// 2: https://youtu.be/Mwo5_bUVhlA
// 3: https://youtu.be/JWsKay58Z2g

let video;
let features;
let knn;

let labelP;
let ready = false;
let x;
let y;
let label = 'nothing';



let prob;

function goClassify(){
  const logits = features.infer(video);
  knn.classify(logits, function (error,result) {
        if (error){
             console.error(error);
        }else{
            labelP.html(result.label);
            console.log(result );
            goClassify();
            }
       }//gotResult
 );

}










function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  features = ml5.featureExtractor('MobileNet', modelReady);

  labelP = createP('need training data');
  labelP.style('font-size', '32pt');
}//setup




function keyPressed(){
   const logits = features.infer(video);
  //logits.print();
  //console.log(logits.dataSync());
   if (key == 'l'){
          knn.addExample(logits, "left");
          console.log("left");
   }else   if (key == 'r'){
             knn.addExample(logits, "right");
             console.log("right");
  }else   if (key == 'u'){
                    knn.addExample(logits, "up");
                     console.log("up");
   }else    if (key == 'd'){
                             knn.addExample(logits, "down");
                              console.log("down");
    }else   if (key == 's') {
              save(knn, 'model.json');
          //knn.save('model.json');
   }

}

function modelReady() {
  console.log('ModelNet is loaded!!!');
  knn = ml5.KNNClassifier();
  knn.load('model.json', function(){
    console.log("KNN Loaded");
    goClassify();
  });
}

function draw(){
   image(video,0,0);
 // if (!ready && knn.getNumLabels()>0) { //not ready and at least one label
 //      goClassify();
 //      ready = true;
 // }
}//draw
