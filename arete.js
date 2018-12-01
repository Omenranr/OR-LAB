function Arrete(somin, somfi, oriente, pondere, col, nature, input) {
	this.attr = [somin.attr, somfi.attr].join(";");
	this.xi = somin.x;
	this.yi = somin.y;
	this.xf = somfi.x;
	this.yf = somfi.y;
	this.poids = "";
	this.select = false;
	this.col = col;
	this.nature = nature;
	this.input = input;
	this.sp = false;
	this.update = function() {
		this.xi = somin.x;
		this.yi = somin.y;
		this.xf = somfi.x;
		this.yf = somfi.y;
		// this.input.style('rotate', degrees(atan2(abs(this.yf - this.yi), abs(this.xf - this.xi))));
		this.input.style('width:20px');
		this.input.position((this.xi + this.xf) / 2, (this.yi + this.yf) / 2);
		this.poids = input.value();
	}

	this.show = function() {
		d = floor(dist(this.xi, this.yi, this.xf, this.yf));
		x1 = (this.xi + this.xf)/2;
		y1 = (this.yi + this.yf) /2;
		x2 = x1 + 5;
		y2 = y1 + 5;
		x3 = x1 - 5;
		y3 = x1 - 5;
		stroke(this.col[0], this.col[1], this.col[2]);
		strokeWeight(3);
		line(this.xi, this.yi, this.xf, this.yf);
		if(oriente) {
			push();
			translate((this.xi + this.xf) / 2, (this.yi + this.yf) / 2);
			rotate(atan2(this.yf - this.yi, this.xf - this.xi));
			fill(255, 0, 0);
			triangle(-5, -5, 0, 0, -5, 5);
			pop();
		}
	}
}