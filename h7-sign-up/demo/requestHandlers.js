var fs = require("fs");
var queryString = require('querystring');
//load index.html
function start(response, postData) {
	console.log("Request handler 'start' was called.");
	fs.readFile("./index.html", function (err, body) {
		if (err) throw err;
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(body);
		response.end();
	});
}
//load index.css
function style(response) {
	console.log("Request handler 'style' was called.");
	fs.readFile("./index.css", function (err, body) {
		if (err) throw err;
		response.writeHead(200, {
			"Content-Type": "text/css"
		});
		response.write(body);
		response.end();
	});
}
//upload post to server
function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	//string to data
	var fuckJsEncoding = postData.split("%40");
	if (fuckJsEncoding[1] != undefined)
		postData = fuckJsEncoding[0] + "@" + fuckJsEncoding[1];
	var temp = postData.split("&");
	var info = new Array();
	for (var i = 0; i < 4; ++i) {
		info[i] = temp[i].split("=");
	}

	//save to flie
	if (isValid(info) == "pass" && isUsed(info) == "pass") {
		fs.appendFile("./h8-http-server/demo/data.txt", postData + "\n", function (err) {
			if (err) throw err;
			console.log("write to file success");
		});
		//show it
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(headHTML);
		response.write("<p class=\"blank\">" + info[0][1] + "</p>" +
			"<p class=\"blank\">" + info[1][1] + "</p>" +
			"<p class=\"blank\">" + info[2][1] + "</p>" +
			"<p class=\"blank\">" + info[3][1] + "</p>");
		response.write("<form action=\"/start\" method=\"post\"><input class=\"buttom\" type=\"submit\" value=\"返回\" /></form>");
		response.write(tailHTML);
		response.end();

	} else {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(headHTML);
		response.write("合法性检测: " + isValid(info) + "<br>" + "重复性检测: " + isUsed(info));
		response.write("<form action=\"/start\" method=\"post\"><input class=\"buttom\" type=\"submit\" value=\"返回\" /></form>");
		response.write(tailHTML);
		response.end();
	}
}
//style check
function isValid(params) {
	var massege = "";
	var flag = false;
	if (!(/[a-zA-Z][a-zA-Z0-9_\-]{5,17}/.test(params[0][1]))) {
		flag = true;
		massege += "非法用户名。用户名由6~18位英文字母、数字或下划线组成，且必须以英文字母开头。";
	}
	if (params[1][1] > 99999999 || params[1][1] < 10000000) {
		flag = true;
		massege += "非法学号。学号由8位数字组成，且开头不能为0。";
	}
	if (!(/[1-9][0-9]{10}/.test(params[2][1]))) {
		flag = true;
		massege += "非法电话号码。电话号码由11位数字组成，且开头不能为0。";
	}
	if (!(/^[a-zA-Z0-9_\-]+@([a-zA-Z0-9_\-]+\.)+[a-zA-Z]{2,4}$/.test(params[3][1]))) {
		flag = true;
		massege += "非法邮箱地址。";
	}
	if (flag == false)
		return "pass";
	return massege;
}
//repeat check
function isUsed(info) {
	var massege = "";
	var flag = false;
	var allData = fs.readFileSync("./data.txt");
	if (allData.toString() == "") return "pass";
	var data = allData.toString().split("\n");
	for (var i = 0; i < data.length; ++i) {
		if (data[i] == "") break;
		var thisData = data[i].split("&");
		if (info[0][1] == thisData[0].split("=")[1]) {
			flag = true;
			massege += "用户名已被占用。";
		}
		if (info[1][1] == thisData[1].split("=")[1]) {
			flag = true;
			massege += "学号已被占用。";
		}
		if (info[2][1] == thisData[2].split("=")[1]) {
			flag = true;
			massege += "电话号码已被占用。";
		}
		if (info[3][1] == thisData[3].split("=")[1]) {
			flag = true;
			massege += "电子邮箱已被占用。";
		}
	}
	if (flag == false)
		return "pass";
	return massege;

	/* !!!! fuck all async methods wasting my time !!!!
	fs.readFile("./h8-http-server/demo/data.txt", function (err, allData) {
		if (err) 
			console.log("err in used");
		if (allData.toString() == "") 
			return "pass";
		var data = allData.toString().split("\n");
		for (var i = 0; i < data.length; ++i) {
			var thisData = data[i].split("&");
			if (info[0][1] == thisData[0].split("=")[1]) return "用户名已占用";
			if (info[1][1] == thisData[1].split("=")[1]) return "学号已占用";
			if (info[2][1] == thisData[2].split("=")[1]) return "电话号码已占用";
			if (info[3][1] == thisData[3].split("=")[1]) return "电子邮箱已占用";
		}
	});
	return "pass";
	*/
}

function search(response, target) {
	console.log("Request handler 'search' was called.");
	var flag = false;
	var name = target.split("=")[1];
	var allData = fs.readFileSync("./data.txt");
	if (allData.toString() == "") return start(response, "");
	var data = allData.toString().split("\n");
	for (var i = 0; i < data.length; ++i) {
		var thisData = data[i].split("&");
		if (name == thisData[0].split("=")[1]) {
			flag = true;
			//show it
			response.writeHead(200, {
				"Content-Type": "text/html"
			});
			response.write(headHTML);
			response.write("<p class=\"blank\">" + thisData[0].split("=")[1] + "</p>" +
				"<p class=\"blank\">" + thisData[1].split("=")[1] + "</p>" +
				"<p class=\"blank\">" + thisData[2].split("=")[1] + "</p>" +
				"<p class=\"blank\">" + thisData[3].split("=")[1] + "</p>");
			response.write("<form action=\"/start\" method=\"post\"><input class=\"buttom\" type=\"submit\" value=\"返回\" /></form>");
			response.write(tailHTML);
			response.end();
			break;
		}
	}
	if (flag == false)
		return start(response, "");
}

function clear(response) {
	console.log("Request handler 'clear' was called.");
	fs.writeFileSync("./data.txt", "");

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(headHTML);
	response.write("数据已清除。")
	response.write("<form action=\"/start\" method=\"post\"><input class=\"buttom\" type=\"submit\" value=\"返回\" /></form>");
	response.write(tailHTML);
	response.end();

}
/*
function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}
*/
exports.search = search;
exports.start = start;
exports.upload = upload;
exports.clear = clear;
exports.style = style;

var headHTML = "<!DOCTYPE html><html><head><meta http-equiv=\"Content-type\" content=\"text/html; " +
	"charset=UTF-8\"><link rel=\"stylesheet\" type=\"text/css\" href=\"index.css\"><title>Sign Up</title>" +
	"</head><body>";
var tailHTML = "</body>";