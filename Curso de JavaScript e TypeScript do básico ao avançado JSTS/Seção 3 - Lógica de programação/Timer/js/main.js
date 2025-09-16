const relogio = document.querySelector(".relogio") // Referencia o html
let segundos = 0
let timer

// Formata o temporizador
function formataDataSegundos(segundos) {
    // Converte em milisegundos e constrói um objeto Date
    const data = new Date(segundos * 1000) 

    // Retorna a hora formatada no formato HH:MM:SS, no fuso horário UTC (isso garante que o relógio comece em 00:00:00, ao invés de considerar o fuso horáio local)
    return data.toLocaleTimeString("pt-BR", { // Obtém o horário da data
        hour12: false,
        timeZone: "UTC" 
    })
}

// Configura o temporizador para atualizar de 1 em 1 segundo a cada segundo
function iniciarRelogio () {
    timer = setInterval(function() { // Executa uma função a cada 1 segundo
        segundos++ // Incrementa os segundos
        relogio.innerHTML = formataDataSegundos(segundos) // Att o relógio na página web
    }, 1000)
}

// Captura e manipula os eventos
document.addEventListener("click", function(evento) {
    const elemento = evento.target // Captura o elemento clicado
    console.log(elemento)

    // Inicia o relógio
    if (elemento.classList.contains("iniciar")) {
        relogio.classList.remove("pausado") // Remove a classe "pausado" do parágrafo "relogio"
        clearInterval(timer) // Evitar criar dois ou mais timers
        iniciarRelogio() // Inicia o temporizador
    }

    if (elemento.classList.contains("pausar")) {
        relogio.classList.add("pausado") // Adiciona a classe "pausado" ao parágrafo "relogio"
        clearInterval(timer) // Pausa o timer
    }

    if (elemento.classList.contains("zerar")) {
        relogio.classList.remove("pausado") // Remove a classe "pausado" do parágrafo "relogio"
        clearInterval(timer) // Pausa o timer
        relogio.innerHTML = "00:00:00" // Zera o relógio
        segundos = 0 // Zera os segundos
    }
})
