function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log("Saldo insuficiente.")
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo) // Chama o construtor de Conta com o contexto de ContaCorrente
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype) // ContaCorrente herda métodos de Conta
ContaCorrente.prototype.constructor = ContaCorrente // Correção do construtor

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log("Saldo insuficiente.")
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo) // Chama o construtor de Conta com o contexto de ContaCorrente
}

ContaPoupanca.prototype = Object.create(Conta.prototype) // ContaPoupanca herda métodos de Conta
ContaPoupanca.prototype.constructor = ContaPoupanca // Correção do construtor

const conta1 = new Conta(11, 22, 10)
console.log(conta1)

conta1.depositar(100)
conta1.sacar(200)
conta1.sacar(50)

const cc1 = new ContaCorrente(11, 22, 0, 100)
cc1.depositar(10)
cc1.sacar(110)
cc1.sacar(1)

const cp1 = new ContaCorrente(12, 33, 0)
cp1.depositar(10)
cp1.sacar(10)
cp1.sacar(1)
