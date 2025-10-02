class validaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', evento => {
            this.handleSubmit(evento)
        })
    }

    handleSubmit(evento) {
        // Impede o comportamento padrão de um evento (neste caso, recarregar a página)
        evento.preventDefault()
        const flagValidarCampos = this.validarCampos()
        const flagValidarSenha = this.validarSenha()

        if (flagValidarCampos && flagValidarSenha) {
            alert('Formulário enviado.')
        }
    }

    validarSenha() {
        let valido = true

        const senha = this.formulario.querySelector('.senha')
        const senha2 = this.formulario.querySelector('.repetirSenha')

        if (senha.value !== senha2.value) {
            valido = false
            this.criarErro(senha, 'As senhas não coincidem.')
            this.criarErro(senha2, 'As senhas não coincidem.')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valido = false
            this.criarErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.')
        }

        return valido
    }

    validarCampos() {
        let valido = true

        // Limpa os erros após cada envio do formulário
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        // Percorre todos os campos do formulário
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            //console.log(campo)
            
            // Campo vazio
            if(!campo.value) {
                // Obtém o conteúdo da tag anterior ao campo, que é seu respectivo label
                const label = campo.previousElementSibling.innerText

                // Exibe uma mensagem de erro
                this.criarErro(campo, `Campo "${label}" não pode estar vazio.`)
                valido = false
            }

            // Campo CPF não vazio
            if (campo.classList.contains('cpf')) {
                if(!this.ehCpfValido(campo)) valido = false
            }

            // Campo Usuário não vazio
            if (campo.classList.contains('usuario')) {
                if(!this.ehUsuarioValido(campo)) valido = false
            }
        }

        return valido
    }

    criarErro(campo, msg) {
        // Cria uma nova tag e insere a msg de erro em seu conteúdo
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')

        // Insere a tag criada na página, logo após o respectivo campo
        campo.insertAdjacentElement('afterend', div)
    }

    // Valida o CPF
    ehCpfValido(campo) {        
        // Cria uma instância da classe validaCPF
        const cpf = new validaCPF(campo.value)

        // CPF inválido
        if(!cpf.validarCPF()) {
            this.criarErro(campo, 'CPF inválido.')
            return false
        }

        return true
    }

    ehUsuarioValido(campo) {
        const usuario = campo.value
        let flagValido = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.criarErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            flagValido = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)) {
            this.criarErro(campo, 'Usuário só pode conter letras e números.')
            flagValido = false
        }

        return flagValido
    }
}

const valida = new validaFormulario()