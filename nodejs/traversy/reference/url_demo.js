<<<<<<< HEAD
// https://nodejs.org/en/docs/
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 41:21



const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), preious gives errors,
*  if you get an error saying, TypeError: URL is not a constructor,
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log('href: ',myUrl.href);
console.log('toString(): ',myUrl.toString());

// Host (root domain)
console.log('host: ',myUrl.host);

// Hostname (does not get port)
console.log('hostname: ',myUrl.hostname);

// Pathname
console.log('pathname: ',myUrl.pathname);

// Serialized query
console.log('search: ',myUrl.search);

// Params object
console.log('searchParams: ',myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log('searchParams: ',myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
=======
// https://nodejs.org/en/docs/
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 41:21



const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), preious gives errors,
*  if you get an error saying, TypeError: URL is not a constructor,
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log('href: ',myUrl.href);
console.log('toString(): ',myUrl.toString());

// Host (root domain)
console.log('host: ',myUrl.host);

// Hostname (does not get port)
console.log('hostname: ',myUrl.hostname);

// Pathname
console.log('pathname: ',myUrl.pathname);

// Serialized query
console.log('search: ',myUrl.search);

// Params object
console.log('searchParams: ',myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log('searchParams: ',myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
>>>>>>> 177ba47d5030c4a9c5bf227cf51c6e7fbb72291a
