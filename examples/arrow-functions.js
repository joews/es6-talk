//
// Arrow functions
// ES2015 has an arrow function syntax. The syntax is similar to Java 8, C# and others.
// They are sometimes called "fat arrow functions", which is a nod to Coffeescript.
//

//
// Lexical this:
// Arrow functions inherit `this` from the defining scope, so it doesn't keep
//  disappearing in callbacks. No more var self = this!
//
var o = {
  prefix: 'x_',

  addPrefix: function(inputArray) {
    // `this` is inherited from the defining scope (where it is defined),
    //  rather than set dynamically (how it is called).
    return inputArray.map((input) => {
      return this.prefix + input;
    })
  },

  // Compare with `function` syntax
  tryToAddPrefixWithFunction: function(inputArray) {
    return inputArray.map(function (input) {
      // function is dynamically bound. There is no `this` here, so it uses
      //  the default - the global object (`window` in the browser) in normal
      //  mode, or `undefined` in strict mode. We're in strict mode here, so
      //  we get "Cannot read property 'prefix' of undefined".
      return this.prefix + input;
    })
  }
}


console.log(o.addPrefix([1, 2, 3]));
console.log(o.tryToAddPrefixWithFunction([1, 2, 3]));

//
// Statement or expression body
//

// An arrow function body can be a statement, like a regular function:
var getYear = () => {
  // Unless you explicitly `return`, the return value is `undefined`.
  return new Date().getFullYear();
}

// It can also be an expression. Expression bodies don't need an explicit `return`,
//  because expressions always evaluate to something. They suit functional style
//  because expressions (usually) don't have side effects.
// Expression-bodied arrow functions don't have braces around the body:
var getMonth = () => new Date.getMonth();

// Arrow functions with a single argument can omit the parentheses around the argument:
var squares = [1, 2, 3, 4].map(x => x * x);

// You can return an object literal from an expression body by wrapping it in parentheses:
var objectify = name => ({ name: name  });

// Remember that expressions can be complex. Use with care!
var wat = x => x * ((y) => y / 2)(x) + x / 2;
