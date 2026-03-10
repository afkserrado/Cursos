require('dotenv').config();

const express = require('express');
const app = express(); // Cria a instância do servidor

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conexão estabelecida com a base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

// Middleware para ler dados de formulário
app.use(express.urlencoded({extended: true}));

// Middleware que tenta servir arquivos estáticos da pasta "public"
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

// Define o local dos templates HTML
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Define o motor dos templates HTML
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    // Inicia o servidor e escuta as requisições numa porta específica
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
