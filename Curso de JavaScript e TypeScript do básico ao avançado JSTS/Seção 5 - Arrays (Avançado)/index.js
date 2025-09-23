/*
Aula 81 - Revisão de arrays

const numeros = [1, 2, 3, 4, 5]
numeros[2] = 6
delete numeros[2]
console.log(numeros)

// Criação de array com função construtora
const nomes = new Array("Amanda", "Sofia", "Diego")
console.log(nomes)

// Passagem por referência
const nomes2 = nomes
nomes2.pop()
console.log(nomes)

// Passagem por cópia
const novo = [...nomes]
novo.push("Daniela")
console.log(novo)

// Métodos
const removido = novo.shift()
console.log(removido, novo)
novo.unshift("Rafael")
console.log(novo)

const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
const novo3 = nomes3.slice(1, -2)
console.log(novo3)

const string = "Fulano de Tal Ciclano de Beltrano"
const partes = string.split(" ")
console.log(partes)

const nomeCompleto = partes.join(" ")
console.log(nomeCompleto)
*/

/*
Aula 82 - Splice


const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
let removidos = ""
//removidos = nomes.splice(3, 2)
//removidos = nomes.splice(-2, 2)
removidos = nomes.splice(3, 0, 'Luiz')
removidos = nomes.splice(3, 1, 'Ana', 'Diego')
nomes.splice(nomes.length, 0, "João", "Rayssa") // push
nomes.splice(0, 0, "Rafael") // unshift
removidos = nomes.splice(-1, 1) // pop
removidos = nomes.splice(0, 1) // shift
console.log(nomes, removidos)
*/

/*
Aula 83 - Concatenando arrays
*/

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//const a3 = a1.concat(a2, 25)
const a3 = [...a1, ...a2, 27, ...[16, 14, 100]]
console.log(a3)