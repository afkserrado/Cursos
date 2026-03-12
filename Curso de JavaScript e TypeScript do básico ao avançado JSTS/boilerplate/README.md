# Boilerplate Node.js com Express, EJS, Webpack e MongoDB

Template base para aplicações web com Node.js utilizando Express no back-end, EJS na renderização de views, MongoDB com Mongoose para persistência e Webpack para empacotamento do front-end.

## Visão geral

Este projeto segue o padrão MVC (Models, Views and Controllers), separando responsabilidades entre regras de entrada e saída, renderização de páginas, organização das rotas e estrutura de dados.

A aplicação possui:
- Back-end com Express
- Views renderizadas com EJS
- Middlewares globais e proteção CSRF
- Sessões persistidas no MongoDB
- Front-end empacotado com Webpack
- Estrutura inicial para uso com Mongoose

## Estrutura do projeto

.
├── frontend
│   ├── main.js
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│
├── public
│   └── assets
│       └── js
│           ├── bundle.js
│           └── bundle.js.map
│
├── src
│   ├── controllers
│   │   ├── contatoController.js
│   │   └── homeController.js
│   │
│   ├── middlewares
│   │   └── middleware.js
│   │
│   ├── models
│   │   └── HomeModel.js
│   │
│   └── views
│       ├── 404.ejs
│       ├── index.ejs
│       └── includes
│           ├── ejs.txt
│           ├── footer.ejs
│           └── head.ejs
│
├── .env
├── .gitignore
├── package.json
├── README.md
├── routes.js
├── server.js
└── webpack.config.js