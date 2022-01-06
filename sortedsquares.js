function sortedSquares(nums) {
    const sqArr = []
    
    for (i = 0; i < nums.length; i++) {
        // nums[i]*nums[i]
        sqArr.push(nums[i]*nums[i])
    }
    
    sqArr.sort((a, b) => (a - b))
    
    return sqArr
};