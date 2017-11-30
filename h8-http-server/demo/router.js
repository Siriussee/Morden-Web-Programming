function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === "function")
		handle[pathname](response, postData);
	else if (pathname[1] == "?")
		handle["search"](response, pathname.substring(2));
	else
		handle["/start"](response, postData);

}

exports.route = route;