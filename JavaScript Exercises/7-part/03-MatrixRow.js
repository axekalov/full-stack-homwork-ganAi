let matrix3 = [];
for (let i = 0; i < 10; i++) {
    matrix3[i] = [];
    for (let j = 0; j < 10; j++) {
        matrix3[i][j] = Math.floor(Math.random() * 100);
    }
}

let maxSum = -1;
let maxRowIndex = 0;

for (let i = 0; i < 10; i++) {
    let currentRowSum = 0;
    
    for (let j = 0; j < 10; j++) {
        currentRowSum = currentRowSum + matrix3[i][j];
    }
    
    if (currentRowSum > maxSum) {
        maxSum = currentRowSum;
        maxRowIndex = i;
    }
}

console.log(maxRowIndex);