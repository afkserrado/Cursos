class validaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        }) 
    }

    // Método privado
    #criarCpfParcial(digitos) {
        if (digitos === 9) {
            return this.cpfLimpo.slice(0, -2)
        }

        if (digitos === 10) {
            return this.cpfLimpo.slice(0, -1)
        }
    }

    // Método privado
    #criarDigito(cpfParcial) {
        const cpfArray = cpfParcial.split('')
        //console.log(cpfArray)
        
        let soma = 0
        cpfArray.reduce((cont, digito) => {
            soma += Number(digito) * cont
            //console.log(cont, digito, soma)
            return cont - 1 // Decrementa o contador
        }, cpfArray.length + 1)

        //console.log(soma)
        return (soma % 11 < 2) ? 0 : 11 - (soma % 11)
    }   

    validarCPF() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.cpfLimpo[0].repeat(11) === this.cpfLimpo) return false

        const cpfParcial1 = this.#criarCpfParcial(9)
        const dv1 = String(this.#criarDigito(cpfParcial1))
        //console.log(typeof dv1, dv1)
        if (dv1 !== this.cpfLimpo[9]) return false

        const cpfParcial2 = this.#criarCpfParcial(10)
        const dv2 = String(this.#criarDigito(cpfParcial2))
        //console.log(typeof dv2, dv2)
        if (dv2 !== this.cpfLimpo[10]) return false

        return true
    }
}