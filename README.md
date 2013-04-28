# grunt-es6-module-transpiler

> A Grunt task for processing ES6 module import/export syntax into one of AMD, CommonJS or globals using the es6-module-transpiler

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-es6-module-transpiler --save-dev
```

To use add the `transpile` task to your Grunt configuration.

### Using with RequireJS/CommonJS:

```js
grunt.loadNpmTasks('grunt-es6-module-transpiler');

grunt.initConfig({
  transpile: {
    main: {
      type: "cjs", // or "rjs"
      files: [{
        expand: true,
        cwd: 'lib/',
        src: ['**/*.js'],
        dest: 'tmp/'
      }]
    }
  }
});
```

### Using with Globals

```js
grunt.loadNpmTasks('grunt-es6-module-transpiler');

grunt.initConfig({
  transpile: {
    main: {
      type: "globals",
      imports: { bar: "Bar" },
      files: {
        'tmp/globals.js': ['test/fixtures/input.js'],
        'tmp/globals-bar.js': ['test/fixtures/bar.js']
      }
    }
  }
});
```

### Transpiling your files

Manually run the task with `grunt transpile` or include it as part of your build task:

```js
grunt.registerTask('build', ['clean', 'transpile', '...']);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
