'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    simplemocha: {
      test: {
        src: './test/test.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('default', ['simplemocha']);
};