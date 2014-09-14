'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var isMongo = require('../index');
var sym = require('log-symbols');

it('Should recognise mongoDB is running - promise', function(done) {
  isMongo().then(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'mongo');
    done();
  });
});
it('Should recognise mongoDB is running - callback', function(done) {
  isMongo(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'mongo');
    done();
  });
});
it('Should return running when run from bash', function(done) {
  exec('node ./bin/is-mongo', function(err, stdout, stderr) {
    assert.equal(stdout.indexOf('Up') > -1, true);
  }).on('exit', function(status) {
    assert.equal(status, 0);
    done();
  });
});