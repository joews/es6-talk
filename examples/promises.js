//
// Promises - the basics
//

// Promises are a way of controlling flow asynchronously.
// They're a well-established pattern now, and quite complex, so I won't cover them in detail.
// See http://www.html5rocks.com/en/tutorials/es6/promises/ for an intro

// Async functions -return- promises instead of -taking- callbacks:
// queryServer((err, results) => {
//   enrichResults((err, enriched) => {
//     removeDuplicates((err, deduped) => {
//       if(err) {
//         // oh no!
//       } else {
//         // Do something with deduped results!
//       }
//     })
//   })
// });

// ... becomes ...
// queryServer()
//   .then(results => enrichResults(enriched))
//   .then(enriched => removeDuplicates())
//   .then(deduped => doSomething())
//   .catch(e => {
//     // Error handling from any stage
//   })

// There are lots of Promise libraries in JavaScript already - they aren't a brand new feature,
//  but ES6 brings native support. A lot of the time you will work with promises that are returned by
//  APIs (like the new DOM fetch API), but they are easy to create.

// Example: Promise-ified delay function
function delay(millis) {
  // "Resolve" the promise for success
  // "Reject" for failure.
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(`Waited ${millis}ms`);
    }, millis);
  });
}

delay(1000)
  .then((result) => console.log(`${result}. About time!`))
  .catch(e => console.log(e));

// As well as avoiding a lot of the need for callbacks, Promises enable async flow control.
// You can wait for several tasks to finish in parallel:
// Promise.all(fetchUser(), fetchProducts())
//   .then((user, products) => {
//     // ...
//   })

// Or set of lots of tasks, and continue as soon as one of them returns
// Promise.race(queryEastSector(), queryWestSector)
//   .then(eastOrWest => {
//     // ...
//   })

// Promises can be chained. Each promise `then` handler can return a value or a promise. If it's a simple value,
//  it will be transformed into an already-resolved Promise. The next step is called once that promise resolves.

// They have some really nice properties - they return the semantics of return and try/catch, and allow us to
//  think of synchronous and async values in the same way. It doesn't matter if our promise handlers return
//  values or promises. They do have a cost, though - they're complex and have a lot of subtleties. Libraries
//  like async may be a better fit for simple async flows.

// Like Generators, Promises could be a several hour-long tutorial by themselves,
// so I'll leave it with a made up example: asynchronous pizza. Efficient async pizza.

// Imagine these return promises
Promise.all(makeDough(), makeSauce(), prepareToppings(), heatOven())
  .then((dough, sauce, toppings) => {
    // Return a simple value or a promise - it doesn't matter!
    return combineIngredients(dough, sauce, toppings);
  })
  .then(pizza => {
    return bakePizza();
  })
  .catch(e => {
    // Something went wrong, but it probably still tastes good!
  })


// Error handling is a gotcha - Promises can silently swallow uncaught errors, so always end chains in .catch.
