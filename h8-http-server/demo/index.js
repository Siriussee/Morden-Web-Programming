var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//a key-value pairs, to handle different url request
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/clear"] = requestHandlers.clear;
handle["search"]= requestHandlers.search;

//then pass our hander pairs to start()
server.start(router.route, handle);