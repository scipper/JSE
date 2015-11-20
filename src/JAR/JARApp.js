"use strict";

JSE.createNS("JSE.JAR");

JSE.JAR.JARApp = function() {
	JSE.Core.BaseApplication.call(this);

	this.background = null;
};

JSE.JAR.JARApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);
JSE.JAR.JARApp.prototype.constructor = JSE.JAR.JARApp;

JSE.JAR.JARApp.prototype.init = function() {
	var that = this;
	
	window.onresize = function() {
		initBg();
	};
	
	var initBg = function() {
		that.background = new JSE.Render.Sprite();
		that.background.load("images/jarbg.png", 0, window.innerWidth, window.innerHeight, 100, window.innerHeight);
		that.background.getContainer().style.backgroundRepeat = "repeat-x";
	};
	initBg();
};

JSE.JAR.JARApp.prototype.update = function(tpf) {
	
};
	
JSE.JAR.JARApp.prototype.render = function(tpf) {
	this.background.render(tpf);
};