let sommets = [];
let selsom = [];
let arretes = [];
let rad = 10;
let lmin = 2;
let numero = 0;

function setup() {
	createCanvas(600, 600);
	createFileInput();
	let saveButton = select("#saveGraph");
	// saveButton.mousePressed();
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
	if(keyCode === UP_ARROW) {
		reset();
	}
	if(keyCode === DOWN_ARROW) {
		saveGraphTxt(["sommets", "aretes"], [sommets, arretes])
	}
}

