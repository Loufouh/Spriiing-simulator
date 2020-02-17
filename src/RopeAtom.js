"use strict";

class RopeAtom {
	constructor(x, y) {
		this.pos = new Vector(x, y);
		this.speed = new Vector(0, 0);
		this.acc = new Vector(0, 0);
	}

	update() {
		this.speed.add(this.acc);
		this.pos.add(this.speed)

		this.acc.multiply(0);
	}

	draw() {
		stroke( new Color(255) );
		fill( new Color(255) );

		circle(this.pos.x, this.pos.y, 10);
	}

	applyForce(force) {
		this.acc.add(force);
	}
}
