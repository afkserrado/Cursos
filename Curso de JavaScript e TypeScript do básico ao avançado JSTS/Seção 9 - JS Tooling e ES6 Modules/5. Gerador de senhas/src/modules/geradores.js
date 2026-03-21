const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // 65 a 90
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); // 97 a 122
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    
    for(let i = 0; i < qtd; i++) {
        maisculas && senhaArray.length < qtd && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.length < qtd && senhaArray.push(geraMinuscula());
        numeros && senhaArray.length < qtd && senhaArray.push(geraNumero());
        simbolos && senhaArray.length < qtd && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('');
}