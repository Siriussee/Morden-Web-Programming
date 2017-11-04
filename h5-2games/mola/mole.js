var started = false;
var t = 30;
var timer;
var random;

window.onload = function () {
	document.getElementById("start").onclick = function () {
		init();
		toStart();
		newMole();
	};
};

function init() {
	var mole = document.getElementsByClassName("moles");
	for (var i = 0; i < 60; ++i) {
		mole[i].addEventListener("click", isCorrect);
		mole[i].checked = false;
	}
}

function isCorrect() {
	this.checked = false;
	if (started)
		if (this == document.getElementsByClassName("moles")[random]) {
			document.getElementById("score").value++;
			newMole();
		} else {
			document.getElementById("score").value--;
		}
}

function toStart() {
	if (!started) {
		document.getElementById("time").value = 30;
		document.getElementById("score").value = 0;
		t = 30;
		started = true;
		start();
	} else {
		end();
	}
}

function start() {
	if (!started) return;
	if (document.getElementById("time").value <= 0) {
		end();
		return;
	}

	document.getElementById("time").value = t;
	t--;
	timer = setTimeout("start()", 1000);
}

function end() {
	document.getElementById("time").value = 30;
	t = 30;
	started = false;
	alert("You Scored " + document.getElementById("score").value);
	init();
}

function newMole() {
	if (started) {
		random = parseInt(Math.random() * 58 + 1);
		document.getElementsByClassName("moles")[random].checked = true;
	}
}