const faye = require('faye');
const http = require('http');

const client = new faye.Client('https://fayeserver-dot-test-socketcluster.oa.r.appspot.com/faye');

const server = http.createServer(function(request, response) {

    client.publish('/foo', {text: 'Hi there'}).then(function() {
        console.log('Message received by server!');
    }, function(error) {
        console.log('There was a problem: ' + error);
    });

    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('client is now online!!!!');
    response.end('Hello, client request');
});

server.listen(8080);

