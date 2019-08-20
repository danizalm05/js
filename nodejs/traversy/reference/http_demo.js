<<<<<<< HEAD
// Simple  server
// https://nodejs.org/en/docs/
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 56:
// go to http://localhost:5000/

const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
  })
.listen(5000, () => console.log('Server running...'));
=======
// Simple  server
// https://nodejs.org/en/docs/
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 56:
// go to http://localhost:5000/

const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
  })
.listen(5000, () => console.log('Server running...'));
>>>>>>> 177ba47d5030c4a9c5bf227cf51c6e7fbb72291a
