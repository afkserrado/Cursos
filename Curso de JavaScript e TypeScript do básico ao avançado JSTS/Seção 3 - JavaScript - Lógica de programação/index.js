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


console.log("João" && "Maria") // Maria
console.log("João" && 2) // 2
console.log(0 && "João") // 0
console.log("João" && 0) // 0
console.log(0 || false || null || "ABC" || true) // ABC: primeiro "true" encontrado

let corUsuario = null
let corPadrao = "preto"
console.log(corUsuario || corPadrao) // preto
*/

/*
Aula 45 - Operador ternário


const pontuacao = 999

if (pontuacao >= 1000) {
    console.log("VIP")
}
else {
    console.log("Normal")
}

const nivel = pontuacao >= 1000 ? "VIP" : "Normal"
console.log(nivel)
*/

/*
Aula 46 - Date


let data = new Date()
console.log(data)
console.log(data.toString())

data = new Date(2019, 3, 20, 15, 14, 27)
console.log(data.toString())

data = new Date(2019, 3, 20, 15, 60, 60, 1000) // a, m, d, h, min, s
console.log(data.toString())

data = new Date("2025-09-09 21:51")
console.log(data.toString())
console.log("Dia", data.getDate())
console.log("Mês", data.getMonth() + 1)
console.log("Ano", data.getFullYear())
console.log("Hora", data.getHours())
console.log("Min", data.getMinutes())
console.log("Segundos", data.getSeconds())
console.log("ms", data.getMilliseconds())
console.log("Dia semana", data.getDay())
console.log(Date(Date.now()))
console.log(data.toLocaleDateString())

function formataData(data) {

    const dia = zeroEsquerdo(data.getDate());
    const mes = zeroEsquerdo(data.getMonth() + 1); // Janeiro = 0
    const ano = data.getFullYear();
    const hora = zeroEsquerdo(data.getHours());
    const minuto = zeroEsquerdo(data.getMinutes());
    const segundo = zeroEsquerdo(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${segundo}` 
}

function zeroEsquerdo(num) {
    return num >= 10 ? num : `0${num}`
}

data = new Date("2025-09-09 21:51")
const dataBrasil = formataData(data)
console.log(dataBrasil)
*/

/*
Aula 47 - Switch
*/

const data = new Date("2025-09-09")
const diaSemana = data.getDay() + 1
let diaSemanaExtenso = ""

switch (diaSemana) {
    case 0:
        diaSemanaExtenso = "Domingo"
        break;

    case 1:
        diaSemanaExtenso = "Segunda-Feira"
        break;

    case 2:
        diaSemanaExtenso = "Terça-Feira"
        break;

    case 3:
        diaSemanaExtenso = "Quarta-Feira"
        break;

    case 4:
        diaSemanaExtenso = "Quinta-Feira"
        break;

    case 5:
        diaSemanaExtenso = "Sexta-Feira"
        break;

    case 6:
        diaSemanaExtenso = "Sábado"
        break;

    default:
        break;
}

console.log(`diaSemana = ${diaSemana}, ${diaSemanaExtenso}`)