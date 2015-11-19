"use strict";

JSE.createNS("JSE.Dev");

JSE.Dev.MyApp = function() {
	JSE.Core.BaseApplication.call(this);
	
	this.background = null;
	this.asteroidTimer = null;
	this.asteroidList = [];
};

JSE.Dev.MyApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);
JSE.Dev.MyApp.prototype.constructor = JSE.Dev.MyApp;

JSE.Dev.MyApp.prototype.init = function() {
	this.background = new JSE.Render.Sprite();
	this.background.load("images/background.bmp", 0, 800, 600);

	console.log("MyApp initialised.");
};
	
JSE.Dev.MyApp.prototype.update = function(tpf) {
	this.spawnAsteroids(tpf);
	this.checkCollision();
	
	for(var i = 0; i < this.asteroidList.length; i++) {
		this.asteroidList[i].update(tpf);
	}
};
	
JSE.Dev.MyApp.prototype.render = function(tpf) {
	this.background.render(tpf);
	
	for(var i = 0; i < this.asteroidList.length; i++) {
		this.asteroidList[i].render(tpf);
	}
};

JSE.Dev.MyApp.prototype.spawnAsteroids = function(tpf) {
	this.asteroidTimer += tpf;

	if(this.asteroidTimer > 0.5) {
		var x = Math.floor(Math.random() * (736 - 1)) + 1;
		var sprite = new JSE.Render.Sprite();
		sprite.load("images/asteroid.png", 64, 64, 64, 512, 512);
		var asteroid = new JSE.Dev.Asteroid(sprite, x, -60);

		this.asteroidList.push(asteroid);

		this.asteroidTimer = 0.0;
	}
};

JSE.Dev.MyApp.prototype.checkCollision = function() {
	for(var i = 0; i < this.asteroidList.length; i++) {
		var a = this.asteroidList[i];
		if(!this.asteroidList[i].isAlive()) {
			var a = this.asteroidList[i];
			document.getElementById("sprite-" + this.asteroidList[i].sprite.div).remove();
			this.asteroidList.splice(i, 1);
		}
	}
};