"use strict";

JSE.createNS("JSE.Core");

JSE.Core.BaseApplication = function() {
	JSE.Core.Application.call(this);
};

JSE.Core.BaseApplication.prototype = Object.create(JSE.Core.Application.prototype);

JSE.Core.BaseApplication.prototype.coreInit = function() {
	JSE.Core.Application.prototype.coreInit.call(this);
};
	
JSE.Core.BaseApplication.prototype.coreUpdate = function(tpf) {
	JSE.Core.Application.prototype.coreUpdate.call(this);
	
	if(!this.paused) {
		this.update(tpf);
	}
	this.render(tpf);
};

JSE.Core.BaseApplication.prototype.init = function() {
	
};

JSE.Core.BaseApplication.prototype.update = function(tpf) {
	
};
	
JSE.Core.BaseApplication.prototype.render = function(tpf) {
};