var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 400;

//ball x-y coordinates 
//and magnitude of movement
var x,y;
var mx, my; 

//challenge color
var circleColor = "rgb(255,0,0)";

//challenge ball 2
var x2,y2;
var mx2, my2; 
var circleColor2 = "rgb(0,255,0)";

//initialize animation
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	//challenge ball 2
	x2 = 100;
	y2 = 300;
	mx2 = 4;
	my2 = 3;

	return setInterval(draw,10);
}
//draw circle
function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}
//clear trail
function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//challenge random color
function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb(" + r + "," + g + "," + b +")";
}


//draw frames
function draw(){
	clear();
	circle(x,y,30,circleColor);

	if(x+mx <0 || x+mx>WIDTH){
		mx = -mx;
		circleColor = randomColor();
	}
	if(y+my <0 || y+my>HEIGHT){
		my = -my;
		circleColor = randomColor();
	}

	x += mx;
	y += my;

	//challenge ball 2
	circle(x2,y2,30,circleColor2);

	if(x2+mx2 <0 || x2+mx2>WIDTH){
		mx2 = -mx2;
		circleColor2 = randomColor();
	}
	if(y2+my2 <0 || y2+my2>HEIGHT){
		my2 = -my2;
		circleColor2 = randomColor();
	}

	x2 += mx2;
	y2 += my2;
}

init();

