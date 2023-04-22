let bingo = [1,4,2,7,3,9,2]
console.log(bingo)
console.log(bingo.length)
bingo[4] = 8
console.log(`array ${bingo} e seu comprimento ${bingo.length}`)
bingo.push(8)
console.log(bingo)
bingo.sort()
console.log(bingo)
let pos = bingo.indexOf(8)

if(pos == -1) {
    console.log('nao existe esse dado')
} else {
   console.log(`qual é ${pos}`) 
}


