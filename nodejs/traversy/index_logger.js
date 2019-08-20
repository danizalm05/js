<<<<<<< HEAD
// https://nodejs.org/en/docs/
// Node.js Crash Course:
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 32:01

/*console.log("hello blablabla");
const Person = require('./person');
const person1 = new Person('dfghh',45);
console.log("hello blablabla",person1);
person1.greeting();*/


//53.14

const Logger = require ('./logger');
const logger = new Logger();

logger.on('message',data=>console.log('Called listener',data));
=======
// https://nodejs.org/en/docs/
// Node.js Crash Course:
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 32:01

/*console.log("hello blablabla");
const Person = require('./person');
const person1 = new Person('dfghh',45);
console.log("hello blablabla",person1);
person1.greeting();*/


//53.14

const Logger = require ('./logger');
const logger = new Logger();

logger.on('message',data=>console.log('Called listener',data));
>>>>>>> 177ba47d5030c4a9c5bf227cf51c6e7fbb72291a
