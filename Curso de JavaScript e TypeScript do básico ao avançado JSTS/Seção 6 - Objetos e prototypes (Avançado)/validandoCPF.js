// Objeto
function cpfValido(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,

        get: function() {
            return cpf.replace(/[.-]/g, '')
        }
    })
}

// Método
cpfValido.prototype.valida = function() {
    //console.log(this.cpfLimpo)
    if (this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia() === true) return false

    // Extrai os primeiros 9 dígitos
    let cpfParcial = this.cpfLimpo.slice(0, -2)
    //console.log(cpfParcial)

    const dv1 = this.criaDigito(cpfParcial)
    //console.log(dv1, Number(this.cpfLimpo[9]))

    // Verifica o primeiro dígito verificador
    if (dv1 !== Number(this.cpfLimpo[9])) return false

    // Extrai os primeiros 10 dígitos
    cpfParcial = this.cpfLimpo.slice(0, -1)
    //console.log(cpfParcial)

    const dv2 = this.criaDigito(cpfParcial)
    //console.log(dv2, Number(this.cpfLimpo[10]))

    // Verifica o segundo dígito verificador
    if (dv2 !== Number(this.cpfLimpo[10])) return false

    return true
}

// Método
cpfValido.prototype.criaDigito = function(cpfParcial) {
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

// Método
cpfValido.prototype.isSequencia = function() {
    // Retorna uma string, repetindo o mesmo caractere n vezes
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)

    // Verifica as duas strings são iguais
    if (sequencia === this.cpfLimpo) return true
    return false
    
    /*for (let char of this.cpfLimpo) {
        //console.log(char)
        if (char !== this.cpfLimpo[0]) {
            return false
        }
    }
    return true*/
}

const cpf = new cpfValido('705.784.451-52')
const cpf2 = new cpfValido('111.111.111-11')
const cpf3 = new cpfValido('070.987.720-03')
console.log(cpf.valida())
console.log(cpf2.valida())
console.log(cpf3.valida())
