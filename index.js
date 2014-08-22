'use strict';
var exec = require('child_process').exec;
module.exports = function (callback) {
  exec('mongo --eval "printjson(db.serverStatus())"', function(err, stdout, stderr) {
    callback((err) ? false : true);
  });
};