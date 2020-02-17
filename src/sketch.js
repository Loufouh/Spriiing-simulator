"use strict";

let rope;

function setup() {
	rope = new Rope();
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	rope.update();
	rope.draw();
}
