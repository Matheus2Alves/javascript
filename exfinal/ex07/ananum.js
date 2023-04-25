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
    if (valores.indexOf(Numbern(n)) != -1) {
        return true
    } else {
        return false
    }
}

function envia() {
    if (yesNumber(txtnum.value) && !yesList(txtnum.value, valores))
}