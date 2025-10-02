// Promises
/*
Operações síncronas são aquelas que executam uma de cada vez e a próxima operação só começa depois que a operação anterior termina. Ou seja, o código é executado em sequência.

Operações assíncronas são aquelas que não precisam esperar a execução de uma operação anterior para começar. Elas são executadas em paralelo, permitindo que o código continue executando enquanto espera por uma resposta (como uma requisição de rede, leitura de arquivos, etc.).
*/

// Promise
/*
→ Conceito
A Promise é um objeto em JavaScript usado para representar a conclusão ou falha de uma operação assíncrona. Ela serve para gerenciar tarefas que demoram para ser concluídas (como requisições de rede ou leitura de arquivos) de forma mais legível e controlada. Uma Promise recebe uma função de executor como parâmetro, que, por sua vez, recebe dois outros parâmetros: resolve e reject. O resolve é chamado quando a operação é bem-sucedida, e o valor passado para ele é a resposta que será passada para o manipulador do .then(). O reject, por outro lado, é chamado quando há um erro na operação, e o valor passado para ele é o erro que será tratado pelo .catch().

.then() e .catch() são métodos usados para capturar e lidar com as respostas de uma Promise. Assim, para resolver (then) ou tratar o erro (catch) é necessário passar uma função de callback para esses métodos.

→ Estrutura

let minhaPromise = new Promise((resolve, reject) => {
    // Operação assíncrona aqui
    let sucesso = true;  // Simulação de uma condição

    if (sucesso) {
        resolve("A operação foi bem-sucedida!");  // Resolve a Promise
    } else {
        reject("Ocorreu um erro na operação.");  // Rejeita a Promise
    }
});

*/

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => { // Retorna uma promise
        if (typeof msg !== 'string') reject(new Error('Erro'))
        setTimeout(() => { // Executa após o tempo de espera
        resolve(msg) // Retorna a msg
    }, tempo); // Tempo de espera em milissegundos
    })
}

esperar('Conexão com o BD.', rand(1, 3))
    .then(resposta => { // Função de callback
        console.log(resposta)
        return esperar('Buscando dados na base.', rand(1, 3))
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

