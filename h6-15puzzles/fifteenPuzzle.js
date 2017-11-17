var blankX = 3,
	blankY = 3;


window.onload = function () {
	init();
	document.getElementById("restart").onclick = restart();
};

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

function restart() {}

function move(event) {
	var isValid = false;
	var way = "";
	var x, y;
	var piece = document.getElementsByClassName("pic");
	for (var i = 0; i < 15; ++i) {
		if (piece[i].id == event.target.id) {
			x = i % 4;
			y = i / 4;
			break;
		}
	}
	if (x == blankX && y == blankY + 1) {
		isValid = true;
		way = "up";
	}
	if (x == blankX && y == blankY - 1) {
		isValid = true;
		way = "down";
	}
	if (x == blankX + 1 && y == blankY) {
		isValid = true;
		way = "left";
	}
	if (x == blankX - 1 && y == blankY) {
		isValid = true;
		way = "right";
	}
	if(!isValid)return;
	event.target.className = "pic row"+(blankX+1)+" col"+(blankY+1);
	document.getElementById("blank").className = "blank row"+(x+1)+" col"+(y+1);
	x = 
}