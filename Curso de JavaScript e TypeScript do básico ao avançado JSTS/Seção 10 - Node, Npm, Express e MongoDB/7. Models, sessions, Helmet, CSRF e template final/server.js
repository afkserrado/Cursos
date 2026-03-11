// Variáveis de ambiente
require('dotenv').config();

const express = require('express');
const app = express(); // Cria a instância do servidor

// Estabelece a conexão com o MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// Permite salvar os dados do navegador do cliente em seu computador, reutilizando-os para fazer o login no sistema
const session = require('express-session');

// Permite salvar as sessões na base de dados
const MongoStore = require('connect-mongo');

// Emite mensagens auto-destrutivas em sessões
const flash = require('connect-flash');

// Rotas da aplicação
const routes = require('./routes');

const path = require('path');
const helmet = require('helmet');

// Impede que agentes externos enviam dados para a aplicação por meio dos formulários
const csrf = require('csurf');

// Funções que são executas nas rotas, no meio do caminho entre cliente e servidor
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

app.use(helmet());

// Middleware para ler dados de formulário
app.use(express.urlencoded({extended: true}));

// Faz o parse de JSON para a aplicação
app.use(express.json());

// Middleware que tenta servir arquivos estáticos da pasta "public" diretamente (imagens, css, js etc.)
// Se encontrar o arquivo, envia ao cliente; se não, passa para as rotas
app.use(express.static(path.resolve(__dirname, 'public')))

// Configura as sessões
const sessionOptions = session({
    secret: 'sdkjsdkajdasjpd',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // Milésimos de segundo
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// Define o local dos templates HTML que serão renderizados na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Define o motor que renderizará os templates HTML
app.set('view engine', 'ejs');

app.use(csrf());

// Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    // Inicia o servidor e escuta as requisições numa porta específica
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
