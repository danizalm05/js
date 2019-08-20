<<<<<<< HEAD
const path = require('path');//We are using the 'path' core  module

console.log('FILE: ',path.basename(__filename));// Base file name
console.log('DIR:  ',path.dirname(__filename)); // Directory name
console.log('EXT:  ',path.extname(__filename)); // File extension
console.log('path object: ',path.parse(__filename)); // Create path object
console.log('path object.base: ',path.parse(__filename).base);
console.log(path.join(__dirname, 'test', 'hello.html'));// Concatenate paths


/*
// More examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log(platSpec);


// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log(parentDir);*/
=======
const path = require('path');//We are using the 'path' core  module

console.log('FILE: ',path.basename(__filename));// Base file name
console.log('DIR:  ',path.dirname(__filename)); // Directory name
console.log('EXT:  ',path.extname(__filename)); // File extension
console.log('path object: ',path.parse(__filename)); // Create path object
console.log('path object.base: ',path.parse(__filename).base);
console.log(path.join(__dirname, 'test', 'hello.html'));// Concatenate paths


/*
// More examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log(platSpec);


// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log(parentDir);*/
>>>>>>> 177ba47d5030c4a9c5bf227cf51c6e7fbb72291a
