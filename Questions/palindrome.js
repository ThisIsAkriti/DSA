// Ques1: palindrome number 
// Reads same forward and backward
// input : 121 , output : true || input :110 , output : false
 
const isPalindrome = (x) => {
    return x < 0? false : x === + x.toString().split("").reverse().join("");
    // To convert string to number {simply put + operator};
}
console.log(isPalindrome(121));
console.log(isPalindrome(12));

