/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// APPROACH 1 - USING THE BUILT IN FUNCTION (INCLUDES)
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0;

//     for (let i =0; i < stones.length; i++){
//         if (jewels.includes(stones[i])){
//             count++;
//         }
//     }
//     return count;
// };


// APPROACH 2 - LANGUAGE AGNOSTIC BUT TC => O(n^2)
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0;

//     for (let i = 0; i < stones.length; i++){
//         for (let j = 0; j < jewels.length; j++){
//             if (jewels[j] == stones[i]){
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// };

// APPROACH 3 - OPTIMIZED AND RECOMMENDED
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let jSet = new Set();

    for (let i = 0; i < jewels.length; i++){
        jSet.add(jewels[i]);
    }

    for (let i = 0; i < stones.length; i++){
        if (jSet.has(stones[i])){
            count++;
        }
    }
    return count;
};