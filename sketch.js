let sommets = [];
let selsom = [];
let arretes = [];
let rad = 13;
let lmin = 2;
let numero = 0;
let nomClasses = ["sommets", "aretes"];
let classes = [sommets, arretes];
let oriente = false;
let input;
let orientecheck;
let saveButton;
let loadedGraph;
let space;
function setup() {
	space = createCanvas(600, 600);
	background(100);
	orientecheck = createCheckbox();
	resetSpace = select("#resetSpace");
	resetSpace.mousePressed(reset);
	saveButton = select("#saveGraph");
	saveButton.mousePressed(saveGraphTxt);
	drawGraph = select("#drawGraph");
	drawGraph.mousePressed(attrToObj);
}

function draw() {
	space.drop(loadGraph);
	classes = [sommets, arretes];
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

function attrToObj() {
	loadedGraph = cleanLG(loadedGraph);
	let couple = [];
	let somin;
	let somfi;
	sommets = [];
	arretes = [];
	loadedGraph[0] = loadedGraph[0].split(";");
	loadedGraph[1] = loadedGraph[1].split(";");
	loadedGraph[0].shift();
	loadedGraph[1].shift();
	loadedGraph[0].pop();
	loadedGraph[1].pop();
	for(let i = 0; i < loadedGraph[0].length; i++) {
		sommets.push(new Sommet(random(4*rad,width-4*rad), random(4*rad, height-4*rad), rad, loadedGraph[0][i]));
	}
	for(let i = 0; i < loadedGraph[1].length-1; i++) {
		couple = [loadedGraph[1][i], loadedGraph[1][i+1]];
		for(let j = 0; j < loadedGraph[0].length; j++) {
			if(couple[0] == sommets[j].attr) {
				somin = sommets[j];
			}
			else if(couple[1] == sommets[j].attr) {
				somfi = sommets[j];
			}
		}
		arretes.push(new Arrete(somin, somfi, "", oriente));
	}
}


function cleanLG(loadedGraph) {
	for(let i = 0; i < loadedGraph.length; i++) {
		if(loadedGraph[i] == "") {
			loadedGraph.splice(i, 1);
			i--;
		}
	}
	return loadedGraph;
}
