/*
Aula 68 e 69 - Declaração de funções

// 1️⃣ Função nativa do JS (exemplo: parseInt)
console.log(parseInt("42")); // Converte a string "42" em número 42
console.log(parseInt("101", 2)); // Converte a string "101" como binário (radix 2) -> 5


// 2️⃣ Função declarada (function declaration)
function soma(a, b) {
    return a + b; // Retorna a soma dos dois números
}

console.log(soma(2, 3)); // 5


// 3️⃣ Função anônima atribuída a uma variável (function expression)
const exibeMensagem = function() {
    console.log("Sou uma função atribuída a uma variável!");
};

exibeMensagem();


// 4️⃣ Passando funções como argumentos (callback)
function executaFuncao(funcao) {
    console.log("Vou executar a função abaixo:");
    funcao(); // Executa a função recebida
}

executaFuncao(exibeMensagem);


// 5️⃣ Função anônima diretamente em métodos que recebem callback
setTimeout(function() {
    console.log("Mensagem exibida após 1 segundo");
}, 1000);


// 6️⃣ Arrow function atribuída a uma variável
const arrowSoma = (a, b) => {
    return a + b;
};

console.log(arrowSoma(5, 7)); // 12


// 7️⃣ Arrow function usada diretamente como callback
setTimeout(() => {
    console.log("Mensagem da arrow function após 2 segundos");
}, 2000);


// 8️⃣ Função como método de um objeto
const obj = {
    falar: function() {
        console.log("Método dentro do objeto com 'function'.");
    },

    falar2() { // Sintaxe curta para métodos
        console.log("Método dentro do objeto com sintaxe curta.");
    }
};

obj.falar();
obj.falar2();


// 9️⃣ Função de cálculo simples com arrow function
const potencia = (x, y) => x ** y; // Retorna x elevado a y

console.log(potencia(2, 3)); // 8

console.log(raiz(9)); // 3

function funcao() {
    // "arguments" só funciona com "function", não com arrow functions
    const argumentos = arguments
    let total = 0

    for(let argumento of arguments) {
        total += argumento
    }

    console.log(argumentos)
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


function soma(a, b = 2, c = 5) {
    console.log(a + b + c)
}

soma(2) // 2 + 2 + 5 = 9
soma(2, 5) // 2 + 5 + 5 = 12
soma(2, undefined) // 2 + 2 + 5 = 9
soma(2, "", 10) // 210 (erro)

function funcao1([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

let array = [1, 3, 4]
funcao1(array)
funcao1([2, 5, 7])

function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

let obj = {nome: "Anderson", sobrenome: "Serrado", idade: 0}
funcao2(obj)

// Rest operator
// Rest operator deve ser o último parâmetro
function operacao(operador, acumulador, ...operandos) {
    for (let operando of operandos) {
        if (operador === "+") acumulador += operando
        if (operador === "-") acumulador -= operando
        if (operador === "*") acumulador *= operando
        if (operador === "/") acumulador /= operando
    }

    console.log(acumulador)
}

operacao("+", 1, 20, 30, 40, 50)
*/

/*
Aula 70 - Retornos

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome} // Como as chaves e as variáveis possuem o mesmo nome, o JS já assime que o parâmetro "nome" é valor da chave "nome"
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto
    }

    return falaResto
}

const fala = falaFrase("Olá")
console.log(fala) // [Function: falaResto]
const resto = fala("mundo!")
console.log(resto) // Olá mundo!

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica)
console.log(triplica)
console.log(quadriplica)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
*/

/*
Aula 72 - Closures
*/

function retornaFuncao() {
    const nome = "Luiz"
    return function() {
        return nome
    }
}

const funcao = retornaFuncao()
console.log(funcao)
console.log(funcao())