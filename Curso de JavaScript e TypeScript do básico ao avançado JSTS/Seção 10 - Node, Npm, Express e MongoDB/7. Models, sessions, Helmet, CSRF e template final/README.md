Padrão de projeto utilizado: MVC (Models, Views and Controllers)

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