var http = require('http');

http
  .createServer(function(req, res) {
    res.write('Hellsafasdfo, Node.js!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
