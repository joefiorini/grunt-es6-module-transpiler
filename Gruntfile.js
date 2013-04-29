/*
 * grunt-es6-module-transpiler
 * https://github.com/joefiorini/grunt-es6-module-transpiler
 *
 * Copyright (c) 2013 Joe Fiorini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    transpile: {
      toCJS: {
        type: "cjs",
        files: {
          'tmp/cjs.js': ['test/fixtures/input.js'],
          'tmp/cjs-bar.js': ['test/fixtures/bar.js']
        },
      },
      toAMD: {
        type: "amd",
        files: {
          'tmp/amd.js': ['test/fixtures/input.js'],
          'tmp/amd-bar.js': ['test/fixtures/bar.js']
        }
      },
      toGlobals: {
        type: "globals",
        imports: { bar: "Bar" },
        files: {
          'tmp/globals.js': ['test/fixtures/input.js'],
          'tmp/globals-bar.js': ['test/fixtures/bar.js']
        }
      },
      moduleName: {
        type: 'amd',
        moduleName: 'namedModule',
        files: {
          'tmp/name.js': ['test/fixtures/name.js'],
        }
      },
      anonymous: {
        type: 'amd',
        anonymous: true,
        files: {
          'tmp/anonymous.js': ['test/fixtures/anonymous.js'],
        }
      },
      coffeeSrc: {
        type: 'amd',
        files: {
          'tmp/coffee.coffee': ['test/fixtures/coffee.coffee'],
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'transpile', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
