var display = "";
var result = "";

function isValid() {
	if (display == "")
		return false;
	if (display[0] == '+' || display[0] == '*' || display[0] == '/' || display[0] == ')' || display[0] == '.')
		return false;

	if (display[display.length - 1] == '+' || display[display.length - 1] == '-' || display[display.length - 1] == '*' ||
		display[display.length - 1] == '/' || display[display.length - 1] == '(' || display[display.length - 1] == '.')
		return false;

	var bracketCount = 0;
	for (var i = 0; i < display.length; i++) {
		if (display[i] == '(')
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
		display += "7";
		document.getElementById("display").value = display;
	}
	document.getElementById("num8").onclick = function () {
		display += "8";
		document.getElementById("display").value = display;
	}
	document.getElementById("num9").onclick = function () {
		display += "9";
		document.getElementById("display").value = display;
	}
	document.getElementById("num4").onclick = function () {
		display += "4";
		document.getElementById("display").value = display;
	}
	document.getElementById("num5").onclick = function () {
		display += "5";
		document.getElementById("display").value = display;
	}
	document.getElementById("num6").onclick = function () {
		display += "6";
		document.getElementById("display").value = display;
	}
	document.getElementById("num1").onclick = function () {
		display += "1";
		document.getElementById("display").value = display;
	}
	document.getElementById("num2").onclick = function () {
		display += "2";
		document.getElementById("display").value = display;
	}
	document.getElementById("num3").onclick = function () {
		display += "3";
		document.getElementById("display").value = display;
	}
	document.getElementById("num0").onclick = function () {
		display += "0";
		document.getElementById("display").value = display;
	}
	document.getElementById("divide").onclick = function () {
		if (result != "") {
			display = result;
			document.getElementById("result").value = "";
		}
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "/";
		}
		document.getElementById("display").value = display;
	}
	document.getElementById("mutiply").onclick = function () {
		if (result != "") {
			display = result;
			document.getElementById("result").value = "";
		}
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "*";
		}
		document.getElementById("display").value = display;
	}
	document.getElementById("subtract").onclick = function () {
		if (result != "") {
			display = result;
			document.getElementById("result").value = "";
		}
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/") {
			display += "-";
		}
		document.getElementById("display").value = display;
	}
	document.getElementById("add").onclick = function () {
		if (result != "") {
			display = result;
			document.getElementById("result").value = "";
		}
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(") {
			display += "+";
		}
		document.getElementById("display").value = display;
	}
	document.getElementById("spot").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(")
			display += ".";
		document.getElementById("display").value = display;
	}
	document.getElementById("delete").onclick = function () {
		display = display.substring(0, display.length - 1);
		document.getElementById("display").value = display;
	}
	document.getElementById("leftBracket").onclick = function () {
		if (display == "")
			display += "(";
		else if (display[display.length - 1] == "+" || display[display.length - 1] == "." ||
			display[display.length - 1] == "*" || display[display.length - 1] == "/" || display[display.length - 1] == "(")
			display += "(";
		document.getElementById("display").value = display;
	}
	document.getElementById("rightBracket").onclick = function () {
		if (display[display.length - 1] != "+" && display[display.length - 1] != "-" && display[display.length - 1] != "." &&
			display[display.length - 1] != "*" && display[display.length - 1] != "/" && display[display.length - 1] != "(")
			display += ")";
		document.getElementById("display").value = display;
	}
	document.getElementById("clear").onclick = function () {
		display = "";
		result = "";
		document.getElementById("display").value = display;
		document.getElementById("result").value = result;
	}
	document.getElementById("equal").onclick = function () {
		if (!isValid()) {
			alert("error input");
		} else if (display == "0.1+0.2" || display == "0.2+0.1" || display == "0.1*3" || display == "3*0.1") {
			alert("come on bro, Don't be that harsh! The ans is 0.3.");
		} else {
			eval("result = " + display);
			document.getElementById("result").value = result;
			document.getElementById("display").value = display;
		}
	}
}