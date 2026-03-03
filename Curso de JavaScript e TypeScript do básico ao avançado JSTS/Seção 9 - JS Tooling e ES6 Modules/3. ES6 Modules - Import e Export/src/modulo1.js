const nome = 'Anderson';
const sobrenome = 'Serrado';
const idade = 30;

export { nome, sobrenome as sn, idade};

export function soma(x, y) {
    return x + y;
}

// Só é possível exportar um objeto default por módulo
export default function dividir(x, y) {
    return x / y;
}

export class Pessoa { 
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}