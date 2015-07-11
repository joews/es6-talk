var glob = require('glob');
var path = require('path');
var fs = require('fs');

function logLink(file) {
  var contents = fs.readFileSync(file, { encoding: 'utf8' });
  var encoded = encodeURIComponent(contents);

  var url = `https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=${encoded}`
  var link = `<a href="${url}">${path.basename(file)}</a>`;

  // goes in a markdown list at the moment
  console.log(`* ${link}`);
}

var files = path.join(__dirname, '..', 'examples', '*.js');
glob.sync(files).forEach(file => logLink(file));
