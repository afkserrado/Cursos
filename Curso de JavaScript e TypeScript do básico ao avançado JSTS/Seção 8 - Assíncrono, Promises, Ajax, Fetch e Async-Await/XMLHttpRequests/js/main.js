// Função que faz uma requisição HTTP assíncrona
const request = obj => {
    // Cria um objeto para enviar requisições HTTP
    const xhr = new XMLHttpRequest()

    // Prepara a requisição HTTP para ser enviada
    // obj.method: define o método HTTP (GET, POST, PUT etc.)
    // obj.url: URL para onde a requisição será enviada
    // true: indica que a requisição será assíncrona, ou seja, o código pode continuar executando enquanto espera pela resposta
    xhr.open(obj.method, obj.url, true)
    xhr.send() // Envia a requisição

    // Escuta a resposta da requisição
    // Chama a função de callback quando a requisição é completada (load)
    xhr.addEventListener('load', () => { 
        // Verifica o status da resposta
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText)
            //console.log('Resposta: ' + xhr.responseText)
        }
        else {
            obj.error(xhr.statusText)
        }
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

function carregaPagina(el) {
    const href = el.getAttribute('href')
    //console.log(href)

    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response)
        },
        
        error(errorText) {
            console.log(errorText)
        }
    })
}

function carregaResultado(response) {
    //console.log(response)
    const resultado = document.querySelector('.resultado')
    //console.log(resultado)
    resultado.innerHTML = response // Interpreta as tags
    c//onsole.log(resultado.innerHTML)
}

/*
1. HTTP (Hypertext Transfer Protocol)
HTTP é um protocolo de comunicação usado para transferir dados pela web. Ele define como as mensagens são enviadas e recebidas entre os clientes (geralmente navegadores web) e os servidores.

Cliente: Um dispositivo que faz uma solicitação (por exemplo, o navegador).
Servidor: Um dispositivo que responde à solicitação com dados (por exemplo, um servidor de sites).
O HTTP é um protocolo sem estado, o que significa que cada requisição é independente das anteriores.

2. Requisição HTTP (HTTP Request)
Uma requisição HTTP é o pedido enviado de um cliente para um servidor para obter dados ou realizar alguma ação (como enviar um formulário ou fazer login).

A requisição HTTP é feita quando acessamos um site, fazemos login, enviamos dados em um formulário, etc.

A requisição é composta por várias partes:

Método HTTP: Define a ação a ser realizada (como GET, POST, PUT, DELETE).
URL: O endereço do recurso no servidor (como https://api.exemplo.com/dados).
Cabeçalhos (Headers): Informações adicionais, como tipo de dados (JSON, HTML, etc.), autenticação, etc.
Corpo (Body): Apenas para alguns tipos de requisição (como POST), onde são enviados dados.

Exemplos de métodos HTTP:
GET: Solicita dados do servidor (ex: abrir uma página).
POST: Envia dados ao servidor (ex: enviar um formulário).
PUT: Atualiza dados no servidor.
DELETE: Exclui dados no servidor.

3. Resposta HTTP (HTTP Response)
Após uma requisição ser feita, o servidor responde com uma resposta HTTP. Essa resposta inclui:
Código de Status: Indica se a requisição foi bem-sucedida ou se ocorreu algum erro.
Cabeçalhos de Resposta: Informações adicionais, como tipo de conteúdo.
Corpo da Resposta: Os dados solicitados (se a requisição foi bem-sucedida).

4. Status da Requisição (HTTP Status Code)
O código de status HTTP é um número enviado pelo servidor na resposta para indicar o resultado da requisição. Ele é composto por três dígitos e segue um padrão de categorias.

Principais categorias de códigos de status:
1xx: Informativo (não é muito comum para o usuário)
Ex: 100 Continue – O servidor recebeu a requisição e o processo continua.

2xx: Sucesso (indica que a requisição foi bem-sucedida)
200 OK: A requisição foi bem-sucedida e a resposta contém os dados solicitados.
201 Created: A requisição foi bem-sucedida e um novo recurso foi criado no servidor.

3xx: Redirecionamento (indica que o cliente deve realizar outra ação)
301 Moved Permanently: A URL solicitada foi movida permanentemente para outra URL.
302 Found: A URL foi temporariamente movida para outra URL.

4xx: Erro do Cliente (o problema está na requisição enviada pelo cliente)
400 Bad Request: A requisição está malformada ou faltando parâmetros.
401 Unauthorized: O cliente não está autorizado a acessar o recurso (geralmente falta de autenticação).
404 Not Found: O recurso solicitado não foi encontrado no servidor.

5xx: Erro do Servidor (o problema está no servidor, não no cliente)
500 Internal Server Error: O servidor encontrou um erro inesperado ao processar a requisição.
502 Bad Gateway: O servidor agiu como gateway e recebeu uma resposta inválida de um servidor upstream.

5. Exemplo de uma requisição HTTP
Quando acessamos uma página da web, o navegador faz uma requisição HTTP do tipo GET, e o servidor responde com o conteúdo da página.

Requisição HTTP (GET):
Método: GET
URL: https://www.exemplo.com/pagina
Exemplo de cabeçalhos (Headers):
User-Agent: Mozilla/5.0 ...
Accept: text/html,application/xhtml+xml ...
Resposta HTTP:
Código de Status: 200 OK
Cabeçalhos:
Content-Type: text/html
Corpo (Body): O conteúdo HTML da página solicitada.

Resumo:
HTTP: Protocolo para comunicação entre cliente e servidor.
Requisição HTTP: Pedido enviado de um cliente para um servidor.
Métodos HTTP: Como GET, POST, PUT, DELETE, que definem a ação da requisição.
Status da Requisição: Código numérico indicando o resultado da requisição, como 200 OK (sucesso) ou 404 Not Found (erro).
*/