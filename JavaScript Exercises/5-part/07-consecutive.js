let prev = Math.floor(Math.random() * 20) + 1;
console.log(prev);

for (let i = 2; i <= 10; i++) {
    let curr = Math.floor(Math.random() * 20) + 1;

    if (prev < curr) {
        for (let j = prev + 1; j <= curr; j++) {
            console.log(j);
        }
    } else if (prev > curr) {
        for (let j = prev - 1; j >= curr; j--) {
            console.log(j);
        }
    } else {
        console.log(curr);
    }
    
    prev = curr;
}




