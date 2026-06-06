let matrix2 = [];

for (let i = 0; i < 10; i++) {
    matrix2[i] = [];
    for (let j = 0; j < 10; j++) {
        if (i === j || i + j === 9) {
            matrix2[i][j] = 1;
        } else {
            matrix2[i][j] = 0;
        }
    }
}