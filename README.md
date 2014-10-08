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

Also. If you want it really tiny, you should minify it:

```javascript
var Deferer=function(){var n,e,t=[],i=[]
return{promise:function(){return{done:function(e){void 0===n?t.push(e):setTimeout(e.bind(null,n),0)},fail:function(n){void 0===e?i.push(n):setTimeout(n.bind(null,e),0)}}}(),resolve:function(e){n=e
for(var i=0;i<t.length;i++)setTimeout(t[i].bind(null,e),0)},reject:function(n){e=n
for(var t=0;t<i.length;t++)setTimeout(i[t].bind(null,n),0)}}}
```
