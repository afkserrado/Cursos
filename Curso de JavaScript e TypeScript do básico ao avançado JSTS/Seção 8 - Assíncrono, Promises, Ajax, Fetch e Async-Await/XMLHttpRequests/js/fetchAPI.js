// Captura cliques em  qualquer parte do documento (página)
document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase(); // Retorna o nome da tag html

    // Verifica se a tag html é do tipo 'a' (links)
    if(tag === 'a') {
        event.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        
        if(response.status !== 200) throw new Error('ERRO 404!');
        
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.error(e);
    }

    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) {
    //             throw new Error('ERRO 404!')
    //         }
    //         return response.text()
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.error(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// fetch('pag1.html')
//     .then(resposta => {
//         if(resposta.status !== 200) {
//             throw new Error('ERRO 400 - PÁGINA NÃO CARREGADA')
//         }
//         return resposta.text();
//     })
//     .then(html => {
//         console.log(html)
//     })
//     .catch(e => console.error(e))

