function Sommet(x, y, rad) {
	this.x = x;
	this.y = y;
	this.rad = 	rad;
	this.related = [];
	this.select = -1;
	this.col = 255;
	this.moved = false;
	this.show = function() {
		fill(this.col);
		ellipse(this.x, this.y, 2*this.rad, 2*this.rad);
	}
	this.update = function(mouseX, mouseY) {
		this.x = mouseX;
		this.y = mouseY;
	}
}