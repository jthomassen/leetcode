function runningSum(nums) {
    for (i = 1; i < nums.length; i++) {
        console.log(nums[i] += nums[i-1])
    }
    
    return nums
};