function Arrete(somin, somfi, poids) {
	this.xi = somin.x;
	this.yi = somin.y;
	this.xf = somfi.x;
	this.yf = somfi.y;
	this.poids = poids;
	this.update = function() {
		this.xi = somin.x;
		this.yi = somin.y;
		this.xf = somfi.x;
		this.yf = somfi.y;
	}
	this.show = function() {
		d = floor(dist(this.xi, this.yi, this.xf, this.yf));
		fill(0);
		line(this.xi, this.yi, this.xf, this.yf);
		push();
		translate((this.xi + this.xf) / 2, (this.yi + this.yf) / 2);
		rotate(atan2(this.yf - this.yi, this.xf - this.xi));
		text(nfc(this.poids, 1), 0, -5);
		pop();
	}
}