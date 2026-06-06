let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
let isPalindrome = true;

for (let i = 0; i < 5; i++) { 
    if (arr[i] !== arr[10 - 1 - i]) {
        isPalindrome = false;
        break; 
    }
}

if (isPalindrome) {
    console.log("The array is a palindrome");
} else {
    console.log("The array is not a palindrome");
}