//
// Improved Object literals - shorthand properties
//
var name = "Joe";
var key = "interests"

var o = {
  // shorthand for name: name
  name,

  // The function keyword is optional
  // You can't use arrow functions as methods
  message() {
    return `${this.name} says hi!`
  },

  // Computed key
  [key]: [
    'coffee',
    'code',
    'cliches'
  ],

  // Computed keys can be any expression that evaluates to a string
  // You can't refer to `this`, because we're still building it!
  [Math.random()]: 'good luck finding this again',
}

console.log(o);

// Computed keys can be really useful for building nested objects
//  where we don't know all of the keys until runtime.
// This example builds an ElasticSearch DSL-style query object.
function buildQuery(field, terms, operator) {
  var opName = operator === 'and' ? 'must' : 'should';

  return {
    query: {
      bool: {
        [opName]: terms.map((term) => ({
          term: {
            [field]: term
          }
        }))
      }
    }
  }
}

var specificFilms = buildQuery('genres', ['action', 'romance', 'nautical hijinks'], 'and');

console.log(JSON.stringify(specificFilms, null, 2));




//
// Improved Object literals - __proto__ and super
//

var base = {
  name: 'base',
  method() {
    console.log(`> I come from base. this is ${this.name}.`)
  }
}

//
// Use `__proto__` to set an object literal's prototype directly
// Use `super` to delegate method calls up the prototype chain, bypassing
//  the object itself. `this` is maintained.
//
var o = {
  __proto__: base,
  name: 'o',
  method() {
    console.log(`> I come from o. this is ${this.name}`);

    // Look up the prototype chain for a `method`
    //  - implicitly equivalent to base.method.call(this)
    super.method();
  }
}

console.log('Calling o.method: ')
o.method();

console.log('Calling base.method: ');
base.method();

// You could create a completely bare object by setting a null prototype:
var bare = { __proto__: null };

console.log('bare.toString: ');
console.log(`> ${bare.toString}`);
