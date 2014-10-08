tinydeferjs
===========

Really tiny version of Q's defer promises

## Usage

```javascript
var something = new Defer();
something.promise.done(function(data) {
  console.log('finally');
  console.log(data);
});
something.promise.fail(function(error) {
  console.log('crap');
  console.log(error);
});
something.resolve('you passed');
something.fail('you failed');
```

YMMV, it should return the promise from the `done`/`fail` methods, but oh well.
