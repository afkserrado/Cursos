const inputTarefa = document.querySelector(".input-tarefa")
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefas = document.querySelector(".tarefas")

// Captura o evento de teclas pressionadas no elemento de input
inputTarefa.addEventListener("keypress", function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return // Se vazio, retorna
        criarTarefa(inputTarefa.value) // Cria a tarefa
        //console.log("ENTER")
    }
    
    //console.log(evento)
})

// Captura o evento de "clique" do botão de adicionar tarefa
btnTarefa.addEventListener("click", function() {
    if (!inputTarefa.value) return // Se vazio, retorna
    criarTarefa(inputTarefa.value) // Cria a tarefa
})

// Cria um <li></li>, que é o elemento html que representa um item de uma lista <ul></ul>
function criaLi() {
    const li = document.createElement("li")
    return li
}

// Cria uma tarefa e adiciona na lista de tarefas
function criarTarefa(inputTexto) {
    const li = criaLi() // Cria um item da lista
    li.innerHTML = inputTexto // Adiciona o texto ao item
    tarefas.appendChild(li) // Adiciona o item à lista de tarefas
    limpaInput() // Limpa o input
    criarBotaoApagar(li) // Cria o botão de apagar para o item criado
    salvarTarefas() // Guarda os itens em um arquivo
}

// Limpa o input
function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus() // Mantém o cursor do texto dentro do campo de input
}

// Cria um botão para apagar um item de uma tarefa
function criarBotaoApagar(li) {
    li.innerHTML += " " // Espaço entre o texto da tarefa e o botão
    const botaoApagar = document.createElement("button") // Cria um botão
    botaoApagar.innerHTML = "Apagar" // Insere um texto no botão
    botaoApagar.setAttribute("class", "apagar") // Define a classe do botão
    li.appendChild(botaoApagar) // Adiciona o botão ao item
}

// Remove um item da lista
document.addEventListener("click", function(evento) { // Captura o evento de clicar
    const elemento = evento.target // Obtém o elemento clicado
    if (elemento.classList.contains("apagar")) {
        elemento.parentElement.remove() // Remove o pai do elemento clicado
    }
    salvarTarefas() // Atualiza o JSON
})

// Salva a lista de tarefas em um arquivo JSON
function salvarTarefas() {
    // Seleciona todos os itens dentro da lista de tarefas, incluindo o botão "Apagar"
    const liTarefas = tarefas.querySelectorAll("li") 
    const listaTarefas = []

    // Percorre a lista de tarefas
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText // Obtém o texto da tarefa
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim() // Remove o texto do botão
        listaTarefas.push(tarefaTexto) // Insere a tarefa no vetor
    }

    const tarefasJSON = JSON.stringify(listaTarefas) // Converte em string e cria um arquivo JSON com a lista de tarefas
    localStorage.setItem("tarefas", tarefasJSON) // Salva o arquivo JSON no navegador
}

// Recupera a lista de tarefas salvas no navegador
function recuperarTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas") // Obtém as tarefas armazenadas no navegador
    const listaTarefas = JSON.parse(tarefas) // Converte as tarefas do JSON de string para array

    for (let tarefa of listaTarefas) {
        criarTarefa(tarefa) // Cria uma tarefa/item para cada tarefa recuperada do JSON
    }
}

recuperarTarefasSalvas()
