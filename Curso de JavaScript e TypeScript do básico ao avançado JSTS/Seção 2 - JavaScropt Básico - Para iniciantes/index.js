/*
console.log("Textos entre aspas simples ou duplas")
console.log("Quebra a linha automaticamente, da mesma forma que o print do Python")
console.log("Teste 'teste'")
console.log('Teste "teste"')
console.log(35, 15.85, "Anderson Serrado")
console.log('Meu nome é "Anderson Serrado". Estou aprendendo JavaScript às', 10,'da manhã.')
*/

// Comentários em linha
/*
Comentários em bloco
*/

/*
let nome = "João"
const ano = 1984
console.log(nome, "nasceu em", ano)
*/

/*
const n1 = 5
const n2 = 10
const resultado = n1 * n2
console.log("resultado = ", resultado)
console.log(typeof(n1))
*/

/*
// Aula 24 - Strings

let string = "O rato roeu a roupa do rei de roma"
console.log(string)
console.log(string.indexOf("tex"))
console.log(string.indexOf("tex", 4))
console.log(string.lastIndexOf("o"))
console.log(string.match(/[a-z]/))
console.log(string.match(/[a-z]/g))
console.log(string.search(/[a-z]/))
console.log(string.replace(/o/g, "#"))
console.log(string.length)
console.log(string.slice(0, 2))
console.log(string.slice(-10, -5))
console.log(string.slice(10))
console.log(string.split(' ', 3))
console.log(string.toUpperCase())
console.log(string.toLowerCase())
*/

/*
// Aula 26 - Numbers

let num1 = 1
let num2 = 2.5
let num3 = 10

num1 = num1.toString()
console.log(typeof(num1)) // string
console.log(num2.toFixed(4)) // 2.5000, aproxima visualmente, não internamente
console.log(Number.isInteger(num3)) // true

let temp = num1 * "Olá"
console.log(Number.isNaN(temp)) // true

// Operações com decimais
num1 = 0.1
num2 = 0.7
num1 += num2
console.log(num1) // 0.799999999...
console.log(Number.isInteger(num1))

num1 = 0.1
num1 += num2
num1 = Number(num1.toFixed(2))
console.log(num1) // 0.8
*/

/*
// Aula 27 - Math

let num1 = 9.57578
console.log(Math.floor(num1)) // 9
console.log(Math.ceil(num1)) // 10
console.log(Math.round(num1)) // 10

console.log(Math.max(1, 2, 3, 4, 5, 100, 10, -1)) // 100
console.log(Math.min(1, 2, 3, 4, 5, 100, 10, -1)) // -1

let aleatorio = Math.random()
console.log(aleatorio) // Retorna algum número entr 0 e 1 (não inclui o 1)
aleatorio = Math.random() * (10 - 5) + 5
console.log(aleatorio) // Retorna algum número entre 5 e 10

console.log(100 / 0) // Infinity
*/

/*
Aula 29 - Arrays


let array = [1, 2, 3, 4]
console.log(array[1]) // 2
console.log(array) // [ 1, 2, 3, 4 ]

array[array.length] = 5
console.log(array) // [ 1, 2, 3, 4, 5 ]

array.push(6) // Adiciona no final
array.unshift(10) // Adiciona no início
console.log(array) // [ 10, 1, 2, 3, 4, 5, 6 ]

array.pop(); // Remove do final
let shiftado = array.shift(); // Remove do início
console.log(shiftado) // 10
console.log(array) // [ 1, 2, 3, 4, 5 ]

let deletado = delete array[1]
console.log(deletado) // true
console.log(array) // [ 1, <1 empty item>, 3, 4, 5 ]

console.log(array.slice(0, -2)) // [ 1, <1 empty item>, 3 ]
console.log(array.slice(-3)) // [ 3, 4, 5 ]

console.log(typeof array) // object
console.log(array instanceof Array) // true
*/

