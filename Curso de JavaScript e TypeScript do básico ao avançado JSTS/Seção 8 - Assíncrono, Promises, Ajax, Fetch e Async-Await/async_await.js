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

// Async: transforma qualquer retorno da função em uma Promise
async function executa() {
    // Await: só pode ser usado dentro de uma função async. Pausa uma função até a Promise ser resolvida, retornando o valor do resolve
    // Portanto, await pausa a função executa()
    try {
        const fase1 = await esperaAi('Fase 1', rand(1, 3));
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', rand(1, 3));
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', rand(1, 3));
        console.log(fase3)

    } catch(e) {
        console.log(e)
    }
}

executa();