'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.es6_module_transpiler = {
  setUp: function(done) {
    done();
  },
  toCJS: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/cjs.js');
    var expected = grunt.file.read('test/expected/cjs.js');
    test.equal(actual, expected, 'outputs CommonJS');

    test.done();
  },
  toAMD: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/amd.js');
    var expected = grunt.file.read('test/expected/amd.js');
    test.equal(actual, expected, 'outputs AMD');

    test.done();
  },
  toGlobals: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/globals.js');
    var expected = grunt.file.read('test/expected/globals.js');
    test.equal(actual, expected, 'outputs Globals');

    test.done();
  },
  moduleNameOption: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/name.js')
    var expected = grunt.file.read('test/expected/name.js')
    test.equal(actual, expected, 'understands module option');

    test.done();
  },
};
