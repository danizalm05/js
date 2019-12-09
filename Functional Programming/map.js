 // https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2
 // "Map: Part 2 of Functional Programming in JavaScript" 
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]

//Outputing names in the usual way
var names1 = []
for (var i = 0; i < animals.length; i++) {
  names1.push(animals[i].name)
}

console.log( names1);
//Outputing names using 'map' and call back function
var names2 = animals.map(function(an) {  return an.name  }  )
var names4 = animals.map(     (x) =>     x.name) //using arrow function

console.log( names4);
var names3 = animals.map(function(animal) {
    	 return animal.name + ' the ' + animal.species 
		})

console.log( names3 );