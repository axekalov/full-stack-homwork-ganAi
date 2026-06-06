let num= Math.floor(Math.random() * 20)+1
console.log("N",num)
let sum = 0
for(let i = 1 ; i <= num ; i++)
    if(i % 3 ===0)sum +=i
console.log(sum);

