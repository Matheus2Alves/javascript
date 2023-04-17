var age = querySelector('#age')
var M = querySelector('#sex1')
var F = querySelector('#sex2')
var calcular = querySelector('#enviar')
var texto_idade = querySelector('#texto')
var imagem_idade = querySelector('#image')
calcular.addEventListener('click', clicar)

function clicar() {
    texto_idade.innerHTML = (`ola ${age}`)
}