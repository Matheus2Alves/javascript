var fazer = document.querySelector('#fazer')
fazer.addEventListener('click', tabuada)

function tabuada() {
    var tabnum = document.querySelector('#tab')
    if (tabnum.value.length == '') {
        window.alert('coloque o número da tabuada desejada')
    } else {
        var tabarea = document.querySelector('#tabarea')
        var resultado = ''
        var numtab = Number(tabnum.value)
        for(var tabuada = 1; tabuada <= 10; tabuada++) {
            resultado += `${numtab} x ${tabuada} = ${tabuada*numtab} \n `
        }
        tabarea.innerHTML = resultado
    } 

}       


