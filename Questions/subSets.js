// Subsets(Backtracking algorithm using recursion);
// Given an int array nums of unique elements , return all possible subsets(the power set).
// The solution set must not contain duplicate subsets. Return the sol in order.
// Input: [1,2,3]  >> Output : [[] , [1] ,[2] ,[1,2] ,[3] ,[1,3],[2,3] ,[1,2,3]]
// Input: [0] >> Output : [[] , [0]]

function subSets(nums){
    let result = [];
    let temp = [];

    function recursiveSubset(nums , i){
        if(i === nums.length){
            return result.push([...temp]);
        }

        temp.push(nums[i]);
        recursiveSubset(nums , i+1);
        temp.pop();
        recursiveSubset(nums , i+1);
    }
    recursiveSubset(nums , 0);
    return result
}
console.log(subSets([1,2,3]));