window.onload = function() {
    let analisar = document.getElementsByTagName('input')[1]
    let finalizar = document.getElementsByTagName('input')[2]
    let número_array = []

    function isNumero(n) { 
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {            
            return false    
        }
    }

    function inLista(n, a) {
        if(a.indexOf(Number(n)) != -1) {
            return true 
        } else {        
            return false
        }
    }       
    analisar.addEventListener('click', function() {
        let números = document.querySelector('input#arrayn')
        if(isNumero(números.value) && !inLista(números.value, número_array)) {
            let inpnum = Number(números.value)
            número_array.push(inpnum)   
            let resultado = document.querySelector('select#resarray')
            let option = document.createElement('option')
            option.textContent = `o ${inpnum} foi adcionado`
            resultado.appendChild(option)
            números.value = ''
        } else {
            window.alert('dados inválidos ou ja inseridos')
        }    
    })
    finalizar.addEventListener('click', function() {
        if(número_array.length == '') {
            window.alert('coloque valores antes de finalizar')
        } else {
            let examinar = document.querySelector('div#examinar')
            let maior = número_array[0]
            let menor = número_array[0]
            let soma = 0
            let media = 0
            for(let pos in número_array) {
                soma += valores[pos]
                if(nùmero_array[pos] > maior) {
                    maior = número_array[pos]
                }
                if(número_array[pos] < menor ) {
                    menor = número_array[pos]
                }
            }
            media = soma / número_array.length
            examinar.innterHTML = ''
            examinar.innerHTML +=  `ao todo, temos ${número_array.length} cadastrados  o maior valor informado foi ${maior}  o menor valor informado foi o ${menor}  a soma de todos os valores é ${soma}  a média dos valores é ${media}` 
        }    
    })
}



/*function exibirArray() {
}*/