// Ques2:
// Fabbonacci number : [ 0 , 1 ,1 , 2 ,3 ,5]
// n= 3, output = 2;
const isfib = (n) => {
    if(n<=1) return n;
    return isfib(n-1) + isfib(n-2);
}//Performed recursion
console.log(isfib(3));
console.log(isfib(1));

//Recursion : Calling One function inside another funciton!