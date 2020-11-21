console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Sprites Loading
var bw = new Image();
var capt = new Image();
var hawkeye= new Image();
var hulk = new Image();
var im = new Image();
var bw = new Image();
var thor = new Image();
bw.src = "Black-Widow.png";
capt.src = "capt.png";
hawkeye.src = "hawkeye.png"
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";

bw.onload = function(){
	ctx.drawImage(bw, 650, 200, 150, 200);
}

im.onload = function(){
	ctx.drawImage(im, 470, 110, 200, 200);
}

//Land
ctx.fillStyle = "sandybrown";
ctx.fillRect(0, 300, 800, 300);

//Sky
ctx. fillStyle = "midnightblue";
ctx.fillRect(0, 0, 800, 300);

//Moon
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 6.28);
ctx.closePath()
ctx.fillStyle = "ivory";
ctx.fill();

ctx.font = "55px Bangers";
ctx.fillStyle = "ivory";
ctx.fillText("Avengers Assemble!", 210, 80);