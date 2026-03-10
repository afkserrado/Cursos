const HomeModel = require('../models/homeModel');

HomeModel.create({
    titulo: 'Teste',
    descricao: 'Descricao'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
    return;
}