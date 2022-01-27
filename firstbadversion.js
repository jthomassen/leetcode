var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
   
    return function(n) {
        let left = 1
        let right = n
        let mid;
        
        while (left <= right) {
            mid = Math.floor(left + (right - left)/2)
            // if (isBadVersion(left) === true) {
            //     return left
            // } 
            if (isBadVersion(mid) === false) {
                left = mid+1
                console.log(mid)
            } else {
                right = mid
                console.log(mid)
            }
            if (left === right) {
                break
            }
        }
        return right
    };
};