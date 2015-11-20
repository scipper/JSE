"use strict";

JSE.createNS("JSE.Render");

JSE.Render.Sprite = function() {
	this.frames = 0;
	this.h = 0;
	this.w = 0;
	this.numFramesX = 0;
	this.image = null;
	this.rect = new JSE.Render.Rect();
	this.frameRect = new JSE.Render.Rect();
	this.div = Math.floor(Math.random() * (1000000 - 1)) + 1;
};

JSE.Render.Sprite.prototype = {
	constructor: JSE.Render.Sprite,
	
	load: function(filename, frames, frameW, frameH, w, h) {
		this.image = new Image(); 
		this.image.src = filename;
		this.image.w = w;
		this.image.h = h;
		
		this.rect.x = 0;
		this.rect.y = 0;
		this.rect.w = frameW;
		this.rect.h = frameH;
		
		this.frames = frames;
		this.w = frameW;
		this.h = frameH;
		this.frameRect.w = frameW;
		this.frameRect.h = frameH;
		this.numFramesX = w / frameW;

		var container = document.createElement("div");
		container.setAttribute("id", "sprite-" + this.div);
		container.style.width = this.w + "px";
		container.style.height = this.h + "px";
		container.style.display = "inline-block";
		container.style.overflow = "hidden";
		container.style.position = "absolute";
		container.style.top = 0 + "px";
		container.style.left = 0 + "px";

		container.style.background = "url('" + this.image.src + "')";
		container.style.backgroundPosition = (0 + "px ") + (0 + "px");
		container.style.backgroundSize = (this.image.w + "px ") + (this.image.h + "px");
		container.style.backgroundRepeat = "no-repeat";
		
		document.body.appendChild(container);
	},
	
	setPos: function(x, y) {
		this.rect.x = x;
		this.rect.y = y;
	},
	
	render: function(frame) {
		var column = Math.floor(frame % this.numFramesX);
		var row = Math.floor(frame / this.numFramesX);

		this.frameRect.x = column * this.w;
		this.frameRect.y = row * this.h;
		
		var container = this.getContainer();
		
		container.style.backgroundPosition = (-this.frameRect.x + "px ") + (-this.frameRect.y + "px");
		container.style.top = this.rect.y + "px";
		container.style.left = this.rect.x + "px";
	},
	
	getFrames: function() {
		return this.frames;
	},
	
	getContainer: function() {
		return document.getElementById("sprite-" + this.div);
	},
	
};


