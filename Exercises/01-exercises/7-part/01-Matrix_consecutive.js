let matrix1 = [];
let counter = 0;

for (let i = 0; i < 10; i++) {
    matrix1[i] = [];
    for (let j = 0; j < 10; j++) {
        matrix1[i][j] = counter;
        counter++;
    }
}