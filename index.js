'use strict';
var exec = require('child_process').exec;
var Q = require('q');
module.exports = function (callback) {
  var deferred = Q.defer();
  exec('mongo --eval "printjson(db.serverStatus())"', function (err, stdout, stderr) {
    var result = {
      type: 'mongo',
      running: (err) ? false : true
    };
    if (callback) callback(result);
    deferred.resolve(result);
  });
  return deferred.promise;
};