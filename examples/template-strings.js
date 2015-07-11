//
// "Template strings" (aka string interpolation)
//

// https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en

//
// Simple templates
//

// Verbal sparring material
var insults = ['punk', 'cheese-eating surrender monkey', 'rapscallion', 'carpetbagger', 'nincompoop'];

// Use backticks and ${} for interpolation
console.log(`Do you feel lucky, ${insults[0]}?`);

// The interpolated value can be more than a variable - you can use any expression.
console.log(`Do you feel lucky, ${ insults[Math.floor(Math.random() * insults.length)] }?`);

// Example - pluralise function
// Note that the last default argument is allowed to refer to the first - nice!
function plural(count, singular, pluralForm=`${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

console.log(plural(1, 'row'));
console.log(plural(2, 'table'));
console.log(plural(3, 'index', 'indices'));

// Template strings are interchangable with regular string literals - they are both
//  constructors for String objects.
typeof "Your mother was a hampster" === typeof `Your father smelt of elderberries!` === 'string'; // true

// Multiline strings
// New lines are included literally, so the text starts immediately after the first backtick
var ouch = `A knave; a rascal; an eater of broken meats; a
base, proud, shallow, beggarly, three-suited,
hundred-pound, filthy, worsted-stocking knave; a
lily-livered, action-taking knave, a whoreson,
glass-gazing, super-serviceable finical rogue;
one-trunk-inheriting slave; one that wouldst be a
bawd, in way of good service, and art nothing but
the composition of a knave, beggar, coward, pandar,
and the son and heir of a mongrel bitch: one whom I
will beat into clamorous whining, if thou deniest
the least syllable of thy addition.
`

console.log(ouch);

// Side note - incredible hack to use multiline strings in ES5 - https://github.com/sindresorhus/multiline)

//
// Tagged templates
//

// A "tagged" function is given the plain string chunks and interpolated fragments
// It can produce any output it likes!

// This example uses the default template output. It's mainly meant for designing DSLs.
function echo(chunks, ...values) {
  console.log(chunks);
  console.log(values);

  return chunks.map((chunk, i) => chunk + (values[i] || '')).join('')
}

var name = "Joe";

// Note "echo" right before the opening tick
console.log(echo`hello ${name}. Today is ${new Date()}!`)
