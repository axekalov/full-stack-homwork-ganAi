const random =  Math.floor(Math.random() * 90)+10
let right = random %10
let left = Math.floor(random / 10);
let sum = left+right
console.log(`random: ${random} and sum : ${sum}`);
