const nome = "Luiz Otávio"
const sobrenome = "Miranda"
const idade = 30
const peso = 84
const altura = 1.80

let imc = peso / (altura * altura)
let anoNascimento = 2025 - idade

console.log(nome, sobrenome, "possui", idade, "anos, pesa", peso, "kilos, mede", altura, "m de altura, seu imc é", imc, "e nasceu em", anoNascimento + ".")

// Template strings
console.log(`${nome} ${sobrenome} possui ${idade} anos, pesa ${peso} kilos, tem ${altura} metros de altura, seu imc é ${imc} e nasceu em ${anoNascimento}.`)