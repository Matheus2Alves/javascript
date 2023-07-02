window.onload = function() {
    let calcular = document.getElementsByTagName('input')[3]
    calcular.addEventListener('click', function(){
        let inicio = document.querySelector('input#inicio1')
        let final = document.querySelector('input#final1')
        let passo = document.querySelector('input#passo1')
        let resultado = document.getElementsByTagName('p')[0]
        switch(true) {
            case inicio.value == '':
                resultado.innerHTML = 'preencha o início'
                break
            case final.value == '':
                resultado.innerHTML = 'preencha o final'
                break
            default:
                if(passo.value == '') {
                    window.alert('como o passo não foi preenchido, iremos presumir que seja 1')
                    passo.value = 1
                    calcularNum()      
                } else {
                    calcularNum()                   
                break
            }
        }    
            function calcularNum() {
                resultado.innerHTML = ''
                if(Number(inicio.value) >= Number(final.value)) {
                    for(let a = Number(inicio.value); a >= Number(final.value); a -= Number(passo.value)) {
                        const mao = '\uD83D\uDC49'
                        resultado.innerHTML += mao + a
                    }
                } else {
                    for(let a = Number(inicio.value); a <= Number(final.value); a += Number(passo.value)) {
                        const mao = '\uD83D\uDC49'
                        resultado.innerHTML += mao + a
                    }
                }
                const bandeira = '\u{1F3C1}'
                resultado += bandeira
            }            
    })
}
