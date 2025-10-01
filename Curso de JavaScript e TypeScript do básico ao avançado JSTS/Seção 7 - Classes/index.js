/*
Nas classes, os métodos criados automaticamente fazem parte do prototype da classe. Assim, quaisquer instâncias daquelas classes usarão os métodos da classe pai, ao invés de replicá-los.
*/

// Classes
/*
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }
}

const p1 = new Pessoa('Fulano', 'Beltrano')
console.log(p1)
p1.falar()
*/

// Getters, setters e propriedades privadas
/*
const pvtVelocidade = Symbol()
class Carro {
    constructor(nome) {
        this.nome = nome
        this[pvtVelocidade] = 0
    }

    acelerar() {
        if (this[pvtVelocidade] >= 100) return
        this[pvtVelocidade]++
    }

    freiar() {
        if (this[pvtVelocidade] <= 0) return
        this[pvtVelocidade]--
    }

    get velocidade() {
        console.log('GETTER')
        return this[pvtVelocidade]
    }

    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this[pvtVelocidade] = valor
    }
}

const c1 = new Carro('Fusca')

c1.velocidade = 99
console.log(c1.velocidade)

console.log(c1[pvtVelocidade])
c1[pvtVelocidade] = 55
console.log(c1[pvtVelocidade])
*/

/*
class Pessoa {
    #nascimento // Atributo privado

    constructor(nome, sobrenome, nascimento) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.#nascimento = new Date(nascimento)
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    get idade() {
        const hoje = new Date()
        return hoje.getFullYear() - this.#nascimento.getFullYear()
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift() // Remove o nome do array
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Fulano', 'Beltrano', "01/10/1996")
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.idade)
console.log(p1.nascimento) // undefined
p1.nomeCompleto = "Fulano Ciclano Beltrano"
console.log(p1.nomeCompleto)
*/

// Herança
/*
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.ligado} já está ligado.`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.ligado} já está desligado.`)
            return
        }

        this.ligado = false
    }
}

// Cria uma classe filha a partir de uma classe pai
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) // Importa a classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    // Override de método
    ligar() {
        console.log('Método ligar alterado.')
    }
}

const s1 = new Smartphone('iPhone', 'azul', '17')
console.log(s1)

const t1 = new Tablet('iPad')
t1.ligar()
console.log(t1)
*/

/*
Java: A propriedade estática pode ser acessada tanto pela classe quanto pelas instâncias, mas seu valor é compartilhado entre todas as instâncias da classe.

JavaScript: A propriedade estática só pode ser acessada pela classe, e seu valor é compartilhado entre todas as instâncias.

Ou seja, uma propriedade estática não precisa de uma instância para ser acessada.

Propriedades não estáticas não podem ser acessadas diretamente pela classe.

Métodos estáticos não têm acesso aos dados da instância.
*/

// Métodos estáticos
/*
class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Pilha trocada.')
    }

    // Método estático
    static soma(x, y) {
        return x + y
    }
}

const control1 = new ControleRemoto('LG')
control1.aumentarVolume()
control1.aumentarVolume()
control1.diminuirVolume()
//control1.trocaPilha() // Erro
ControleRemoto.trocaPilha()
console.log(control1.volume)
console.log(ControleRemoto.soma(5, 6))
*/