var enviar = document.querySelector('#enviar')
enviar.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var userano = document.querySelector('#age')
    var res = document.querySelector('#texto')
    var resimg = document.querySelector('#image')
    if (userano.value.length == 0 || Number(userano.value) > ano) {
        res.innerHTML = '<strong>[ERROR]</strong> Verifique os dados!'
    } else {
        var sex = document.getElementsByName('sex2')
        var idade = ano - Number(userano.value)
        var genero = ''
        var container = document.querySelector('#container')
        var body = document.querySelector('#body')
        if (sex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                res.innerHTML = 'você é uma <strong>criança</strong>'
                resimg.style.backgroundImage = 'url(./imagens/criança_homem.jpg)'
                container.style.backgroundColor = '#EF2828'
                body.style.backgroundColor = '#e86a6a'
            } else if(idade >= 12 && idade < 18){
                res.innerHTML = 'você é um <strong>Jovem</strong>'
                resimg.style.backgroundImage = 'url(./imagens/adolescente_homem.jpg)'
                container.style.backgroundColor = '#f3a81b'
                body.style.backgroundColor = '#ebd217'
            } else if(idade >= 18 && idade < 60) {
                res.innerHTML = 'você é um <strong>Adulto</strong>'
                resimg.style.backgroundImage = 'url(./imagens/adulto_homem.webp)'
                container.style.backgroundColor = '#606363'
                body.style.backgroundColor = '#91aaaa'
            }   else {
                res.innerHTML = 'você é um <strong>idoso</strong>'
                resimg.style.backgroundImage = 'url(./imagens/idoso_homem.jpg)'
                container.style.backgroundColor = '#EE82EE'
                body.style.backgroundColor = '#e6aae6'
            }
        } else{
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                res.innerHTML = 'você é uma <strong>criança</strong>'
                resimg.style.backgroundImage = 'url(./imagens/crianca_mulher.jpg)'
                container.style.backgroundColor = '#EF2828'
                body.style.backgroundColor = '#e86a6a'
            } else if(idade >= 12 && idade < 18){
                res.innerHTML = 'você é uma <strong>Jovem</strong>'
                resimg.style.backgroundImage = 'url(./imagens/adolescente_mulher.jpg)'
                container.style.backgroundColor = '#f3a81b'
                body.style.backgroundColor = '#ebd217'
            } else if(idade >= 18 && idade < 60) {
                res.innerHTML = 'você é uma <strong>Adulta</strong>'
                resimg.style.backgroundImage = 'url(./imagens/adulta_mulher.jpg)'
                container.style.backgroundColor = '#606363'
                body.style.backgroundColor = '#91aaaa'
                resimg.style.backgroundPosition = 'center center'
            }   else {
                res.innerHTML = 'você é uma <strong>idosa</strong>'
                resimg.style.backgroundImage = 'url(./imagens/idoso_mulher.jpg)'
                container.style.backgroundColor = '#EE82EE'
                body.style.backgroundColor = '#e6aae6'
            }
        } 
       
    }   
}
 