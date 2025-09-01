/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// ---------------- APPROACH 1 ---------------- 
// var groupAnagrams = function(strs) {
//     let map = {};
//     for (let i = 0; i < strs.length; i++){
//         let sortedStr = strs[i].split("").sort().join("");
//         if (!map[sortedStr]){
//             map[sortedStr] = [strs[i]];
//         } else {
//             map[sortedStr].push(strs[i]);
//         }
//     }
//     return [...Object.values(map)];
// };

// --------------- APPROACH 2 - OPTIMIZED FOR TIME COMPLEXITY - O(n * m)
var groupAnagrams = function(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++){
        // create the array for mapping the characters
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        // fill the empty character array with alphabets
        for (let j =0; j < s.length; j++){
            let index = s[j].charCodeAt() - "a".charCodeAt();
            ++freqArr[index];
        }
        // key to track the characters
        let key = "";
        for (let k = 0; k < 26; k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        // increment the key or push it
        if (!map[key]){
            map[key] = [s];
        } else {
            map[key].push(s);
        }
}
    return [...Object.values(map)];
};