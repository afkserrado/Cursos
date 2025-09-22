function validateChar(expression) {
    const validChar = "0123456789()*-+/."

    for (let char of expression) {
        // Caractere inválido encontrado
        if (validChar.indexOf(char) === -1) {
            console.log("Caracteres inválidos encontrados.")
            return false
        }
    }

    // Caracteres inválidos não encontrados
    return true 
}

// Factory Function
function criaCalculadora() {

    return {
        display: document.querySelector(".display"),

        // Inicia a calculadora
        inicia() {
            this.cliqueBotoes()
            this.pressEnter()
        },

        pressEnter() {
            this.display.addEventListener("keyup", (evento) => {
                // Verifica se a tecla pressionada é enter
                if (evento.keyCode === 13) {
                    // Previne o comportamento padrão de pressionar Enter (não insere um caractere)
                    evento.preventDefault()
                    this.calculate(this.display.value)
                }
            })
        },

        // Limpa o display
        clearDisplay() {
            this.display.value = ""
        },

        // Apaga um caractere do display
        delChar() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calculate(expression) {
            // Expressão sem caracteres inválidos
            if(validateChar(expression)) {
                try {
                    expression = eval(expression)

                    // Display vazio
                    if (!expression) {
                        alert("Display vazio!")
                        return
                    }

                    this.display.value = String(expression)
                }
                catch(erro) {
                    alert("Expressão inválida!")
                    return
                }
            }

            else {
                this.display.value = "Caracteres inválidos"

                // Desabilita o display temporariamente
                // Pare impedir que o usuário digite algo
                this.display.disabled = true

                setTimeout(() => {
                    this.clearDisplay()
                    this.display.disabled = false // Reabilita o display
                }, 1000);
            }
        },

        cliqueBotoes() {
            // Captura os cliques dos botões da calculadora
            document.addEventListener("click", evento => {
                const elemento = evento.target

                // Insere os operandos e operadores no display
                if (elemento.classList.contains("btn-num")) {
                    this.btnParaDisplay(elemento.innerText)
                }

                // Limpa o display
                if (elemento.classList.contains("btn-clear")) {
                    this.clearDisplay()
                }

                // Apaga um caractere do display
                if (elemento.classList.contains("btn-del")) {
                    this.delChar()
                }

                if (elemento.classList.contains("btn-eq")) {
                    this.calculate(this.display.value)
                }
            })
        },

        // Insere os operandos e operadores no display
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()