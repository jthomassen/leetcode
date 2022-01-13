function kidsWithCandies(candies, extraCandies) {
    let maxCandy = 0
    let newArr = []
    
    for (let candy of candies) {
        if (candy > maxCandy) {
            maxCandy = candy
        }
    }
    
    for (let i = 0; i < candies.length; i++) {
        candies[i] += extraCandies
        if (candies[i] >= maxCandy) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    
    return newArr
    
};