var horário_do_sistema = new Date()
var horário = horário_do_sistema.getHours()
var horário_texto = document.querySelector('#time')
var imagem_do_clima = document.querySelector('#image-time')
var main = document.querySelector('#principal')
var body = document.querySelector('body')


if (horário < 12 && horário > 5) {
    main.style.backgroundColor = '#a0e96e'
    body.style.backgroundColor = '#c3e767'
    horário_texto.innerHTML = `são <strong>${horário}</strong> da manhã`
    imagem_do_clima.style.backgroundImage = 'url("./imagens/sunrise_landscape.jpg")'
} else if(horário >= 12 && horário < 18) {
    main.style.backgroundColor = '#C77950'
    body.style.backgroundColor = '#E06522'
    horário_texto.innerHTML = `são <strong>${horário}</strong> da tarde`
    imagem_do_clima.style.backgroundImage = 'url("./imagens/midday_landscape.png")'
} 