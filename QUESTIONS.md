### 1

```
setTimeout(function() {
	console.log("1");
}, 100);

console.log("2");
```

This code will first log `2` and then after 100ms `1` to the console. The `setTimeout()` method executes the function after the timeout (in ms) has expired.

### 2

```
function foo(d) {
	if(d < 10) {
		foo(d+1);
	}
	console.log(d);
}

foo(0);
```

This code will log numbers from `10` down to `0` to the console. While the condition `d < 10` is true, the function will recursively call itself with `d + 1` as argument. The `console.log` happens after so the higher number will print to the console first.

### 3

```
function foo(d) {
	d = d || 5;
	console.log(d);
}
```

The logical OR operator will return the value of one of the operands. If we use non-boolean values, it will return a non-boolean value. There will be a potential issue if we call `foo(0)` or `foo('')`, as `0` or an empty string will evaluate to false and the function will return `5`.

### 4

```
function foo(a) {
	return function(b) {
		return a + b;
	}
}

const bar = foo(1);

console.log(bar(2))
```

In this code `bar` equals

```
function(b) {
    return 1 + b;
}
```

so `bar(2)` will return `3`.

### 5

```
function double(a, done) {
	setTimeout(function() {
		done(a * 2);
	}, 100);
}
```

We can define a function that takes the doubled value `a * 2` as an argument, e.g.

```
function triple(b) {
 console.log(b * 3);
}

double(10, triple)
```

would then log `60` to the console.
