var AFRAME = require('aframe');
var stereoComponent = require('aframe-stereo-component').stereo_component;
var stereocamComponent = require('aframe-stereo-component').stereocam_component;

AFRAME.registerComponent('stereo', stereoComponent);
AFRAME.registerComponent('stereocam', stereocamComponent);