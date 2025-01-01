// Ques1: palindrome number 
// Reads same forward and backward
// input : 121 , output : true || input :110 , output : false
 
const isPalindrome = (x) => {
    return x < 0? false : x === + x.toString().split("").reverse().join("");
    // To convert string to number {simply put + operator};
}
// console.log(isPalindrome(121));
// console.log(isPalindrome(12));

function isPalindromeRecursion(num , reversedNum = 0 , originalNum = num){
    if(num === 0) return reversedNum === originalNum;
    reversedNum = reversedNum * 10 +  (num % 10);
    return isPalindromeRecursion(Math.floor(num/10) , reversedNum , originalNum); 
}
console.log(isPalindromeRecursion(121));