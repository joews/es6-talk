//
// Function arguments
//

//
// Default arguments
//

// Defaults are used when the argument in that position is missing or explicitly undefined.
function greet(greeting="Hello") {
  console.log(greeting);
}

greet();
greet(undefined);
greet("Hi!")

// Arguments are evaluated at runtime, unlike Python. You'll always get a new Date here.
function friendlyTime(greeting="Hello", date=new Date()) {
  console.log(`${greeting}, it's ${date}'`);
}

friendlyTime()
setTimeout(friendlyTime, 1000);

// The order doesn't matter
function greetSomebody(greeting="Hello", name) {
  console.log(`${greeting} ${name}`);
}

greetSomebody(undefined, 'Freda');


//
// Spread and rest...
// Convert between series of values like A, B, C , and arrays like [A, B, C]. They provide
//  better alternatives to two common ES5 patterns - the `arguments` object and using
//  Function.prototype.apply to pass an array as all function arguments.
//
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
//

// rest parameters - gather remaining arguments into an array
// eliminates most uses of the old arguments object.

// Call with any number of arguments, which are gathered into an array called `values`.
// It is slightly different from `arguments`:
// > it is a real array, not an "array-like object"
// > it contains only unnamed arguments
// > it doesn't have extra fields like `callee`
function min(...values) {
  return values.reduce((current, smallest) => current < smallest ? current : smallest);
}

console.log(min(30, -2, 4, 0, 7));

// spread operator
// Use an array (or iterable object) where a list of values is expected
// Often better than Function.prototype.apply.
var smallNumbers = [2, 4, 8];
var moreNumbers = [...smallNumbers, 16, 32, 64];

console.log(moreNumbers);

// Math.max takes a variable number of arguments.
var max = Math.max(...moreNumbers);
console.log(max); // 64

// ES5 equivalent with apply:
var alsoMax = Math.max.apply(null, moreNumbers);
console.log(alsoMax);

// Example: recursive map with functional style list processing
// No good for real use without tail call optimisation!
// From Reginald Braithwaite - http://raganwald.com/2015/02/02/destructuring.html
// - highly recommended article
function mapWith([head, ...tail], fn) {
  return head === undefined
    ? []
    : [fn(head), ...mapWith(tail, fn)];
}

var powersOfThree = mapWith([0, 1, 2, 3, 4, 5, 6], x => Math.pow(3, x));
console.log(powersOfThree)
