const express = require('express');
const app = express(); // Cria a instância do servidor
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

// Middleware para ler dados de formulário
app.use(express.urlencoded({extended: true}));

// Middleware que tenta servir arquivos estáticos da pasta "public"
// Se encontrar o arquivo, envia ao cliente; se não, passa para as rotas
app.use(express.static(path.resolve(__dirname, 'public')))

// Define o local dos templates HTML
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Define o motor dos templates HTML
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

// Inicia o servidor e escuta as requisições numa porta específica
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});