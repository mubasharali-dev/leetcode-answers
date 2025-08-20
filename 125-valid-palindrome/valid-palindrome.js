/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let filtered = "";
  let reversed = "";

  for (let i =0; i < s.length; i++){
    if (s[i].match(/[a-z0-9]/i)){
        filtered += s[i];
        reversed = s[i] + reversed;
    }
  }
  return filtered === reversed;
};