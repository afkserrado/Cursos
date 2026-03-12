// Entrypoint do back-end
// Configura a aplicação Express, conecta no banco, registra middlewares e inicia o servidor HTTP

// Carrega as variáveis do arquivo '.env' para 'process.env', permitindo acessar a string de conexão sem deixar esse valor fixo no código
require('dotenv').config();

// Cria a instância do Express, que será usada para configurar middlewares, rotas, views e o servidor
const express = require('express');
const app = express(); 

// Tenta estabelecer a conexão com o banco usando a variável de ambiente
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// Permite salvar os dados do navegador do cliente em seu computador, reutilizando-os para fazer o login no sistema
const session = require('express-session');

// Permite salvar as sessões no MongoDB em vez de deixá-las apenas em memória
const MongoStore = require('connect-mongo');

// Cria mensagens temporárias de sessão
const flash = require('connect-flash');

// Importa as rotas da aplicação
const routes = require('./routes');

const path = require('path');

// Adiciona cabeçalhos HTTP de segurança à aplicação Express
const helmet = require('helmet');

// Impede que agentes externos enviem dados para a aplicação em formulários e requisições que alteram o estado
const csrf = require('csurf');

// Funções que são executas nas rotas, no meio do caminho entre cliente e servidor
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

// Registra o helmet como um middleware global
app.use(helmet());

// Registra um middleware global para fazer o Express entender dados enviados por formulários HTML
app.use(express.urlencoded({extended: true}));

// Registra um middleware global para fazer o Express entender corpos de requisição em JSON
app.use(express.json());

// Registra um middleware global que tenta servir arquivos estáticos da pasta "public" diretamente (imagens, css, js etc.)
// Se encontrar o arquivo, envia ao cliente; se não, passa para as rotas
app.use(express.static(path.resolve(__dirname, 'public')))

// Configura as sessões
const sessionOptions = session({
    secret: 'sdkjsdkajdasjpd', // Segredo usado para assinar a sessão
    store: MongoStore.create({ // Define onde os dados da sessão serão armazenados
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // Milissegundos
        httpOnly: true
    }
});

// Ativa as sessões na aplicação
app.use(sessionOptions);

// Habilita as mensagens temporárias
app.use(flash());

// Define o local dos templates HTML que serão renderizados na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Define o motor que renderizará os templates HTML
app.set('view engine', 'ejs');

// Ativa a geração e validação de token CSRF
app.use(csrf());

// Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// Faz o servidor só começar a escutar as requisições depois que a conexão com o MongoDB for concluída
app.on('pronto', () => {
    // Inicia o servidor e escuta as requisições numa porta específica
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
