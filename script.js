const checkbox = document.getElementById('viewPass')
const senhas = document.querySelectorAll('.passwords')
const submitButton = document.getElementById('formButton')
const form = document.getElementById('form')
const inputSenha = document.getElementById('password')
const inputConfSenha = document.getElementById('confPassword')
const idioma = navigator.language // armazena o idioma do navegador
const listData = document.getElementById('listData')
const genreList = document.getElementById('genre')
const user = document.getElementById('user')
const email = document.getElementById('email')

checkbox.addEventListener('change', () => { // mostrar ou esconde as senhas ao clicar no checkbox
    senhas.forEach(senha => {
        if (checkbox.checked) {
            senha.type = 'text'
        } else {
            senha.type = 'password'
        }
    })    
})

const mensagem = mensagemPersonalizada(idioma)

inputSenha.addEventListener('input', function() {
    if (inputSenha.value !== inputConfSenha.value) {
      inputSenha.setCustomValidity(mensagem);
    } else {
      inputSenha.setCustomValidity('');
      inputConfSenha.setCustomValidity('');
    }
  });
  
  inputConfSenha.addEventListener('input', function() {
    if (inputSenha.value !== inputConfSenha.value) {
      inputConfSenha.setCustomValidity(mensagem);
    } else {
      inputSenha.setCustomValidity('');
      inputConfSenha.setCustomValidity('');
    }
  });


form.addEventListener('submit', (e) => {
    e.preventDefault();

    submitButton.innerHTML = "Carregando..."
    setTimeout(function () {
        submitButton.innerHTML = "Confirmar"
        listData.style = `padding: 1rem` // coloquei o padding por aqui se não aparece um bloco vazio antes de preencher
        listData.innerHTML = `<p>Nome: ${user.value}</p>
                            <p>Email: ${email.value}</p>
                            <p>${opcaoRadio(genreList)}</p>`
        form.reset() // limpa o formulário
        listData.scrollIntoView() // funcionalidade para telas menores que 1400px
    }, 3000)
})

function mensagemPersonalizada(idioma) { //funçao para mudar a mensagem de acordo com o idioma do nav
    const traducao = {
        'pt-BR': 'As senhas devem ser iguais',
        'en-US': 'Passwords must match'
    }
    if (idioma in traducao) {
        return traducao[idioma] // retorna a mensagem de validação de acordo com o idioma do navegador
    }
}

function opcaoRadio (lista) {
    let opcaoMarcada = ''
    let opcoes = lista.querySelectorAll('.radioItem')
    for (let i = 0; i < opcoes.length; i++) { // passa por todas as opções e retorna a variavel com a opção checada
        if (opcoes[i].checked) {
            return opcaoMarcada = opcoes[i].value
        }
    }
}
