const random =  Math.floor(Math.random() * 90)+10
const numri = random %10
const numl =  Math.floor(random/10)
const numre = numri * 10 + numl
console.log(`random :${random} reverse: ${numre}`);
