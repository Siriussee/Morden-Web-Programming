var blankX = 3,
	blankY = 3,
	start = false;


window.onload = function () {
	init();
	document.getElementById("restart").onclick = restart;
};

//add .div#pic & #blank via js code
function init() {
	var game = document.createDocumentFragment();
	for (var i = 0; i < 4; ++i) {
		for (var j = 0; j < 4; ++j) {
			if (i == 3 && j == 3) break;
			var piece = document.createElement("div");
			piece.className = "pic row" + (i + 1) + " col" + (j + 1);
			piece.id = "pic" + (4 * i + j + 1);
			piece.addEventListener("click", move);
			game.appendChild(piece);
		}
	}
	var blank = document.createElement("div");
	blank.className = "blank row4 col4";
	blank.id = "blank";
	blank.addEventListener("click", move);
	game.appendChild(blank);
	document.getElementById("gameArea").appendChild(game);
}

function restart() {
	start = true;
	ramdomSwitch();
}

function ramdomSwitch() {
	for (var i = 1; i < 13; ++i) { //loop 12 times will not lead to unable-finish situations
		var random = Math.floor(Math.random() * 15) + 1;
		var a = document.getElementById("pic" + i);
		var b = document.getElementById("pic" + random);
		var temp = a.id;
		a.id = b.id;
		b.id = temp;
	}
}

function move(event) {
	//comment this line to check if finished quickly
	if (!start) return;
	//comment this line to check if finished quickly
	var isValid = false;
	var way = "";
	var x, y;
	var piece = document.getElementsByClassName("pic");
	for (var i = 0, count = 0; i < 4; ++i) {
		for (var j = 0; j < 4; ++j, count++) {
			if (count > 14) break;
			if (piece[count].className == event.target.className) {
				var name = piece[count].className;
				y = name[7] - 1;
				x = name[12] - 1;
				break;
			}
		}
	}

	if (x == blankX && y == blankY + 1) //way = "up";
		isValid = true;
	if (x == blankX && y == blankY - 1) //way = "down";
		isValid = true;
	if (x == blankX + 1 && y == blankY) //way = "left";
		isValid = true;
	if (x == blankX - 1 && y == blankY) //way = "right";
		isValid = true;
	if (!isValid) return;

	//exchange position
	event.target.className = "pic row" + (blankY + 1) + " col" + (blankX + 1);
	document.getElementById("blank").className = "blank row" + (y + 1) + " col" + (x + 1);

	blankX = x;
	blankY = y;
	check();
}

//if every piece's id meets its classname, then the job's done
function check() {
	var piece = document.getElementsByClassName("pic");
	for (var i = 0, count = 0; i < 4; ++i) {
		for (var j = 0; j < 4; ++j, count++) {
			if (count > 14) break;
			var name = piece[count].className;
			var y = name[7] - 1;
			var x = name[12] - 1;
			var n = 4 * y + x + 1;
			var name1 = piece[count].id;
			var name2 = "pic" + n;
			if (piece[count].id != "pic" + n) return;
		}
	}
	alert("DONE!");
}