window.onload = function () {
    let calcTab = document.getElementsByTagName('input')[1]
    calcTab.addEventListener('click', function() {
        let numTab = document.querySelector('input#numtab')
        let num = Number(numTab.value)
        let restabu = document.querySelector('textarea#restabu')
        restabu.innerHTML = ''
        for(let i = 0; i <= 10; i++) {
            let resNum = num * i
            restabu.innerHTML += num + 'x' + i + '=' + resNum + '\n' 
        }
    })
}