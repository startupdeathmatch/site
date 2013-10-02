/*jslint node: true */
'use strict';
var fs = require('fs');

// Intialize each controller based on directory name
// Returns object for each controller with name capitalized 
var controllers = {};
var files = fs.readdirSync(__dirname);
files.forEach(function(file){
  var path = __dirname + '/' + file;
  var name = file.charAt(0).toUpperCase() + file.toLowerCase().slice(1);
  if (fs.statSync(path).isDirectory()) {
    controllers[name] = require(path);
  }
});
module.exports = controllers;