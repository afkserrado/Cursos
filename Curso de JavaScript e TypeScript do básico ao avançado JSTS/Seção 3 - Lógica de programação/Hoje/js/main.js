// Data de hoje
const hoje = new Date(Date.now())
console.log(hoje)

/*
// Opção 1
// Formata a data

const dataFormatada = formatarData(hoje)
console.log(dataFormatada)

function formatarData(data) {
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const min = data.getMinutes()
    const diaSemana = data.getDay()

    // Dias da semana por extenso
    const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"
    ];

    // Meses do ano por extenso
    const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

    const diaSemanaExtenso = diasSemana[diaSemana]
    const mesExtenso = meses[mes]

    // Horas e minutos com zero à esquerda
    const horaCorrigida = hora >= 10 ? hora : `0${hora}`
    const minCorrigido = min >= 10 ? min : `0${min}`

    return `${diaSemanaExtenso}, ${dia} de ${mesExtenso} de ${ano} ${horaCorrigida}:${minCorrigido}` 
}*/

// Opção 2
const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
}

const data = document.querySelector("#data")
data.innerHTML = hoje.toLocaleString("pt-BR", opcoes)