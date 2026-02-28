// Operações síncronas e assíncronas
/*
Operações síncronas são aquelas que executam uma de cada vez e a próxima operação só começa depois que a operação anterior termina. Ou seja, o código é executado em sequência.

Operações assíncronas são aquelas que não precisam esperar a execução de uma operação anterior para começar. Elas são executadas em paralelo, permitindo que o código continue executando enquanto espera por uma resposta (como uma requisição de rede, leitura de arquivos, etc.).

→ Promises
A Promise é um objeto em JavaScript usado para representar a conclusão ou falha de uma operação assíncrona. Ela serve para gerenciar tarefas que demoram para ser concluídas (como requisições de rede ou leitura de arquivos) de forma mais legível e controlada. Uma Promise recebe uma função de executor como parâmetro, que, por sua vez, recebe dois outros parâmetros: resolve e reject. O resolve é chamado quando a operação é bem-sucedida, e o valor passado para ele é a resposta que será passada para o manipulador do .then(). O reject, por outro lado, é chamado quando há um erro na operação, e o valor passado para ele é o erro que será tratado pelo .catch().

.then() e .catch() são métodos usados para capturar e lidar com as respostas de uma Promise. Assim, para resolver (then) ou tratar o erro (catch) é necessário passar uma função de callback para esses métodos.

→ Estrutura da Promise

let minhaPromise = new Promise(function executor(resolve, reject) {
    // Operação assíncrona aqui
    let sucesso = true;  // Simulação de uma condição

    if (sucesso) {
        resolve("A operação foi bem-sucedida!");  // Resolve a Promise
    } else {
        reject("Ocorreu um erro na operação.");  // Rejeita a Promise
    }
});

// resolve e reject são funções de callback e parâmetros da função executor. Elas são criadas pelo próprio JavaScript

Estados da promise:
    pending: Em execução (ainda não terminou) -> Vai virar fulfilled ou rejected
    fulfilled: Sucesso, valor disponível -> Vai pro .then()
    rejected: Falha, erro disponível -> Vai pro .catch()
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            resolve(msg.toUpperCase());
        }, tempo)
    });
}

// esperaAi retorna uma Promise que representa um resultado futuro.
// O .then() e o .catch() registram callbacks que serão executados automaticamente quando essa Promise for resolvida (resolve) ou rejeitada (reject).

// esperaAi('Frase 1b', rand(1, 3))
//     // Recebe o argumento do resolve
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi(2, rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 3b', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .then(() => {
//         console.log('Eu sei o último a ser exibido')
//     })
//     // Recebe o argumento do reject
//     .catch(e => {
//         console.log('ERRO', e);
//     }); 

// const promises = [
//     esperaAi(1, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ];

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     })

// Promise.race(promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// })

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    }
    else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e))