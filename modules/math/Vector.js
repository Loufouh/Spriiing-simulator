"use strict";

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getMagnitude() {
		return Math.sqrt(this.x**2 + this.y**2);
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
	}

	subtract(v) {
		this.x -= v.x;
		this.y -= v.y
	}

	multiply(value) {
		this.x *= value;
		this.y *= value;
	}

	divide(value) {
		this.x /= value;
		this.y /= value;
	}

	copy() {
		return new Vector(this.x, this.y);
	}
	
	static dist(v, w) {
		return Math.sqrt( (v.x - w.x)**2 + (v.y - w.y)**2 );
	}

	// angle in radians
	static unit(angle) {
		return new Vector(Math.cos(angle), Math.sin(angle));
	}

	static add(v, w) {
		return new Vector(v.x + w.x, v.y + v.y);
	}

	static subtract(v, w) {
		return new Vector(v.x - w.x, v.y - w.y);
	}

	static multiply(v, value) {
		return new Vector(v.x*value, v.y*value);
	}
	
	static divide(v, value) {
		return new Vector(v.x/value, v.y/value);
	}
}
