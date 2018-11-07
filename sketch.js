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
	creatar(arretes);
	for(let i = 0; i < arretes.length; i++) {
		arretes[i].update();
	}
	show(arretes);
	show(sommets);
}

function mousePressed() {
	addsom(sommets);
	selectsom(sommets);
}

function doubleClicked() {
}

function mouseDragged() {
	deselectsom(sommets);
	movesom(sommets);
}

function keyPressed() {
	if(keyCode === 83 && sommets != []) {
		deletesom(sommets, arretes);
	}
}

