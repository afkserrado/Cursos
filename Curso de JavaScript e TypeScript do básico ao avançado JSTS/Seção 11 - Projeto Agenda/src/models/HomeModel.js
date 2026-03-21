// Define a estrutura dos dados e a interação com o MongoDB por meio do Mongoose

const mongoose = require('mongoose');

// Estrutura (molde) do documento que será salvo no banco
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

// Criação do 'Model', objeto que permitirá a interação do programa com a coleção no banco
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;