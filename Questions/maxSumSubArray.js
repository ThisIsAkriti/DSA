/**
 * Find the subarray with largest sum and return its SUM, and return its SUM.
 * input:[-2,1,-3,4,-1,2,1,-5,4] ------>> output:6, [4,-1,2,1]
 * input:[5 , 4,-1,7,8] = --------->> output: 23 ,  // An arra itself is a subarray;
 */

const maxSubArray = (nums) => {
    let maxSum = nums[0];
    for(let i = 0 ; i<nums.length ; i++ ){
        let sum = 0;
        for(let j = i; j< nums.length ; j++){
            sum += nums[j];
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}
nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));