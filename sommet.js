function Sommet(x, y, rad) {
	this.x = x;
	this.y = y;
	this.rad = 	rad;
	this.related = [];
	this.select = -1;
	this.col = 255;
	this.moved = false;
	this.incan = function() {
		if(mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
			return true;
		}
		return false;
	}
	this.show = function() {
		fill(this.col, this.col-100, this.col);
		ellipse(this.x, this.y, 2*this.rad, 2*this.rad);
	}
	this.update = function(mouseX, mouseY) {
		if(this.incan()) {
			this.x = mouseX;
		    this.y = mouseY;
		}
	}
}