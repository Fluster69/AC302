var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 400;

//ball x-y coordinates 
//and magnitude of movement
var x,y;
var mx, my; 

//initialize animation
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,10);
}
//draw circle
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
//clear trail
function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//draw frames
function draw(){
	clear();
	circle(x,y,30);

	if(x+mx <0 || x+mx>WIDTH){
		mx = -mx;
	}
	if(y+my <0 || y+my>HEIGHT){
		my = -my;
	}

	x += mx;
	y += my;
}

init();

