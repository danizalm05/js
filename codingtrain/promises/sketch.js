//https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=12&t=0s
// http://codingtra.in
// http://patreon.com/codingtrain

// Promises Part 1
// Video: https://youtu.be/QO4NXhWo_NM

const wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
const giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";


function setup() {
 noCanvas();
 fetch(wordnikAPI)
   .then(response => response.json())
   .then(json => {
     createP(json.word);
     return fetch(giphyAPI + json.word);
   })
   .then(response => response.json())
   .then(json => {
     createImg(json.data[0].images['fixed_height_small'].url);
   })
   .catch(err => console.log(err));
}
