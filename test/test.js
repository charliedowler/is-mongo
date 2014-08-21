'use strict';
var assert = require('assert');
var isMongo = require('../index');

it('Should recognise mongoDB', function(done) {
  isMongo(function(running) {
    assert.equal(running, true, 'MongoDB is running');
    done();
  })
});