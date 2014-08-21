# is-mongo [![Build Status](https://travis-ci.org/charliedowler/is-mongo.svg?branch=master)](https://travis-ci.org/charliedowler/is-mongo)

> Check if a mongodb is running

See the [db-type](https://github.com/charliedowler/db-type) module for more database types.


## Install

```sh
$ npm install --save is-mongo
```


## Usage

##### Node.js

```js
var isMongo = require('is-mongo');

isMongo(function(running) {
    console.log(running);
    //=> true
});
```


## CLI

```sh
$ npm install -g is-mongo
```

```sh
$ is-mongo
#=> running
```


## License

MIT © [Charlie Dowler](http://charliedowler.com)