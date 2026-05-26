
let original = [1, 2, 3];

let copy1 = [...original];

let copy2 = original.slice();


let group1 = ['Alice', 'Bob'];
let group2 = ['Charlie', 'Dave'];


let allUsers = group1.concat(group2); 


let usersString = allUsers.join(' - ');


console.log(usersString)