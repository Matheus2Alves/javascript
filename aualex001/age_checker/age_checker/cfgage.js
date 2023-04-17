var age = document.querySelector('#age')
var M = document.querySelector('#sex1')
var F = document.querySelector('#sex2')
var calcular = document.querySelector('#enviar')
var texto_idade = document.querySelector('#texto')
var imagem_idade = document.querySelector('#image')
var realage = parseInt(age.value)
var data = new Date()
var ano_atual = data.getFullYear()
var realyear = parseInt(ano_atual)

calcular.addEventListener('click', function() {
    //var sua_idade = parseInt(realage - ano_atual)
    texto_idade.innerHTML = `${realage}`
    if(sua_idade < 12 && sua_idade > 0) {
        texto_idade.innerHTML = `Você é uma criança, e tem ${sua_idade} anos`
    }    
})
    
