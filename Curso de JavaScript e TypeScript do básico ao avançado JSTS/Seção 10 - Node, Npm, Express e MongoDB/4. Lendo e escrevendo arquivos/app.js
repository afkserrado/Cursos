const path = require('path');
const camArq = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Edu'},
    {nome: 'Lu'},
]

const json = JSON.stringify(pessoas, '', 2);
escreve(camArq, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => {
        console.log(valor);
    });
}

lerArquivo(camArq);