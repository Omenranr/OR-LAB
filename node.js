function Node(x, y, rad, numero) {
	this.attr = numero
	this.x = x
	this.y = y
	this.rad = 	rad
	this.related = []
	this.select = -1
	this.col = 255
	this.moved = false
	this.incan = function() {
		if(mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
			return true
		}
		return false
	}
	this.show = function() {
		fill(255)
		stroke(0, 0, 255)
		strokeWeight(1)
		ellipse(this.x, this.y, 2*this.rad, 2*this.rad)
		push()
		translate(this.x, this.y)
		fill(this.col)
		stroke(0)
		text(this.attr, -2, 2)
		pop()
	}
	this.update = function(mouseX, mouseY) {
		if(this.incan()) {
			this.x = mouseX
		    this.y = mouseY
		}
	}
}