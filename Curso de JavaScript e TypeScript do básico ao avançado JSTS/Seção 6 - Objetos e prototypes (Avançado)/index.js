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