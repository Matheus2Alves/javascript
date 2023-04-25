let enviar = document.querySelector('#enviar')
let txtnum = document.querySelector('#num')
let seltab = document.querySelector('#seltab')
let res = document.querySelector('#resarray')
enviar.addEventListener('click', envia)
let valores = []

function yesNumber(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
}

function yesList(n, valores) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function envia() {
    if (yesNumber(txtnum.value) && !yesList(txtnum.value, valores)) {
        let selcont = document.createElement('option')
        selcont.text = `O valor ${txtnum.value} foi inserido`
        seltab.appendChild(selcont)
        valores.push(txtnum.value)
        txtnum.value = ''
        let finalizar = document.querySelector('#finalizar')
        finalizar.addEventListener('click', final)
        function final() {
            let menor = Math.min(...valores)
            let maior = Math.max(...valores)
            let soma = 0
            for (let pos = 0; pos < valores.length; pos++) {
                 soma += Number(valores[pos])
            }
            let media = Number(soma) / Number(valores.length)
            res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados` 
            res.innerHTML += `<br> O maior valor informado foi ${maior}`
            res.innerHTML += `<br> O menor valor informado foi ${menor}`
            res.innerHTML += `<br>Somando todos os valores o resultado é ${soma}`
            res.innerHTML += `<br>a média dos valores é ${media}`
        } 
        
    } else {
        window.alert('o seu valor precisa ser um número e não pode já estar inserido na lista!')
    }
}