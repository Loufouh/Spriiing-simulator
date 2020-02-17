"use strict";

let canvas;

window.onload = function () {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));
	
	start();
}

