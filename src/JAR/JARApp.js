"use strict";

JSE.createNS("JSE.JAR");

JSE.JAR.JARApp = function() {
	JSE.Core.BaseApplication.call(this);

	this.backgrounds = [null,null,null];
	this.bgpx = [0.0, 0.0, 0.0];
	this.bgpy = [0.0, 0.0, 0.0];
};

JSE.JAR.JARApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);
JSE.JAR.JARApp.prototype.constructor = JSE.JAR.JARApp;

JSE.JAR.JARApp.prototype.init = function() {
	var that = this;
	
	document.body.style.overflow = "hidden";
	
	window.onresize = function(that) {
		initBg(that);
	};
	
	var initBg = function(program) {
		for(var i = 0; i < that.backgrounds.length; i++) {
			program.backgrounds[i] = new JSE.Render.Sprite();
			program.backgrounds[i].load("images/jarbg.png", 0, window.innerWidth, window.innerHeight, 100, window.innerHeight);
			program.backgrounds[i].getContainer().style.backgroundRepeat = "repeat-x";
			
			switch(i) {
				case 0: {
					program.backgrounds[i].getContainer().style.left = -window.innerWidth;
					program.bgpx[i] = -window.innerWidth;
				} break;
				case 2: {
					program.backgrounds[i].getContainer().style.left = window.innerWidth;
					program.bgpx[i] = window.innerWidth;
				} break;
			}
		}
	};
	initBg(that);
};

JSE.JAR.JARApp.prototype.update = function(tpf) {
	var that = this;
	
	for(var i = 0; i < that.backgrounds.length; i++) {
		that.bgpx[i] -= 100 * tpf;
//		if(that.bgpx[i] > window.innerWidth) {
//			that.bgpx[i] -= window.innerWidth*2;
//		}
		
		if(that.bgpx[i] < -window.innerWidth) {
			that.bgpx[i] += (window.innerWidth*2)-1;
		}
		
		that.backgrounds[i].setPos(that.bgpx[i], that.bgpy[i]);
	}
};
	
JSE.JAR.JARApp.prototype.render = function(tpf) {
	var that = this;
	
	for(var i = 0; i < that.backgrounds.length; i++) {
		that.backgrounds[i].render(tpf);
	}
};