/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
// Approach 1 - Using built in function (includes)
// var findWordsContaining = function(words, x) {
//     let indices = [];
//     for (let i =0; i < words.length; i++){
//         if (words[i].includes(x)){
//             indices.push(i);
//         }
//     }
//     return indices;
// };

// Approach 2 - Reommended

var findWordsContaining = function(words, x) {
    let indices = [];
    for (let i =0; i < words.length; i++){
        for (let j =0; j < words[i].length; j++){
            if (words[i][j] == x ){
                indices.push(i);
                break;
            }
        }
    }
    return indices;
};