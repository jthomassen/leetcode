function isPalindrome(s) {
    
    function replaceArr(str) {
        let temp = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('')
        console.log(temp)
        return temp
    }
    
    if (replaceArr(s).reverse().join('') === replaceArr(s).join('')) {
        return true
    } else return false 
};