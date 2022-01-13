function kidsWithCandies(candies, extraCandies) {
    let maxCandy = 0
    
    for (let candy of candies) {
        if (candy > maxCandy) {
            maxCandy = candy
        }
    }
    
    for (let i = 0; i < candies.length; i++) {
        candies[i] += extraCandies 
        if (candies[i] >= maxCandy) {
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    
    return candies
    
};