const empresas = [
    {nome: 'microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDecriacao: 1975},
    {nome: 'samsung', valorDeMercado: 50, CEO: 'Kim hyun Suk', anoDeCriacao: 1938},
    {nome: 'GaulesSA', valorDeMercado: 400, CEO: 'Gaugau', anoDeCriacao: 2019}, 
    {nome: 'Intel', valorDeMercado: 383, CEO: 'Brian Krzanich', anoDeCriacao: 1968},
    {nome: 'facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004},
    {nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel EK', anoDeCriacao: 2006},
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}

]

const partirDe2000 = empresas.filter(empresa => empresa.anoDeCriacao > 2000 )
console.log(partirDe2000)

const nomeDoCeo = empresas.map(empresa => 'o dono é ' + empresa.CEO + 'da empresa' + empresa.nome)
console.log(nomeDoCeo)

const valorDeMercadoTotal = empresas.reduce((acc, total) => acc + total.valorDeMercado , 0)
console.log(valorDeMercadoTotal)