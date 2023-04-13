var agora = new Date()
var diaSem = agora.getDay()
/*
0=domingo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta
6=sábado
*/
switch (diaSem) {
    case 0:
        console.log('Bom domingo')
        break
    
    case 1:
        console.log('Boa segunda-feira')
        break
    
    case 2:
        console.log('Boa terça-feira')
        break
    
    case 3:
        console.log('Boa quarta-feira')
        break
    
    case 4:
        console.log('Boa quinta-feira')
        break
    
    case 5:
        console.log('Boa sexta-feira')
        break
    
    case 6:
        console.log('Bom sábado')
        break
    

}