var fs = require("fs");
var queryString = require('querystring');

function start(response, postData) {
	console.log("Request handler 'start' was called.");
	fs.readFile("./h8-http-server/demo/index.html", function (err, body) {
		if (err) throw err;
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write(body);
		response.end();
	});
}

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
		response.write("<!DOCTYPE html><html><head><meta http-equiv=\"Content-type\" " +
			"content=\"text/html; charset=UTF-8\"><title>Sign Up</title>" +
			"</head><body style=\"width: 300px;margin: auto;margin-top:100px\">");
		response.write("姓名: " + info[0][1] + "<br>" +
			"学号: " + info[1][1] + "<br>" +
			"电话: " + info[2][1] + "<br>" +
			"邮箱: " + info[3][1] + "<br>");
		response.write("</body>");
		response.end();

	} else {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write("<!DOCTYPE html><html><head><meta http-equiv=\"Content-type\" " +
			"content=\"text/html; charset=UTF-8\">")
		response.write("<body>");
		response.write("合法性检测: " + isValid(info) + "<br>" + "重复检测: " + isUsed(info));
		response.write("</body>");
		response.end();
	}
}

function isValid(params) {
	if (!(/[a-zA-Z][a-zA-Z0-9_\-]{5,17}/.test(params[0][1]))) return "非法用户名。用户名由6~18位英文字母、数字或下划线组成，且必须以英文字母开头。";
	if (params[1][1] > 99999999 || params[1][1] < 10000000) return "非法学号。学号由8位数字组成，且开头不能为0。";
	if (!(/[1-9][0-9]{10}/.test(params[2][1]))) return "非法电话号码。电话号码由11位数字组成，且开头不能为0。";
	if (!(/^[a-zA-Z0-9_\-]+@([a-zA-Z0-9_\-]+\.)+[a-zA-Z]{2,4}$/.test(params[3][1]))) return "非法邮箱地址。";
	return "pass";
}

function isUsed(info) {
	var allData = fs.readFileSync("./h8-http-server/demo/data.txt");
	if (allData.toString() == "") return "pass";
	var data = allData.toString().split("\n");
	for (var i = 0; i < data.length; ++i) {
		var thisData = data[i].split("&");
		if (info[0][1] == thisData[0].split("=")[1]) return "用户名已被占用";
		if (info[1][1] == thisData[1].split("=")[1]) return "学号已被占用";
		if (info[2][1] == thisData[2].split("=")[1]) return "电话号码已被占用";
		if (info[3][1] == thisData[3].split("=")[1]) return "电子邮箱已被占用";
	}
	return "pass";
	
	/* !!!! fuck all async methods burning my time !!!!
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

exports.start = start;
exports.upload = upload;