// Capturar evento de submit do formulário
const formulario = document.querySelector("#formulario")

function enviaEvento(evento) {
    // Impede o recarregamento da página
    evento.preventDefault() 

    // Captura os inputs
    const inputPeso = evento.target.querySelector("#peso")
    const inputAltura = evento.target.querySelector("#altura")

    // Obtém os valores dos inputs
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    // Se peso não for Number
    if (!peso) {
        enviaResultado("Peso inválido.", false)
        return
    }

    // Se altura não for Number
    if (!altura) {
        enviaResultado("Altura inválida.", false)
        return
    }

    const imc = calculaIMC(peso, altura)
    const nivelIMC = calculaNivelIMC(imc)

    const msg = `Seu IMC é ${imc} e seu nível é ${nivelIMC}.`
    enviaResultado(msg, true)

    console.log(`IMC = ${imc} | Nível ${nivelIMC}`)
}

function calculaIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function calculaNivelIMC(imc) {
    if (imc >= 39.9) {return "Obesidade grau 3"}
    if (imc >= 34.9) {return "Obesidade grau 2"}
    if (imc >= 29.9) {return "Obesidade grau 1"}
    if (imc >= 24.9) {return "Sobrepeso"}
    if (imc >= 18.5) {return "Peso normal"}
    if (imc < 18.5) {return "Abaixo do peso"}
}

// Monitora os eventos da página e chama uma função em caso de um "submit"
formulario.addEventListener("submit", enviaEvento)

// Cria um elemento HTML do tipo parágrafo e define sua classe inicial
function criaParagrafo() {
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("paragrafo-resultado-invalido")
    return paragrafo
}

function enviaResultado(msg, ehValido) {
    // Obtém o objeto "id" e zera
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""

    // Cria uma objeto "p"
    const paragrafo = criaParagrafo()

    if (ehValido) {
        paragrafo.classList.replace("paragrafo-resultado-invalido", "paragrafo-resultado-valido")
    }

    // Insere a mensagem na página
    paragrafo.innerHTML = msg
    resultado.appendChild(paragrafo)
}
