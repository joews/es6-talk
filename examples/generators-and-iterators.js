//
// The basics of Generators, Iterators and for... of
//

// These examples barely scratch the surface of generators!
// See http://davidwalsh.name/es6-generators

// A concise syntax for lazily evaluated sequences.

// Generator functions have an asterisk right after `function`.
// Use `yield` to output a value. Execution of the generator is "paused" immediately
//  after a call to `yield`, which has really powerful capabilities.
function* fibonacci () {
  var prev = 0, curr = 1;
  while(true) {
    [prev, curr] = [curr, curr + prev];
    yield curr;
  }
}

// The output of calling a generator is an Iterator object.
// We can call `next` repeatedly to get values:
var iterator = fibonacci();
console.log(iterator.next()); // {"value":1,"done":false}
console.log(iterator.next()); // {"value":2,"done":false}

console.log('-'.repeat(40));

// Each return value from `next` has a value and done property.
// We can use these to iterate over the generated values
var sequence = fibonacci();

// Note to self: disable babel REPL "evaluate" mode whilst writing this!
while(true) {
  let result = sequence.next(),
      value = result.value;

  if(result.done || value > 20) {
    break
  }

  console.log(value);
}

console.log('-'.repeat(40));

// That's a lot of boilerplate! Fortunately ES6 introduces the for... of loop, which understands Iterators:
for(let n of fibonacci()) {
  if(n > 100) break;
  console.log(n)
}

console.log('-'.repeat(40));


// Generators can return as well as yield. Returning indicates that the sequence is finished.
// The * can also be attached to the function name
function *mersennePrimes() {
  // Marin Mersenne's original (1644) list
  var primes = [2, 3, 5, 7, 13, 17, 19, 31, 67, 127, 257];

  // for... of works on arrays (and more) as well as iterators.
  // It behaves like many people expect for... in to work over arrays.
  for(let p of primes) {
    yield p;
  }

  // The return value is discarded by for... of loops.
  return null;
}

// We don't need an explicit break anymore
for(let n of mersennePrimes()) {
  console.log(n)
}

console.log('-'.repeat(40));

// Generators are just functions, so they can take arguments
function* letters(word) {
  for(let letter of word.split('')) {
    yield letter;
  }

  return null;
}

// Call just like a regular function
for(let letter of letters("generators!")) {
  console.log(letter);
}

console.log('-'.repeat(40));

// for... of is omnivorous - as well as iterators and arrays, it understands DOM collections
//  (and specially constructed objects)
for(let paragraph of window.document.querySelectorAll('a')) {
  console.log(paragraph.textContent);
}

// There is an awful lot more to generators - yield can take a value as well as returning which enables coroutines,
//  C# (and ES7)-style async/await style async flow control can be acheived by combining generators and promises.
// I highly recommend the David Walsh blog series by Kyle Simpson - http://davidwalsh.name/es6-generators
