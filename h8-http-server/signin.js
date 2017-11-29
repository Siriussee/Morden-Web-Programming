var http = require('http');
var fs = require('fs');
var url = require('url');
var data;

init();

http.createServer(onRequest).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');


function init() {
    //read data from data.json
}
function onRequest(request, response){
    //get url and react via request
}