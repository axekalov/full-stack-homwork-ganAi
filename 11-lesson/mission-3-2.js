const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];
const groupedByAge = people.reduce((acc , current)=>{
    if(!acc[current.age]){
        acc[current.age]=[]
    }
    acc[current.age].push(current.name)
    return acc
} ,{})
console.log(groupedByAge);
