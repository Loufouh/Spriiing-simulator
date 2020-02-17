"use strict";

let rope;
let isModifying = false;

function setup() {
	canvas.addEventListener("click", clickCanvas);
	canvas.addEventListener("mousemove", move);

	rope = new Rope();
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	rope.update();
	rope.draw();
}

function clickCanvas() {
	isModifying = 1 - isModifying;

	if(isModifying) {
		stopLooping();

		rope.dynamicAtom.speed = new Vector(0, 0)
		rope.dynamicAtom.acc = new Vector(0, 0)
	} else {
		startLooping();
	}
}

function move(e) {
	if(isModifying) {
		let rect = e.target.getBoundingClientRect();

		rope.dynamicAtom.pos = new Vector(e.clientX - rect.left, e.clientY - rect.top)

		background( new Color(200, 100, 10, 1, ColorType.HSL) );
		rope.draw();
	}
}

