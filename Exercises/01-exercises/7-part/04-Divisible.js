let matrix4 = [];
for (let i = 0; i < 10; i++) {
    matrix4[i] = [];
    for (let j = 0; j < 10; j++) {
        matrix4[i][j] = Math.floor(Math.random() * 100);
    }
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (matrix4[i][j] % 5 === 0 || matrix4[i][j] % 7 === 0) {
            matrix4[i][j] = 0;
        }
    }
}