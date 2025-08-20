/**
 * @param {string} s
 * @return {boolean}
 */
 // APPROACH 1 --- USING THE BUILT IN FUNCTIONS
//  var isPalindrome = function(s) {
//   s = s.toLowerCase();
//   let filtered = "";

//   for (let i =0; i < s.length; i++){
//     if (s[i].match(/[a-z0-9]/i)){
//         filtered += s[i];
//     }
//   }
//   let reversed = filtered.split("").reverse().join("");
//   return filtered === reversed;
// };

// APPROACH 2 - BUT WITH EXTRA SPACE
// var isPalindrome = function(s) {
//   s = s.toLowerCase();
//   let filtered = "";
//   let reversed = "";

//   for (let i =0; i < s.length; i++){
//     if (s[i].match(/[a-z0-9]/i)){
//         filtered += s[i];
//         reversed = s[i] + reversed;
//     }
//   }
//   return filtered === reversed;
// };

// APPROACH 3 - WITHOUT USING EXTRA SPACE
 var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while (i<j){
        if (!s[i].match(/[a-z0-9]/i)){
            i++;
        } else if (!s[j].match(/[a-z0-9]/i)){
            j--;
        } else if (s[i] === s[j]){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
