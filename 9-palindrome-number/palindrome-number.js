/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xCopy = x;
    let rev = 0;
    while (x > 0){
        let remainder = x % 10;
        rev = (10 * rev) + remainder;
        x = Math.floor(x / 10);
    }
    return rev === xCopy;
};