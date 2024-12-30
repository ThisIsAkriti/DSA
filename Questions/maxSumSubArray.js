/**
 * Find the subarray with largest sum and return its SUM, and return its SUM.
 * input:[-2,1,-3,4,-1,2,1,-5,4] ------>> output:6, [4,-1,2,1]
 * input:[5 , 4,-1,7,8] = --------->> output: 23 ,  // An arra itself is a subarray;
 */

//KADANE ALGORITHM
// We take sum=0 and max sum as aray[0] and then compare them.

const maxSubArray = (nums) => {
    let sum = 0;
    let max = nums[0];
    for(let i = 0; i < nums.length; i++){ // 0(n)
        sum += nums[i];
        if(sum > max){
            max = sum;
        }
        if(sum<0){
            sum = 0;
        }
    }
    return max;
}
nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

// Time complexity of o(n);
// space complexity of o(1);