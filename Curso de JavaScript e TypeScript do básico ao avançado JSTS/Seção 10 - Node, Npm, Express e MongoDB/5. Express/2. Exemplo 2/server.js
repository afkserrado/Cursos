// Import do framework
const express = require('express');

// Criação do servidor web
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/testes{/:idUsuario}{/:parametro}', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuario);
    res.send(req.query.profile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
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