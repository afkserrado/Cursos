exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
    return;
}