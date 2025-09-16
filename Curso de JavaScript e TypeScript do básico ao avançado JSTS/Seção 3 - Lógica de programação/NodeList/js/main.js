const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body) // Estilos CSS do body
const backgroundColorBody = estilosBody.backgroundColor // Cor de fundo do body
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "white"
    console.log(p)
}