"use strict";

var sprite1 = new JSE.Render.Sprite();
var sprite2 = new JSE.Render.Sprite();
var sprite3 = new JSE.Render.Sprite();
var frames = 64;
sprite1.load("images/asteroid.png", frames, 64, 64, 512, 512);
sprite2.load("images/asteroid.png", frames, 64, 64, 512, 512);
sprite3.load("images/asteroid.png", frames, 64, 64, 512, 512);
setInterval(function() {
	sprite1.render();
}, 50);
setInterval(function() {
	sprite2.render();
}, 75);
setInterval(function() {
	sprite3.render();
}, 100);


var app = new JSE.Dev.MyApp();
console.log(app);
app.run();

var stop = document.getElementById("stop");
stop.addEventListener("click", function() {
	app.stop();
}, true);

var start = document.getElementById("start");
start.addEventListener("click", function() {
	app.run();
}, true);
