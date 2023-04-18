var age = document.querySelector('#age')
var M = document.querySelector('#sex1')
var F = document.querySelector('#sex2')
var masculino = Number(M.value)
var feminino = Number(F.value)
var calcular = document.querySelector('#enviar')
var texto_idade = document.querySelector('#texto')
var imagem_idade = document.querySelector('#image')
var realage = Number(age.value)
var data = new Date()
var ano_atual = data.getFullYear()
var realyear = parseInt(ano_atual)
var body = document.querySelector('#body')
var section = document.querySelector('#container')

calcular.addEventListener('click', function() {
    var sua_idade = parseInt(ano_atual - age.value)
    texto_idade.innerHTML = `você é um jovem, e tem ${sua_idade} anos`
    if(sua_idade < 12 && sua_idade > 0 && masculino == 1 && feminino != 2 ) {
        texto_idade.innerHTML = `Você é uma criança, e tem ${sua_idade} anos`
        imagem_idade.style.backgroundImage = 'url(./imagens/criança_homem.jpg'
        body.style.backgroundColor = '#EF2828'
        section.style.backgroundColor = '#ee5c5c'
    } else if (sua_idade < 12 && sua_idade > 0 && feminino == 2 ) {
        texto_idade.innerHTML = `Vcê é uma criança, e tem ${sua_idade} anos`
        imagem_idade.style.backgroundImage = 'url(./imagens/crianca_mulher.jpg'
    } 
})
    
