// Função que faz uma requisição HTTP assíncrona
// Versão com Promises
const request = obj => {
    return new Promise((resolve, reject) => {
        // Cria um objeto para enviar requisições HTTP
        const xhr = new XMLHttpRequest()

        // Prepara a requisição HTTP para ser enviada
        xhr.open(obj.method, obj.url, true)
        xhr.send() // Envia a requisição

        // Escuta a resposta da requisição
        // Chama a função de callback quando a requisição é completada (load)
        xhr.addEventListener('load', () => { 
            // Verifica o status da resposta
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
                //console.log('Resposta: ' + xhr.responseText)
            }
            else {
                reject(xhr.statusText)
            }
        })
    }) 
}

// Captura cliques em  qualquer parte do documento (página)
document.addEventListener('click', e => {
    e.preventDefault()
    const el = e.target
    const tag = el.tagName.toLowerCase() // retorna o nome da tag html
    //console.log(tag)

    // Verifica se a tag html é do tipo 'a' (links)
    if (tag === 'a') {
        carregaPagina(el)
    }
})

/*
Versão com then e catch
function carregaPagina(el) {
    const href = el.getAttribute('href')
    //console.log(href)

    const objConfig = {
        method: 'GET',
        url: href,
    }

    request(objConfig)
        .then(response => {
            carregaResultado(response)
        })
        .catch(error => {
            console.log(error)
        })
}
*/

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    //console.log(href)

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig) // await espera a Promise chamada por request ser resolvida
        carregaPagina(response)
    }
    catch(e) { // Se a Promise não for resolvida, cai no catch
        console.log(e)
    }  
}

function carregaResultado(response) {
    //console.log(response)
    const resultado = document.querySelector('.resultado')
    //console.log(resultado)
    resultado.innerHTML = response // Interpreta as tags
    //console.log(resultado.innerHTML)
}

/*
Usuário clica em um link <a>.
carregaPagina(el) é chamada com o elemento clicado.
Dentro de carregaPagina:
    Criamos objConfig com method e url.
    Chamamos request(objConfig) → retorna Promise.
A Promise executa a requisição HTTP.
Quando a requisição termina:
    Sucesso → chama resolve → executa .then(...).
    Erro → chama reject → executa .catch(...).
.then(response) chama carregaResultado(response) para renderizar o conteúdo na página.
*/