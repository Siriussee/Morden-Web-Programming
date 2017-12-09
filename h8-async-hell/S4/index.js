var pressed = new Array();
var order = new Array(0, 1, 2, 3, 4);
var charOrder = new Array();
var ajaxOrderReq; //get ramdonInt from server
var counter = 0;

$(document).ready(function () { //when loaded
	$("#button").mouseenter(function () { //when mouse in element
		ramdonSwitch();
		$("#order").text(charOrder.toString());
		$(".unread").hide(); //hide add unread bubble
		$(".apb").click(function () {
			getData.apply($("li")[order[0]]);
		});
		//addEvent(); //add buttom click event
	});

	$("#button").mouseleave(function () {
		reset(); //clear Array-pressed and pressed effect
	});
});

function ramdonSwitch() {
	for (var i = 0; i < 4; ++i) {
		var ramdon = Math.round(Math.random() * 4);
		var temp = order[0];
		order[0] = order[ramdon];
		order[ramdon] = temp;
	}

	for (var i = 0; i < 5; ++i) {
		if (order[i] == 0)
			charOrder[i] = 'A';
		if (order[i] == 1)
			charOrder[i] = 'B';
		if (order[i] == 2)
			charOrder[i] = 'C';
		if (order[i] == 3)
			charOrder[i] = 'D';
		if (order[i] == 4)
			charOrder[i] = 'E';
	}
}

function addEvent() {
	$("li").each(function () {
		if (pressed.indexOf(this) == -1)
			$(this).click(getData);
	});
}

function getDataAuto(i) {
	getData.apply($("li")[i]);
}

function getData() {
	var target = this;
	if (target != window)
		pressed.push(target); //add to pressed
	$("li").unbind(); //inactivate all buttom
	//if (ajaxReq != null) //prevent repeated call
	//	ajaxReq.abort();
	ajaxReq = $.get("/", function (data) { //get data
		counter++;
		$(target).find("span").text(data); //exec later	//write data
		$("li").each(function () {
			if (pressed.indexOf(this) == -1)
				$(this).removeClass("inactive"); //activate all
		});
		$(target).addClass("inactive"); //inactivate the clicked one
		addEvent(); //activate all buttom except pressed ones
		if (pressed.length == 5) //if all pressed
			sumUp();
		if (pressed.length != 0)
			$(".apb").unbind();
		getDataAuto(order[pressed.length]);
	});
	$(target).find("span").text("...").show(); //exec first
	$("li").addClass("inactive"); //when waiting data, all pause
	$(target).removeClass("inactive"); //the clicked one is still active
}

function sumUp() {
	$("#info-bar").addClass("enabled");
	//.click(function () {
	var ans = 0;
	$("span").each(function () {
		ans += parseInt($(this).text());
	});
	$("#info-bar").text(ans).removeClass("enabled");
	//show ans. disable click. change color 
	//});
}


function reset() {
	counter = 0;
	pressed = Array();
	$("span").text("");
	$("#info-bar").text("").removeClass("enabled");
	$("li").removeClass("inactive");
	$("li").unbind();
	if (ajaxReq)
		ajaxReq.abort(); //abort all async func
}