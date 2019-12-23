//https://github.com/CodingTrain/website/tree/master/Courses/intelligence_learning/session7
 //https://www.youtube.com/watch?v=yXl0dM1b43s&list=PLRqwX-V7Uu6bmMRCIoTi72aNWHo7epX4L&index=2
// Full tutorial playlist:
// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bmMRCIoTi72aNWHo7epX4L

// Code from end of 7.3
// https://youtu.be/Xrhrn8HaFPI

// Community version:
// https://codingtrain.github.io/ColorClassifer-TensorFlow.js
// https://github.com/CodingTrain/ColorClassifer-TensorFlow.js


function setup(){
  var config = {
         apiKey: 'AIzaSyDPekCKX4ee6h9NVR2lEITGAM0XIHn-c7c',
         authDomain: 'color-classification.firebaseapp.com',
         databaseURL: 'https://color-classification.firebaseio.com',
         projectId: 'color-classification',
         storageBucket: '',
         messagingSenderId: '590040209608'
   };
   firebase.initializeApp(config);
   database = firebase.database();
   let ref = database.ref('colors');
   ref.once('value', gotData); //, errorData);

}//setup

function gotData(results) {
  let data = results.val();

  // Processing data
  let keys = Object.keys(data);
  console.log(keys.length);

  let uid_bycount = {};
  let users = [];

  for (let key of keys) {
    let record = data[key];
    let id = record.uid;

    if (!uid_bycount[id]) {
      uid_bycount[id] = 1;
      users.push(id);
    } else {
      uid_bycount[id]++;
    }
  }

  users.sort((a, b) => {
    return uid_bycount[a] - uid_bycount[b];
  });

  for (let id of users) {
    console.log(`${id} ${uid_bycount[id]}`);
  }

  //console.log(uid_bycount)
}
