// Importação

const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
const { nome, sobrenome } = require('./mod1');
const { Pessoa } = require('./mod1');
const path = require('path');

console.log(mod1.falaNome());
console.log(falaNome());
console.log(nome);
console.log(new Pessoa('Anderson'));
console.log(Pessoa);