// Objeto literal (OK)
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

// Factory functions (OK)
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

// Constructor functions (OK)
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

// defineProperty e defineProperties
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

// Getters e setters
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

// Métodos para objetos
/*
const produto = {nome: 'produto', preco: 1.8}
const produto2 = Object.assign({}, produto)
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})

console.log(produto2)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.keys(produto))
console.log(Object.values(produto))
console.log(Object.entries(produto))

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}
*/

// Prototypes
/*
function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    
    Pessoa.prototype.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome
    }
}

const p1 = new Pessoa('Fulano', 'de Tal')
console.log(p1.nomeCompleto())

// Cadeia: p1 -> __proto__ (Pessoa.prototybe) --> Object.prototype
*/

// Manipulação de prototypes
/*
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveB, objC.chaveA)
console.log(Object.getPrototypeOf(objA))

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

// É recomendado definir os métodos fora da função
Produto.prototype.desconto = function(percentual) {
    this.preco = (100 - percentual) / 100 * this.preco
}

Produto.prototype.aumento = function(percentual) {
    this.preco = (100 + percentual) / 100 * this.preco
}

const p1 = new Produto('Camiseta', 50)
//p1.desconto(100)
p1.aumento(100)
console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(100)
console.log(p2.preco)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

console.log(p3)
*/

// Herança
/*
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(montante) {
    this.preco -= montante
}

Produto.prototype.aumento = function(montante) {
    this.preco += montante
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

// Cria um novo objeto que vazio que tem Produto.prototype como protótipo
// Camiseta aponta para esse objeto criado
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta // Restaura o constructor

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const produto = new Produto('Gen', 111)
camiseta.aumento(100)
console.log(camiseta.preco)

console.log(produto)
console.log(camiseta)

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        
        // Comportamentos do atributo estoque
        get: function() {
            return estoque
        },

        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Caneca', 13, 'Plástico', 5)
caneca.estoque = 100
console.log(caneca.estoque)
*/

// Factory functions + Prototype
/*
// Padrão 1: Herança prototípica
// Factory function
function criaPessoa(nome, sobrenome) {
    // Objeto literal que representa o prototype da classe
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        }
    }
    
    // Cria um objeto vazio, cujo prototype é pessoaPrototype
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

// Padrão 2: Composição de objetos
// Objeto literal
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

// Cria um objeto vazia e copia as propriedades do objeto literal falar para o pessoaPrototype
const pessoaPrototype = Object.assign({}, falar)

// Factory function
function criaPessoa(nome, sobrenome) {
    // Cria um objeto vazio, cujo prototype é pessoaPrototype
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa('Fulano', 'de Tal')
console.log(p1)
p1.falar()
*/
