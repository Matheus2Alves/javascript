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
            tabres = tabuada * numtab
            resultado += `${numtab} x ${tabuada} = ${tabres } \n `
        }
        tabarea.innerHTML = resultado
    } 

}       


/*tabarea.innerHTML = `${numtab} x 1 = ${resultado[0]}<br>` 
        tabarea.innerHTML += ` ${numtab} x 2 = ${resultado[1]}<br>`
        tabarea.innerHTML += `${numtab} x 3 = ${resultado[2]}<br>`
        tabarea.innerHTML += ` ${numtab} x 4 = ${resultado[3]}<br>`
        tabarea.innerHTML += `${numtab} x 5 = ${resultado[4]}<br>`
        tabarea.innerHTML += ` ${numtab} x 6 = ${resultado[5]}<br>`
        tabarea.innerHTML += `${numtab} x 7 = ${resultado[6]}<br>`
        tabarea.innerHTML += ` ${numtab} x 8 = ${resultado[7]}<br>`
        tabarea.innerHTML += `${numtab} x 9 = ${resultado[8]}<br>`
        tabarea.innerHTML += ` ${numtab} x 10 = ${resultado[9]}<br>`*/