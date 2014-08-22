'use strict';
var assert = require('assert');
var isMongo = require('../index');

it('Should recognise mongoDB is running - promise', function(done) {
  isMongo().then(function(running) {
    assert.equal(running, true);
    done();
  });
});
it('Should recognise mongoDB is running - callback', function(done) {
  isMongo(function(running) {
    assert.equal(running, true);
    done();
  });
});