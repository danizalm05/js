<<<<<<< HEAD
// https://nodejs.org/en/docs/
// https://nodejs.org/dist/latest-v11.x/docs/api/events.html
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 50:08
/* Node.js core API is built around an idiomatic asynchronous
 event-driven architecture in which certain kinds of objects (called "emitters")
 emit named events that cause Function objects ("listeners") to be called.
For instance:
  a net.Server object emits an event each time a peer connects to it;
  a fs.ReadStream emits an event when the file is opened;
  a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class.
These objects expose an eventEmitter.on() function that allows one or more
 functions to be attached to named events emitted by the object.

*/

const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
module.exports = Logger; 
=======
// https://nodejs.org/en/docs/
// https://nodejs.org/dist/latest-v11.x/docs/api/events.html
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 50:08
/* Node.js core API is built around an idiomatic asynchronous
 event-driven architecture in which certain kinds of objects (called "emitters")
 emit named events that cause Function objects ("listeners") to be called.
For instance:
  a net.Server object emits an event each time a peer connects to it;
  a fs.ReadStream emits an event when the file is opened;
  a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class.
These objects expose an eventEmitter.on() function that allows one or more
 functions to be attached to named events emitted by the object.

*/

const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
module.exports = Logger; 
>>>>>>> 177ba47d5030c4a9c5bf227cf51c6e7fbb72291a
