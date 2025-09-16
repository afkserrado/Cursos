// Definindo o escopo para a criação das variáveis
function meuEscopo () {
    // Selecionando os conteúdos do HTML
    const formulario = document.querySelector(".formulario")
    const resultado = document.querySelector(".resultado")

    // Cria um vetor para armazenar os dados
    const pessoas = []

    // Cria um objeto
    let pessoa = {
        nome: "",
        sobrenome: "",
        peso: "",
        altura: ""
    }

    function recebeEventoFormulario (evento) {
        // Impede que a página seja recarregada
        evento.preventDefault()

        // Selecionando os campos do formulário do HTML
        const nome = document.querySelector(".nome")
        const sobrenome = document.querySelector(".sobrenome")
        const peso = document.querySelector(".peso")
        const altura = document.querySelector(".altura")

        // Armazena os dados do formulário no objeto
        pessoa.nome = nome.value
        pessoa.sobrenome = sobrenome.value
        pessoa.peso = peso.value
        pessoa.altura = altura.value

        // Insere o objeto no vetor
        pessoas.push({...pessoa})

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + ` ${peso.value} ${altura.value}</p>`
    } 

    formulario.addEventListener("submit", recebeEventoFormulario)
}

meuEscopo()