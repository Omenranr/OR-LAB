let sommets = [];
let selsom = [];
let arretes = [];
let rad = 15;
let lmin = 2;
let poids = 10;
function setup() {
	createCanvas(600, 600);
	background(100);
}

function draw() {
	background(100);
	show(sommets);
	show(arretes);
	creatar(arretes);
}

function mousePressed() {
	addsom(sommets);
	selectsom(sommets);
}
function mouseReleased() {
	console.log("mouse released");
}
function doubleClicked() {
}

function mouseDragged() {
	deselectsom(sommets);
	movesom(sommets);
}

function keyPressed() {
	// x = mouseX;
	// y = mouseY;
}

