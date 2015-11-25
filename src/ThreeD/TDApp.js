"use strict";

JSE.createNS("JSE.ThreeD");

JSE.ThreeD.TDApp = function() {
	JSE.Core.BaseApplication.call(this);

	this.scene = null;
	this.camera = null;
	this.renderer = null;
	this.geometry = null;
	this.material = null;
	this.cube = null;
};

JSE.ThreeD.TDApp.prototype = Object.create(JSE.Core.BaseApplication.prototype);
JSE.ThreeD.TDApp.prototype.constructor = JSE.ThreeD.TDApp;

JSE.ThreeD.TDApp.prototype.init = function() {
	
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(this.renderer.domElement );

	this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
	this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	this.cube = new THREE.Mesh( this.geometry, this.material );
	this.scene.add( this.cube );

	this.camera.position.z = 5;
	
};

JSE.ThreeD.TDApp.prototype.update = function(tpf) {
	this.cube.rotation.x += 1 * tpf;
	this.cube.rotation.y += 1 * tpf;
};
	
JSE.ThreeD.TDApp.prototype.render = function(tpf) {
	this.renderer.render(this.scene, this.camera);
};