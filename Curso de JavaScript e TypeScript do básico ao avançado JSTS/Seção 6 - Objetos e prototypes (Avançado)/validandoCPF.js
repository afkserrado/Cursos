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

    // Extrai os primeiros 9 dígitos
    let cpfParcial = this.cpfLimpo.slice(0, -2)
    //console.log(cpfParcial)

    const dv1 = this.criaDigito(cpfParcial)
    //console.log(dv1, Number(this.cpfLimpo[9]))

    // Verifica o primeiro dígito verificador
    if (dv1 !== Number(this.cpfLimpo[9])) return `1 - ${false}`

    // Extrai os primeiros 10 dígitos
    cpfParcial = this.cpfLimpo.slice(0, -1)
    //console.log(cpfParcial)

    const dv2 = this.criaDigito(cpfParcial)
    //console.log(dv2, Number(this.cpfLimpo[10]))

    // Verifica o segundo dígito verificador
    if (dv2 !== Number(this.cpfLimpo[10])) return `2 - ${false}`

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

//const cpf = new cpfValido('705.484.450-52')
const cpf = new cpfValido('026.379.495-46')
console.log(cpf.valida())
console.log(cpf)