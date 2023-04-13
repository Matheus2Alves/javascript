var realtime = new Date()
var hora = realtime.getHours()
if (hora > 12 && hora < 18) {
    console.log('Boa tarde')
} else if (hora >= 18) {
        console.log('Boa noite')
} else if (hora < 5) {
        console.log('Bom madrugada')
} else {
    console.log('Bom dia')
}