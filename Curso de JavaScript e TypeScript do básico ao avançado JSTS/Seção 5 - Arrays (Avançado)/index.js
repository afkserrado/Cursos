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

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//const a3 = a1.concat(a2, 25)
const a3 = [...a1, ...a2, 27, ...[16, 14, 100]]
console.log(a3)
*/

/*
Aula 84 - Filter, map, reduce
*/

// Filter
// Filter automaticamente percorre os elementos do array
// Filter sempre retorna um array
// Arrow function: valor => valor > 10. Como só tem 1 linha, o retorno é implícito
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numFiltered = numeros.filter(valor => valor > 10)
console.log(numFiltered)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasFiltered = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasFiltered)

const ageFiltered = pessoas.filter(obj => obj.idade > 50)
console.log(ageFiltered)

const nameFiltered = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nameFiltered)
*/

// Map
// Map sempre retorna um array
// Filter retorna um vetor menor ou igual ao original, sem modificar o valor dos elementos
// Map retorna um vetor do mesmo tamanho do original, mas com seus valores modificados por alguma operação
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numDobro = numeros.map(valor => valor * 2)
console.log(numDobro)

const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Letícia', idade: 19},
{nome: 'Rosana', idade: 32},
{nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

/* const idades = pessoas.map(function(obj) {
delete obj.nome
return obj
})
console.log(idades)

const idades2 = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades2)

const ids = pessoas.map((obj, index) => ({...obj, id: index}))
console.log(ids)

console.log(pessoas)
*/

// Reduce
// Soma todos os números
// Se o valor inicial não for especificado como parâmetro, o primeiro valor do array será usado como o valor inicial do acumulador
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
})

console.log(total)

const pares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(pares)

const par = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)

console.log(par)

const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Letícia', idade: 19},
{nome: 'Rosana', idade: 75},
{nome: 'Wallace', idade: 47},
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (valor.idade > acumulador.idade) return valor
    return acumulador
})

console.log(maisVelha.nome)
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const somaPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor)

console.log(somaPares)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
numeros.forEach((valor, indice) => {
    console.log(`Index: ${indice}; Valor: ${valor}`)
})
