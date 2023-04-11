var area = document.querySelector('div#area')
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrou);
area.addEventListener('mouseout', saiu);
 
function clicar() {
    area.innerText = ('voce clicou')
    area.style.color = 'red'
    area.style.background = 'black'
    area.style.transition = '0s'
}

function entrou() { 
    area.style.width = '400px'
    area.style.transition = '1s'
}

function saiu() { 
    area.style.width = '200px'
    area.innerText = ('interaja')
    area.style.transition = '1s'
}
/*area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrou) 
area.addEventListener('mouseout', saiu) */