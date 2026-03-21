const multiplicacao = require('./mod2');
console.log(multiplicacao(2, 3));

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));