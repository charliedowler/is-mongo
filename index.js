'use strict';
var request = require('request');
module.exports = function (callback) {
  request('http://localhost:27017', function(err, res, body) {
    callback(/mongo/i.test(body));
  });
};