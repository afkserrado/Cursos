console.log("Textos entre aspas simples ou duplas")
console.log("Quebra a linha automaticamente, da mesma forma que o print do Python")
console.log("Teste 'teste'")
console.log('Teste "teste"')
console.log(35, 15.85, "Anderson Serrado")
console.log('Meu nome é "Anderson Serrado". Estou aprendendo JavaScript às', 10,'da manhã.')

// Comentários em linha
/*
Comentários em bloco
*/

let nome = "João"
const ano = 1984
console.log(nome, "nasceu em", ano)

const n1 = 5
const n2 = 10
const resultado = n1 * n2
console.log("resultado = ", resultado)

console.log(typeof(n1))

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