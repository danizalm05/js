 // https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=1
 // "Filter: Part 1 of Functional Programming in JavaScript" 
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]

//Printing  the dogs names from the  above array
var dogs1 = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog'){
	          dogs1.push(animals[i].name)
  }
  
}
console.log(dogs1); 
// The same  with callback

var isDog = function(animal){
	return animal.species ===  'dog'
}
var dogs2 = animals.filter(isDog);

//The filter expect the callback function to return true 
// or  false.  False will exclude the item from the array
 console.log(dogs2);
 
 //var otherAnimals = animals.reject(isDog);
  