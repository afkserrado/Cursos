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

    validarCpf() {
        if (!this.cpfLimpo) return 'Não existe: ' + false
        if (typeof this.cpfLimpo !== 'string') return 'Não é string: '+ false
        if (this.cpfLimpo.length !== 11) return 'Não tem 11 dígitos: ' + false
        if (this.cpfLimpo[0].repeat(11) === this.cpfLimpo) return 'Todos os dígitos são iguais: ' + false

        const cpfParcial1 = this.#criarCpfParcial(9)
        const dv1 = String(this.#criarDigito(cpfParcial1))
        //console.log(typeof dv1, dv1)
        if (dv1 !== this.cpfLimpo[9]) return 'DV1 inválido: ' + false

        const cpfParcial2 = this.#criarCpfParcial(10)
        const dv2 = String(this.#criarDigito(cpfParcial2))
        //console.log(typeof dv2, dv2)
        if (dv2 !== this.cpfLimpo[10]) return 'DV2 inválido: ' + false

        return 'CPF válido: ' + true
    }
}

const cpf1 = new validaCPF('705.484.450-52') // válido
const cpf2 = new validaCPF('070.987.720-04') // inválido
const cpf3 = new validaCPF('111.111.111-11') // inválido

console.log(`${cpf1.validarCpf()}\n${cpf2.validarCpf()}\n${cpf3.validarCpf()}`)