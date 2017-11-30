function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === "function")
		handle[pathname](response, postData);
	else if (pathname[0] == "?")
		handle["search"](response, pathname.substring(1));
	else
		handle["/start"](response, postData);

}

exports.route = route;