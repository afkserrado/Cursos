exports.paginaInicial = (req, res) => {
    // Renderiza o template HTML
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
    return;
}