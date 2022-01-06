function finalValueAfterOperations(operations) {
    let X = 0
    
    for (operation of operations) {
        if (operation === "X++" || operation === "++X") {
            X++
        } else {
            X--
        }
    }
    return X
};