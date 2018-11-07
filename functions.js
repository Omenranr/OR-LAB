function show(tab) {
	if (tab != []) {
		for (let i = 0; i < tab.length; i++) {
			tab[i].show();
		}
	}
}

function creatar(arretes) {
	if (selsom.length >= 2) {
		arrete = new Arrete(selsom[0], selsom[1], poids);
		arretes.push(arrete);
		selsom[0].col = 255;
		selsom[1].col = 255;
		selsom[0].select = 0;
		selsom[1].select = 0;
		selsom = [];
		// console.log(arretes);
	}
}

function creatboucle(arretes) {
	
}

function movesom(sommets) {
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

function addsom(sommets) {
	cf = 1;
	if (sommets != []) {
		for (let i = 0; i < sommets.length; i++) {
			xs = sommets[i].x;
			ys = sommets[i].y;
			if (dist(mouseX, mouseY, xs, ys) < lmin*rad) {
				cf = 0;
			}
		}
		if (cf && mouseX < width && mouseY < height) 
		{
			sommet = new Sommet(mouseX, mouseY, rad);
			sommets.push(sommet);
			// console.log(sommet.select);
		}
	} else {
		if(mouseX < width - rad && mouseY < height - rad) {
			sommet = new Sommet(mouseX, mouseY, rad);
		    sommets.push(sommet);
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
		}
	}
}
// supression de sommet
// orientation
// poids sommets et arretes
// curves, boucles
// enregistrer le graphe
// input d'un graphe
//supression d'aretes
// coloration

