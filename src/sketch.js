"use strict";

let isModifying = false;
let rope;

function setup() {
	canvas.addEventListener("mousedown", click);
	canvas.addEventListener("mouseup", click);
	canvas.addEventListener("mousemove", move);
	rope = new Rope();
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	rope.update();
	rope.draw();
}

function click() {
	isModifying = 1 - isModifying;
}

function move(e) {
	if(isModifying) {
		let rect = e.target.getBoundingClientRect();

		rope.staticAtom.pos = new Vector(e.clientX - rect.left, e.clientY - rect.top);
	}
}
