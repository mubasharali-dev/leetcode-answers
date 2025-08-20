/**
 * @param {string} s
 * @return {boolean}
 */
 // APPROACH 1 --- USING THE BUILT IN FUNCTIONS
 var isPalindrome = function(s) {
  s = s.toLowerCase();
  let filtered = "";

  for (let i =0; i < s.length; i++){
    if (s[i].match(/[a-z0-9]/i)){
        filtered += s[i];
    }
  }
  let reversed = filtered.split("").reverse().join("");
  return filtered === reversed;
};

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