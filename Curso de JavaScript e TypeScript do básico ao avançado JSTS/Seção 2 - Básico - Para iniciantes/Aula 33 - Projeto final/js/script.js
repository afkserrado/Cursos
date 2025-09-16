// Definindo o escopo para a criação das variáveis
function meuEscopo () {
    // Selecionando os conteúdos do HTML
    const formulario = document.querySelector(".formulario")
    const resultado = document.querySelector(".resultado")

    const pessoas = []

    function recebeEventoFormulario (evento) {
        // Impede que a página seja recarregada
        evento.preventDefault()

        // Selecionando os campos do formulário do HTML
        const nome = document.querySelector(".nome")
        const sobrenome = document.querySelector(".sobrenome")
        const peso = document.querySelector(".peso")
        const altura = document.querySelector(".altura")

        // Insere um objeto no final do vetor
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        // Exibe os dados digitados na página do navegador
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + ` ${peso.value} ${altura.value}</p>`
    } 

    // Recebe um evento do formulário
    // Se for "submit", cria um objeto do evento, que será do tipo SubmitEvent, e passa como parâmetro para a função recebeEventoForumulario
    formulario.addEventListener("submit", recebeEventoFormulario)
}

meuEscopo()