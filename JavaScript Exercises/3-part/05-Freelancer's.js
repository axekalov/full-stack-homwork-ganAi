let salary= Math.floor(Math.random() * 999999)+1
let freelancename = "DAV"
console.log(freelancename)
console.log(salary)
if(salary <= 23000)console.log(`tax :${salary*0.10}`)
    else if(salary<= 46000)console.log(`tax1:${2300+ ((salary-23000)*0.20)}`)
     else if(salary<= 120000)console.log(`tax1:${6900+ ((salary-46000)*0.30)}`)
 else if(salary<=220000)console.log(`tax1:${29100+ ((salary-120000)*0.40)}`)
else console.log(`tax1:${69100+ ((salary-220000)*0.50)}`)



