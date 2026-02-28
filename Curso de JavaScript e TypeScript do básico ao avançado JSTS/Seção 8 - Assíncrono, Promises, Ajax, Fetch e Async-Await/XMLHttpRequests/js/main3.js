// Função que faz uma requisição HTTP assíncrona
function request(obj) {
    return new Promise((resolve, reject) => {
        // Cria um objeto para enviar requisições HTTP
        const xhr = new XMLHttpRequest();

        // Prepara a requisição HTTP para ser enviada
        // obj.method: define o método HTTP (GET, POST, PUT etc.)
        // obj.url: URL para onde a requisição será enviada
        // true: indica que a requisição será assíncrona, ou seja, o código pode continuar executando enquanto espera pela resposta
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        // Escuta a resposta da requisição
        // Chama a função de callback quando a requisição é completada (load)
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                // Padrão antigo: retornando callback
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

// Captura cliques em  qualquer parte do documento (página)
document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase(); // Retorna o nome da tag html

    // Verifica se a tag html é do tipo 'a' (links)
    if(tag === 'a') {
        event.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log('Erro: ' + e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/*
Fluxo:
    Usuário clica no <a>.
    O event listener chama carregaPagina(el).
    carregaPagina começa a executar.
    Chega no await request(...).
    A função é “suspensa”.
    O controle volta para o Event Loop.
    Quando a requisição termina:
        A Promise resolve.
        A função carregaPagina continua do ponto onde parou.
        Executa carregaResultado(response).
*/