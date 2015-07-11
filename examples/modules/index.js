//
// ES6 modules example
// http://www.2ality.com/2014/09/es6-modules-final.html
//

// Import the default export. We can pick any name - here we've chosen 'log'.
import log from './logger';

// Import some named exports. These get assigned to the name that they were
//  exported with.
import { warn } from './logger';

// We could combine the two lines to
// import log, { warn } from './logger';

// Or even
// import { default as log, warn } from './logger';

log('Hi!');
warn('Uh oh');

// You can also import all of a module's imports
import * as logger from './logger';
logger.warn('Still bad news');

// And you can change the name of specific imports
import { err as disaster }  from './logger';
disaster('Time to give up!')
