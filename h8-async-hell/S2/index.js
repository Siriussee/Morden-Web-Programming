var pressed = new Array();
var ajaxReq; //get ramdonInt from server

$(document).ready(function () { //when loaded
	$(".icon").click(getDataAuto(0));
	$("#button").mouseenter(function () { //when mouse in element
		$(".unread").hide(); //hide add unread bubble
		
		//addEvent(); //add buttom click event
	});

	$("#button").mouseleave(function () {
		reset(); //clear Array-pressed and pressed effect
	});
});

function addEvent() {
	
	$("li").each(function () {
		if (pressed.indexOf(this) == -1)
			$(this).click(getData);
	});
}

function getDataAuto(i) {
	getData.call($("li")[i]);
}

function getData() {
	var target = this;
	pressed.push(target); //add to pressed
	$("li").unbind(); //inactivate all buttom
	if (ajaxReq != null) //prevent repeated call
		ajaxReq.abort();
	ajaxReq = $.get("/", function (data) { //get data
		$(target).find("span").text(data); //exec later	//write data
		$("li").each(function () {
			if (pressed.indexOf(this) == -1)
				$(this).removeClass("inactive"); //activate all
		});
		$(target).addClass("inactive"); //inactivate the clicked one
		addEvent(); //activate all buttom except pressed ones
		if (pressed.length == 5) //if all pressed
			sumUp();
		else {
			getDataAuto(pressed.length);
		}
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
	pressed = Array();
	$("span").text("");
	$("#info-bar").text("").removeClass("enabled");
	$("li").removeClass("inactive");
	$("li").unbind();
	if (ajaxReq)
		ajaxReq.abort(); //abort all async func
}