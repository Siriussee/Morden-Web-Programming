$(function(){
	initialPuzzlePane();
	initialButton();
});
  
var initialPuzzlePane = function(){
	$("#puzzle-pane div").each(function(){PuzzlePane.tiles.push(new Tile(this));});
  
	$("#puzzle-pane").click(function(event){
		tile = PuzzlePane.getTile(event.target);
		if (tile && tile.canMove) {
			tile.move(PuzzlePane.blankPosition);
			PuzzlePane.updateTilesMovability();
			if(PuzzlePane.isSolved()) alert("恭喜！拼图正确！");
		}
	});
};
  
var Tile = function(pale){
	this.dom = $(pale);
	this.size = parseInt(this.dom.css("width"));
	this.index = parseInt(this.dom.attr("id"));
  
	this.setPosition(this.index);
  
	this.dom.css("background-position", -this.xOffset + "px " + -this.yOffset + "px");
    
	this.canMove = this.index == 12 || this.index == 15; // 初始时第12、15可以move
  
};
  
Tile.prototype.setPosition = function(position){
	this.row = Math.ceil(position / 4); // 1, 2, 3, 4
	this.column = position % 4 || 4; // 1, 2, 3, 4
  
	this.xOffset = (this.column - 1) * this.size;
	this.yOffset = (this.row - 1) * this.size;
	this.dom.css("top", this.yOffset);
	this.dom.css("left", this.xOffset);
	this.position = position;
};
  
  
Tile.prototype.move = function(position){
	PuzzlePane.setBlankPosition(this.position);
	this.setPosition(position);
};
  
PuzzlePane = {
	tiles: [],
	blankPosition: 16,
	positions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  
	setBlankPosition: function(position){
		this.blankPosition = position;
		this.blankInRow = Math.ceil(position / 4); // 1, 2, 3, 4
		this.blankInColumn = position % 4 || 4; // 1, 2, 3, 4
	},
  
	updateTilesMovability: function(){
		this.tiles.forEach(function(tile){
			tile.canMove = PuzzlePane.isNeighborOfBlank(tile);
		});
	},
  
	isNeighborOfBlank: function(tile){
		return (tile.row == this.blankInRow && Math.abs(tile.column - this.blankInColumn) == 1) ||
      (tile.column == this.blankInColumn && Math.abs(tile.row - this.blankInRow) == 1);
	},
  
	getTile: function(dom){
		result = this.tiles.filter(function(tile){
			return tile.dom[0] == $(dom)[0];
		});
		return result[0];
	},
  
	shuffleTiles: function(){
		this.positions.sort(function(){return 0.5 - Math.random();});
		for(var i = 0; i < 15; i++){
			this.tiles[i].setPosition(this.positions[i]);
		}
		this.setBlankPosition(this.positions[15]);
		this.updateTilesMovability();
	},
  
	isSolved: function(){
		return this.tiles.map(function(tile){
			return tile.index == tile.position;
		}).reduce(function(a, b){
			return a && b;
		});
	}
};
  
initialButton = function(){
	$("button").click(PuzzlePane.shuffleTiles.bind(PuzzlePane));
};