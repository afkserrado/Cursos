exports.paginaInicial = (req, res) => {
    // Renderiza o template HTML
    res.render('index', {
        titulo: 'titulo da página',
        numeros: [0, 1, 2, 3, 4, 5]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
    return;
}