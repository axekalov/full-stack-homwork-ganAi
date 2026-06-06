let num= Math.floor(Math.random() * 20)+1
let num1= Math.floor(Math.random() * 20)+1
console.log("num1",num);
console.log("num2",num1);
let first = Math.min(num,num1)
let second = Math.max(num,num1)
for(let i = first;i<second;i++)console.log(i)
