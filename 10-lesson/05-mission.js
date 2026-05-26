
const students = [
    {name: 'John', passed: true}, 
    {name: 'Jane', passed: false}
];

students.forEach(student => {
    console.log(`${student.name}'s record has been reviewed.`);
});

let scores = [45, 65, 88, 92, 55];

let firstHighScore = scores.find(score => score > 85); 

let allAbove40 = scores.every(score => score > 40);

let anyBelow50 = scores.some(score => score < 50);
