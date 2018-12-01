function show(tab) {
	if (tab != []) {
		for (let i = 0; i < tab.length; i++) {
			tab[i].show();
		}
	}
}

function creatar(arretes) {
	if (selsom.length >= 2) {
		input = createInput();
		arrete = new Arrete(selsom[0], selsom[1], oriente, pondere, colorar, "arsimple", input);
		arretes.push(arrete);
		selsom[0].col = 255;
		selsom[1].col = 255;
		selsom[0].select = 0;
		selsom[1].select = 0;
		selsom = [];
		// console.log(arretes);
	}
}

function selectar(arretes) {
	
}

function deselectar(arretes) {

}


// function handleFiles(files) {
//     // Check for the various File API support.
//     if (window.FileReader) {
//     // FileReader are supported.
//     } else {
//         alert('FileReader are not supported in this browser.');
//     }
// }

// function getAsText(fileToRead) {
// 	var reader = new FileReader();
// 	// Read file into memory as UTF-8      
// 	reader.readAsText(fileToRead);
//     // Handle errors load
//     reader.onload = loadHandler;
//     reader.onerror = errorHandler;
// }

function movesom(sommets) {
	if(sommets != []) {
		for(let i = 0; i < sommets.length; i++) {
			dms = dist(sommets[i].x, sommets[i].y, mouseX, mouseY);
			if(dms < rad) {
				somsel = sommets[i];
				somsel.select = 0;
			}
		}
		somsel.moved = true;
		somsel.update(mouseX, mouseY);
	}
}

function addsom(sommets) {
	cf = 1;
	sp = 0;
	if (sommets != []) {
		for (let i = 0; i < sommets.length; i++) {
			xs = sommets[i].x;
			ys = sommets[i].y;
			if (dist(mouseX, mouseY, xs, ys) < lmin*rad) {
				cf = 0;
			}
		}
		for (let i = 0; i < arretes.length; i++) {
			push();
			d = dist(mouseX, mouseY, (arretes[i].xi + arretes[i].xf) / 2, (arretes[i].yi + arretes[i].yf) / 2);
			if( d < 2 * rad) {
				sp = 1;
			}
			pop();
		}
		if (!sp && cf && mouseX < width && mouseY < height && mouseX > rad/2 && mouseY > rad/2) 
		{
			sommet = new Sommet(mouseX, mouseY, rad, numero);
			sommets.push(sommet);
			numero++;
			// console.log(sommet.select);
		}
	} else {
		if(mouseX < width - rad && mouseY < height - rad) {
			sommet = new Sommet(mouseX, mouseY, rad, numero);
		    sommets.push(sommet);
		    numero++;
		    // console.log(sommet.select);
		}
	}
	// console.log(sommets);
}

function selectsom(sommets) {
	for(let i = 0; i < sommets.length; i++) {
		xs = sommets[i].x;
		ys = sommets[i].y;
		if(dist(mouseX, mouseY, xs, ys) < sommets[i].rad) {
			csom = sommets[i];
			if(csom.select == 0) {
				csom.col = 0;
				csom.select = 1;
				selsom.push(csom);
			}
			else if(csom.select == -1) {
				csom.select = 0;
			}
			else if(csom.select = 1) {
				csom.select = 0;
				csom.col = 255;
				selsom.pop();
			}
			// console.log(csom.select);
		}
	}
}

function deselectsom(sommets) {
	for(let i = 0; i < sommets.length; i++) {
		xs = sommets[i].x;
		ys = sommets[i].y;
		if(dist(mouseX, mouseY, xs, ys) < sommets[i].rad) {
			csom = sommets[i];
			if(csom.select = 1 && csom.moved) {
				csom.select = 0;
				csom.col = 255;
				selsom.pop();
				csom.moved = false;
			}
			// console.log(csom.select);
		}
	}
}

function deletesom(sommets, arretes) {
	for(let i = 0; i < sommets.length; i++) {
		if (sommets[i].select == 1) {
			som = sommets[i];
			for(let m = 0; m < arretes.length; m++) {
				arr = arretes[m];
				if ((arr.xi == som.x && arr.yi == som.y) || (arr.xf == som.x && arr.yf == som.y)) {
					arretes.splice(m, 1);
					m--;
				}
			}
			sommets.splice(i, 1);
			selsom.splice(0, 1);
			numero--;
		}
	}
}
function reset() {
	for(let i = 0; i < arretes.length; i++) {
		arretes[i].input.remove();
	}
	sommets = [];
	arretes = [];
	numero = 0;
}

// function saveGraphCSV(columns, rows) {
// 	let graph = new p5.Table();
// 	let msize = 0;
// 	let attrArr = [];
// 	graph.columns = columns;
// 	for(let i = 0; i < rows.length; i++) {
// 		if (rows[i].length > msize) {
// 			msize = rows[i].length;
// 		}
// 	}
// 	for(let i = 0; i < rows.length; i++) {
// 		let newRow = graph.addRow();
// 		for(let j = 0; j < msize; j++) {
// 			if (rows[i][j].attr == null) {
// 				attrArr.push("");
// 			} else {
// 				attrArr.push(rows[i][j].attr);
// 			}
// 		}
// 		for(let j = 0; j < msize; j++) {
// 			newRow.setString(columns[i], attrArr[j]);
// 		}
// 		attrArr = [];

// 	}
// 	// console.log(graph);
// 	saveTable(graph, "graph", "csv");
// }
function saveGraphTxt() {
	let txttab = [];
	for(let i = 0; i < classes.length; i++) {
		let lignetab = [];
		let ligne = "";
		lignetab.push(nomClasses[i]);
		for(let j = 0; j < classes[i].length; j++) {
			lignetab.push(classes[i][j].attr);
		}
		ligne = lignetab.join(";");
		txttab.push(ligne + ";\n");
		lignetab = [];
		ligne = "";
	}
	console.log(txttab);
	saveStrings(txttab, "graph", "csv");
}

function loadGraph(file) {
	loadedGraph = loadStrings(file.data);
	console.log(loadedGraph);
}

// supression de sommet
// orientation
// poids sommets et arretes
// curves, boucles
// enregistrer le graphe
// input d'un graphe
//supression d'aretes
// coloration

