function clicar() {
    var nal = document.querySelector('input#nal')
    var res = document.querySelector('div#res') 
    var nacionalidade = (nal.value)
    if (nacionalidade != 'BR') {
        res.innerHTML = `<p>Você é estrangeiro</p>`
    } else {
        res.innerHTML = `<p>Você é brasileiro</p>`
    }
}