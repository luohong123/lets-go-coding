const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server= http.createServer((req, res) => {
 const url = req.url;
 if(url === '/') {
   res.end('hello');
 } else if(url === '/a') {
   res.end('hello a')
 } else {
   res.statusCode = 404;
   res.end('404 Not Found.')
 }
})

server.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`);
})