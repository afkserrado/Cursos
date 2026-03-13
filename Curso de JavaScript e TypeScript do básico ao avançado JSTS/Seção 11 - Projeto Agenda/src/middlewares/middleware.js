const e = require("connect-flash");

exports.middlewareGlobal = (req, res, next) => {
    // Cria uma variável disponível nas views renderizadas naquela requisição, podendo ser utilizada no EJS
    res.locals.umaVarLocal = 'Este é o valor da var local';
    next();
}

// Middleware para tratamento de erros no fluxo da aplicação
exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    // Cria uma variável para armazenar o token gerado pelo csurf, colocando-a no res.locals para que esteja disponível nas views
    res.locals.csrfToken = req.csrfToken();
    next();
}