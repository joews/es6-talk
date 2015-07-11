// This is a regular CommonJS dependency
// (from https://github.com/chalk/chalk, included in package.json).
// Babel transpiles this to a CommonJS `require`.
// To use this in ES6 in general we'd need to use the System loader API,
//  which was removed from the final ES6 spec. It's currently being worked
//  on in a spec of its own.
import chalk from 'chalk';

// The default export is the value that will be assigned when importing the modules
//  without specifying specific variables.
export default function log(message, formatFunction=chalk.green) {
  console.log(formatFunction(message))
}

// Named exports can be assigned as well as, or instead of, a default export.
export function warn(message) {
  return log(message, chalk.yellow);
}

export function err(message) {
  return log(`${message} !!!!!1`, chalk.bold.underline.red)
}
