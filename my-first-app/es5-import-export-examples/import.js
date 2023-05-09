var printName = require('./export.js');
var mathFunctions = require('./mathFunctions.js');

printName();

console.log('sum', mathFunctions.sum(2, 3));

console.log('PI = ', mathFunctions.PI);
