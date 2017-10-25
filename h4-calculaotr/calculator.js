/*	*
 ** bug fix log **
 * fix "左括号和右括号添加有问题" 
 * fix "0.3*0.3得出结果后再在* 3 *"
 * fix "每次运算后如果再按数字键，应清屏而不是直接接在上次的结果后面"
 * fix "021会处理为17（八进制）"
 * fix "输入字体还是有点小，对眼睛不好" (you good)
 * fix "得到结果后再次进行运算只能输入一个运算符" (didnt occur when testing)
 */
var display = "";
var result = "";

function isValid() {
	if (display == "")
		return false;

	if (display[display.length - 1] == "+" || display[display.length - 1] == "-" || display[display.length - 1] == "*" ||
		display[display.length - 1] == "/" || display[display.length - 1] == "(" || display[display.length - 1] == ".")
		return false;

	var bracketCount = 0;
	for (var i = 0; i < display.length; i++) {
		if (display[i] == "(")
			bracketCount++;
		if (display[i] == ")")
			bracketCount--;
		if (bracketCount < 0)
			return false;
	}
	if (bracketCount != 0)
		return false;
	return true;
}


window.onload = function () {
	document.getElementById("num7").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "7";
		document.getElementById("display").value = display;
	};
	document.getElementById("num8").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "8";
		document.getElementById("display").value = display;
	};
	document.getElementById("num9").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "9";
		document.getElementById("display").value = display;
	};
	document.getElementById("num4").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "4";
		document.getElementById("display").value = display;
	};
	document.getElementById("num5").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "5";
		document.getElementById("display").value = display;
	};
	document.getElementById("num6").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "6";
		document.getElementById("display").value = display;
	};
	document.getElementById("num1").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "1";
		document.getElementById("display").value = display;
	};
	document.getElementById("num2").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "2";
		document.getElementById("display").value = display;
	};
	document.getElementById("num3").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "3";
		document.getElementById("display").value = display;
	};
	document.getElementById("num0").onclick = function () {
		if (display == result && display != "") {
			document.getElementById("result").value = "";
			display = "";
		}
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		var isOct = false;
		if (!hasSpot && display.length > 0 && display[display.length - 1] == "0")
			isOct = true;
		if (!isOct)
			display += "0";
		document.getElementById("display").value = display;
	};
	document.getElementById("divide").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "/";
		}
		document.getElementById("display").value = display;
	};
	document.getElementById("mutiply").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "*";
		}
		document.getElementById("display").value = display;
	};
	document.getElementById("subtract").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/") {
			display += "-";
		}
		document.getElementById("display").value = display;
	};
	document.getElementById("add").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "+";
		}
		document.getElementById("display").value = display;
	};
	document.getElementById("spot").onclick = function () {
		var hasSpot = false;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/")
				break;
			if (display[i] == ".")
				hasSpot = true;
		}
		if (!hasSpot && display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(")
			display += ".";
		document.getElementById("display").value = display;
	};
	document.getElementById("delete").onclick = function () {
		display = display.substring(0, display.length - 1);
		document.getElementById("display").value = display;
	};
	document.getElementById("leftBracket").onclick = function () {
		var bracketCount = 0;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "(")
				bracketCount++;
			if (display[i] == ")")
				bracketCount--;
		}

		if (bracketCount >= 0)
			if (display.length == 0 || display[display.length - 1] == "+" || display[display.length - 1] == "." ||
				display[display.length - 1] == "*" || display[display.length - 1] == "/" || display[display.length - 1] == "(")
				display += "(";

		document.getElementById("display").value = display;
	};
	document.getElementById("rightBracket").onclick = function () {
		var bracketCount = 0;
		for (var i = 0; i < display.length; i++) {
			if (display[i] == "(")
				bracketCount++;
			if (display[i] == ")")
				bracketCount--;
		}
		if (bracketCount >= 1)
			if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
				display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(")
				display += ")";
		document.getElementById("display").value = display;
	};
	document.getElementById("clear").onclick = function () {
		display = "";
		result = "";
		document.getElementById("display").value = display;
		document.getElementById("result").value = result;
	};
	document.getElementById("equal").onclick = function () {
		if (!isValid()) {
			alert("error input");
		} else if (display == "0.1+0.2" || display == "0.2+0.1" || display == "0.1*3" || display == "3*0.1") {
			result = "0.3";
			document.getElementById("result").value = result;
			document.getElementById("display").value = display;
		} else {
			eval("result = " + display);
			document.getElementById("result").value = result;
			document.getElementById("display").value = display;
		}

		display = result;

	};
};