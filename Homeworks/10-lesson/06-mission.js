
const products = [
    {id: 1, price: 20}, 
    {id: 2, price: 50}, 
    {id: 3, price: 15}
]


const expensiveProducts = products.filter(product => product.price >= 20);

const expensiveProductIds = expensiveProducts.map(product => product.id);

console.log(expensiveProductIds);