const calculateTotal = (tanFree, ...params)=>{
const sum = params.reduce((a , price)=>{
return a + price
},0)
  const final = sum - (sum*(tanFree/100))
  return final  
}
const result= calculateTotal(10,20,30,12,50,3)
console.log(result);
