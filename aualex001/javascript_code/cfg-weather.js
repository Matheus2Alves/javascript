//var horário_do_sistema = new Date()
//var horário = horário_do_sistema.getHours()
var horário_texto = document.querySelector('#time')
var imagem_do_clima = document.querySelector('#image-time')
var main = document.querySelector('#principal')
var horário = 8

if (horário < 12 && horário > 5) {
    main.style.background = 'red'
}