"use strict";

JSE.createNS("JSE.Tools");

JSE.Tools.Timer = function() {
	this.elapsed = 0.0;
	this.curTime = 0.0;
	this.lastTime = Date.now() / 1000;
};

JSE.Tools.Timer.prototype = {
	constructor: JSE.Tools.Timer,
	
	update: function() {
		this.curTime = Date.now() / 1000;
		this.elapsed = 0.001 + (this.curTime - this.lastTime);
		this.lastTime = this.curTime;
	},
	getElapsed: function() {
		return this.elapsed;
	},
};