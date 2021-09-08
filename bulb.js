//var header = document.getElementById("lightBuld");

//get all buttons with class
var btns = document.getElementsByClassName("btnsm");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

//bulb on button  
var on = document.querySelector(".bulbon");
on.addEventListener("click", function () {
	var changeon = document.querySelector(".bulbchange").src = "image/bulbon.png";
});

//bulb off button 
var off = document.querySelector(".bulboff");
off.addEventListener("click", function () {
	var changeoff = document.querySelector(".bulbchange").src = "image/bulboff.png";
});

//check the connection
//var a = 3;
//console.log(a);