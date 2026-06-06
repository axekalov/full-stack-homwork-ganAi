let sum_school = 0
for(let i = 0 ; i < 100; i++){
    let sumStudent= 0
  
    for(let s = 0 ; s < 10 ;s++){
          let grade = Math.floor(Math.random() * 101)
        sumStudent += grade 
        
    }
console.log("averege",sumStudent/10);
sum_school+=sumStudent
}
console.log( sum_school/1000);
