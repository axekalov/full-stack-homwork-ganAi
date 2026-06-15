const random =  Math.floor(Math.random() * 9000)+1000
const hundres = Math.floor(random/100)%10
console.log(`Input: ${random}`);
console.log(`The hundreds digit is: ${hundres}`);