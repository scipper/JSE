"use strict";

JSE.createNS("JSE.Dev");

JSE.Dev.Asteroid = function(sprite, x, y) {
	this.sprite = sprite;
	this.x = x;
	this.y = y;

	this.animPhase = 0.0;
	this.alive = true;

	this.rect = new JSE.Render.Rect();
	this.rect.x = x;
	this.rect.y = y;
	this.rect.w = sprite.rect.w;
	this.rect.h = sprite.rect.h;
};

JSE.Dev.Asteroid.prototype = {
	constructor: JSE.Dev.Asteroid,
		
	update: function(tpf) {
		this.y += 200.0 * tpf;
		this.rect.y = this.y;

		this.animPhase += 10.0 * tpf;
		if(this.animPhase >= this.sprite.getFrames()) {
			this.animPhase -= this.sprite.getFrames();
		}

		if(this.y > window.innerHeight) {
			this.alive = false;
		}
	},
	
	render: function() {
		this.sprite.setPos(this.x, this.y);
		this.sprite.render(this.animPhase);
	},
	
	isAlive: function() {
		return this.alive;
	},
};