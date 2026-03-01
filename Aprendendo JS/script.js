/*

documento -> HTML

getElementById -> Tras UM elemento pelo ID
getElementsByClassName -> Tras TODOS os elementos pela CLASS
getElementsByTagName -> Tras TODOS os elementos pela TAG
getElementsByName -> Tras TODOS os elementos pelo NAME

querySelector -> Tras UM elemento, o PRIMEIRO que encontrar
uerySelectorAll -> Tras TODOS os elementos que encontrar


.textContent -> Pega o texto do elemento SO HTML
.innerHTML -> Pega o HTML do elemento, PERMITE ADICIONAR HTML
.innerText -> Pega o texto do elemento, mas ignora os elementos ocultos (display: none)
*/

const input = document.getElementById("main-input")
const elements = document.getElementById("main-paragraph")
const button = document.getElementById("main-button")   

button.addEventListener("click", function() {
    const novaPalavra = input.value
    const textoAtual = elements.textContent
    const textoSemLetras = textoAtual.replace('mundo', novaPalavra)
    elements.textContent = textoSemLetras
})
