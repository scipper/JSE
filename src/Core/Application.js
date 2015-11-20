"use strict";

JSE.createNS("JSE.Core");

JSE.Core.Application = function() {
	this.running = false;
	this.paused = false;
	this.timer = new JSE.Tools.Timer();

	console.log("Application created.");
};

JSE.Core.Application.prototype.run = function() {
	var that = this;
	
	console.log("started");
	
	if(this.running) {
		return;
	}
	
	this.running = true;
	
	function mainLoop() {
		if(!that.running) {
			return;
		}	
		requestAnimationFrame(mainLoop);
		
		that.timer.update();
		
		that.coreUpdate(that.timer.getElapsed());
	}
	mainLoop();
	
	
//	var appId = setInterval(function() {
//		that.timer.update();
//		
//		that.coreUpdate(that.timer.getElapsed());
//		
//		if(!that.running) {
//			clearInterval(appId);
//		}
//	}, 17);
};
	
JSE.Core.Application.prototype.coreInit = function() {
};
	
JSE.Core.Application.prototype.coreUpdate = function(tpf) {
};
	
JSE.Core.Application.prototype.stop = function() {
	this.running = false;

	console.log("Application quit");
};