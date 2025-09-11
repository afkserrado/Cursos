const elementos = [
    {tag: "p", texto: "Frase 1"},
    {tag: "div", texto: "Frase 2"},
    {tag: "section", texto: "Frase 3"},
    {tag: "footer", texto: "Frase 4"},
]

const container = document.querySelector(".container") // Seleciona o container do HTML
const div = document.createElement("div") // Cria uma tag div na página web

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag) // Cria uma tag na página web
    tagCriada.innerHTML = texto
    div.appendChild(tagCriada)

    console.log(tag, texto)
}

container.appendChild(div)