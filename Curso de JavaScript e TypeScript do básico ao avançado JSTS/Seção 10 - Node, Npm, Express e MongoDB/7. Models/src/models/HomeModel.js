const mongoose = require('mongoose');

// Estrutura do documento que será salvo no banco
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

// Criação do 'Model', objeto que permitirá a interação do programa com a coleção no banco
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;