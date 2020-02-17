"use strict";

const GRAVITY = 1;

const SPRING_LENGTH = 30;
const SPRING_HARDNESS = 0.8;

let acc;

class Rope {
	constructor() {
		this.staticAtom = new RopeAtom(canvas.width/2, 20);
		this.dynamicAtoms = [];

		for(let i = 0; i < 12; i++)
			this.dynamicAtoms.push( new RopeAtom(canvas.width/2 + randomInt(20, 20), 20 + randomInt(-20, 20)) );
	}

	update() {
		this.dynamicAtoms[0].applyAtomForce(this.staticAtom.pos);

		for(let i = 1; i < this.dynamicAtoms.length - 1; i++) {
			this.dynamicAtoms[i].applyAtomForce(this.dynamicAtoms[i - 1].pos);
			this.dynamicAtoms[i].applyAtomForce(this.dynamicAtoms[i + 1].pos);
		}

		this.dynamicAtoms[ this.dynamicAtoms.length - 1 ].applyAtomForce(this.dynamicAtoms[ this.dynamicAtoms.length - 2 ].pos);

		for(let i = 0; i < this.dynamicAtoms.length; i++) {
			this.dynamicAtoms[i].applyForce( new Vector(0, GRAVITY) );
			this.dynamicAtoms[i].applyForce( Vector.multiply(this.dynamicAtoms[i].speed, -0.40) );
			this.dynamicAtoms[i].update();
		}
	}

	draw() {
		stroke(new Color(255));

		this.staticAtom.draw();

		for(let i = 0; i < this.dynamicAtoms.length; i++)
			this.dynamicAtoms[i].draw();

		line(this.staticAtom.pos.x, this.staticAtom.pos.y, this.dynamicAtoms[0].pos.x, this.dynamicAtoms[0].pos.y);

		for(let i = 1; i < this.dynamicAtoms.length; i++)
			line(this.dynamicAtoms[i - 1].pos.x, this.dynamicAtoms[i - 1].pos.y,
				this.dynamicAtoms[i].pos.x, this.dynamicAtoms[i].pos.y);

	}
}
