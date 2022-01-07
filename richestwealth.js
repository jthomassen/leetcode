function maximumWealth(accounts) {
    let maxSum = 0
     
    for (i = 0; i < accounts.length; i++) {
        let sum = 0
        
        for (j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        
        if (sum > maxSum) {
            maxSum = sum
        }
    }
    
    return maxSum
};