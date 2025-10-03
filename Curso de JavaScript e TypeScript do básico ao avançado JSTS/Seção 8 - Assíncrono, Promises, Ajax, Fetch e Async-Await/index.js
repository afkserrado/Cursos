// Promises
/*
Operações síncronas são aquelas que executam uma de cada vez e a próxima operação só começa depois que a operação anterior termina. Ou seja, o código é executado em sequência.

Operações assíncronas são aquelas que não precisam esperar a execução de uma operação anterior para começar. Elas são executadas em paralelo, permitindo que o código continue executando enquanto espera por uma resposta (como uma requisição de rede, leitura de arquivos, etc.).
*/

// Promises
/*
→ Conceito
A Promise é um objeto em JavaScript usado para representar a conclusão ou falha de uma operação assíncrona. Ela serve para gerenciar tarefas que demoram para ser concluídas (como requisições de rede ou leitura de arquivos) de forma mais legível e controlada. Uma Promise recebe uma função de executor como parâmetro, que, por sua vez, recebe dois outros parâmetros: resolve e reject. O resolve é chamado quando a operação é bem-sucedida, e o valor passado para ele é a resposta que será passada para o manipulador do .then(). O reject, por outro lado, é chamado quando há um erro na operação, e o valor passado para ele é o erro que será tratado pelo .catch().

.then() e .catch() são métodos usados para capturar e lidar com as respostas de uma Promise. Assim, para resolver (then) ou tratar o erro (catch) é necessário passar uma função de callback para esses métodos.

→ Estrutura

let minhaPromise = new Promise(function executor(resolve, reject) {
    // Operação assíncrona aqui
    let sucesso = true;  // Simulação de uma condição

    if (sucesso) {
        resolve("A operação foi bem-sucedida!");  // Resolve a Promise
    } else {
        reject("Ocorreu um erro na operação.");  // Rejeita a Promise
    }
});

// resolve e reject são funções de callback e parâmetros da função executor

Estados da promise:

pending: Em execução (ainda não terminou) -> Vai virar fulfilled ou rejected

fulfilled: Sucesso, valor disponível -> Vai pro .then()

rejected: Falha, erro disponível -> Vai pro .catch()
*/

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => { // Retorna uma promise
        setTimeout(() => { // Executa após o tempo de espera
            if (typeof msg !== 'string') {
                reject('Um erro foi encontrado.')
                return
            }
            
            resolve(msg + ' (passei na promise)') // Retorna a msg
        }, tempo); // Tempo de espera em milissegundos
    })
}

/*
esperar('Conexão com o BD.', rand(1, 3))
    .then(resposta => { // Função de callback
        console.log(resposta)
        return esperar('Buscando dados na base.', rand(1, 3)) // Devolve um valor para o próximo then
    })
    .then(resposta => {
        console.log(resposta)
        return esperar(2, rand(1, 3))
    })
    .then(resposta =>{
        console.log(resposta)
    })
    .catch(erro => {
        console.log(erro)
    })

console.log('Mensagem que será exibida em paralelo.')
*/

/*
const promises = [
    //'Primeiro valor',
    esperar('Promise 1', rand(1, 3)),
    esperar('Promise 2', rand(1, 3)),
    esperar('Promise 3', rand(1, 3)),
    esperar(1000, rand(1, 3)),
    //'Outro valor'
]
*/

/*
// Tenta resolver todas as promises
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })
*/

/*
// Retorna a primeira promise ou erro encontrado
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })
*/

/*
function baixaPagina() {
    const emCache = true

    if(emCache) {
        // Resolve a promise imediatamente com o valor passado para ela
        return Promise.resolve('Página em cache')
    }
    else {
        return esperar('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(erro => {
        console.log('Erro: '+ erro)
    })
*/

// Async e Await
async function executa() {
    try {
        const fase1 = await esperar('Fase 1', 3000)
        console.log(fase1)

        const fase2 = await esperar('Fase 2', 1000)
        console.log(fase2)

        const fase3 = await esperar('Fase 3', 2000)
        console.log(fase3)
    }

    catch(erro) {
        console.log(erro)
    }
}

executa()