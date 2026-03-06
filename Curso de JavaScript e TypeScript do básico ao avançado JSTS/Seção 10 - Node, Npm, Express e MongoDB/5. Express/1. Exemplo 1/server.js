// Import do framework
const express = require('express');

// Criação do servidor web
const app = express();

// Criação de uma rota: app.get(caminho, função)
// Função: é o que será executado quando alguém acessar a rota
// Req: request (requisição) do usuário
// Res: response (resposta) 
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
})

// Escuta as requisições numa porta específica
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

/*
Quando alguém abre no navegador: http://localhost:3000/
o navegador envia automaticamente uma requisição HTTP para o servidor, que chega por meio do objeto 'req'.

O Express verifica qual rota foi acessada: '/' ou '/contato'.

Depois que a função da rota é executada, o servidor envia uma resposta HTTP ao navegador por meio do objeto 'res'.

No código acima, o que está sendo requisitado é o conteúdo da rota, seja ela '/' ou '/contato'.

As respostas enviadas pelo servidor a onavegador são os dados da página ou outros dados, como um arquivo de download.

A porta é um identificador de serviço dentro do computador, usado para direcionar requisições de rede ao programa correto. Ela faz parte do canal de comunicação cliente <> servidor.
*/