window.onload = function() {
    let data = new Date()
    let horario = data.getHours()
    let caixa = document.body.getElementsByTagName('section')[0]
    let msg = document.getElementsByTagName('p')[0]
    let imagem = document.getElementsByTagName('img')[0]

    if(horario >= 0 && horario < 5) {

        document.body.style.backgroundColor = "black"
        caixa.style.backgroundColor = "gray"
        msg.innerHTML = `<strong> ${horario} da madruga filho`
        
    } else if(horario < 12) {
        document.body.style.backgroundColor = "green"
        caixa.style.backgroundColor = "lightgreen"
        msg.innerHTML = `<strong> ${horario} da matina`
        imagem.src = './imagens/sunrise_landscape.jpg'

    } else if(horario < 18) {
        document.body.style.backgroundColor = "orange"
        caixa.style.backgroundColor = "#3323"
        msg.innerHTML = (`<strong> ${horario} da tarde</strong>`)
        imagem.src = './imagens/midday_landscape.png'

    } else if(horario < 24) {
        document.body.style.backgroundColor = 'darkblue'
        caixa.style.backgroundColor = 'lightblue'
        msg.innerHTML = `<strong> ${horario} da noite`
        imagem.src = './imagens/night landscape.jpg'
        
    } else {
        msg.innerHTML = '[ERRO] hora inválida'
        imagem.src = ''
        imagem.style.border = 'none'
        imagem.style.color = 'transparent'
    }
}