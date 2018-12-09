function show(array) {
	if (array != []) {
		for (let i = 0; i < array.length; i++) {
			array[i].show()
		}
	}
}

function createEdge(edges) {
	if (selectedNodes.length >= 2) {
		console.log(selectedNodes.length)
		input = createInput()
		edge = new Edge(selectedNodes[0], selectedNodes[1], oriented, weighted, edgeCol, "arsimple", input)
		edges.push(edge)
		selectedNodes[0].col = 255
		selectedNodes[1].col = 255
		selectedNodes[0].select = 0
		selectedNodes[1].select = 0
		selectedNodes = []
	}
}

function selectEdge(edges) {
	
}

function deselectEdge(edges) {

}

function moveNode(nodes) {
	if(nodes != []) {
		for(let i = 0; i < nodes.length; i++) {
			dms = dist(nodes[i].x, nodes[i].y, mouseX, mouseY)
			if(dms < rad) {
				toMoveNode = nodes[i]
				toMoveNode.select = 0
			}
		}
		toMoveNode.moved = true
		toMoveNode.update(mouseX, mouseY)
	}
}

function addNode(nodes) {
	cf = 1
	sp = 0
	if (nodes != []) {
		for (let i = 0; i < nodes.length; i++) {
			xs = nodes[i].x
			ys = nodes[i].y
			if (dist(mouseX, mouseY, xs, ys) < lmin*rad) {
				cf = 0
			}
		}
		for (let i = 0; i < edges.length; i++) {
			push()
			d = dist(mouseX, mouseY, (edges[i].xi + edges[i].xf) / 2, (edges[i].yi + edges[i].yf) / 2)
			if( d < 2 * rad) {
				sp = 1
			}
			pop()
		}
		if (!sp && cf && mouseX < width && mouseY < height && mouseX > rad/2 && mouseY > rad/2) 
		{
			node = new Node(mouseX, mouseY, rad, numero)
			nodes.push(node)
			numero++
			// console.log(node.select);
		}
	} else {
		if(mouseX < width - rad && mouseY < height - rad) {
			node = new Node(mouseX, mouseY, rad, numero)
		    nodes.push(node)
		    numero++
		    // console.log(node.select);
		}
	}
	// console.log(nodes);
}

function selectNode(nodes) {
	for(let i = 0; i < nodes.length; i++) {
		xs = nodes[i].x
		ys = nodes[i].y
		if(dist(mouseX, mouseY, xs, ys) < nodes[i].rad) {
			choosenNode = nodes[i]
			if(choosenNode.select == 0) {
				choosenNode.col = 0
				choosenNode.select = 1
				selectedNodes.push(choosenNode)
			}
			else if(choosenNode.select == -1) {
				choosenNode.select = 0
			}
			else if(choosenNode.select = 1) {
				choosenNode.select = 0
				choosenNode.col = 255
				selectedNodes.pop()
			}
			// console.log(choosenNode.select);
		}
	}
}

function deselectNode(nodes) {
	for(let i = 0; i < nodes.length; i++) {
		xs = nodes[i].x
		ys = nodes[i].y
		if(dist(mouseX, mouseY, xs, ys) < nodes[i].rad) {
			choosenNode = nodes[i]
			if(choosenNode.select = 1 && choosenNode.moved) {
				choosenNode.select = 0
				choosenNode.col = 255
				selectedNodes.pop()
				choosenNode.moved = false
			}
		}
	}
}

function deleteNode(nodes, edges) {
	for(let i = 0; i < nodes.length; i++) {
		if (nodes[i].select == 1) {
			thenode = nodes[i]
			for(let m = 0; m < edges.length; m++) {
				arr = edges[m]
				if ((arr.xi == thenode.x && arr.yi == thenode.y) || (arr.xf == thenode.x && arr.yf == thenode.y)) {
					edges.splice(m, 1)
					m--
				}
			}
			nodes.splice(i, 1)
			selectedNodes.splice(0, 1)
			numero--
		}
	}
}
function reset() {
	for(let i = 0; i < edges.length; i++) {
		edges[i].input.remove()
	}
	nodes = []
	edges = []
	numero = 0
}

function saveGraphTxt() {
	let txttab = []
	for(let i = 0; i < classes.length; i++) {
		let lignetab = []
		let ligne = ""
		lignetab.push(nomClasses[i])
		for(let j = 0; j < classes[i].length; j++) {
			lignetab.push(classes[i][j].attr)
		}
		ligne = lignetab.join(";")
		txttab.push(ligne + ";\n")
		lignetab = []
		ligne = ""
	}
	console.log(txttab)
	saveStrings(txttab, "graph", "csv")
}

function loadGraph(file) {
	loadedGraph = loadStrings(file.data)
	console.log(loadedGraph)
}

function attrToObj() {
	loadedGraph = cleanLG(loadedGraph)
	let couple = []
	let initialNode
	let finalNode
	nodes = []
	edges = []
	loadedGraph[0] = loadedGraph[0].split(";")
	loadedGraph[1] = loadedGraph[1].split(";")
	loadedGraph[0].shift()
	loadedGraph[1].shift()
	loadedGraph[0].pop()
	loadedGraph[1].pop()
	for(let i = 0; i < loadedGraph[0].length; i++) {
		nodes.push(new node(random(4*rad,width-4*rad), random(4*rad, height-4*rad), rad, loadedGraph[0][i]))
	}
	for(let i = 0; i < loadedGraph[1].length-1; i++) {
		couple = [loadedGraph[1][i], loadedGraph[1][i+1]]
		for(let j = 0; j < loadedGraph[0].length; j++) {
			if(couple[0] == nodes[j].attr) {
				initialNode = nodes[j]
			}
			else if(couple[1] == nodes[j].attr) {
				finalNode = nodes[j]
			}
		}
		edges.push(new Edge(initialNode, finalNode, oriented, weighted, edgeCol, "arsimple", input))
	}
}

function cleanLG(loadedGraph) {
	for(let i = 0; i < loadedGraph.length; i++) {
		if(loadedGraph[i] == "") {
			loadedGraph.splice(i, 1)
			i--
		}
	}
	return loadedGraph
}

