window.onload = function() {
    let analisar = document.getElementsByTagName('input')[1]
    analisar.addEventListener('click', function() {
        let números = document.querySelector('input#arrayn')
        let número_array = []
        número_array.push(números.value.split(','))
        window.alert(número_array)
    })
}