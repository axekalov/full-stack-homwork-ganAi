let matrix8 = [];

for (let i = 0; i < 10; i++) {
    matrix8[i] = [];
    for (let j = 0; j < 10; j++) {
        let distanceToEdge = Math.min(i, j, 9 - i, 9 - j);
        matrix8[i][j] = distanceToEdge + 1;
    }
}