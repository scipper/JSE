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
	var container = document.createElement("div");
	container.setAttribute("id", "sprite-" + this.div);
	document.body.appendChild(container);
};

JSE.Render.Sprite.prototype = {
	constructor: JSE.Render.Sprite,
	
	load: function(filename, frames, frameW, frameH, w, h) {
		this.image = new Image(); 
		this.image.src = filename;
		
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
		
		this.getImage().style.top = -this.frameRect.y + "px";
		this.getImage().style.left = -this.frameRect.x + "px";

		this.getContainer().style.top = this.rect.y + "px";
		this.getContainer().style.left = this.rect.x + "px";
	},
	
	getFrames: function() {
		return this.frames;
	},
	
	getContainer: function() {
		return document.getElementById("sprite-" + this.div);
	},
	
	getImage: function() {
		var container = this.getContainer();
		if(!container.firstChild) {
			container.style.width = this.w + "px";
			container.style.height = this.h + "px";
			container.style.display = "inline-block";
			container.style.overflow = "hidden";
			container.style.position = "absolute";

			var img = document.createElement("img");
			img.setAttribute("src", this.image.src);
			img.style.position = "absolute";
			img.style.top = 0 + "px";
			img.style.left = 0 + "px";
			
			container.appendChild(img);
		}
		return container.firstChild;
	},
};


