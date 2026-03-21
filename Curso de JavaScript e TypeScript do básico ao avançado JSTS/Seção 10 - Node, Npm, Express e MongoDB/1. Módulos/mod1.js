// Exportação

const nome = 'Anderson';
const sobrenome = 'Serrado';

const falaNome = () => {
    return nome + ' ' + sobrenome;
}

module.exports.nome = nome;
exports.sn = sobrenome;
exports.falaNome = falaNome;
this.anything = 'anything';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;