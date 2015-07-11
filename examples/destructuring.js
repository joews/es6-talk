//
// Destructuring
// Grab variables from parts of arrays and objects with pattern matching.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//

//
// Arrays
//

// Simple
// a = 1, b = 2, c = 3
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// Unassigned values are ignored
// a = 4, b = 5
[a, b] = [4, 5, 6];
console.log(a, b, c);

// Gaps are OK
// a = 7, c = 9
[a, , c] = [7, 8, 9];
console.log(a, b, c);

// Variables without a value are undefined - no errors here
// a = 1, b = c = undefined
[a, b, c] = [1];
console.log(a, b, c);

// Default values
[a, b, c="one million!"] = [10, 1000];
console.log(a, b, c);

// Gather remaining values into an array (... is the 'rest' syntax)
var rest;
[a, b, ...rest] = ["α", "β", "γ", "δ", "ε"];
console.log(a, b, rest);

// Classic interview question
// (no xors here)
[a, b] = [b, a]
console.log(a, b);


//
// Objects
//

// The object syntax is a little more obtuse
var ursaMajor = {
  dubhe: 1.79,
  merak: 2.37,
  phecda: 2.44
}

var { dubhe: brightestMagnitude } = ursaMajor;
console.log(brightestMagnitude);

// ...rest works here too
var { phecda: dimmestMagnitude, ...rest } = ursaMajor;
console.log(dimmestMagnitude, rest);

// Example: pulling useful values from navigation timing API:
var {
  loadEventStart: load,
  domContentLoadedEventStart: ready,

  // shorthand object keys work here too
  domainLookupEnd,
  domainLookupStart,
} = performance.timing;

console.log(`The page loaded at ${load}. The DOM was ready ready at ${ready}. DNS lookup took ${domainLookupEnd - domainLookupStart} ms.`);
