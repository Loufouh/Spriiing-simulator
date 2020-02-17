"use strict";

const springLength = 100;
const springHardness = 0.16;

let acc;

class Rope {
	constructor() {
		this.staticAtom = new RopeAtom(canvas.width/2, canvas.height/2);
		this.dynamicAtom = new RopeAtom(canvas.width/2 + 100, canvas.height/2);
	}

	update() {
		let springVector = Vector.subtract(this.dynamicAtom.pos, this.staticAtom.pos);
		let currentSpringLength = springVector.getMagnitude();
		let forceMagnitude = springHardness*( Math.abs(currentSpringLength - springLength) );

		let angle;

		if(springVector.y < 0 != currentSpringLength < springLength)
			angle = Math.acos(-springVector.x/currentSpringLength);
		else
			angle = -Math.acos(-springVector.x/currentSpringLength);
		
		this.dynamicAtom.applyForce( Vector.multiply(Vector.unit(angle), forceMagnitude) );
		this.dynamicAtom.applyForce( new Vector(0, 9) );

		// apply air frictions
		this.dynamicAtom.applyForce( Vector.multiply(this.dynamicAtom.speed, -0.08) );
		
		acc = this.dynamicAtom.acc.copy();

		this.dynamicAtom.update();
	}

	draw() {
		stroke(new Color(255));

		line(this.dynamicAtom.pos.x, this.dynamicAtom.pos.y, this.staticAtom.pos.x, this.staticAtom.pos.y);

		this.staticAtom.draw();
		this.dynamicAtom.draw();

		/*
			DEBUG SPEED

		stroke( new Color(255, 52, 52) )

		let p1 = new Vector(this.dynamicAtom.pos.x + 20, this.dynamicAtom.pos.y) 
		let p2 = new Vector(this.dynamicAtom.pos.x + 10*acc.x + 20, this.dynamicAtom.pos.y + 10*acc.y)

		line(p1.x, p1.y, p2.x, p2.y);

		fill(new Color(255, 52, 52) );

		circle(p2.x, p2.y, 5);
		*/
	}
}
