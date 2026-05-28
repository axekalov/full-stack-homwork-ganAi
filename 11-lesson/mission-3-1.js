const inventory = [
  { item: "Laptop", price: 1200, quantity: 5 },
  { item: "Mouse", price: 25, quantity: 50 },
  { item: "Keyboard", price: 100, quantity: 20 }
];
const total = inventory.reduce((a , current)=>{
    const currentV =current.price*current.quantity
    return a + currentV
},0)
console.log(total);
