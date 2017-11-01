var start = false;
var checked = false;

window.onload = function () {
    document.getElementById("start").onmouseover = function () {
        document.getElementById("info").textContent = "Gaming";
        start = true;
    }
    document.getElementById("check").onmouseout = function () {
        console.log("checked!");
        checked = true;
    }
    document.getElementById("end").onmouseover = function () {
        console.log("start: " + start + " checked: " + checked);
        if (start && checked)
            document.getElementById("info").textContent = "You Win!"
        if (start && !checked)
            document.getElementById("info").textContent = "No cheating!"
        //check = start = false;
    }
}
/*
var knock = false;
function turnRed(event) {
    event.target.id = "error";
}

document.getElementsByClassName("wall").onmouseover = function(){
    wall = document.getElementById("wall");
    for(var i = 0; i < wall.length; ++i){
        wall[i].addEventListener('mouseover', turnRed);
    }
    document.getElementById("info").textContent = "You lose!"
    //start = false;
}
*/