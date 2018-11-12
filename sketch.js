let sommets = [];
let selsom = [];
let arretes = [];
let rad = 10;
let lmin = 2;
let numero = 0;
let nomClasses = ["sommets", "aretes"];
let classes = [sommets, arretes];
let oriente = false;
let input;
let orientecheck;
let saveButton;
function setup() {
	createCanvas(600, 600);
	background(100);
	orientecheck = createCheckbox();
	input = createFileInput();
	resetSpace = select("#resetSpace");
	resetSpace.mousePressed(reset);
	saveButton = select("#saveGraph");
	saveButton.mousePressed(saveGraphTxt);
}

function draw() {
	oriente = orientecheck.checked();
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

