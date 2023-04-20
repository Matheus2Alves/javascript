var cal = document.querySelector('#calcular')
cal.addEventListener('click', calcular)

function calcular(){
    var começo = document.querySelector('#first')
    var fim = document.querySelector('#final')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')    
    if(começo.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        res.innerHTML = '[ERRO] preencha todos os dados!'
    } else{
        var resultado = ``
        for (var começores = parseInt(começo.value); começores <= parseInt(fim.value); começores += parseInt(passo.value)) {
            resultado += `${começores} &#x27a1;`
        }
        res.innerHTML = `${resultado} &#x1F3C1;`
    }
}