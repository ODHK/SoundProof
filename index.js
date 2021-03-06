var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.home;
handle['/favicon.ico'] = requestHandlers.favicon;
handle['/map.js'] = requestHandlers.map;

server.start(router.route, handle);