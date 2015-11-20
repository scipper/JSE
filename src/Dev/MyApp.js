"use strict";

JSE.createNS("JSE.Dev");

JSE.Dev.MyApp = function() {
	JSE.Core.BaseApplication.call(this);
	
	this.background = null;
	this.asteroidTimer = null;
	this.asteroidList = [];
	
	this.opacity = 0;
	
	this.pauseScreen = null;
};

JSE.Dev.MyApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);
JSE.Dev.MyApp.prototype.constructor = JSE.Dev.MyApp;

JSE.Dev.MyApp.prototype.init = function() {
	var that = this;
	
	this.background = new JSE.Render.Sprite();
	this.background.load("images/background.bmp", 0, window.innerWidth, window.innerHeight, window.innerWidth, window.innerHeight);
	
	document.body.style.overflow = "hidden";
	
	document.onkeypress = function(event) {
		var char = JSE.getChar(event || window.event);
		
		if(char == "p") {
			that.pause();
		}
	};
	
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
	if(this.paused && this.opacity < 1.0) {
		if(this.pauseScreen == null) {
			this.pauseScreen = new JSE.Render.Sprite();
			this.pauseScreen.load("images/scratched.jpg", 0, window.innerWidth, window.innerHeight, window.innerWidth, window.innerHeight);
		}
		this.opacity += (8 * tpf)
		this.pauseScreen.getContainer().style.opacity = this.opacity;
	} else if(!this.paused && this.opacity > 0.0) {
		this.opacity -= (8 * tpf)
		this.pauseScreen.getContainer().style.opacity = this.opacity;
		if(this.opacity <= 0) {
			this.pauseScreen = null;
		}
	}
	this.background.render(tpf);
	
	for(var i = 0; i < this.asteroidList.length; i++) {
		this.asteroidList[i].render(tpf);
	}
};

JSE.Dev.MyApp.prototype.spawnAsteroids = function(tpf) {
	this.asteroidTimer += tpf;

	if(this.asteroidTimer > 0.5) {
		var x = Math.floor(Math.random() * (window.innerWidth - 32)) + 1;
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