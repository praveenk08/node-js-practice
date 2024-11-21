var http = require('http');

const server = http.createServer((req, res) => {
  res.end('sever started... on browser') // Output will be shoing in browser
  console.log('Hello World!'); 
  console.log(res); // all request in terminal 
});

server.listen(3000, '127.0.0.1', () => {
  console.log('sever started...'); 
})