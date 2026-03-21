import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

// IIFE: função autoinvocável
(function() {
    const cpf = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = cpf.geraNovoCpf();
})();