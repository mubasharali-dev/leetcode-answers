/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};

    for (let i = 0; i < s.length; i++){
        if (!map[s[i]]){
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }

    let vowels = ["a", "e", "i", "o", "u"];
    let maxVowel = 0;
    let maxConsonant = 0;
    let keys = Object.keys(map);

    for (let i = 0; i < keys.length; i++){
        if (vowels.includes(keys[i])){
            if (map[keys[i]] > maxVowel){
                maxVowel = map[keys[i]];
            }
        } else {
            if (map[keys[i]] > maxConsonant){
                maxConsonant = map[keys[i]];
            }
        }
    }
    return maxVowel + maxConsonant;
};