/*
Aula 39 - Curto-circuito
*/

// && -> false && true -> false
// || -> true && false -> true

/*
Valores falsy
false
0
""
null / undefined
NaN
*/

console.log("João" && "Maria") // Maria
console.log("João" && 2) // 2
console.log(0 && "João") // 0
console.log("João" && 0) // 0
console.log(0 || false || null || "ABC" || true) // ABC: primeiro "true" encontrado

let corUsuario = null
let corPadrao = "preto"
console.log(corUsuario || corPadrao) // preto