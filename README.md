# is-mongo [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if a mongodb is running

See the [dbs](https://github.com/charliedowler/dbs) module for more database types.


## Install

```sh
$ npm install --save is-mongo
```


## Usage

##### Node.js

```js
var isMongo = require('is-mongo');

// Callback
isMongo(function(db) {
  console.log(db.running);
  //=> true
});

// Promise
isMongo().then(function(db) {
  console.log(db.type);
  //=> mongo
});
```


## CLI

```sh
$ npm install -g is-mongo
```

```sh
$ is-mongo
#=> Up
```


## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/is-mongo
[npm-image]: https://badge.fury.io/js/is-mongo.png

[travis-url]: http://travis-ci.org/charliedowler/is-mongo
[travis-image]: https://secure.travis-ci.org/charliedowler/is-mongo.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/is-mongo
[depstat-image]: https://david-dm.org/charliedowler/is-mongo.png