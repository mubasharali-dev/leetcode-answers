/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;

    while (x > 0) {
        let last = x % 10;
        rev = (10 * rev) + last;
        x = Math.floor(x/10);
    }

    let limit = 2**31;
    if (rev < -limit || rev > limit ) return 0;

    return (xCopy < 0) ? -rev : rev;
};