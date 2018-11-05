function Arrete(somin, somfi, poids) {
	this.poids = poids;
	this.show = function() {
		d = floor(dist(somin.x, somin.y, somfi.x, somfi.y));
		fill(0);
		line(somin.x, somin.y, somfi.x, somfi.y);
		push();
		translate((somin.x + somfi.x) / 2, (somin.y + somfi.y) / 2);
		rotate(atan2(somfi.y - somin.y, somfi.x - somin.x));
		text(nfc(this.poids, 1), 0, -5);
		pop();
	}
}