"use strict";

JSE.createNS("JSE.Dev");

JSE.Dev.MyApp = function() {
	JSE.Core.BaseApplication.call(this);
};

JSE.Dev.MyApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);

JSE.Dev.MyApp.prototype.init = function() {
	console.log("MyApp initialised.");
};
	
JSE.Dev.MyApp.prototype.update = function(tpf) {
	console.log(tpf);
};
	
JSE.Dev.MyApp.prototype.render = function(tpf) {
};