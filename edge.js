function Edge(initialNode, finalNode, oriented, weighted, col, nature, input) {
	this.attr = [initialNode.attr, finalNode.attr].join(";")
	this.xi = initialNode.x
	this.yi = initialNode.y
	this.xf = finalNode.x
	this.yf = finalNode.y
	this.poids = "20"
	this.select = false
	this.col = col
	this.nature = nature
	this.input = input
	this.sp = false
	this.inputstyle = "width:".concat(this.poids.length*8, "px")
	this.update = function() {
		this.inputstyle = "width:".concat(this.poids.length*8, "px")
		this.xi = initialNode.x
		this.yi = initialNode.y
		this.xf = finalNode.x
		this.yf = finalNode.y
		this.input.style(this.inputstyle)
		this.input.position((this.xi + this.xf)/2, (this.yi + this.yf)/2+20)
		this.poids = input.value()
	}

	this.show = function() {
		d = floor(dist(this.xi, this.yi, this.xf, this.yf))
		x1 = (this.xi + this.xf)/2
		y1 = (this.yi + this.yf) /2
		x2 = x1 + 5
		y2 = y1 + 5
		x3 = x1 - 5
		y3 = x1 - 5
		stroke(this.col[0], this.col[1], this.col[2])
		strokeWeight(3)
		line(this.xi, this.yi, this.xf, this.yf)
		if(oriented) {
			push()
			translate(this.xf, this.yf)
			rotate(atan2(this.yf - this.yi, this.xf - this.xi))
			fill(255, 0, 0)
			triangle(-rad - 5, -5, -rad, 0, -rad - 5, 5)
			pop()
		}
	}
}