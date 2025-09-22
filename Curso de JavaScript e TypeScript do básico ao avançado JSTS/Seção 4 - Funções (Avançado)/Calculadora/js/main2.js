// Construction Function
function Calculadora() {
    this.display = document.querySelector(".display")
    
    this.capturaCliques = () => {
        document.addEventListener("click", event => {
            const el = event.target

            if (el.classList.contains("btn-oper")) {
                this.addNumDisplay(el)
            }

            if (el.classList.contains("btn-clear")) {
                this.clear(el)
            }

            if (el.classList.contains("btn-del")) {
                this.del(el)
            }

            if (el.classList.contains("btn-eq")) {
                this.calcula(el)
            }
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus() // Muda o foco para o display
    }

    this.clear = () => {
        this.display.value = ""
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.calcula = () => {
        try {
            const expressao = eval(this.display.value)

            if (!expressao) {
                alert("Expressão inválida.")
                return
            }

            this.display.value = String(expressao)
        }
        catch(erro) {
            alert("Expressão inválida.")
            return
        }
    }
    
    this.inicia = () => {
        this.capturaCliques()
    }
}

const calculadora = new Calculadora()
calculadora.inicia()