function clicar() {
    var nal = document.querySelector('input#nal')
    var res = document.querySelector('div#res') 
    var nacionalidade = (nal.value)
    switch (nacionalidade) {
        case 'BR':
            res.innerHTML = 'Você é Brasileiro'
            break
        case 'Brasil':
            res.innerHTML = 'Você é Brasileiro'
            break
        case 'brasil':
            res.innerHTML = 'Você é Brasileiro'
            break
        case 'brazil':
            res.innerHTML = 'Você é Brasileiro'
            break
        case 'Brazil':
            res.innerHTML = 'Você é Brasileiro'
            break
        case 'br':
            res.innerHTML = 'Você é Brasileiro'
            break
        default:
            res.innerHTML = 'Você é estrangeiro'
    }
}    