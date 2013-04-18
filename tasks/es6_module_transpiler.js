/*
 * grunt-es6-module-transpiler
 * https://github.com/joefiorini/grunt-es6-module-transpiler
 *
 * Copyright (c) 2013 Joe Fiorini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function transpile(src, dest, options){
    var Compiler = require("es6-module-transpiler").Compiler,
        method, compiler, compiled;

    compiler = new Compiler(grunt.file.read(src), null, options);

    switch(options.type){
    case 'cjs':
      method = "toCJS";
      break;
    case 'amd':
      method = "toAMD";
      break;
    case 'globals':
      method = "toGlobals";
      break;
    default:
      throw new Error("unknown transpile destination type: " + options.type);
    }

    compiled = compiler[method].apply(compiler);

    grunt.file.write(dest, compiled);
  }

  grunt.registerMultiTask("transpile", function(){

    var opts = {};

    opts.imports = this.data.imports;
    opts.type = this.data.type;

    this.files.forEach(function(file){
      file.src.filter(function(path){
        if(!grunt.file.exists(path)){
          grunt.log.warn('Source file "' + path + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(path){
        transpile(path, file.dest, opts);
      });
    });

  });

};
