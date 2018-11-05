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
	}
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
			console.log(sommet.select);
		}
	} else {
		if(mouseX < width - rad && mouseY < height - rad) {
			sommet = new Sommet(mouseX, mouseY, rad);
		    sommets.push(sommet);
		    console.log(sommet.select);
		}
	}
	console.log(sommets);
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
				console.log(selsom);
			}
			else if(csom.select == -1) {
				csom.select = 0;
			}
			else if(csom.select = 1) {
				csom.select = 0;
				csom.col = 255;
				selsom.pop();
				console.log(selsom);
			}
			console.log(csom.select);
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
				console.log(selsom);
				csom.moved = false;
			}
			console.log(csom.select);
		}
	}
}