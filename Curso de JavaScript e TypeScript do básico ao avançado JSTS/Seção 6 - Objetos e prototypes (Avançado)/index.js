// Objeto literal
/*
const pessoa = {
    nome: 'Fulano',
    sobrenome: 'de Tal'
}

console.log(pessoa.nome) // Notação de ponto
chave = 'sobrenome'
console.log(pessoa['sobrenome']) // Notação de colchetes
console.log(pessoa[chave])

const pessoa2 = new Object()
pessoa2.nome = 'Fulano'
pessoa2.sobrenome = 'de Tal'
pessoa2.idade = 30
pessoa2.dataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa2.nome, pessoa2.sobrenome)

delete pessoa2.nome
console.log(pessoa2.nome)
console.log(pessoa2.dataNascimento())

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}
*/

// Factory functions
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        
        get nomeCompleto() { // Simulando atributo
            return `${this.nome} ${this.sobrenome}`
        },

        nomeCompleto2() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Fulano', 'de Tal')
console.log(p1.nomeCompleto)
console.log(p1.nomeCompleto2())
*/

// Constructor functions
/*
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    
    // Não é recomendado usar arrow function com construction function
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const p1 = new Pessoa('Fulano', 'de Tal')
console.log(p1.nomeCompleto())
*/

/*
defineProperty e defineProperties
*/
/*
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: function() {
            return estoque
        },
        writable: false, // Alterar
        configurable: false // Configurar (deletar, por ex)
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500000
//delete p1.estoque
console.log(p1)
*/

/*
Getters e setters
*/
/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        configurable: true,  // Configurar (deletar, por ex)
        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;  // Atualiza estoquePrivado com o valor passado
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = '500000';  // Tenta atribuir uma string (não será permitido)
console.log(p1.estoque);  // 3, pois o valor não foi alterado

p1.estoque = 500000;  // Agora atribui um número
console.log(p1.estoque);  // 500000, pois o valor foi alterado com sucesso
*/

/*
Métodos para objetos
*/



