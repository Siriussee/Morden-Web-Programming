var start = false;
var checked = false;
var cheat = false;

window.onload = function () {
	document.getElementById("start").onmouseover = function () {
		document.getElementById("info").textContent = "Gaming";
		start = true;
		document.getElementById("wall-top").className = "wall";
		document.getElementById("wall-mid").className = "wall";
		document.getElementById("wall-left").className = "wall";
		document.getElementById("wall-right").className = "wall";
		document.getElementById("wall-bottom").className = "wall";
	};

	document.getElementById("end").onmouseover = function () {
		//alert("start: " + start + " checked: " + checked);
		if (!cheat && start)
			document.getElementById("info").textContent = "You Win!";
		if (cheat && start)
			document.getElementById("info").textContent = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
		//alert("start: " + start + " checked: " + checked);
		checked = cheat = start = false;
	};

	document.getElementById("check").onmouseover = function () {
		if (start) {
			//alert("out maze");
			cheat = true;
		}
	}

	document.getElementById("wall-container").onmouseover = function () {
		//alert("wall!");
		if (start) {
			start = false;
			document.getElementById("info").textContent = "You Lose!";
			//document.getElementById("wall-container").className = "error";

		}
	}

	document.getElementById("wall-top").onmouseover = function () {
		if (start) {
			document.getElementById("wall-top").className = "error";
		}
	}
	document.getElementById("wall-top").onmousemove = function () {
		if (start) {
			document.getElementById("wall-top").className = "wall";
		}
	}
	document.getElementById("wall-left").onmouseover = function () {
		if (start) {
			document.getElementById("wall-left").className = "error";
		}
	}
	document.getElementById("wall-right").onmouseover = function () {
		if (start) {
			document.getElementById("wall-right").className = "error";
		}
	}
	document.getElementById("wall-mid").onmouseover = function () {
		if (start) {
			document.getElementById("wall-mid").className = "error";
		}
	}
	document.getElementById("wall-bottom").onmouseover = function () {
		if (start) {
			document.getElementById("wall-bottom").className = "error";
		}
	}
};