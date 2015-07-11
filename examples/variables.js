//
// Variables, constants and scope
//

var name = 'Anna';
console.log(name);

// `let` is like var, but block scoped - only code
//   in the same block can use it.
if(new Date().getFullYear() > 1970) {
  let message = 'All is present and correct'
} else {
  let message = 'epoch fail!';
}

// Throws a "message is not defined" exception,
//  because message only exists inside the if and else
//  blocks.
console.log(message);

// Just like var, block-scoped variables hide outer-scoped
//  variables of the same name. Loop statements allow us
//  to put `let` in the init block.
for(let name of ['Jim', 'Bob', 'Mia']) {
  // The block-scoped `name`
  console.log(name);
}

// If we had used var name of..., name would be 'Mia'.
console.log(name);

// Constants are... constant.
const canIChange = false;

// Uncommenting this line causes an exception
// canIChange = true;
