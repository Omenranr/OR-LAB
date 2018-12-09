let edgeCol = [255, 0, 0]
let nodes = []
let selectedNodes = []
let edges = []
let rad = 13
let lmin = 2
let numero = 0
let nomClasses = ["nodes", "aretes"]
let classes = [nodes, edges]
let oriented = false
let weighted = false
let orientedCheck
let pondcheck
let saveButton
let loadedGraph
let space
function setup() {
	space = createCanvas(600, 600)
	background(255)
	orientedCheck = createCheckbox()
	console.log(orientedCheck.id("orientedCheck"))
	orientedCheck.position(300, 10)
	orientedCheckLabel = createElement("h4", 'Oriented?')
	orientedCheckLabel.position(320, -10)
	resetSpace = select("#resetSpace")
	resetSpace.mousePressed(reset)
	saveButton = select("#saveGraph")
	saveButton.mousePressed(saveGraphTxt)
	drawGraph = select("#drawGraph")
	drawGraph.mousePressed(attrToObj)
}

function draw() {
	space.drop(loadGraph)
	classes = [nodes, edges]
	oriented = orientedCheck.checked()
	background(255)
	noFill()
	stroke(0)
	rect(0, 0, width-1, height-1)
	createEdge(edges)
	for(let i = 0; i < edges.length; i++) {
		edges[i].update()
	}
	show(edges)
	show(nodes)
}

function mousePressed() {
	addNode(nodes)
	selectNode(nodes)
}

function doubleClicked() {
}

function mouseDragged() {
	deselectNode(nodes)
	moveNode(nodes)
}

function keyPressed() {
	if(keyCode === 83 && nodes != []) {
		deleteNode(nodes, edges)
	}
}
